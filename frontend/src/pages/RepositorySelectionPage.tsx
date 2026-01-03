import { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Lock, Users, AlertTriangle, GitBranch } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';
import { mockRepositories } from '../data/mockData';
import { Repository } from '../types';
import { useNavigate } from 'react-router-dom';

export default function RepositorySelectionPage() {
  const navigate = useNavigate();
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleRepoSelect = (repo: Repository) => {
    setSelectedRepo(repo);
    setShowConfirmModal(true);
  };

  const handleConfirm = () => {
    setShowConfirmModal(false);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-github-bg">
      {/* Header */}
      <header className="border-b border-github-border bg-github-canvas-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-github-success to-github-accent-emphasis rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-github-text">CodePulse</span>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-github-text mb-4">Select Your Repository</h1>
          <p className="text-github-text-secondary max-w-2xl mx-auto">
            Choose the repository you'll be working on during the hackathon. This selection is permanent and cannot be changed.
          </p>
        </motion.div>

        {/* Warning Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-github-warning/10 border border-github-warning/30 rounded-lg p-4 mb-8 flex items-start gap-3"
        >
          <AlertTriangle className="w-5 h-5 text-github-warning flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-github-warning mb-1">Important Notice</h3>
            <p className="text-sm text-github-text-secondary">
              Once you select a repository, it will be locked for the duration of the hackathon. 
              Make sure you choose the correct repository before confirming.
            </p>
          </div>
        </motion.div>

        {/* Repository List */}
        <div className="space-y-4">
          {mockRepositories.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="cursor-pointer" onClick={() => handleRepoSelect(repo)}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-github-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GitBranch className="w-6 h-6 text-github-accent" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-github-text">
                          {repo.owner}/{repo.name}
                        </h3>
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            repo.isPrivate
                              ? 'bg-github-danger/10 text-github-danger border border-github-danger/30'
                              : 'bg-github-success/10 text-github-success border border-github-success/30'
                          }`}
                        >
                          {repo.isPrivate ? (
                            <span className="flex items-center gap-1">
                              <Lock className="w-3 h-3" /> Private
                            </span>
                          ) : (
                            'Public'
                          )}
                        </span>
                      </div>
                      {repo.description && (
                        <p className="text-sm text-github-text-secondary mb-3">{repo.description}</p>
                      )}
                      <div className="flex items-center gap-4 text-sm text-github-text-secondary">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{repo.contributorsCount} contributors</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Select
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Repositories Message */}
        {mockRepositories.length === 0 && (
          <Card className="text-center py-12">
            <GitBranch className="w-16 h-16 text-github-text-secondary mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-semibold text-github-text mb-2">No Repositories Found</h3>
            <p className="text-github-text-secondary mb-6">
              We couldn't find any repositories in your GitHub account.
            </p>
            <Button variant="primary">Refresh Repositories</Button>
          </Card>
        )}
      </div>

      {/* Confirmation Modal */}
      <Modal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        title="Confirm Repository Selection"
        footer={
          <>
            <Button variant="ghost" onClick={() => setShowConfirmModal(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleConfirm}>
              Confirm & Lock Repository
            </Button>
          </>
        }
      >
        <div className="space-y-4">
          <div className="bg-github-danger/10 border border-github-danger/30 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-github-danger flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-github-danger mb-2">Warning: This action is irreversible</h4>
                <p className="text-sm text-github-text-secondary">
                  Once you confirm, the selected repository will be locked for the entire hackathon duration.
                  You will not be able to change or select a different repository.
                </p>
              </div>
            </div>
          </div>

          {selectedRepo && (
            <div className="bg-github-canvas-subtle border border-github-border rounded-lg p-4">
              <h4 className="font-semibold text-github-text mb-2">Selected Repository</h4>
              <p className="text-github-text-secondary">
                {selectedRepo.owner}/{selectedRepo.name}
              </p>
              {selectedRepo.description && (
                <p className="text-sm text-github-text-secondary mt-2">{selectedRepo.description}</p>
              )}
            </div>
          )}

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="understand"
              className="mt-1 w-4 h-4 rounded border-github-border bg-github-canvas-inset text-github-accent focus:ring-github-accent"
            />
            <label htmlFor="understand" className="text-sm text-github-text-secondary">
              I understand that this selection is permanent and cannot be changed during the hackathon
            </label>
          </div>
        </div>
      </Modal>
    </div>
  );
}
