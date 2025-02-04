"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressLoader = expressLoader;
const connect_redis_1 = __importDefault(require("connect-redis"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const ioredis_1 = __importDefault(require("ioredis"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const logger_1 = require("../logger");
const config_1 = require("../config");
const NOISY_ENDPOINTS_CHUNKS = ["@fs", "@id", "@vite", "@react", "node_modules"];
async function expressLoader({ app }) {
    const baseDir = config_1.configManager.baseDir;
    const configModule = config_1.configManager.config;
    const isProduction = config_1.configManager.isProduction;
    const NODE_ENV = process.env.NODE_ENV || "development";
    const IS_DEV = NODE_ENV.startsWith("dev");
    const isStaging = NODE_ENV === "staging";
    const isTest = NODE_ENV === "test";
    let sameSite = false;
    let secure = false;
    if (isProduction || isStaging) {
        secure = true;
        sameSite = "none";
    }
    const { http, sessionOptions } = configModule.projectConfig;
    const sessionOpts = {
        name: sessionOptions?.name ?? "connect.sid",
        resave: sessionOptions?.resave ?? true,
        rolling: sessionOptions?.rolling ?? false,
        saveUninitialized: sessionOptions?.saveUninitialized ?? true,
        proxy: true,
        secret: sessionOptions?.secret ?? http?.cookieSecret,
        cookie: {
            sameSite,
            secure,
            maxAge: sessionOptions?.ttl ?? 10 * 60 * 60 * 1000,
        },
        store: null,
    };
    let redisClient;
    if (configModule?.projectConfig?.redisUrl) {
        const RedisStore = (0, connect_redis_1.default)(express_session_1.default);
        redisClient = new ioredis_1.default(configModule.projectConfig.redisUrl, configModule.projectConfig.redisOptions ?? {});
        sessionOpts.store = new RedisStore({
            client: redisClient,
            prefix: `${configModule?.projectConfig?.redisPrefix ?? ""}sess:`,
        });
    }
    app.set("trust proxy", 1);
    /**
     * Method to skip logging HTTP requests. We skip in test environment
     * and also exclude files served by vite during development
     */
    function shouldSkipHttpLog(req, res) {
        return (isTest || NOISY_ENDPOINTS_CHUNKS.some((chunk) => req.url.includes(chunk)));
    }
    /**
     * The middleware to use for logging. We write the log messages
     * using winston, but rely on morgan to hook into HTTP requests
     */
    const loggingMiddleware = (0, morgan_1.default)(IS_DEV
        ? ":method :url ← :referrer (:status) - :response-time ms"
        : "combined", {
        skip: shouldSkipHttpLog,
        stream: {
            write: (message) => logger_1.logger.http(message.trim()),
        },
    });
    app.use(loggingMiddleware);
    app.use((0, cookie_parser_1.default)());
    app.use((0, express_session_1.default)(sessionOpts));
    // Currently we don't allow configuration of static files, but this can be revisited as needed.
    app.use("/static", express_1.default.static(path_1.default.join(baseDir, "static")));
    app.get("/health", (req, res) => {
        res.status(200).send("OK");
    });
    const shutdown = async () => {
        redisClient?.disconnect();
    };
    return { app, shutdown };
}
//# sourceMappingURL=express-loader.js.map