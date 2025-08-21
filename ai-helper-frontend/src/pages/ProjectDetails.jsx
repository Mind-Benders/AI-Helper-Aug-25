import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, CheckCircle, Circle, User, Tag, FileText, Activity } from 'lucide-react';

function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  // Mock data for all projects
  const [projectData] = useState({
    1: {
      id: 1,
      title: "AI Chatbot",
      desc: "Build an AI chatbot with React",
      status: "in-progress",
      progress: 65,
      startDate: "2024-01-15",
      deadline: "2024-03-30",
      category: "Machine Learning",
      priority: "High",
      team: ["John Doe", "Jane Smith", "Alex Johnson"],
      description: "A comprehensive AI chatbot project that involves natural language processing, machine learning integration, and a modern React frontend. The bot will be capable of handling customer inquiries, providing support, and learning from interactions.",
      tasks: [
        { id: 1, title: "Set up project structure", completed: true },
        { id: 2, title: "Design UI components", completed: true },
        { id: 3, title: "Implement chat interface", completed: true },
        { id: 4, title: "Integrate AI API", completed: false },
        { id: 5, title: "Add response handling", completed: false },
        { id: 6, title: "Testing and optimization", completed: false },
      ],
      techStack: ["React", "Node.js", "OpenAI API", "MongoDB", "Socket.io"],
      milestones: [
        { title: "Project Setup", date: "2024-01-20", completed: true },
        { title: "UI Development", date: "2024-02-15", completed: true },
        { title: "AI Integration", date: "2024-03-10", completed: false },
        { title: "Testing Phase", date: "2024-03-25", completed: false },
      ]
    },
    2: {
      id: 2,
      title: "Data Visualizer",
      desc: "Charts and graphs with D3.js",
      status: "completed",
      progress: 100,
      startDate: "2023-11-01",
      deadline: "2024-01-15",
      category: "Data Analytics",
      priority: "Medium",
      team: ["Sarah Connor", "Mike Wilson"],
      description: "A powerful data visualization tool built with D3.js that transforms complex datasets into interactive charts, graphs, and dashboards. Features real-time data updates and customizable visualization options.",
      tasks: [
        { id: 1, title: "Research D3.js capabilities", completed: true },
        { id: 2, title: "Create chart components", completed: true },
        { id: 3, title: "Implement data parsing", completed: true },
        { id: 4, title: "Add interactivity", completed: true },
        { id: 5, title: "Performance optimization", completed: true },
        { id: 6, title: "Deploy to production", completed: true },
      ],
      techStack: ["D3.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
      milestones: [
        { title: "Research & Planning", date: "2023-11-10", completed: true },
        { title: "Core Development", date: "2023-12-15", completed: true },
        { title: "Testing & Refinement", date: "2024-01-05", completed: true },
        { title: "Production Deployment", date: "2024-01-15", completed: true },
      ]
    },
    3: {
      id: 3,
      title: "Portfolio Website",
      desc: "Personal website using React + Tailwind",
      status: "in-progress",
      progress: 30,
      startDate: "2024-02-01",
      deadline: "2024-04-15",
      category: "Web Development",
      priority: "Low",
      team: ["Emma Thompson"],
      description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience. Built with React and styled with Tailwind CSS for a sleek, professional appearance.",
      tasks: [
        { id: 1, title: "Design wireframes", completed: true },
        { id: 2, title: "Set up React project", completed: true },
        { id: 3, title: "Create homepage layout", completed: false },
        { id: 4, title: "Build project showcase", completed: false },
        { id: 5, title: "Add contact form", completed: false },
        { id: 6, title: "Optimize for mobile", completed: false },
      ],
      techStack: ["React", "Tailwind CSS", "Framer Motion", "Netlify", "EmailJS"],
      milestones: [
        { title: "Design Phase", date: "2024-02-10", completed: true },
        { title: "Basic Structure", date: "2024-03-01", completed: false },
        { title: "Content Integration", date: "2024-03-20", completed: false },
        { title: "Launch", date: "2024-04-15", completed: false },
      ]
    }
  });

  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    const project = projectData[projectId];
    setCurrentProject(project);
  }, [projectId, projectData]);

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  if (!currentProject) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-gray-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <button
            onClick={handleBackToDashboard}
            className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'in-progress':
        return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      default:
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'text-red-400 bg-red-400/20';
      case 'Medium':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'Low':
        return 'text-green-400 bg-green-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  const completedTasks = currentProject.tasks.filter(task => task.completed).length;
  const totalTasks = currentProject.tasks.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur">
        <div className="px-6 py-4">
          <button
            onClick={handleBackToDashboard}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            Back to Dashboard
          </button>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{currentProject.title}</h1>
              <p className="text-white/70 text-lg">{currentProject.desc}</p>
            </div>
            
            <div className="flex items-center gap-4">
              <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(currentProject.status)}`}>
                {currentProject.status.replace('-', ' ').toUpperCase()}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm ${getPriorityColor(currentProject.priority)}`}>
                {currentProject.priority} Priority
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Overview */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText size={20} />
                Project Overview
              </h2>
              <p className="text-white/80 leading-relaxed">{currentProject.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Calendar size={16} />
                    Timeline
                  </h3>
                  <p className="text-white/70 text-sm">Started: {new Date(currentProject.startDate).toLocaleDateString()}</p>
                  <p className="text-white/70 text-sm">Deadline: {new Date(currentProject.deadline).toLocaleDateString()}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Tag size={16} />
                    Category
                  </h3>
                  <p className="text-white/70">{currentProject.category}</p>
                </div>
              </div>
            </div>

            {/* Progress Section */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Activity size={20} />
                Progress Tracking
              </h2>
              
              <div className="mb-6">
                <div className="flex justify-between text-sm text-white/60 mb-2">
                  <span>Overall Progress</span>
                  <span>{currentProject.progress}%</span>
                </div>
                <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
                    style={{ width: `${currentProject.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-sm text-white/60 mb-2">
                  <span>Tasks Completed</span>
                  <span>{completedTasks} of {totalTasks}</span>
                </div>
                <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500"
                    style={{ width: `${(completedTasks / totalTasks) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Tasks List */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle size={20} />
                Task List
              </h2>
              
              <div className="space-y-3">
                {currentProject.tasks.map((task) => (
                  <div key={task.id} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    {task.completed ? (
                      <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                    ) : (
                      <Circle size={20} className="text-white/40 flex-shrink-0" />
                    )}
                    <span className={task.completed ? 'text-white/70 line-through' : 'text-white'}>
                      {task.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar Info */}
          <div className="space-y-6">
            {/* Team Members */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <User size={18} />
                Team Members
              </h3>
              <div className="space-y-2">
                {currentProject.team.map((member, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 bg-white/5 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-sm font-semibold">
                      {member.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm">{member}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {currentProject.techStack.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Milestones */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Clock size={18} />
                Milestones
              </h3>
              <div className="space-y-3">
                {currentProject.milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {milestone.completed ? (
                      <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                    ) : (
                      <Circle size={16} className="text-white/40 mt-1 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <p className={milestone.completed ? 'text-white/70 line-through' : 'text-white text-sm'}>
                        {milestone.title}
                      </p>
                      <p className="text-white/50 text-xs">{new Date(milestone.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProjectDetails;
