import { COMPANY_NAME } from '@/utils/constants'
import React from 'react'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Package, User } from "lucide-react"
import { Button } from "./ui/Button";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navigation = [
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
]


function NavBar() {
    const pathname = usePathname()
    return (
        <header className="border-b bg-white">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-start flex-1">
                        <Link href="/" className="flex items-center space-x-2">
                            <Package className="h-8 w-8 text-blue-600" />
                            <span className="text-xl font-bold text-gray-900">{COMPANY_NAME}</span>
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-end space-x-8 mr-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-medium transition-colors hover:text-blue-600 ${pathname === item.href ? "text-blue-600" : "text-gray-700"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-4">
                        <Link href="/track">
                            <Button className="bg-blue-600 hover:bg-blue-700">Track</Button>
                        </Link>
                        {/* <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <User className="h-5 w-5" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                    <Link href="/admin">Admin Dashboard</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>Login</DropdownMenuItem>
                                <DropdownMenuItem>Sign Up</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu> */}
                    </div>
                </div>
            </div>
        </header>)
}

export default NavBar