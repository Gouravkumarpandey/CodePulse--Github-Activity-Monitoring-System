import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import WarningList from '@/components/user/WarningList';
import { api } from '@/services/api';
import { Commit } from '@/types/commit';

const UserWarningsPage = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const [warnings, setWarnings] = useState<Commit[]>([]);
  const [violations, setViolations] = useState<Commit[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, loading, navigate]);

  useEffect(() => {
    if (isAuthenticated) {
      loadWarnings();
    }
  }, [isAuthenticated]);

  const loadWarnings = async () => {
    try {
      const repos = await api.get('/user/repositories');
      
      const allCommits: Commit[] = [];
      for (const repo of repos.data.repositories) {
        const response = await api.get(`/user/activity/${repo._id}`);
        allCommits.push(...response.data.commits);
      }

      const warns = allCommits.filter(c => c.status === 'WARNING');
      const viols = allCommits.filter(c => c.status === 'VIOLATION');

      setWarnings(warns);
      setViolations(viols);
    } catch (error) {
      console.error('Failed to load warnings:', error);
    } finally {
      setLoadingData(false);
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-github-bg">
      <Navbar />
      <div className="flex">
        <Sidebar role="user" />
        <main className="flex-1 p-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-github-text">Warnings & Violations</h1>
              <p className="text-gray-600 dark:text-github-text-secondary mt-2">Monitor your activity status</p>
            </div>

            {loadingData ? (
              <div>Loading...</div>
            ) : (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-red-600 mb-4">
                    Violations ({violations.length})
                  </h2>
                  {violations.length > 0 ? (
                    <WarningList items={violations} type="violation" />
                  ) : (
                    <p className="text-gray-500">No violations found</p>
                  )}
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-yellow-600 mb-4">
                    Warnings ({warnings.length})
                  </h2>
                  {warnings.length > 0 ? (
                    <WarningList items={warnings} type="warning" />
                  ) : (
                    <p className="text-gray-500">No warnings found</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserWarningsPage;
