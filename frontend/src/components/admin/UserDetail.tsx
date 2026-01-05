import { User } from '@/types/user';
import Card from '@/components/common/Card';
import Badge from '@/components/common/Badge';

interface UserDetailProps {
  user: User;
}

const UserDetail: React.FC<UserDetailProps> = ({ user }) => {
  return (
    <div className="space-y-6">
      <Card>
        <div className="p-6">
          <div className="flex items-center gap-6 mb-6">
            <img
              src={user.avatar || '/default-avatar.png'}
              alt={user.username}
              className="w-24 h-24 rounded-full"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-github-text">{user.username}</h2>
              <p className="text-gray-600 dark:text-github-text-secondary">@{user.githubId}</p>
              <div className="mt-2">
                <Badge variant={user.role === 'ADMIN' ? 'info' : 'default'}>
                  {user.role}
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-github-text-secondary mb-1">Email</h3>
              <p className="text-gray-900 dark:text-github-text">{user.email || 'Not provided'}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-github-text-secondary mb-1">Joined</h3>
              <p className="text-gray-900 dark:text-github-text">
                {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-github-text-secondary mb-1">Last Updated</h3>
              <p className="text-gray-900 dark:text-github-text">
                {new Date(user.updatedAt).toLocaleDateString()}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-github-text-secondary mb-1">GitHub ID</h3>
              <p className="text-gray-900 dark:text-github-text">{user.githubId}</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Additional sections can be added here for user activity, stats, etc. */}
    </div>
  );
};

export default UserDetail;
