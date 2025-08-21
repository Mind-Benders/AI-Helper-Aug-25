import React from "react";
import { Link } from "react-router-dom";
import { User, Settings, Shield, LogOut, BarChart3 } from "lucide-react";

export default function Profile() {
  const user = {
    fullName: "Account Holder",
    email: "User@example.com",
    username: "User_name",
    joinDate: "January 2024",
    projectsCount: 3,
    completedProjects: 1,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-gray-950 text-white">
      {/* Header */}
      <header className="max-w-5xl mx-auto px-4 py-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
            <User size={20} />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">Profile</h1>
        </div>

        <div className="flex items-center gap-4">
          {/* Button for Home Page */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold
                       bg-gradient-to-r from-green-500 via-teal-500 to-blue-500
                       shadow-lg shadow-teal-900/40 hover:scale-[1.02] active:scale-95 transition"
          >
            🏠 Go to Home
          </Link>

          {/* Button for Dashboard */}
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold
                       bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500
                       shadow-lg shadow-indigo-900/40 hover:scale-[1.02] active:scale-95 transition"
          >
            🚀 Go to Dashboard
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Basic Info Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <User size={18} className="text-indigo-400" />
              Basic Information
            </h2>
            <div className="space-y-3 text-white/90">
              <p>
                <span className="text-white/60">Full Name:</span> {user.fullName}
              </p>
              <p>
                <span className="text-white/60">Email:</span> {user.email}
              </p>
              <p>
                <span className="text-white/60">Username:</span> {user.username}
              </p>
              <p>
                <span className="text-white/60">Member since:</span>{" "}
                {user.joinDate}
              </p>
            </div>
          </div>

          {/* Account Settings */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Settings size={18} className="text-indigo-400" />
              Account
            </h2>
            <div className="flex flex-col gap-3">
              <button className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-left flex items-center gap-2 transition-colors">
                <Settings size={16} />
                Account Settings
              </button>
              <button className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-left flex items-center gap-2 transition-colors">
                <Shield size={16} />
                Password & Security
              </button>
              <button className="px-4 py-2 rounded-xl bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-left flex items-center gap-2 transition-colors text-red-300">
                <LogOut size={16} />
                Log out
              </button>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <BarChart3 size={18} className="text-indigo-400" />
              Statistics
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-white/60">Total Projects:</span>
                <span className="font-semibold">{user.projectsCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Completed:</span>
                <span className="font-semibold text-green-400">
                  {user.completedProjects}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">In Progress:</span>
                <span className="font-semibold text-orange-400">
                  {user.projectsCount - user.completedProjects}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
