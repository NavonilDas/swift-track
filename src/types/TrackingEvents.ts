import PackageStatus from "./PackageStatus";
import TransportationMode from "./TransportationMode";

interface TrackingEvents {
    eventCode?: string;
    status: PackageStatus;
    location: string;
    description: string;
    transportMode?: TransportationMode;
    timestamp: string;
    localTimeStamp?: string;
}

export default TrackingEvents;