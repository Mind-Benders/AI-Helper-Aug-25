import React, { useState, useEffect } from 'react';
import { Home, Map, User, ArrowLeft, Loader2, AlertTriangle } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const Roadmap = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();

  // State for the project's roadmap data, loading status, and errors
  const [roadmapData, setRoadmapData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- MOCK DATA (Remove this when you connect your backend) ---
  // This is a sample of what your API might return for a specific project.
  const mockProjectData = {
    '1': {
      name: 'Phoenix Initiative',
      description: 'Rebuilding the core infrastructure for scalability and performance.',
      milestones: [
        { id: 1, title: 'Q1: Discovery & Planning', status: 'Completed', details: 'Initial research, team assembly, and technical specification document.' },
        { id: 2, title: 'Q2: Backend Refactor', status: 'In Progress', details: 'Migrating from legacy services to a microservices architecture.' },
        { id: 3, title: 'Q3: Frontend Overhaul', status: 'Upcoming', details: 'Implementing a new design system with React and TypeScript.' },
        { id: 4, title: 'Q4: Launch & Post-Launch Support', status: 'Upcoming', details: 'Deployment, monitoring, and initial user feedback implementation.' },
      ],
    },
    // Add more mock projects if needed, e.g., '2': { ... }
  };
  // --- END MOCK DATA ---

  // This effect fetches the data for the specific project ID from the URL.
  useEffect(() => {
    // If there is no projectId, set an error because this page requires one.
    if (!projectId) {
      setError('No project ID found in the URL.');
      setLoading(false);
      return;
    }

    const fetchRoadmapData = async () => {
      setLoading(true);
      setError(null);
      try {
        // *BACKEND INTEGRATION POINT*
        // Replace this mock logic with your actual API call.
        // Example: const response = await fetch(`/api/projects/${projectId}/roadmap`);
        // if (!response.ok) throw new Error('Failed to fetch project data.');
        // const data = await response.json();
        
        // Simulating network delay
        await new Promise(resolve => setTimeout(resolve, 500)); 
        const data = mockProjectData[projectId];
        
        if (!data) {
          throw new Error(`Project with ID #${projectId} not found.`);
        }
        setRoadmapData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoadmapData();
  }, [projectId]); // Re-run the effect if the projectId changes

  // Helper to get styles for different statuses
  const getStatusStyles = (status) => {
    switch (status) {
      case 'Completed':
        return 'text-green-400 bg-green-900/50 border-green-500/30';
      case 'In Progress':
        return 'text-orange-400 bg-orange-900/50 border-orange-500/30';
      case 'Upcoming':
      default:
        return 'text-sky-400 bg-sky-900/50 border-sky-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-gray-950 text-gray-200 font-sans p-4">
      {/* Navigation Header */}
      <div className="flex items-center justify-between p-4 bg-gray-900/80 backdrop-blur-sm border border-gray-800/60 rounded-2xl shadow-2xl mb-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/home')} // A general back button
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300"
            title="Home"
          >
            <Home size={20} />
          </button>
          <div className="flex items-center space-x-2">
            <Map size={24} className="text-orange-400" />
            <h1 className="text-xl font-bold text-white">
              {/* The title now shows the fetched project name or a default */}
              {roadmapData ? roadmapData.name : 'Project Roadmap'}
            </h1>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate('/chat')} className="py-2 px-4 rounded-xl text-gray-500 hover:bg-gray-800/50 hover:text-white transition-all duration-300">
            Chat
          </button>
          <button onClick={() => navigate('/flowchart')} className="py-2 px-4 rounded-xl text-gray-500 hover:bg-gray-800/50 hover:text-white transition-all duration-300">
            Flowchart
          </button>
        </div>
        <button
          onClick={() => navigate('/profile')}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          title="Profile"
        >
          <User size={20} />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-8">
        {loading && (
          <div className="flex flex-col items-center justify-center h-64 text-gray-400">
            <Loader2 className="animate-spin h-12 w-12 mb-4" />
            <p className="text-lg">Loading Project Roadmap...</p>
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center h-64 text-red-400 bg-red-900/20 rounded-xl">
            <AlertTriangle className="h-12 w-12 mb-4" />
            <p className="text-lg font-semibold">An Error Occurred</p>
            <p>{error}</p>
          </div>
        )}

        {/* This section will only render if loading is false, there's no error, and data is successfully fetched */}
        {roadmapData && (
          <div>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-2">{roadmapData.name}</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">{roadmapData.description}</p>
            </div>
            
            {/* Timeline / Milestones View */}
            <div className="relative border-l-2 border-gray-700/50 ml-6 pl-10 space-y-12">
              {roadmapData.milestones.map((milestone) => (
                <div key={milestone.id} className="relative">
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[49px] top-1 w-6 h-6 rounded-full flex items-center justify-center ${getStatusStyles(milestone.status)}`}>
                    <div className="w-3 h-3 bg-current rounded-full"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                  <span className={`inline-block mt-2 mb-3 text-xs font-medium px-3 py-1 rounded-full ${getStatusStyles(milestone.status)}`}>
                    {milestone.status}
                  </span>
                  <p className="text-gray-400">{milestone.details}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Roadmap;