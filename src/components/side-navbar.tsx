'use client'

import Link from "next/link"
import { Bell, Code2, FileText, HelpCircle, Home, Layers, LineChart, Rocket, Search, Star, User } from "lucide-react"

import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"

export function SideNavbar() {
  return (
    <div className="flex h-screen w-64 flex-col bg-gray-900 text-gray-100 p-3 space-y-3">
      <div className="flex items-center justify-between p-2 bg-gray-800 rounded-lg shadow-md">
        <div className="text-2xl font-bold bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center">Q</div>
        <Button variant="ghost" size="icon" className="hover:bg-gray-700">
          <LineChart className="h-4 w-4" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>
      <nav className="flex-1 overflow-y-auto space-y-3">
        <div className="space-y-1 p-3 bg-gray-800 rounded-lg shadow-md">
          <Link
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
            href="#"
          >
            <Home className="mr-3 h-4 w-4" />
            Home
          </Link>
          <Link
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
            href="#"
          >
            <FileText className="mr-3 h-4 w-4" />
            Projects & files
          </Link>
          <Link
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
            href="#"
          >
            <Layers className="mr-3 h-4 w-4" />
            Recent
          </Link>
          <div className="relative mt-2">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input className="pl-9 bg-gray-700 border-gray-600 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." type="search" />
          </div>
        </div>
        <div className="p-3 bg-gray-800 rounded-lg shadow-md">
          <h2 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center justify-between">
            Apps
            <Button className="h-6 rounded-md bg-gray-700 px-2 py-1 text-[10px] hover:bg-gray-600 transition-colors" variant="ghost">
              View all
            </Button>
          </h2>
          <div className="space-y-1">
            {[
              { icon: LineChart, label: "Data lineage" },
              { icon: Layers, label: "Ontology manager" },
              { icon: Search, label: "Object explorer" },
              { icon: Rocket, label: "Quiver" },
              { icon: LineChart, label: "Modeling objective" },
              { icon: Code2, label: "Code workbook" },
            ].map((item, index) => (
              <Link
                key={index}
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                href="#"
              >
                <item.icon className="mr-3 h-4 w-4" />
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
              <div className="flex items-center">
                <FileText className="mr-3 h-4 w-4" />
                Slate
              </div>
              <Star className="h-4 w-4 text-yellow-500" />
            </div>
          </div>
        </div>
        <div className="p-3 bg-gray-800 rounded-lg shadow-md">
          <h2 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center justify-between">
            Projects & Files
            <Button className="h-6 rounded-md bg-gray-700 px-2 py-1 text-[10px] hover:bg-gray-600 transition-colors" variant="ghost">
              View all
            </Button>
          </h2>
          <Link
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
            href="#"
          >
            <FileText className="mr-3 h-4 w-4" />
            Foundry Integration Demo
          </Link>
        </div>
      </nav>
      <div className="p-3 bg-gray-800 rounded-lg shadow-md">
        <nav className="space-y-1">
          {[
            { icon: Bell, label: "Notifications" },
            { icon: HelpCircle, label: "Help & support" },
            { icon: User, label: "Account" },
          ].map((item, index) => (
            <Link
              key={index}
              className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
              href="#"
            >
              <item.icon className="mr-3 h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}