import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Lock, Activity } from 'lucide-react';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { initiateGithubOAuth, isAuthenticated } from '../utils/github-auth';

export default function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Check if already authenticated
  if (isAuthenticated()) {
    navigate('/repo-selection');
  }

  const handleGithubSignup = () => {
    initiateGithubOAuth();
  };

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // After email signup, redirect to GitHub authorization
    navigate('/repo-selection');
  };

  return (
    <div className="min-h-screen bg-github-bg flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-github-success to-github-accent-emphasis rounded-lg flex items-center justify-center mx-auto mb-4">
            <Activity className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-github-text mb-2">Join CodePulse</h1>
          <p className="text-github-text-secondary">Create your account to get started</p>
        </div>

        <div className="bg-github-canvas-subtle border border-github-border rounded-lg p-8">
          {/* GitHub OAuth Button */}
          <Button
            variant="primary"
            size="lg"
            className="w-full mb-6"
            onClick={handleGithubSignup}
          >
            <Github className="w-5 h-5" />
            Sign up with GitHub
          </Button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-github-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-github-canvas-subtle text-github-text-secondary">Or continue with</span>
            </div>
          </div>

          {/* Email Signup Form */}
          <form onSubmit={handleEmailSignup} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-github-text mb-2">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-github-text-secondary" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-github-canvas-inset border border-github-border rounded-md text-github-text placeholder-github-text-secondary focus:outline-none focus:ring-2 focus:ring-github-accent focus:border-transparent"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-github-text mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-github-text-secondary" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-github-canvas-inset border border-github-border rounded-md text-github-text placeholder-github-text-secondary focus:outline-none focus:ring-2 focus:ring-github-accent focus:border-transparent"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-github-text mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-github-text-secondary" />
                <input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-github-canvas-inset border border-github-border rounded-md text-github-text placeholder-github-text-secondary focus:outline-none focus:ring-2 focus:ring-github-accent focus:border-transparent"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="bg-github-warning/10 border border-github-warning/30 rounded-md p-3">
              <p className="text-xs text-github-warning">
                <strong>Note:</strong> GitHub authorization is mandatory after signup to access repositories.
              </p>
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full">
              Create Account
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-github-text-secondary">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-github-text-link hover:underline"
            >
              Sign in
            </button>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-github-text-secondary">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>
      </motion.div>
    </div>
  );
}
