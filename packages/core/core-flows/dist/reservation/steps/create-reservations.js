"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReservationsStep = exports.createReservationsStepId = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const utils_1 = require("@medusajs/framework/utils");
exports.createReservationsStepId = "create-reservations-step";
/**
 * This step creates one or more reservations.
 */
exports.createReservationsStep = (0, workflows_sdk_1.createStep)(exports.createReservationsStepId, async (data, { container }) => {
    const service = container.resolve(utils_1.Modules.INVENTORY);
    const locking = container.resolve(utils_1.Modules.LOCKING);
    const inventoryItemIds = data.map((item) => item.inventory_item_id);
    const created = await locking.execute(inventoryItemIds, async () => {
        return await service.createReservationItems(data);
    });
    return new workflows_sdk_1.StepResponse(created, {
        reservations: created.map((reservation) => reservation.id),
        inventoryItemIds: inventoryItemIds,
    });
}, async (data, { container }) => {
    if (!data?.reservations?.length) {
        return;
    }
    const service = container.resolve(utils_1.Modules.INVENTORY);
    const locking = container.resolve(utils_1.Modules.LOCKING);
    const inventoryItemIds = data.inventoryItemIds;
    await locking.execute(inventoryItemIds, async () => {
        await service.deleteReservationItems(data.reservations);
    });
});
//# sourceMappingURL=create-reservations.js.map