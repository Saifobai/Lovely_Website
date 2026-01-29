import { SERVICES } from "../config/services.js";

export function getServiceById(serviceId) {
    return SERVICES.find(s => s.id === serviceId);
}
