"use client"

import React, { useState } from "react"
import { LayoutDashboard, Search, Bell, Clock, FolderOpen, HelpCircle, User, Box, PieChart, BarChart, Database, GitBranch, Code, FileCode, Briefcase, Folder, ChevronRight, Menu, Grid, Settings, LucideIcon, ChevronLeft } from "lucide-react"

const AppIcon = ({ icon: Icon }: { icon: LucideIcon }) => (
  <div className="w-8 h-8 rounded flex items-center justify-center bg-gray-700 hover:bg-gray-600 transition-colors">
    <Icon className="w-5 h-5 text-gray-300" />
  </div>
)

const NavItem = ({ icon: Icon, children, collapsed, active = false }: { icon: LucideIcon; children: React.ReactNode; collapsed: boolean; active?: boolean }) => (
  <li>
    <a
      href="#"
      className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
        active ? 'bg-gray-700 text-white' : 'hover:bg-gray-800 text-gray-300 hover:text-white'
      }`}
    >
      <div className={`${collapsed ? 'w-8 h-8' : 'w-5 h-5'} flex items-center justify-center`}>
        <Icon className={`${collapsed ? 'w-5 h-5' : 'w-4 h-4'}`} />
      </div>
      {!collapsed && <span className="text-sm font-medium">{children}</span>}
    </a>
  </li>
)

const NavSection = ({ title, children, viewAll = false, icon: Icon, collapsed }: { title: string; children: React.ReactNode; viewAll?: boolean; icon: LucideIcon; collapsed: boolean }) => (
  <div className="mb-6">
    <div className="px-3 mb-2 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Icon className={`${collapsed ? 'w-5 h-5' : 'w-4 h-4'} text-gray-400`} />
        {!collapsed && <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{title}</h2>}
      </div>
      {viewAll && !collapsed && (
        <button className="text-xs text-gray-400 hover:text-white transition-colors flex items-center">
          View all
          <ChevronRight className="w-3 h-3 ml-1" />
        </button>
      )}
    </div>
    <ul className="space-y-1">{children}</ul>
  </div>
)

export function RefinedNavbar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className={`${collapsed ? 'w-16' : 'w-64'} h-screen bg-gray-900 text-gray-100 flex flex-col transition-all duration-300 ease-in-out`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-lg font-semibold">Dash</span>
          </div>
        )}
        <button 
          className="text-gray-400 hover:text-white transition-colors p-1 rounded-md hover:bg-gray-800"
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <NavSection title="Main Menu" icon={Grid} collapsed={collapsed}>
          <NavItem icon={LayoutDashboard} collapsed={collapsed} active>Dashboard</NavItem>
          <NavItem icon={Search} collapsed={collapsed}>
            {!collapsed && (
              <>
                <span className="text-gray-400">Search...</span>
                <span className="ml-auto text-xs bg-gray-800 px-1.5 py-0.5 rounded text-gray-400">⌘K</span>
              </>
            )}
          </NavItem>
          <NavItem icon={Bell} collapsed={collapsed}>Notifications</NavItem>
          <NavItem icon={Clock} collapsed={collapsed}>Recent</NavItem>
          <NavItem icon={FolderOpen} collapsed={collapsed}>Projects & Files</NavItem>
        </NavSection>
        <NavSection title="Apps" viewAll={true} icon={Box} collapsed={collapsed}>
          {[
            { name: "Object Explorer", icon: Box },
            { name: "Contour", icon: PieChart },
            { name: "Reports", icon: BarChart },
            { name: "Data Connection", icon: Database },
            { name: "Data Lineage", icon: GitBranch },
            { name: "Code Workbook", icon: Code },
            { name: "Code Repositories", icon: FileCode },
          ].map((app, index) => (
            <li key={index}>
              <a href="#" className={`flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors`}>
                <AppIcon icon={app.icon} />
                {!collapsed && <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{app.name}</span>}
              </a>
            </li>
          ))}
        </NavSection>
        <NavSection title="Projects & Files" viewAll={true} icon={Folder} collapsed={collapsed}>
          <NavItem icon={Briefcase} collapsed={collapsed}>Workspace</NavItem>
          <NavItem icon={Folder} collapsed={collapsed}>Data Sources</NavItem>
        </NavSection>
      </nav>
      <div className="p-4 border-t border-gray-800">
        <NavSection title="Account" icon={Settings} collapsed={collapsed}>
          <NavItem icon={HelpCircle} collapsed={collapsed}>Help & Support</NavItem>
          <NavItem icon={User} collapsed={collapsed}>Account</NavItem>
        </NavSection>
      </div>
    </div>
  )
}