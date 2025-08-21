import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your page components
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ChatInterface from './pages/ChatInterface';
import Roadmap from './pages/Roadmap';
import Flowchart from './pages/Flowchart';
import ProfilePage from './pages/ProfilePage';
import Dashboard from './pages/Dashboard';
import ProjectDetails from './pages/ProjectDetails'; 

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-gray-950">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/chat" element={<ChatInterface />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/roadmap/:projectId" element={<Roadmap />} />
        <Route path="/flowchart" element={<Flowchart />} />
        <Route path="/flowchart/:projectId" element={<Flowchart />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />

        {/* Fallback route - redirect to home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;