import z from 'zod';
import { router, publicProcedure } from '../trpc';
import PackageStatus from '../../types/PackageStatus';
import TransportationMode from '@/types/TransportationMode';
import TrackingEvents from '@/types/TrackingEvents';
import { TrackingInformation } from '@/types/TrackingInformation';

const MOCKED_TRACKING_EVENTS: TrackingEvents[] = [
    {
        eventCode: "1",
        status: PackageStatus.DELIVERED,
        location: "Bengaluru, Karnataka",
        timestamp: "2024-01-15 14:30",
        description: "Package delivered to recipient",
    },
    {
        status: PackageStatus.OUT_FOR_DELIVERY,
        location: "Bengaluru, Karnataka",
        timestamp: "2024-01-15 09:00",
        description: "Package out for delivery",
        transportMode: TransportationMode.BIKE,
    },
    {
        status: PackageStatus.IN_TRANSIT,
        location: "Thane, Mumbai",
        timestamp: "2024-01-14 16:45",
        description: "Package in transit via truck",
        transportMode: TransportationMode.PLANE,
    },
    {
        status: PackageStatus.IN_TRANSIT,
        location: "Nizamuddin, Delhi",
        timestamp: "2024-01-13 11:20",
        description: "In Transit will reach xyz by ETA",
        transportMode: TransportationMode.TRUCK,
    },
    {
        status: PackageStatus.PACKAGE_RECEIVED,
        location: "Rudrapur, Uttarakhand",
        timestamp: "2024-01-12 08:15",
        description: "Package received at origin facility",
    },
];

const trackingRoutes = router({
    getById: publicProcedure
        .input(z.string().trim().min(1))
        .query(({input}) => {
            return <TrackingInformation>{
                trackingId: input,
                events: MOCKED_TRACKING_EVENTS,
                weight: {
                    unit: 'KG',
                    value: 5.0
                },
                originCity: 'Rudrapur, Uttarakhand',
                destinationCity: 'Bengaluru, Karnataka',
                serviceType: 'Express',
                dimension: {
                    unit: 'IN',
                    length: 12,
                    breadth: 10,
                    height: 8
                }
            }
        }),
});


export default trackingRoutes;