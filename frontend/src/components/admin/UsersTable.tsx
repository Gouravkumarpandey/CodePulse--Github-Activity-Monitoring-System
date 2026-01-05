import { User } from '@/types/user';
import Badge from '@/components/common/Badge';
import { Link } from 'react-router-dom';

interface UsersTableProps {
  users: User[];
}

const UsersTable: React.FC<UsersTableProps> = ({ users }) => {
  return (
    <div className="bg-white dark:bg-github-canvas-subtle rounded-lg shadow-md overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-github-border">
        <thead className="bg-gray-50 dark:bg-github-bg">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-github-text-secondary uppercase tracking-wider">
              User
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-github-text-secondary uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-github-text-secondary uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-github-text-secondary uppercase tracking-wider">
              Joined
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-github-text-secondary uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-github-canvas-subtle divide-y divide-gray-200 dark:divide-github-border">
          {users.map((user) => (
            <tr key={user._id} className="hover:bg-gray-50 dark:hover:bg-github-canvas-inset">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.avatar || '/default-avatar.png'}
                    alt={user.username}
                  />
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900 dark:text-github-text">
                      {user.username}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-github-text-secondary">@{user.githubId}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900 dark:text-github-text">{user.email || 'N/A'}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Badge variant={user.role === 'ADMIN' ? 'info' : 'default'}>
                  {user.role}
                </Badge>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-github-text-secondary">
                {new Date(user.createdAt).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <Link
                  href={`/admin/users/${user._id}`}
                  className="text-indigo-600 dark:text-github-accent hover:text-indigo-900 dark:hover:text-github-accent font-medium"
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
