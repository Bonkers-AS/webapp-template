import { NavLink, Outlet } from 'react-router-dom'
import { Sun, Moon, Home, Settings as SettingsIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { clsx } from 'clsx'

export default function Layout() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className="h-full flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <header className="border-b border-gray-200 dark:border-gray-700 p-4 flex justify-end">
        <button onClick={() => setDark(!dark)} className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>
      <div className="flex flex-1">
        <aside className="w-48 border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col bg-gray-100 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
          <nav className="space-y-2 flex-1">
            <NavLink to="/dashboard" className={({ isActive }) => clsx('flex items-center gap-2', isActive && 'font-bold') }>
              <Home size={20} /> Dashboard
            </NavLink>
            <NavLink to="/settings" className={({ isActive }) => clsx('flex items-center gap-2', isActive && 'font-bold') }>
              <SettingsIcon size={20} /> Settings
            </NavLink>
          </nav>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Bonkers v{import.meta.env.VITE_APP_VERSION}
          </div>
        </aside>
        <main className="flex-1 overflow-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
