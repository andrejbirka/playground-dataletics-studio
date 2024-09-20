"use client"

import { useState } from 'react'
import { Home, Folder, Clock, Search, Database, Box, TrendingUp, Code, Layout, Bell, HelpCircle, User, ChevronRight, ChevronLeft } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui/tooltip"

export function CollapsibleNavigationSidebarComponent() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const NavItem = ({ icon: Icon, label, description }) => (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <li>
            <a href="#" className="flex items-center px-3 py-2 text-sm text-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200">
              <Icon className={`${isCollapsed ? 'mx-auto' : 'mr-3'} h-5 w-5`} />
              {!isCollapsed && <span>{label}</span>}
            </a>
          </li>
        </TooltipTrigger>
        <TooltipContent side="right" className="flex items-center space-x-2 bg-gray-800 text-white p-3 rounded-md shadow-lg">
          <div className="bg-gray-700 p-2 rounded-full">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold">{label}</h3>
            <p className="text-sm text-gray-300">{description}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )

  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-64'} h-screen bg-gray-900 text-gray-300 flex flex-col shadow-lg transition-all duration-300`}>
      <div className="p-4 flex justify-between items-center border-b border-gray-800">
        {!isCollapsed && <span className="text-lg font-semibold text-white">Dataletics</span>}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)} 
          className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
        >
          {isCollapsed ? <ChevronRight className="h-6 w-6" /> : <ChevronLeft className="h-6 w-6" />}
        </button>
      </div>
      
      <nav className="flex-1 overflow-y-auto">
        <ul className="px-2 py-3 space-y-1">
          <NavItem icon={Home} label="Home" description="Go to the main dashboard" />
          <NavItem icon={Folder} label="Projects & files" description="Access your projects and files" />
          <NavItem icon={Clock} label="Recent" description="View recently accessed items" />
          <NavItem icon={Search} label="Search" description="Search across all your data" />
        </ul>
        
        <div className="px-3 py-4">
          <h2 className={`text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 ${isCollapsed ? 'text-center' : 'flex justify-between items-center'}`}>
            {!isCollapsed && 'APPS'}
            {!isCollapsed && <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200">View all</a>}
          </h2>
          <ul className="space-y-1">
            <NavItem icon={Database} label="Data lineage" description="Visualize and manage data relationships" />
            <NavItem icon={Box} label="Ontology manager" description="Manage your data ontologies" />
            <NavItem icon={Search} label="Object explorer" description="Explore and analyze data objects" />
            <NavItem icon={TrendingUp} label="Quiver" description="Advanced analytics and insights" />
            <NavItem icon={Code} label="Code workbook" description="Write and execute code snippets" />
            <NavItem icon={Layout} label="Slate" description="Collaborative data workspace" />
          </ul>
        </div>
        
        <div className="px-3 py-4">
          <h2 className={`text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 ${isCollapsed ? 'text-center' : 'flex justify-between items-center'}`}>
            {!isCollapsed && 'PROJECTS & FILES'}
            {!isCollapsed && <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200">View all</a>}
          </h2>
          <ul className="space-y-1">
            <NavItem 
              icon={() => (
                <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="2"/>
                  <line x1="9" y1="21" x2="9" y2="9" stroke="currentColor" strokeWidth="2"/>
                </svg>
              )}
              label="Foundry Integration Demo"
              description="Demo project for Foundry integration"
            />
          </ul>
        </div>
      </nav>
      
      <div className="p-4 border-t border-gray-800">
        <ul className="space-y-1">
          <NavItem icon={Bell} label="Notifications" description="View your notifications" />
          <NavItem icon={HelpCircle} label="Help & support" description="Get assistance and support" />
          <NavItem icon={User} label="AK Account" description="Manage your account settings" />
        </ul>
      </div>
    </div>
  )
}