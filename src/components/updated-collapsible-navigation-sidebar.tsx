'use client'

import { useState } from 'react'
import { Home, Folder, Clock, Search, Database, Box, TrendingUp, Code, Layout, Bell, HelpCircle, User, Menu, Star, Zap, ChevronLeft, ChevronRight } from 'lucide-react'

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="mr-2 p-1 rounded-md bg-gray-800 shadow-inner">
    {children}
  </div>
)

export function UpdatedCollapsibleNavigationSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSidebar = () => setIsCollapsed(!isCollapsed)

  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-64'} h-screen bg-gray-900 text-gray-300 flex flex-col shadow-lg transition-all duration-300 ease-in-out`}>
      <div className="p-4 flex justify-between items-center border-b border-gray-800">
        {!isCollapsed && (
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center shadow-inner">
            <span className="text-gray-300 font-bold text-lg">A</span>
          </div>
        )}
        <button 
          onClick={toggleSidebar} 
          className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </button>
      </div>
      
      <nav className="flex-1 overflow-y-auto">
        <ul className="px-2 py-3 space-y-1">
          <li>
            <a href="#" className="flex items-center px-3 py-2 text-sm text-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200">
              <Home className="h-4 w-4 mr-2" />
              {!isCollapsed && "Home"}
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-3 py-2 text-sm text-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200">
              <Folder className="h-4 w-4 mr-2" />
              {!isCollapsed && "Projects & files"}
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-3 py-2 text-sm text-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200">
              <Clock className="h-4 w-4 mr-2" />
              {!isCollapsed && "Recent"}
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-3 py-2 text-sm text-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200">
              <Search className="h-4 w-4 mr-2" />
              {!isCollapsed && (
                <>
                  Search...
                  <span className="ml-auto text-xs text-gray-500 bg-gray-800 px-1.5 py-0.5 rounded">⌘J</span>
                </>
              )}
            </a>
          </li>
        </ul>
        
        {!isCollapsed && (
          <>
            <div className="px-3 py-4">
              <h2 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex justify-between items-center">
                APPS
                <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200">View all</a>
              </h2>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="flex items-center px-3 py-2 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200">
                    <IconWrapper>
                      <Database className="h-4 w-4" />
                    </IconWrapper>
                    Data lineage
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center px-3 py-2 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200">
                    <IconWrapper>
                      <Box className="h-4 w-4" />
                    </IconWrapper>
                    Ontology manager
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center px-3 py-2 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200">
                    <IconWrapper>
                      <Search className="h-4 w-4" />
                    </IconWrapper>
                    Object explorer
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center px-3 py-2 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200">
                    <IconWrapper>
                      <TrendingUp className="h-4 w-4" />
                    </IconWrapper>
                    Quiver
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center px-3 py-2 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200">
                    <IconWrapper>
                      <Zap className="h-4 w-4" />
                    </IconWrapper>
                    Modeling objective
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center px-3 py-2 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200">
                    <IconWrapper>
                      <Code className="h-4 w-4" />
                    </IconWrapper>
                    Code workbook
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center px-3 py-2 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200 group">
                    <IconWrapper>
                      <Layout className="h-4 w-4" />
                    </IconWrapper>
                    Slate
                    <Star className="ml-auto h-4 w-4 text-gray-500 group-hover:text-yellow-500 transition-colors duration-200" />
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="px-3 py-4">
              <h2 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex justify-between items-center">
                PROJECTS & FILES
                <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200">View all</a>
              </h2>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="flex items-center px-3 py-2 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200">
                    <IconWrapper>
                      <Folder className="h-4 w-4" />
                    </IconWrapper>
                    Foundry Integration Demo
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
      </nav>
      
      <div className={`p-4 border-t border-gray-800 ${isCollapsed ? 'flex flex-col items-center' : ''}`}>
        <ul className="space-y-1">
          <li>
            <a href="#" className="flex items-center px-3 py-2 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200">
              <Bell className="h-4 w-4 mr-2" />
              {!isCollapsed && "Notifications"}
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-3 py-2 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200">
              <HelpCircle className="h-4 w-4 mr-2" />
              {!isCollapsed && "Help & support"}
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-3 py-2 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200">
              <User className="h-4 w-4 mr-2" />
              {!isCollapsed && "AK Account"}
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}