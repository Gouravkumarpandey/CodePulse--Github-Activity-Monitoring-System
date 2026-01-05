import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  role: 'user' | 'admin';
}

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const userLinks = [
    { href: '/user', label: 'Dashboard', icon: '📊' },
    { href: '/user/activity', label: 'Activity', icon: '📈' },
    { href: '/user/warnings', label: 'Warnings', icon: '⚠️' },
    { href: '/user/settings', label: 'Settings', icon: '⚙️' },
  ];

  const adminLinks = [
    { href: '/admin', label: 'Dashboard', icon: '📊' },
    { href: '/admin/users', label: 'Users', icon: '👥' },
    { href: '/admin/settings', label: 'Settings', icon: '⚙️' },
  ];

  const links = role === 'admin' ? adminLinks : userLinks;

  return (
    <aside className="w-64 bg-white dark:bg-github-canvas-subtle shadow-md dark:shadow-none border-r border-gray-200 dark:border-github-border min-h-screen">
      <div className="p-6">
        <nav className="space-y-2">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-indigo-50 dark:bg-github-accent/10 text-indigo-600 dark:text-github-accent font-semibold'
                    : 'text-gray-700 dark:text-github-text hover:bg-gray-50 dark:hover:bg-github-border-muted'
                }`}
              >
                <span className="text-xl">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
