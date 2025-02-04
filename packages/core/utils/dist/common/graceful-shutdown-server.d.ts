import { Server } from "http";
export declare abstract class GracefulShutdownServer {
    isShuttingDown: boolean;
    abstract shutdown(timeout?: number): Promise<void>;
    static create<T extends Server>(originalServer: T, waitingResponseTime?: number): T & GracefulShutdownServer;
}
//# sourceMappingURL=graceful-shutdown-server.d.ts.map