// API Endpoints
export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
  LOGOUT: '/auth/logout',
  
  // GitHub
  GITHUB_CALLBACK: '/github/callback',
  GITHUB_REPOS: '/github/repositories',
  CONNECT_REPO: '/github/connect-repo',
  
  // User
  USER_PROFILE: '/user/profile',
  USER_REPOS: '/user/repositories',
  USER_ACTIVITY: '/user/activity',
  USER_DASHBOARD: '/user/dashboard',
  
  // Admin
  ADMIN_SETTINGS: '/admin/settings',
  ADMIN_USERS: '/admin/users',
  ADMIN_VIOLATIONS: '/admin/violations',
  
  // Webhooks
  WEBHOOK_PUSH: '/webhook/github/push',
};

// Status Constants
export const STATUS = {
  OK: 'OK',
  WARNING: 'WARNING',
  VIOLATION: 'VIOLATION',
} as const;

// Role Constants
export const ROLES = {
  USER: 'USER',
  ADMIN: 'ADMIN',
} as const;

// Default Time Settings (in hours)
export const DEFAULT_SETTINGS = {
  MAX_INACTIVITY_GAP: 24,
  GRACE_PERIOD: 12,
  WARNING_THRESHOLD: 20,
};

// GitHub OAuth
export const GITHUB_OAUTH = {
  SCOPES: ['repo', 'user'],
  AUTHORIZE_URL: 'https://github.com/login/oauth/authorize',
};
