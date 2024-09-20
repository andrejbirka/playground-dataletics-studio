'use client'

import React, { useState } from 'react'
import { Button } from "~/components/ui/button"
import { ScrollArea } from "~/components/ui/scroll-area"
import { Home, Folder, Clock, Search, Database, Box, TrendingUp, Code, Layout, Bell, HelpCircle, User, ChevronLeft, ChevronRight, Star, Zap } from 'lucide-react'

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="mr-2 p-1 rounded-md bg-gray-800 text-gray-400">
    {children}
  </div>
)

export function DarkModeDataleticsStudioSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSidebar = () => setIsCollapsed(!isCollapsed)

  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-64'} h-screen bg-gray-900 text-gray-300 flex flex-col shadow-lg transition-all duration-300 ease-in-out`}>
      <div className="p-3 flex justify-between items-center border-b border-gray-800">
        <div className="flex items-center">
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-gray-100 leading-tight">Dataletics</span>
              <span className="text-xs text-gray-400 font-light leading-tight">Studio</span>
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="text-gray-400 hover:text-gray-100 hover:bg-gray-800"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
      
      <ScrollArea className="flex-1">
        <nav className="px-2 py-2">
          <ul className="space-y-0.5">
            <li>
              <Button variant="ghost" className="w-full justify-start text-gray-200 hover:text-gray-100 hover:bg-gray-800" asChild>
                <a href="#" className="flex items-center px-2 py-1.5 text-sm">
                  <Home className="h-4 w-4 mr-2 text-gray-200" />
                  {!isCollapsed && "Home"}
                </a>
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start text-gray-200 hover:text-gray-100 hover:bg-gray-800" asChild>
                <a href="#" className="flex items-center px-2 py-1.5 text-sm">
                  <Folder className="h-4 w-4 mr-2 text-gray-200" />
                  {!isCollapsed && "Projects & files"}
                </a>
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start text-gray-200 hover:text-gray-100 hover:bg-gray-800" asChild>
                <a href="#" className="flex items-center px-2 py-1.5 text-sm">
                  <Clock className="h-4 w-4 mr-2 text-gray-200" />
                  {!isCollapsed && "Recent"}
                </a>
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start text-gray-200 hover:text-gray-100 hover:bg-gray-800" asChild>
                <a href="#" className="flex items-center px-2 py-1.5 text-sm">
                  <Search className="h-4 w-4 mr-2 text-gray-200" />
                  {!isCollapsed && (
                    <>
                      Search...
                      <span className="ml-auto text-xs text-gray-500 bg-gray-800 px-1.5 py-0.5 rounded">⌘J</span>
                    </>
                  )}
                </a>
              </Button>
            </li>
          </ul>
        </nav>
        
        {!isCollapsed && (
          <>
            <div className="px-3 py-3">
              <h2 className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 flex justify-between items-center">
                APPS
                <Button variant="link" size="sm" className="text-xs text-gray-500 hover:text-gray-300" asChild>
                  <a href="#">View all</a>
                </Button>
              </h2>
              <ul className="space-y-0.5">
                <li>
                  <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-gray-100 hover:bg-gray-800" asChild>
                    <a href="#" className="flex items-center px-2 py-1.5 text-sm">
                      <IconWrapper>
                        <Database className="h-4 w-4" />
                      </IconWrapper>
                      Data lineage
                    </a>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-gray-100 hover:bg-gray-800" asChild>
                    <a href="#" className="flex items-center px-2 py-1.5 text-sm">
                      <IconWrapper>
                        <Box className="h-4 w-4" />
                      </IconWrapper>
                      Ontology manager
                    </a>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-gray-100 hover:bg-gray-800" asChild>
                    <a href="#" className="flex items-center px-2 py-1.5 text-sm">
                      <IconWrapper>
                        <Search className="h-4 w-4" />
                      </IconWrapper>
                      Object explorer
                    </a>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-gray-100 hover:bg-gray-800" asChild>
                    <a href="#" className="flex items-center px-2 py-1.5 text-sm">
                      <IconWrapper>
                        <TrendingUp className="h-4 w-4" />
                      </IconWrapper>
                      Quiver
                    </a>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-gray-100 hover:bg-gray-800" asChild>
                    <a href="#" className="flex items-center px-2 py-1.5 text-sm">
                      <IconWrapper>
                        <Zap className="h-4 w-4" />
                      </IconWrapper>
                      Modeling objective
                    </a>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-gray-100 hover:bg-gray-800" asChild>
                    <a href="#" className="flex items-center px-2 py-1.5 text-sm">
                      <IconWrapper>
                        <Code className="h-4 w-4" />
                      </IconWrapper>
                      Code workbook
                    </a>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-gray-100 hover:bg-gray-800 group" asChild>
                    <a href="#" className="flex items-center px-2 py-1.5 text-sm">
                      <IconWrapper>
                        <Layout className="h-4 w-4" />
                      </IconWrapper>
                      Slate
                      <Star className="ml-auto h-4 w-4 text-gray-600 group-hover:text-yellow-500 transition-colors duration-200" />
                    </a>
                  </Button>
                </li>
              </ul>
            </div>
            
            <div className="px-3 py-3">
              <h2 className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 flex justify-between items-center">
                PROJECTS & FILES
                <Button variant="link" size="sm" className="text-xs text-gray-500 hover:text-gray-300" asChild>
                  <a href="#">View all</a>
                </Button>
              </h2>
              <ul className="space-y-0.5">
                <li>
                  <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-gray-100 hover:bg-gray-800" asChild>
                    <a href="#" className="flex items-center px-2 py-1.5 text-sm">
                      <IconWrapper>
                        <Folder className="h-4 w-4" />
                      </IconWrapper>
                      Foundry Integration Demo
                    </a>
                  </Button>
                </li>
              </ul>
            </div>
          </>
        )}
      </ScrollArea>
      
      <div className={`p-3 border-t border-gray-800 ${isCollapsed ? 'flex flex-col items-center' : ''}`}>
        <ul className="space-y-0.5">
          <li>
            <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-gray-100 hover:bg-gray-800" asChild>
              <a href="#" className="flex items-center px-2 py-1.5 text-sm">
                <Bell className="h-4 w-4 mr-2" />
                {!isCollapsed && "Notifications"}
              </a>
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-gray-100 hover:bg-gray-800" asChild>
              <a href="#" className="flex items-center px-2 py-1.5 text-sm">
                <HelpCircle className="h-4 w-4 mr-2" />
                {!isCollapsed && "Help & support"}
              </a>
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-gray-100 hover:bg-gray-800" asChild>
              <a href="#" className="flex items-center px-2 py-1.5 text-sm">
                <User className="h-4 w-4 mr-2" />
                {!isCollapsed && "AK Account"}
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  )
}