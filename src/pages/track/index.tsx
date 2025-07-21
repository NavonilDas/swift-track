import BoxDimensionLabel from '@/components/ui/BoxDimensionLabel'
import Button from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import WeightLabel from '@/components/ui/WeightLabel'
import PackageStatus from '@/types/PackageStatus'
import TransportationMode from '@/types/TransportationMode'
import { trpc } from '@/utils/trpc'
import { Bike, CheckCircle, CircleQuestionMark, Clock, MapPin, Plane, Search, Truck } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function getIconByTransportationModeAndPackageStatus(eventStatus: PackageStatus, transPortationMode?: TransportationMode) {
    switch (transPortationMode) {
        case TransportationMode.BIKE:
            return Bike
        case TransportationMode.PLANE:
            return Plane
        case TransportationMode.TRUCK:
            return Truck;
        case TransportationMode.CYCLE:
            return Bike
    }

    switch (eventStatus) {
        case PackageStatus.DELIVERED:
            return CheckCircle;
    }

    return CircleQuestionMark;
}


export default function TrackingPackage() {
    const searchParams = useSearchParams()
    const [trackingNumber, setTrackingNumber] = useState(searchParams?.get("number") || "ABC");
    // TODO: Use debouncer.
    const trackingDataCall = trpc.tracking.getById.useQuery(trackingNumber);
    const trackingInformation = trackingDataCall.data;
    const trackingData = trackingDataCall?.data?.events || [];


    const handleTrack = async () => {
        if (!trackingNumber.trim()) return
    }

    useEffect(() => {
        if (searchParams?.get("number")) {
            handleTrack()
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Track Your Package</h1>
                    <p className="mt-2 text-gray-600">Enter your tracking number to see real-time updates</p>
                </div>



                {/* Tracking Input */}
                <Card className="mb-8">
                    <CardContent className="pt-6">
                        <div className="flex gap-4">
                            <Input
                                type="text"
                                placeholder="Enter tracking number"
                                value={trackingNumber}
                                onChange={(e) => setTrackingNumber(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && handleTrack()}
                                className="flex-1"
                            />
                            <Button onClick={handleTrack} disabled={trackingDataCall.isLoading}>
                                <Search className="h-4 w-4 mr-2" />
                                {trackingDataCall.isLoading ? "Tracking..." : "Track"}
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {trackingInformation && (
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle>Shipment Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2">Tracking Information</h4>
                                    <dl className="space-y-1 text-sm">
                                        <div className="flex justify-between">
                                            <dt className="text-gray-500">Tracking Number:</dt>
                                            <dd className="text-gray-900">{trackingInformation?.trackingId}</dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt className="text-gray-500">Status:</dt>
                                            <dd className="text-gray-900">{trackingData[0]?.status}</dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt className="text-gray-500">Service Type:</dt>
                                            <dd className="text-gray-900">{trackingInformation?.serviceType}</dd>
                                        </div>
                                    </dl>
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="font-medium text-gray-900 mb-2">Package Information</h4>
                                    <dl className="space-y-1 text-sm">
                                        <div className="flex justify-between">
                                            <dt className="text-gray-500">Weight:</dt>
                                            <dd className="text-gray-900">{trackingInformation && <WeightLabel weight={trackingInformation.weight} />}</dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt className="text-gray-500">Dimensions:</dt>
                                            <dd className="text-gray-900">{trackingInformation?.dimension && <BoxDimensionLabel dimension={trackingInformation.dimension} />}</dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt className="text-gray-500">Origin:</dt>
                                            <dd className="text-gray-900">{trackingInformation?.originCity}</dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt className="text-gray-500">Destination:</dt>
                                            <dd className="text-gray-900">{trackingInformation?.destinationCity}</dd>
                                        </div>
                                    </dl>
                                    <span className="text-red-600 justify-end">Login to get Exact address</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}

                {trackingData && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Shipment Timeline</CardTitle>
                            <CardDescription>Track your package journey</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {(trackingData || []).map((event, index) => {
                                    const isCompleted = index === 0
                                    const isCurrent = index === 0 && event.status !== "Delivered"
                                    const Icon = getIconByTransportationModeAndPackageStatus(event.status, event.transportMode);

                                    return (
                                        <div key={index} className="flex items-start space-x-4">
                                            <div
                                                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${isCompleted ? "bg-green-100" : isCurrent ? "bg-blue-100" : "bg-gray-100"
                                                    }`}
                                            >
                                                <Icon
                                                    className={`h-5 w-5 ${isCompleted ? "text-green-600" : isCurrent ? "text-blue-600" : "text-gray-400"
                                                        }`}
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between">
                                                    <p
                                                        className={`text-sm font-medium ${isCompleted ? "text-green-900" : isCurrent ? "text-blue-900" : "text-gray-900"
                                                            }`}
                                                    >
                                                        {event.status}
                                                    </p>
                                                </div>
                                                <p className="text-sm text-gray-500">{event.description}</p>
                                                <div className="flex items-center mt-1 text-xs text-gray-400">
                                                    <MapPin className="h-3 w-3 mr-1" />
                                                    <span className="mr-4">{event.location}</span>
                                                    <Clock className="h-3 w-3 mr-1" />
                                                    <span>{event.timestamp}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Map Section, TODO: Replace with a Map */}
                {(trackingData || []) && (
                    <Card className="mt-8">
                        <CardHeader>
                            <CardTitle>Package Location</CardTitle>
                            <CardDescription>Tracking number: {trackingInformation?.trackingId}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                                    <p className="text-lg font-semibold text-gray-900">Interactive Map</p>
                                    <p className="text-gray-600">Current location: {(trackingData || [])[0]?.location}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}

            </div>
        </div>
    )
}
