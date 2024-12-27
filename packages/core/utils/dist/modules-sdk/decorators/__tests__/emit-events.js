"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const emit_events_1 = require("../emit-events");
const context_parameter_1 = require("../context-parameter");
const inject_shared_context_1 = require("../inject-shared-context");
describe("EmitEvents", () => {
    it(`should call the emit event method from the base service including the messages and their options`, async () => {
        const mock = jest.fn();
        class FakeService {
            async emitEvents_(...args) {
                return mock(...args);
            }
            async method(sharedContext = {}) {
                sharedContext.messageAggregator?.saveRawMessageData({
                    data: { id: 1 },
                    object: "test",
                    action: "create",
                    source: "test",
                    eventName: "test-event",
                });
            }
        }
        __decorate([
            (0, inject_shared_context_1.InjectSharedContext)(),
            (0, emit_events_1.EmitEvents)({ internal: true }),
            __param(0, (0, context_parameter_1.MedusaContext)()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", Promise)
        ], FakeService.prototype, "method", null);
        const service = new FakeService();
        await service.method();
        expect(mock).toHaveBeenCalledTimes(1);
        expect(mock).toHaveBeenCalledWith({
            default: [
                {
                    name: "test-event",
                    metadata: {
                        source: "test",
                        object: "test",
                        action: "create",
                    },
                    data: {
                        id: 1,
                    },
                    options: {
                        internal: true,
                    },
                },
            ],
        });
    });
    it(`should call the emit event method from the base service with grouped messages`, async () => {
        const mock = jest.fn();
        class FakeService {
            async emitEvents_(...args) {
                return mock(...args);
            }
            async method(sharedContext = {}) {
                sharedContext.messageAggregator?.saveRawMessageData({
                    data: { id: 1 },
                    object: "test",
                    action: "create",
                    source: "test",
                    eventName: "test-event",
                });
            }
        }
        __decorate([
            (0, inject_shared_context_1.InjectSharedContext)(),
            (0, emit_events_1.EmitEvents)({ internal: true, groupBy: ["name"] }),
            __param(0, (0, context_parameter_1.MedusaContext)()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", Promise)
        ], FakeService.prototype, "method", null);
        const service = new FakeService();
        await service.method();
        expect(mock).toHaveBeenCalledTimes(1);
        expect(mock).toHaveBeenCalledWith({
            "test-event": [
                {
                    name: "test-event",
                    metadata: {
                        source: "test",
                        object: "test",
                        action: "create",
                    },
                    data: {
                        id: 1,
                    },
                    options: {
                        internal: true,
                    },
                },
            ],
        });
    });
});
//# sourceMappingURL=emit-events.js.map