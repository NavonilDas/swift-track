import Button from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Label from '@/components/ui/Label'
import { Calculator, Package, Plane, Truck } from 'lucide-react'
import React, { useState } from 'react'

export default function Pricing() {
    const [dimensions, setDimensions] = useState({
        length: "",
        width: "",
        height: "",
        weight: "",
    });
    const [origin, setOrigin] = useState("")
    const [destination, setDestination] = useState("")
    const [deliveryOption, setDeliveryOption] = useState("standard")
    const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null)

    const calculatePrice = () => {
        const { length, width, height, weight } = dimensions

        if (!length || !width || !height || !weight || !origin || !destination) {
            alert("Please fill in all fields")
            return
        }

        // Simple pricing calculation
        const volume = Number.parseFloat(length) * Number.parseFloat(width) * Number.parseFloat(height)
        const weightNum = Number.parseFloat(weight)
        const basePrice = Math.max(volume * 0.01, weightNum * 2) + 10

        const selectedOption = deliveryOptions.find((opt) => opt.id === deliveryOption)
        const finalPrice = basePrice * (selectedOption?.multiplier || 1)

        setCalculatedPrice(Math.round(finalPrice * 100) / 100)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Calculate your price</h1>
                    <p className="mt-2 text-gray-600">Get an instant quote for your shipment</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Calculator Form */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Calculator className="h-5 w-5 mr-2" />
                                Shipping Calculator
                            </CardTitle>
                            <CardDescription>Enter your package details to get a quote</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Dimensions */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="length">Length (in)</Label>
                                    <Input
                                        id="length"
                                        type="number"
                                        placeholder="Enter length"
                                        value={dimensions.length}
                                        onChange={(e) => setDimensions({ ...dimensions, length: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="width">Width (in)</Label>
                                    <Input
                                        id="width"
                                        type="number"
                                        placeholder="Enter width"
                                        value={dimensions.width}
                                        onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="height">Height (in)</Label>
                                    <Input
                                        id="height"
                                        type="number"
                                        placeholder="Enter height"
                                        value={dimensions.height}
                                        onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="weight">Weight (lbs)</Label>
                                    <Input
                                        id="weight"
                                        type="number"
                                        placeholder="Enter weight"
                                        value={dimensions.weight}
                                        onChange={(e) => setDimensions({ ...dimensions, weight: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Origin and Destination */}
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <Label htmlFor="origin">Origin</Label>
                                    {/* <Select value={origin} onValueChange={setOrigin}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select origin" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="san-francisco">San Francisco, CA</SelectItem>
                                            <SelectItem value="los-angeles">Los Angeles, CA</SelectItem>
                                            <SelectItem value="new-york">New York, NY</SelectItem>
                                            <SelectItem value="chicago">Chicago, IL</SelectItem>
                                            <SelectItem value="miami">Miami, FL</SelectItem>
                                        </SelectContent>
                                    </Select> */}
                                </div>
                                <div>
                                    <Label htmlFor="destination">Destination</Label>
                                    {/* <Select value={destination} onValueChange={setDestination}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select destination" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="san-francisco">San Francisco, CA</SelectItem>
                                            <SelectItem value="los-angeles">Los Angeles, CA</SelectItem>
                                            <SelectItem value="new-york">New York, NY</SelectItem>
                                            <SelectItem value="chicago">Chicago, IL</SelectItem>
                                            <SelectItem value="miami">Miami, FL</SelectItem>
                                        </SelectContent>
                                    </Select> */}
                                </div>
                            </div>

                            {/* Delivery Options */}
                            <div>
                                <Label>Delivery options</Label>
                                <RadioGroup value={deliveryOption} onValueChange={setDeliveryOption} className="mt-2">
                                    {deliveryOptions.map((option) => (
                                        <div key={option.id} className="flex items-center space-x-2 border rounded-lg p-4">
                                            <RadioGroupItem value={option.id} id={option.id} />
                                            <div className="flex-1">
                                                <Label htmlFor={option.id} className="font-medium">
                                                    {option.name}
                                                </Label>
                                                <p className="text-sm text-gray-500">{option.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </div>

                            <Button onClick={calculatePrice} className="w-full">
                                Calculate
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Results and Info */}
                    <div className="space-y-6">
                        {/* Price Result */}
                        {calculatedPrice && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Estimated Price</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-3xl font-bold text-blue-600">${calculatedPrice}</div>
                                    <p className="text-gray-600 mt-2">Based on your package dimensions and selected delivery option</p>
                                    <Button className="w-full mt-4">Book Shipment</Button>
                                </CardContent>
                            </Card>
                        )}

                        {/* Service Features */}
                        <Card>
                            <CardHeader>
                                <CardTitle>{`What's Included`}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Package className="h-5 w-5 text-blue-600" />
                                    <span className="text-sm">Real-time tracking</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Truck className="h-5 w-5 text-blue-600" />
                                    <span className="text-sm">Door-to-door delivery</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Plane className="h-5 w-5 text-blue-600" />
                                    <span className="text-sm">Multiple transport modes</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Pricing Tiers */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Business Plans</CardTitle>
                                <CardDescription>Volume discounts available</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="font-medium">Starter</span>
                                    <span className="text-sm text-gray-600">1-50 shipments/month</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-medium">Professional</span>
                                    <span className="text-sm text-gray-600">51-200 shipments/month</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-medium">Enterprise</span>
                                    <span className="text-sm text-gray-600">200+ shipments/month</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
