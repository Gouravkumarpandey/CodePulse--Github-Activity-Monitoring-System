import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import BitbucketHomePage from './pages/homepage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import RepositorySelectionPage from './pages/RepositorySelectionPage';
import UserDashboardPage from './pages/UserDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import GitHubCallbackPage from './pages/GitHubCallbackPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BitbucketHomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/auth/callback" element={<GitHubCallbackPage />} />
        <Route path="/repo-selection" element={<RepositorySelectionPage />} />
        <Route path="/dashboard" element={<UserDashboardPage />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
