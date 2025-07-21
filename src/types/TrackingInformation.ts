import { BoxDimension } from "./BoxDimension"
import TrackingEvents from "./TrackingEvents"
import { Weight } from "./Weight"

export enum ServiceType {
    Express = "Express",
    Standard = "Standard",
    NextDay = "Next Day"
}

export interface TrackingInformation {
    trackingId: string,
    events: TrackingEvents[],
    weight: Weight,
    originCity: string,
    destinationCity: string,
    serviceType: ServiceType,
    dimension: BoxDimension
}