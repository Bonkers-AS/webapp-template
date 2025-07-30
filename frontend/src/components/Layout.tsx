import { NavLink, Outlet } from 'react-router-dom'
import { Sun, Moon, Home, Settings as SettingsIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { clsx } from 'clsx'

export default function Layout() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className="flex h-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <aside className="w-48 border-r border-gray-200 dark:border-gray-700 p-4 space-y-2">
        <NavLink to="/dashboard" className={({ isActive }) => clsx('flex items-center gap-2', isActive && 'font-bold') }>
          <Home size={20} /> Dashboard
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => clsx('flex items-center gap-2', isActive && 'font-bold') }>
          <SettingsIcon size={20} /> Settings
        </NavLink>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="border-b border-gray-200 dark:border-gray-700 p-4 flex justify-end">
          <button onClick={() => setDark(!dark)} className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </header>
        <main className="flex-1 overflow-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
