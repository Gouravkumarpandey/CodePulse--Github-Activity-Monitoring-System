import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { handleGithubCallback } from '../utils/github-auth';

export default function GitHubCallbackPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Authenticating with GitHub...');

  useEffect(() => {
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    if (error) {
      setStatus('error');
      setMessage('GitHub authentication was cancelled or failed');
      setTimeout(() => navigate('/login'), 3000);
      return;
    }

    if (!code) {
      setStatus('error');
      setMessage('No authorization code received');
      setTimeout(() => navigate('/login'), 3000);
      return;
    }

    const authenticate = async () => {
      const result = await handleGithubCallback(code);
      
      if (result.success) {
        setStatus('success');
        setMessage('Successfully authenticated! Redirecting...');
        setTimeout(() => navigate('/repo-selection'), 1500);
      } else {
        setStatus('error');
        setMessage(result.error || 'Authentication failed');
        setTimeout(() => navigate('/login'), 3000);
      }
    };

    authenticate();
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen bg-github-bg flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-github-canvas-subtle border border-github-border rounded-lg p-12 max-w-md w-full text-center"
      >
        <div className="mb-6">
          {status === 'loading' && (
            <div className="w-16 h-16 bg-github-accent/10 rounded-full flex items-center justify-center mx-auto">
              <Loader2 className="w-8 h-8 text-github-accent animate-spin" />
            </div>
          )}
          {status === 'success' && (
            <div className="w-16 h-16 bg-github-success/10 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-github-success" />
            </div>
          )}
          {status === 'error' && (
            <div className="w-16 h-16 bg-github-danger/10 rounded-full flex items-center justify-center mx-auto">
              <XCircle className="w-8 h-8 text-github-danger" />
            </div>
          )}
        </div>

        <h2 className="text-2xl font-bold text-github-text mb-3">
          {status === 'loading' && 'Authenticating...'}
          {status === 'success' && 'Success!'}
          {status === 'error' && 'Authentication Failed'}
        </h2>

        <p className="text-github-text-secondary mb-6">{message}</p>

        <div className="flex items-center justify-center gap-2 text-sm text-github-text-secondary">
          <Github className="w-4 h-4" />
          <span>GitHub OAuth</span>
        </div>
      </motion.div>
    </div>
  );
}
