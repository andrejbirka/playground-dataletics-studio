"use client"

import React, { useState } from "react"
import { LayoutDashboard, Search, Bell, Clock, FolderOpen, HelpCircle, User, Box, PieChart, BarChart, Database, GitBranch, Code, FileCode, Briefcase, Folder, ChevronRight, Menu, Grid, Settings, LucideIcon, ChevronLeft } from "lucide-react"

const AppIcon = ({ icon: Icon }: { icon: LucideIcon }) => (
  <div className="w-8 h-8 rounded-sm flex items-center justify-center bg-gray-700">
    <Icon className="w-5 h-5 text-gray-300" />
  </div>
)

const NavItem = ({ icon: Icon, children, collapsed }: { icon: LucideIcon; children: React.ReactNode; collapsed: boolean }) => (
  <li className="px-2 py-1.5 rounded-sm hover:bg-gray-700 transition-colors group">
    <a href="#" className="flex items-center space-x-2">
      <div className={`${collapsed ? 'w-8 h-8' : 'w-6 h-6'} rounded-sm bg-gray-700 flex items-center justify-center transition-colors`}>
        <Icon className={`${collapsed ? 'w-5 h-5' : 'w-4 h-4'} text-gray-300 group-hover:text-white transition-colors`} />
      </div>
      {!collapsed && <span className="text-sm font-medium group-hover:text-white transition-colors">{children}</span>}
    </a>
  </li>
)

const NavIsland = ({ title, children, viewAll = false, icon: Icon, collapsed }: { title: string; children: React.ReactNode; viewAll?: boolean; icon: LucideIcon; collapsed: boolean }) => (
  <div className="mb-4 bg-gray-800 rounded-sm overflow-hidden">
    <div className="px-3 py-2 bg-gray-700 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Icon className={`${collapsed ? 'w-5 h-5' : 'w-4 h-4'} text-gray-300`} />
        {!collapsed && <h2 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">{title}</h2>}
      </div>
      {viewAll && !collapsed && (
        <button className="text-xs text-gray-400 hover:text-white transition-colors flex items-center">
          View all
          <ChevronRight className="w-3 h-3 ml-1" />
        </button>
      )}
    </div>
    <div className={`py-1.5 ${collapsed ? 'px-0' : 'px-1'}`}>
      <ul className={`space-y-0.5 ${collapsed ? 'flex flex-col items-center' : ''}`}>{children}</ul>
    </div>
  </div>
)

export function IslandNavigation() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className={`${collapsed ? 'w-16' : 'w-60'} h-screen bg-gray-900 text-gray-300 flex flex-col text-sm shadow-xl transition-all duration-300`}>
      <div className="p-4 flex justify-between items-center border-b border-gray-800">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-gray-700 rounded-sm flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-lg font-semibold text-white">Dash</span>
          </div>
        )}
        <button 
          className="text-gray-400 hover:text-white transition-colors"
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>
      <nav className={`flex-1 overflow-y-auto py-4 ${collapsed ? 'px-1' : 'px-3'} space-y-3`}>
        <NavIsland title="Main Menu" icon={Grid} collapsed={collapsed}>
          <NavItem icon={LayoutDashboard} collapsed={collapsed}>Dashboard</NavItem>
          <NavItem icon={Search} collapsed={collapsed}>
            {!collapsed && (
              <>
                <span className="text-gray-400">Search...</span>
                <span className="ml-auto text-xs bg-gray-700 px-1.5 py-0.5 rounded-sm text-gray-300">⌘K</span>
              </>
            )}
          </NavItem>
          <NavItem icon={Bell} collapsed={collapsed}>Notifications</NavItem>
          <NavItem icon={Clock} collapsed={collapsed}>Recent</NavItem>
          <li className={`px-2 py-1.5 rounded-sm bg-gray-700 text-white group ${collapsed ? 'w-full flex justify-center' : ''}`}>
            <a href="#" className="flex items-center space-x-2">
              <div className={`${collapsed ? 'w-8 h-8' : 'w-6 h-6'} rounded-sm bg-gray-600 flex items-center justify-center transition-colors`}>
                <FolderOpen className={`${collapsed ? 'w-5 h-5' : 'w-4 h-4'} text-white`} />
              </div>
              {!collapsed && <span className="text-sm font-medium">Projects & Files</span>}
            </a>
          </li>
        </NavIsland>
        <NavIsland title="Apps" viewAll={true} icon={Box} collapsed={collapsed}>
          {[
            { name: "Object Explorer", icon: Box },
            { name: "Contour", icon: PieChart },
            { name: "Reports", icon: BarChart },
            { name: "Data Connection", icon: Database },
            { name: "Data Lineage", icon: GitBranch },
            { name: "Code Workbook", icon: Code },
            { name: "Code Repositories", icon: FileCode },
          ].map((app, index) => (
            <li key={index} className={`group ${collapsed ? 'w-full flex justify-center' : ''}`}>
              <a href="#" className={`flex items-center ${collapsed ? 'px-0 py-1.5' : 'px-2 py-1.5'} rounded-sm hover:bg-gray-700 transition-colors`}>
                <AppIcon icon={app.icon} />
                {!collapsed && <span className="ml-2 text-sm font-medium group-hover:text-white transition-colors">{app.name}</span>}
              </a>
            </li>
          ))}
        </NavIsland>
        <NavIsland title="Projects & Files" viewAll={true} icon={Folder} collapsed={collapsed}>
          <NavItem icon={Briefcase} collapsed={collapsed}>Workspace</NavItem>
          <NavItem icon={Folder} collapsed={collapsed}>Data Sources</NavItem>
        </NavIsland>
      </nav>
      <div className={`p-3 border-t border-gray-800 ${collapsed ? 'flex justify-center' : ''}`}>
        <NavIsland title="Account" icon={Settings} collapsed={collapsed}>
          <NavItem icon={HelpCircle} collapsed={collapsed}>Help & Support</NavItem>
          <NavItem icon={User} collapsed={collapsed}>Account</NavItem>
        </NavIsland>
      </div>
    </div>
  )
}