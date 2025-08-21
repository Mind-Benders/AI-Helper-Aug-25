import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Home, Plus, ArrowRight } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();

  const [projects] = useState([
    { id: 1, title: "AI Chatbot", desc: "Build an AI chatbot with React", status: "in-progress", progress: 65 },
    { id: 2, title: "Data Visualizer", desc: "Charts and graphs with D3.js", status: "completed", progress: 100 },
    { id: 3, title: "Portfolio Website", desc: "Personal website using React + Tailwind", status: "in-progress", progress: 30 },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-400 bg-green-400/20';
      case 'in-progress':
        return 'text-orange-400 bg-orange-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-gray-950 text-white flex">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col gap-3 border-r border-white/10 p-4 bg-black/20 backdrop-blur">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-sm">
            AI
          </div>
          AI Helper
        </h2>
        <button
          onClick={() => navigate('/dashboard')}
          className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2 bg-white/10 text-left"
        >
          <Home size={16} />
          Dashboard
        </button>
        <button
          onClick={() => navigate('/profile')}
          className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2 text-left"
        >
          <User size={16} />
          Profile
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Topbar */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/20 backdrop-blur">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </header>

        {/* Projects Section */}
        <main className="p-6">
          {/* New Project Button moved here */}
          <div className="flex justify-end mb-6">
            <button
              onClick={() => navigate('/chat')}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold
                         bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500
                         shadow-lg shadow-indigo-900/40 hover:scale-[1.02] active:scale-95 transition"
            >
              <Plus size={18} />
              New Project
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => navigate(`/project/${project.id}`)}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition cursor-pointer backdrop-blur-sm"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded ${getStatusColor(project.status)}`}>
                    {project.status.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
                <p className="text-white/70 mb-4">{project.desc}</p>
                
                {/* Progress bar */}
                <div className="mb-3">
                  <div className="flex justify-between text-sm text-white/60 mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60">Click to open</span>
                  <ArrowRight size={16} className="text-white/40" />
                </div>
              </div>
            ))}

          </div>
        </main>
      </div>
    </div>
  );
}
