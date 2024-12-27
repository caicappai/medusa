"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/utils");
const awilix_1 = require("awilix");
const path_1 = require("path");
const container_1 = require("../../container");
const __mocks__1 = require("../__mocks__");
const subscriber_loader_1 = require("../subscriber-loader");
describe("SubscriberLoader", () => {
    const rootDir = (0, path_1.join)(__dirname, "../__fixtures__", "subscribers");
    const pluginOptions = {
        important_data: {
            enabled: true,
        },
    };
    let registeredPaths = [];
    beforeAll(async () => {
        container_1.container.register(utils_1.Modules.EVENT_BUS, (0, awilix_1.asValue)(__mocks__1.eventBusServiceMock));
        const paths = await new subscriber_loader_1.SubscriberLoader(rootDir, pluginOptions).load();
        if (paths) {
            registeredPaths = [...registeredPaths, ...paths];
        }
    });
    it("should register each subscriber in the '/subscribers' folder", async () => {
        // As '/subscribers' contains 3 subscribers, we expect the number of registered paths to be 3
        expect(registeredPaths.length).toEqual(3);
    });
    it("should have registered subscribers for 5 events", async () => {
        /**
         * The 'product-updater.ts' subscriber is registered for the following events:
         * - "product.created"
         * The 'order-updater.ts' subscriber is registered for the following events:
         * - "order.placed"
         * - "order.canceled"
         * - "order.completed"
         * The 'variant-created.ts' subscriber is registered for the following events:
         * - "variant.created"
         *
         * This means that we expect the eventBusServiceMock.subscribe method to have
         * been called  times, once for 'product-updater.ts', once for 'variant-created.ts',
         * and 3 times for 'order-updater.ts'.
         */
        expect(__mocks__1.eventBusServiceMock.subscribe).toHaveBeenCalledTimes(5);
    });
    it("should have registered subscribers with the correct props", async () => {
        /**
         * The 'product-updater.ts' subscriber is registered
         * with a explicit subscriberId of "product-updater".
         */
        expect(__mocks__1.eventBusServiceMock.subscribe).toHaveBeenCalledWith("product.updated", expect.any(Function), {
            subscriberId: "product-updater",
        });
        /**
         * The 'order-updater.ts' subscriber is registered
         * without an explicit subscriberId, which means that
         * the loader tries to infer one from either the handler
         * functions name or the file name. In this case, the
         * handler function is named 'orderUpdater' and is used
         * to infer the subscriberId.
         */
        expect(__mocks__1.eventBusServiceMock.subscribe).toHaveBeenCalledWith("order.placed", expect.any(Function), {
            subscriberId: "order-notifier",
        });
        expect(__mocks__1.eventBusServiceMock.subscribe).toHaveBeenCalledWith("order.canceled", expect.any(Function), {
            subscriberId: "order-notifier",
        });
        expect(__mocks__1.eventBusServiceMock.subscribe).toHaveBeenCalledWith("order.completed", expect.any(Function), {
            subscriberId: "order-notifier",
        });
        /**
         * The 'variant-created.ts' subscriber is registered
         * without an explicit subscriberId, and with an anonymous
         * handler function. This means that the loader tries to
         * infer the subscriberId from the file name, which in this
         * case is 'variant-created.ts'.
         */
        expect(__mocks__1.eventBusServiceMock.subscribe).toHaveBeenCalledWith("variant.created", expect.any(Function), {
            subscriberId: "variant-created",
        });
    });
});
//# sourceMappingURL=index.spec.js.map