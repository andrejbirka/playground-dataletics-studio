"use client"

import React, { useState } from 'react'
import { Button } from "~/components/ui/button"
import { ScrollArea } from "~/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui/tooltip"
import { Home, Folder, Clock, Search, Database, Box, TrendingUp, Code, Layout, Bell, HelpCircle, User, ChevronLeft, ChevronRight, Star, Zap } from 'lucide-react'

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="mr-2 h-8 w-8 flex items-center justify-center rounded-md bg-gray-800 text-gray-400">
    {children}
  </div>
)

const NavItem = ({ icon, label, shortcut, href = "#", isCollapsed, useIconWrapper = false }: { icon: React.ReactNode, label: string, shortcut?: string, href?: string, isCollapsed: boolean, useIconWrapper?: boolean }) => (
  <TooltipProvider>
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-gray-100 hover:bg-gray-800" asChild>
          <a href={href} className="flex items-center px-2 py-1.5 text-sm">
            {useIconWrapper ? <IconWrapper>{icon}</IconWrapper> : <span className="mr-2 h-8 w-8 flex items-center justify-center">{icon}</span>}
            {!isCollapsed && (
              <>
                {label}
                {shortcut && <span className="ml-auto text-xs text-gray-500 bg-gray-800 px-1.5 py-0.5 rounded">{shortcut}</span>}
              </>
            )}
          </a>
        </Button>
      </TooltipTrigger>
      {isCollapsed && <TooltipContent side="right">{label}</TooltipContent>}
    </Tooltip>
  </TooltipProvider>
)

export function ImprovedDataleticsStudioSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSidebar = () => setIsCollapsed(!isCollapsed)

  return (
    <div className={`${isCollapsed ? 'w-20' : 'w-64'} h-screen bg-gray-900 text-gray-300 flex flex-col shadow-lg transition-all duration-300 ease-in-out`}>
      <div className="p-4 flex justify-between items-center border-b border-gray-800">
        {!isCollapsed && (
          <div className="flex flex-col">
            <span className="font-semibold text-lg text-gray-100">Dataletics</span>
            <span className="text-xs text-gray-400">Studio</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className={`text-gray-400 hover:text-gray-100 hover:bg-gray-800 ${isCollapsed ? 'w-full' : ''}`}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
      
      <ScrollArea className="flex-1 px-3">
        <nav className="py-4">
          <NavItem icon={<Home className="h-4 w-4" />} label="Home" isCollapsed={isCollapsed} />
          <NavItem icon={<Folder className="h-4 w-4" />} label="Projects & files" isCollapsed={isCollapsed} />
          <NavItem icon={<Clock className="h-4 w-4" />} label="Recent" isCollapsed={isCollapsed} />
          <NavItem icon={<Search className="h-4 w-4" />} label="Search..." shortcut="⌘J" isCollapsed={isCollapsed} />
        </nav>
        
        {!isCollapsed && (
          <>
            <div className="py-4">
              <h2 className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex justify-between items-center">
                APPS
                <Button variant="link" size="sm" className="text-xs text-gray-500 hover:text-gray-300">View all</Button>
              </h2>
              <div className="space-y-1">
                <NavItem icon={<Database className="h-4 w-4" />} label="Data lineage" isCollapsed={isCollapsed} useIconWrapper />
                <NavItem icon={<Box className="h-4 w-4" />} label="Ontology manager" isCollapsed={isCollapsed} useIconWrapper />
                <NavItem icon={<Search className="h-4 w-4" />} label="Object explorer" isCollapsed={isCollapsed} useIconWrapper />
                <NavItem icon={<TrendingUp className="h-4 w-4" />} label="Quiver" isCollapsed={isCollapsed} useIconWrapper />
                <NavItem icon={<Zap className="h-4 w-4" />} label="Modeling objective" isCollapsed={isCollapsed} useIconWrapper />
                <NavItem icon={<Code className="h-4 w-4" />} label="Code workbook" isCollapsed={isCollapsed} useIconWrapper />
              </div>
            </div>
            
            <div className="py-4">
              <h2 className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex justify-between items-center">
                PROJECTS & FILES
                <Button variant="link" size="sm" className="text-xs text-gray-500 hover:text-gray-300">View all</Button>
              </h2>
              <div className="space-y-1">
                <NavItem icon={<Folder className="h-4 w-4" />} label="Foundry Integration Demo" isCollapsed={isCollapsed} />
              </div>
            </div>
          </>
        )}
      </ScrollArea>
      
      <div className={`p-4 border-t border-gray-800 ${isCollapsed ? 'flex flex-col items-center space-y-2' : 'space-y-1'}`}>
        <NavItem icon={<Bell className="h-4 w-4" />} label="Notifications" isCollapsed={isCollapsed} />
        <NavItem icon={<HelpCircle className="h-4 w-4" />} label="Help & support" isCollapsed={isCollapsed} />
        <NavItem icon={<User className="h-4 w-4" />} label="AK Account" isCollapsed={isCollapsed} />
      </div>
    </div>
  )
}