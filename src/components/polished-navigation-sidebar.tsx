'use client'

import { useState } from 'react'
import { Home, Folder, Clock, Search, Database, Box, TrendingUp, Code, Layout, Bell, HelpCircle, User, ChevronDown, ChevronRight, ChevronLeft, ChevronRightCircle } from 'lucide-react'

export function PolishedNavigationSidebar() {
  const [openMenus, setOpenMenus] = useState<string[]>([])
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleMenu = (menu: string) => {
    setOpenMenus(prevOpenMenus =>
      prevOpenMenus.includes(menu)
        ? prevOpenMenus.filter(item => item !== menu)
        : [...prevOpenMenus, menu]
    )
  }

  const toggleCollapse = () => {
    setIsCollapsed(prev => !prev)
  }

  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-64'} h-screen bg-gray-900 text-gray-300 flex flex-col shadow-lg transition-all duration-300`}>
      <div className="p-4 flex justify-between items-center border-b border-gray-800">
        {!isCollapsed && (
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-gray-900 font-bold text-lg">A</span>
          </div>
        )}
        <button onClick={toggleCollapse} className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
          {isCollapsed ? <ChevronRightCircle className="h-6 w-6" /> : <ChevronLeft className="h-6 w-6" />}
        </button>
      </div>
      
      <nav className="flex-1 overflow-y-auto">
        <ul className="px-2 py-3 space-y-1">
          <li>
            <a href="#" className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-3'} py-2 text-sm text-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200`}>
              <Home className={`${isCollapsed ? 'mr-0' : 'mr-3'} h-4 w-4`} />
              {!isCollapsed && 'Home'}
            </a>
          </li>
          <li>
            <button 
              onClick={() => toggleMenu('projects')}
              className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'justify-between px-3'} py-2 text-sm text-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200`}
            >
              <span className="flex items-center">
                <Folder className={`${isCollapsed ? 'mr-0' : 'mr-3'} h-4 w-4`} />
                {!isCollapsed && 'Projects & files'}
              </span>
              {!isCollapsed && (openMenus.includes('projects') ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />)}
            </button>
            {!isCollapsed && openMenus.includes('projects') && (
              <ul className="ml-6 mt-2 space-y-1">
                <li>
                  <a href="#" className="flex items-center px-3 py-2 text-xs text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200">
                    Active projects
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center px-3 py-2 text-xs text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200">
                    Archived projects
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#" className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-3'} py-2 text-sm text-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200`}>
              <Clock className={`${isCollapsed ? 'mr-0' : 'mr-3'} h-4 w-4`} />
              {!isCollapsed && 'Recent'}
            </a>
          </li>
          <li>
            <a href="#" className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-3'} py-2 text-sm text-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200`}>
              <Search className={`${isCollapsed ? 'mr-0' : 'mr-3'} h-4 w-4`} />
              {!isCollapsed && (
                <>
                  Search...
                  <span className="ml-auto text-xs text-gray-500 bg-gray-800 px-1.5 py-0.5 rounded">⌘J</span>
                </>
              )}
            </a>
          </li>
        </ul>
        
        <div className={`${isCollapsed ? 'px-2' : 'px-3'} py-4`}>
          {!isCollapsed && (
            <h2 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex justify-between items-center">
              APPS
              <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200">View all</a>
            </h2>
          )}
          <ul className="space-y-1">
            <li>
              <button 
                onClick={() => toggleMenu('dataLineage')}
                className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'justify-between px-3'} py-2 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200`}
              >
                <span className="flex items-center">
                  <Database className={`${isCollapsed ? 'mr-0' : 'mr-3'} h-5 w-5 text-orange-500`} />
                  {!isCollapsed && 'Data lineage'}
                </span>
                {!isCollapsed && (openMenus.includes('dataLineage') ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />)}
              </button>
              {!isCollapsed && openMenus.includes('dataLineage') && (
                <ul className="ml-6 mt-2 space-y-1">
                  <li>
                    <a href="#" className="flex items-center px-3 py-2 text-xs text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200">
                      View lineage
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center px-3 py-2 text-xs text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200">
                      Edit lineage
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#" className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-3'} py-2 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200`}>
                <Box className={`${isCollapsed ? 'mr-0' : 'mr-3'} h-5 w-5 text-blue-500`} />
                {!isCollapsed && 'Ontology manager'}
              </a>
            </li>
            <li>
              <a href="#" className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-3'} py-2 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200`}>
                <Search className={`${isCollapsed ? 'mr-0' : 'mr-3'} h-5 w-5 text-purple-500`} />
                {!isCollapsed && 'Object explorer'}
              </a>
            </li>
            <li>
              <a href="#" className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-3'} py-2 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200`}>
                <TrendingUp className={`${isCollapsed ? 'mr-0' : 'mr-3'} h-5 w-5 text-indigo-500`} />
                {!isCollapsed && 'Quiver'}
              </a>
            </li>
            <li>
              <a href="#" className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-3'} py-2 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200`}>
                <svg className={`${isCollapsed ? 'mr-0' : 'mr-3'} h-5 w-5 text-pink-500`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 14H7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 14H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {!isCollapsed && 'Modeling objective'}
              </a>
            </li>
            <li>
              <a href="#" className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-3'} py-2 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200`}>
                <Code className={`${isCollapsed ? 'mr-0' : 'mr-3'} h-5 w-5 text-cyan-500`} />
                {!isCollapsed && 'Code workbook'}
              </a>
            </li>
            <li>
              <a href="#" className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-3'} py-2 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200 group`}>
                <Layout className={`${isCollapsed ? 'mr-0' : 'mr-3'} h-5 w-5 text-violet-500`} />
                {!isCollapsed && (
                  <>
                    Slate
                    <svg className="ml-auto h-5 w-5 text-gray-500 group-hover:text-yellow-500 transition-colors duration-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.0489 2.92705C11.3483 2.00574 12.6517 2.00574 12.9511 2.92705L14.9187 9.02295C15.0526 9.43192 15.4365 9.70712 15.8697 9.70712H22.2371C23.2058 9.70712 23.6086 10.9463 22.8249 11.5228L17.6736 15.2968C17.3231 15.5581 17.1764 16.0055 17.3103 16.4145L19.2779 22.5104C19.5773 23.4317 18.5228 24.2053 17.7391 23.6288L12.5878 19.8548C12.2373 19.5935 11.7627 19.5935 11.4122 19.8548L6.2609 23.6288C5.47719 24.2053 4.42271 23.4317 4.72206 22.5104L6.68969 16.4145C6.82356 16.0055 6.6769 15.5581 6.32642 15.2968L1.17511 11.5228C0.391392 10.9463 0.794168 9.70712 1.76289 9.70712H8.13026C8.56349 9.70712 8.94744 9.43192 9.08132 9.02295L11.0489 2.92705Z" fill="currentColor"/>
                    </svg>
                  </>
                )}
              </a>
            </li>
          </ul>
        </div>
        
        {!isCollapsed && (
          <div className="px-3 py-4">
            <h2 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex justify-between items-center">
              PROJECTS & FILES
              <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200">View all</a>
            </h2>
            <ul className="space-y-1">
              <li>
                <a href="#" className="flex items-center px-3 py-2 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200">
                  <svg className="mr-3 h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="2"/>
                    <line x1="9" y1="21" x2="9" y2="9" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Foundry Integration Demo
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
      
      <div className={`${isCollapsed ? 'p-2' : 'p-4'} border-t border-gray-800`}>
        <ul className="space-y-1">
          <li>
            <a href="#" className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-3'} py-2 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200`}>
              <Bell className={`${isCollapsed ? 'mr-0' : 'mr-3'} h-5 w-5`} />
              {!isCollapsed && 'Notifications'}
            </a>
          </li>
          <li>
            <a href="#" className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-3'} py-2 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200`}>
              <HelpCircle className={`${isCollapsed ? 'mr-0' : 'mr-3'} h-5 w-5`} />
              {!isCollapsed && 'Help & support'}
            </a>
          </li>
          <li>
            <a href="#" className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-3'} py-2 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200`}>
              <User className={`${isCollapsed ? 'mr-0' : 'mr-3'} h-5 w-5`} />
              {!isCollapsed && 'AK Account'}
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}