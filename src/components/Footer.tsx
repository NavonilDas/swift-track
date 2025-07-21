import React from 'react'
import Link from "next/link"

function Footer() {
    return (
        <footer className="bg-gray-50 border-t">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">About SwiftTrack</h3>
                        <p className="mt-4 text-base text-gray-500">
                            {`SwiftTrack provides real-time tracking and delivery updates for all your shipments. Whether you're a
                            business or an individual, stay informed every step of the way.`}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link href="/about" className="text-base text-gray-500 hover:text-gray-900">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-base text-gray-500 hover:text-gray-900">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/help" className="text-base text-gray-500 hover:text-gray-900">
                                    Help Center
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link href="/privacy" className="text-base text-gray-500 hover:text-gray-900">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-base text-gray-500 hover:text-gray-900">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-8">
                    <p className="text-base text-gray-400 text-center">© 2024 SwiftTrack. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer