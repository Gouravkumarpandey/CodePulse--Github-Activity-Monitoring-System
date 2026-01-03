import {
  Repository,
  UserDashboard,
  TeamMonitoring,
  AdminSettings,
  HeatmapData,
  Contributor,
  Violation,
  Notification,
  CommitActivity,
} from '../types';

export const mockRepositories: Repository[] = [
  {
    id: '1',
    name: 'ai-hackathon-project',
    owner: 'team-innovators',
    isPrivate: false,
    contributorsCount: 4,
    description: 'AI-powered solution for climate change',
  },
  {
    id: '2',
    name: 'blockchain-voting',
    owner: 'decentralized-team',
    isPrivate: true,
    contributorsCount: 3,
    description: 'Secure voting system using blockchain',
  },
  {
    id: '3',
    name: 'health-tracker-app',
    owner: 'wellness-devs',
    isPrivate: false,
    contributorsCount: 5,
    description: 'Comprehensive health monitoring platform',
  },
];

export const mockContributors: Contributor[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    username: 'alexj',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    commits: 45,
    percentage: 35,
  },
  {
    id: '2',
    name: 'Sarah Chen',
    username: 'sarahc',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    commits: 38,
    percentage: 30,
  },
  {
    id: '3',
    name: 'Mike Rodriguez',
    username: 'miker',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    commits: 28,
    percentage: 22,
  },
  {
    id: '4',
    name: 'Emma Wilson',
    username: 'emmaw',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    commits: 17,
    percentage: 13,
  },
];

export const mockViolations: Violation[] = [
  {
    id: '1',
    type: 'soft',
    message: 'Commit gap detected: 2h 15m',
    timestamp: '2026-01-03T14:30:00Z',
    details: 'Your last commit was 2 hours and 15 minutes ago',
  },
  {
    id: '2',
    type: 'observation',
    message: 'Under observation for suspicious activity',
    timestamp: '2026-01-03T10:45:00Z',
    details: 'Large code dump detected in commit abc123',
  },
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    message: 'You committed after a 2h 15m gap',
    timestamp: '2026-01-03T14:30:00Z',
    read: false,
    type: 'warning',
  },
  {
    id: '2',
    message: 'You are under observation',
    timestamp: '2026-01-03T10:45:00Z',
    read: false,
    type: 'error',
  },
  {
    id: '3',
    message: 'Repository successfully linked',
    timestamp: '2026-01-02T09:00:00Z',
    read: true,
    type: 'info',
  },
];

export const mockCommitTimeline: CommitActivity[] = [
  { hour: '00:00', commits: 0 },
  { hour: '01:00', commits: 0 },
  { hour: '02:00', commits: 0 },
  { hour: '03:00', commits: 0 },
  { hour: '04:00', commits: 0 },
  { hour: '05:00', commits: 0 },
  { hour: '06:00', commits: 0 },
  { hour: '07:00', commits: 0 },
  { hour: '08:00', commits: 2 },
  { hour: '09:00', commits: 5 },
  { hour: '10:00', commits: 8 },
  { hour: '11:00', commits: 6 },
  { hour: '12:00', commits: 3, gap: 2.25, isViolation: true },
  { hour: '13:00', commits: 0 },
  { hour: '14:00', commits: 4 },
  { hour: '15:00', commits: 7 },
  { hour: '16:00', commits: 9 },
  { hour: '17:00', commits: 5 },
  { hour: '18:00', commits: 3 },
  { hour: '19:00', commits: 2 },
  { hour: '20:00', commits: 6 },
  { hour: '21:00', commits: 4 },
  { hour: '22:00', commits: 1 },
  { hour: '23:00', commits: 0 },
];

export const mockUserDashboard: UserDashboard = {
  repository: {
    name: 'ai-hackathon-project',
    owner: 'team-innovators',
  },
  status: 'observation',
  stats: {
    totalCommits: 128,
    prsOpened: 15,
    prsMerged: 12,
    activeContributors: 4,
    longestGap: '2h 15m',
  },
  commitTimeline: mockCommitTimeline,
  contributors: mockContributors,
  violations: mockViolations,
  notifications: mockNotifications,
  complianceScore: 78,
};

export const mockTeams: TeamMonitoring[] = [
  {
    id: '1',
    repoName: 'ai-hackathon-project',
    owner: 'team-innovators',
    lastCommit: '15 minutes ago',
    violations: 2,
    status: 'observation',
    complianceScore: 78,
  },
  {
    id: '2',
    repoName: 'blockchain-voting',
    owner: 'decentralized-team',
    lastCommit: '2 hours ago',
    violations: 0,
    status: 'compliant',
    complianceScore: 95,
  },
  {
    id: '3',
    repoName: 'health-tracker-app',
    owner: 'wellness-devs',
    lastCommit: '3 hours ago',
    violations: 5,
    status: 'warning',
    complianceScore: 45,
  },
  {
    id: '4',
    repoName: 'smart-city-dashboard',
    owner: 'urban-tech',
    lastCommit: '6 hours ago',
    violations: 8,
    status: 'disqualified',
    complianceScore: 12,
  },
];

export const mockAdminSettings: AdminSettings = {
  maxIdleTime: 2,
  warningThreshold: 3,
  autoDisqualify: true,
  codeDumpDetection: true,
  shadowMode: false,
  realTimeUpdates: true,
};

export const mockHeatmapData: HeatmapData[] = (() => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const data: HeatmapData[] = [];
  
  days.forEach((day) => {
    for (let hour = 0; hour < 24; hour++) {
      data.push({
        day,
        hour,
        value: Math.floor(Math.random() * 20),
      });
    }
  });
  
  return data;
})();
