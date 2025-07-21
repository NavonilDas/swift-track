import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { BarChart3, Bell, Globe, Package, Search, Truck, Users } from 'lucide-react';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';


export default function Home() {
  const [trackingNumber, setTrackingNumber] = useState<string>('');

  const handleTrack = () => {
    if (trackingNumber.trim()) {
      window.location.href = `/track?number=${encodeURIComponent(trackingNumber)}`
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Track your packages with ease
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {`SwiftTrack provides real-time tracking and delivery updates for all your shipments. Whether you're a
                business or an individual, stay informed every step of the way.`}
              </p>
              <div className="mt-8 flex max-w-md gap-x-4">
                <Input
                  type="text"
                  placeholder="Enter tracking number"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleTrack()}
                  className="flex-auto"
                />
                <Button onClick={handleTrack} className="bg-blue-600 hover:bg-blue-700">
                  <Search className="h-4 w-4 mr-2" />
                  Track
                </Button>
              </div>
            </div>
            {/* TODO: Replace this box with image. */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-8 shadow-2xl">
                <Truck className="h-32 w-32 text-white mx-auto mt-16" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Features for everyone</h2>
            <p className="mt-4 text-lg text-gray-600">
              SwiftTrack offers a range of features designed to meet the needs of both businesses and individual users.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Package className="h-8 w-8 text-blue-600" />
                <CardTitle>Real-time tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{`Get up-to-the-minute updates on your package's location and status.`}</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-blue-600" />
                <CardTitle>Global coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Track shipments from anywhere in the world with our extensive network.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Bell className="h-8 w-8 text-blue-600" />
                <CardTitle>Delivery notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Receive alerts via email or SMS when your package is shipped, in transit, and delivered.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Features */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">For businesses</h2>
            <p className="mt-4 text-lg text-gray-600">
              Streamline your logistics and improve customer satisfaction with our business solutions.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-blue-600" />
                <CardTitle>Bulk tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Track multiple packages simultaneously with our bulk tracking tool.</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-blue-600" />
                <CardTitle>API integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Integrate our tracking API into your existing systems for seamless operations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Package className="h-8 w-8 text-blue-600" />
                <CardTitle>Customizable reports</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Generate detailed reports on your shipping activity to optimize your processes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

