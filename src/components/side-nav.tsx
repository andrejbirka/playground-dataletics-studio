"use client"

import { useState } from 'react'
import { Home, FolderOpen, Clock, Search, Database, Compass, BarChart2, Code, Layout, Bell, HelpCircle, User, ChevronDown, Menu } from 'lucide-react'
import { Button } from "~/components/ui/button"
import { ScrollArea } from "~/components/ui/scroll-area"

export function SideNav() {
  const [isAppsExpanded, setIsAppsExpanded] = useState(true)
  const [isProjectsExpanded, setIsProjectsExpanded] = useState(true)

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      <nav className="w-64 flex flex-col border-r border-gray-800">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="rounded-full bg-white w-8 h-8"></div>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-100">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <ScrollArea className="flex-grow">
          <div className="space-y-6 p-4">
            <div className="space-y-1">
              <NavItem icon={<Home className="h-4 w-4" />} label="Home" />
              <NavItem icon={<FolderOpen className="h-4 w-4" />} label="Projects & files" />
              <NavItem icon={<Clock className="h-4 w-4" />} label="Recent" />
              <NavItem icon={<Search className="h-4 w-4" />} label="Search..." />
            </div>

            <div>
              <Button
                variant="ghost"
                className="w-full justify-between font-semibold text-xs uppercase tracking-wider text-gray-400 hover:text-gray-100"
                onClick={() => setIsAppsExpanded(!isAppsExpanded)}
              >
                Apps
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isAppsExpanded ? 'rotate-180' : ''}`} />
              </Button>
              {isAppsExpanded && (
                <div className="mt-2 space-y-1 pl-2">
                  <NavItem icon={<Database className="h-4 w-4 text-orange-400" />} label="Data lineage" />
                    <NavItem icon={<Compass className="h-4 w-4 text-purple-400" />} label="Object explorer" />
                  <NavItem icon={<BarChart2 className="h-4 w-4 text-green-400" />} label="Quiver" />
                  <NavItem icon={<Code className="h-4 w-4 text-yellow-400" />} label="Code workbook" />
                  <NavItem icon={<Layout className="h-4 w-4 text-indigo-400" />} label="Slate" />
                </div>
              )}
            </div>

            <div>
              <Button
                variant="ghost"
                className="w-full justify-between font-semibold text-xs uppercase tracking-wider text-gray-400 hover:text-gray-100"
                onClick={() => setIsProjectsExpanded(!isProjectsExpanded)}
              >
                Projects & Files
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isProjectsExpanded ? 'rotate-180' : ''}`} />
              </Button>
              {isProjectsExpanded && (
                <div className="mt-2 space-y-1 pl-2">
                  <NavItem icon={<FolderOpen className="h-4 w-4" />} label="Foundry Integration Demo" />
                </div>
              )}
            </div>
          </div>
        </ScrollArea>
        <div className="border-t border-gray-800 p-4 space-y-1">
          <NavItem icon={<Bell className="h-4 w-4" />} label="Notifications" />
          <NavItem icon={<HelpCircle className="h-4 w-4" />} label="Help & support" />
          <NavItem icon={<User className="h-4 w-4" />} label="Account" />
        </div>
      </nav>
    </div>
  )
}

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <Button variant="ghost" className="w-full justify-start hover:bg-gray-800 transition-colors duration-200">
      {icon}
      <span className="ml-2">{label}</span>
    </Button>
  )
}