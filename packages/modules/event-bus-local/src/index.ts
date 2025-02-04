import { ModuleExports } from "@medusajs/framework/types"
import Loader from "./loaders"
import LocalEventBus from "./services/event-bus-local"

export const service = LocalEventBus
export const loaders = [Loader]

const moduleDefinition: ModuleExports = {
  service,
  loaders,
}

export default moduleDefinition
export * from "./initialize"
