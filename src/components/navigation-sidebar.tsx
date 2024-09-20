'use client'

import { Home, Folder, Clock, Search, Database, TrendingUp, Code, Layout, Bell, HelpCircle, User, Compass } from 'lucide-react'

export default function NavigationSidebarComponent() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-gray-300 flex flex-col">
      <div className="p-4 flex justify-between items-center">
        <div className="w-8 h-8 bg-white rounded-full"></div>
        <button className="text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      <nav className="flex-1 overflow-y-auto">
        <ul className="px-2 py-4">
          <li className="mb-2">
            <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded">
              <Home className="mr-3 h-5 w-5" />
              Home
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded">
              <Folder className="mr-3 h-5 w-5" />
              Projects & files
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded">
              <Clock className="mr-3 h-5 w-5" />
              Recent
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 rounded">
              <Search className="mr-3 h-5 w-5" />
              Search...
              <span className="ml-auto text-xs text-gray-500">⌘J</span>
            </a>
          </li>
        </ul>
        
        <div className="px-4 py-2">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            APPS <a href="#" className="text-xs text-gray-600 hover:text-gray-400 ml-2">View all</a>
          </h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="flex items-center px-2 py-1 text-sm text-gray-400 hover:text-gray-200">
                <Database className="mr-3 h-5 w-5 text-orange-500" />
                Data lineage
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center px-2 py-1 text-sm text-gray-400 hover:text-gray-200">
                <Compass className="mr-3 h-5 w-5 text-blue-500" />
                Ontology manager
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center px-2 py-1 text-sm text-gray-400 hover:text-gray-200">
                <Search className="mr-3 h-5 w-5 text-purple-500" />
                Object explorer
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center px-2 py-1 text-sm text-gray-400 hover:text-gray-200">
                <TrendingUp className="mr-3 h-5 w-5 text-indigo-500" />
                Quiver
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center px-2 py-1 text-sm text-gray-400 hover:text-gray-200">
                <svg className="mr-3 h-5 w-5 text-pink-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 14H7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 14H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Modeling objective
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center px-2 py-1 text-sm text-gray-400 hover:text-gray-200">
                <Code className="mr-3 h-5 w-5 text-cyan-500" />
                Code workbook
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center px-2 py-1 text-sm text-gray-400 hover:text-gray-200">
                <Layout className="mr-3 h-5 w-5 text-violet-500" />
                Slate
                <svg className="ml-auto h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.0489 2.92705C11.3483 2.00574 12.6517 2.00574 12.9511 2.92705L14.9187 9.02295C15.0526 9.43192 15.4365 9.70712 15.8697 9.70712H22.2371C23.2058 9.70712 23.6086 10.9463 22.8249 11.5228L17.6736 15.2968C17.3231 15.5581 17.1764 16.0055 17.3103 16.4145L19.2779 22.5104C19.5773 23.4317 18.5228 24.2053 17.7391 23.6288L12.5878 19.8548C12.2373 19.5935 11.7627 19.5935 11.4122 19.8548L6.2609 23.6288C5.47719 24.2053 4.42271 23.4317 4.72206 22.5104L6.68969 16.4145C6.82356 16.0055 6.6769 15.5581 6.32642 15.2968L1.17511 11.5228C0.391392 10.9463 0.794168 9.70712 1.76289 9.70712H8.13026C8.56349 9.70712 8.94744 9.43192 9.08132 9.02295L11.0489 2.92705Z" fill="currentColor"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        
        <div className="px-4 py-2">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            PROJECTS & FILES <a href="#" className="text-xs text-gray-600 hover:text-gray-400 ml-2">View all</a>
          </h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="flex items-center px-2 py-1 text-sm text-gray-400 hover:text-gray-200">
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
      </nav>
      
      <div className="p-4">
        <ul>
          <li className="mb-2">
            <a href="#" className="flex items-center text-sm text-gray-400 hover:text-gray-200">
              <Bell className="mr-3 h-5 w-5" />
              Notifications
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center text-sm text-gray-400 hover:text-gray-200">
              <HelpCircle className="mr-3 h-5 w-5" />
              Help & support
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-sm text-gray-400 hover:text-gray-200">
              <User className="mr-3 h-5 w-5" />
              AK Account
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}