import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import UsersTable from '@/components/admin/UsersTable';
import { api } from '@/services/api';
import { User } from '@/types/user';

const AdminUsersPage = () => {
  const { user, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        navigate('/login');
      } else if (user?.role !== 'ADMIN') {
        navigate('/user');
      }
    }
  }, [isAuthenticated, user, loading, navigate]);

  useEffect(() => {
    if (isAuthenticated && user?.role === 'ADMIN') {
      loadUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, isAuthenticated, user]);

  const loadUsers = async () => {
    setLoadingData(true);
    try {
      const response = await api.get(`/admin/users?page=${page}&limit=10`);
      setUsers(response.data.users);
      setTotal(response.data.pagination.total);
    } catch (error) {
      console.error('Failed to load users:', error);
    } finally {
      setLoadingData(false);
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated || user?.role !== 'ADMIN') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-github-bg">
      <Navbar />
      <div className="flex">
        <Sidebar role="admin" />
        <main className="flex-1 p-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-github-text">Users Management</h1>
              <p className="text-gray-600 dark:text-github-text-secondary mt-2">View and manage all registered users</p>
            </div>

            {loadingData ? (
              <div>Loading users...</div>
            ) : (
              <>
                <UsersTable users={users} />
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-600 dark:text-github-text-secondary">
                    Showing {users.length} of {total} users
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setPage(p => Math.max(1, p - 1))}
                      disabled={page === 1}
                      className="px-4 py-2 border rounded disabled:opacity-50"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setPage(p => p + 1)}
                      disabled={page * 10 >= total}
                      className="px-4 py-2 border rounded disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminUsersPage;
