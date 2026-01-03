import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  GitCommit,
  GitPullRequest,
  Users,
  Clock,
  Bell,
  Settings,
  LogOut,
  AlertTriangle,
  TrendingUp,
  Calendar,
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import Card from '../components/ui/Card';
import StatusBadge from '../components/ui/StatusBadge';
import Button from '../components/ui/Button';
import { mockUserDashboard } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

export default function UserDashboardPage() {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const dashboard = mockUserDashboard;

  const unreadNotifications = dashboard.notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-github-bg">
      {/* Header */}
      <header className="border-b border-github-border bg-github-canvas-subtle sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-github-success to-github-accent-emphasis rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-github-text">
                  {dashboard.repository.owner}/{dashboard.repository.name}
                </h1>
                <p className="text-sm text-github-text-secondary">Participant Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <StatusBadge status={dashboard.status} />
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 hover:bg-github-canvas-inset rounded-lg transition-colors relative"
                >
                  <Bell className="w-5 h-5 text-github-text-secondary" />
                  {unreadNotifications > 0 && (
                    <span className="absolute top-1 right-1 w-2 h-2 bg-github-danger rounded-full"></span>
                  )}
                </button>
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-github-canvas-subtle border border-github-border rounded-lg shadow-xl max-h-96 overflow-y-auto">
                    <div className="p-4 border-b border-github-border">
                      <h3 className="font-semibold text-github-text">Notifications</h3>
                    </div>
                    {dashboard.notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 border-b border-github-border hover:bg-github-canvas-inset transition-colors ${
                          !notification.read ? 'bg-github-accent/5' : ''
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-2 h-2 rounded-full mt-2 ${
                              notification.type === 'error'
                                ? 'bg-github-danger'
                                : notification.type === 'warning'
                                ? 'bg-github-warning'
                                : 'bg-github-success'
                            }`}
                          />
                          <div className="flex-1">
                            <p className="text-sm text-github-text">{notification.message}</p>
                            <p className="text-xs text-github-text-secondary mt-1">
                              {new Date(notification.timestamp).toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button className="p-2 hover:bg-github-canvas-inset rounded-lg transition-colors">
                <Settings className="w-5 h-5 text-github-text-secondary" />
              </button>
              <button
                onClick={() => navigate('/')}
                className="p-2 hover:bg-github-canvas-inset rounded-lg transition-colors"
              >
                <LogOut className="w-5 h-5 text-github-text-secondary" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Activity Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="h-full">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-github-text-secondary mb-1">Total Commits</p>
                  <p className="text-3xl font-bold text-github-text">{dashboard.stats.totalCommits}</p>
                </div>
                <div className="w-12 h-12 bg-github-accent/10 rounded-lg flex items-center justify-center">
                  <GitCommit className="w-6 h-6 text-github-accent" />
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <Card className="h-full">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-github-text-secondary mb-1">PRs Opened</p>
                  <p className="text-3xl font-bold text-github-text">{dashboard.stats.prsOpened}</p>
                </div>
                <div className="w-12 h-12 bg-github-success/10 rounded-lg flex items-center justify-center">
                  <GitPullRequest className="w-6 h-6 text-github-success" />
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className="h-full">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-github-text-secondary mb-1">PRs Merged</p>
                  <p className="text-3xl font-bold text-github-text">{dashboard.stats.prsMerged}</p>
                </div>
                <div className="w-12 h-12 bg-github-success/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-github-success" />
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
            <Card className="h-full">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-github-text-secondary mb-1">Contributors</p>
                  <p className="text-3xl font-bold text-github-text">{dashboard.stats.activeContributors}</p>
                </div>
                <div className="w-12 h-12 bg-github-warning/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-github-warning" />
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Card className="h-full">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-github-text-secondary mb-1">Longest Gap</p>
                  <p className="text-3xl font-bold text-github-danger">{dashboard.stats.longestGap}</p>
                </div>
                <div className="w-12 h-12 bg-github-danger/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-github-danger" />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Commit Timeline Graph */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
              <Card title="Commit Timeline" subtitle="Hour-wise commit activity">
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={dashboard.commitTimeline}>
                    <defs>
                      <linearGradient id="commitGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2ea043" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#2ea043" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
                    <XAxis dataKey="hour" stroke="#7d8590" style={{ fontSize: '12px' }} />
                    <YAxis stroke="#7d8590" style={{ fontSize: '12px' }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#161b22',
                        border: '1px solid #30363d',
                        borderRadius: '6px',
                        color: '#e6edf3',
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="commits"
                      stroke="#2ea043"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#commitGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="mt-4 flex items-center gap-2 text-sm text-github-text-secondary">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-github-danger rounded-full"></div>
                    <span>Gap violations marked</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Contributors Panel */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Card title="Contributors" subtitle="Team contribution breakdown">
                <div className="space-y-4">
                  {dashboard.contributors.map((contributor) => (
                    <div key={contributor.id} className="flex items-center gap-4">
                      <img
                        src={contributor.avatar}
                        alt={contributor.name}
                        className="w-10 h-10 rounded-full border-2 border-github-border"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div>
                            <p className="text-sm font-medium text-github-text">{contributor.name}</p>
                            <p className="text-xs text-github-text-secondary">@{contributor.username}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold text-github-text">{contributor.commits}</p>
                            <p className="text-xs text-github-text-secondary">commits</p>
                          </div>
                        </div>
                        <div className="w-full bg-github-canvas-inset rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              contributor.percentage > 40 ? 'bg-github-danger' : 'bg-github-success'
                            }`}
                            style={{ width: `${contributor.percentage}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-github-text-secondary mt-1">{contributor.percentage}% of total</p>
                        {contributor.percentage > 40 && (
                          <p className="text-xs text-github-danger mt-1 flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3" />
                            Contributor domination detected
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          <div className="space-y-8">
            {/* Compliance Score */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
              <Card title="Compliance Score">
                <div className="text-center py-6">
                  <div className="relative inline-flex items-center justify-center">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="#21262d"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke={dashboard.complianceScore >= 70 ? '#2ea043' : dashboard.complianceScore >= 50 ? '#d29922' : '#da3633'}
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${(dashboard.complianceScore / 100) * 352} 352`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute">
                      <p className="text-4xl font-bold text-github-text">{dashboard.complianceScore}</p>
                      <p className="text-sm text-github-text-secondary">/ 100</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-github-text-secondary">Overall compliance rating</p>
                </div>
              </Card>
            </motion.div>

            {/* Rule Engine */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <Card title="Hackathon Rules">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-github-text-secondary">Max Idle Time</span>
                    <span className="text-sm font-medium text-github-text">2 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-github-text-secondary">Warning Limit</span>
                    <span className="text-sm font-medium text-github-text">3 violations</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-github-text-secondary">Auto-Disqualify</span>
                    <span className="text-sm font-medium text-github-success">Enabled</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-github-text-secondary">Code Dump Detection</span>
                    <span className="text-sm font-medium text-github-success">Active</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Violations Panel */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
              <Card title="Violations & Warnings">
                <div className="space-y-3">
                  {dashboard.violations.map((violation) => (
                    <div
                      key={violation.id}
                      className={`p-3 rounded-lg border ${
                        violation.type === 'disqualified'
                          ? 'bg-github-danger/10 border-github-danger/30'
                          : violation.type === 'final'
                          ? 'bg-orange-500/10 border-orange-500/30'
                          : violation.type === 'observation'
                          ? 'bg-github-warning/10 border-github-warning/30'
                          : 'bg-github-text-secondary/10 border-github-text-secondary/30'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <AlertTriangle
                          className={`w-4 h-4 mt-0.5 ${
                            violation.type === 'disqualified'
                              ? 'text-github-danger'
                              : violation.type === 'final'
                              ? 'text-orange-500'
                              : violation.type === 'observation'
                              ? 'text-github-warning'
                              : 'text-github-text-secondary'
                          }`}
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-github-text">{violation.message}</p>
                          {violation.details && (
                            <p className="text-xs text-github-text-secondary mt-1">{violation.details}</p>
                          )}
                          <p className="text-xs text-github-text-secondary mt-1">
                            {new Date(violation.timestamp).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
