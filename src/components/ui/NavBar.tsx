import { NavLink } from 'react-router-dom'

const ITEMS = [
  { to: '/', label: 'Home', icon: '🏠' },
  { to: '/week', label: 'This week', icon: '📅' },
  { to: '/structures', label: 'Structures', icon: '🧩' },
  { to: '/review', label: 'Review', icon: '🔁' },
  { to: '/driving', label: 'Driving', icon: '🚗' },
  { to: '/settings', label: 'Settings', icon: '⚙️' },
] as const

export function NavBar() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-surface"
      style={{ paddingBottom: 'var(--safe-bottom)' }}
    >
      {ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
          className={({ isActive }) =>
            `flex min-w-0 flex-1 flex-col items-center gap-0.5 py-2 text-[11px] leading-tight ${
              isActive ? 'font-semibold text-flag-blue' : 'text-ink-muted'
            }`
          }
        >
          <span className="text-xl" aria-hidden="true">
            {item.icon}
          </span>
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}
