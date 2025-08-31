import React, { useState, useEffect } from 'react';
import { Home, GitBranch, User, ArrowLeft, Loader2, AlertTriangle, ChevronDown } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const Flowchart = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();

  // State for the project's flowchart data, loading status, and errors
  const [flowchartData, setFlowchartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- MOCK DATA (Replace with your backend API call) ---
  // A sample structure for flowchart data.
  const mockFlowchartData = {
    '1': {
      name: 'User Authentication Flow',
      description: 'Defines the process for user login, registration, and password recovery.',
      nodes: [
        { id: 'start', type: 'start', title: 'Start' },
        { id: 'login_page', type: 'process', title: 'User visits Login Page' },
        { id: 'has_account', type: 'decision', title: 'Has an account?', yes: 'enter_creds', no: 'register_flow' },
        { id: 'enter_creds', type: 'process', title: 'Enters Credentials' },
        { id: 'validate_creds', type: 'process', title: 'Validate Credentials' },
        { id: 'is_valid', type: 'decision', title: 'Credentials Valid?', yes: 'dashboard', no: 'show_error' },
        { id: 'show_error', type: 'process', title: 'Show Error Message', next: 'login_page' },
        { id: 'dashboard', type: 'end', title: 'Access Dashboard' },
        { id: 'register_flow', type: 'process', title: 'Redirect to Registration', next: 'end_register' },
        { id: 'end_register', type: 'end', title: 'End (Registration Path)' },
      ],
      // Defines the order/path for a simple linear flow visualization
      path: ['start', 'login_page', 'has_account', ['enter_creds', 'validate_creds', 'is_valid', ['dashboard'], ['show_error']], ['register_flow', 'end_register']]
    },
  };
  // --- END MOCK DATA ---

  // Effect to fetch flowchart data based on projectId
  useEffect(() => {
    if (!projectId) {
      setError('No project ID was provided in the URL.');
      setLoading(false);
      return;
    }

    const fetchFlowchartData = async () => {
      setLoading(true);
      setError(null);
      try {
        // *BACKEND INTEGRATION POINT*
        // Replace this mock logic with your actual API call.
        // e.g., const response = await fetch(`/api/projects/${projectId}/flowchart`);
        // const data = await response.json();
        
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
        const data = mockFlowchartData[projectId];

        if (!data) {
          throw new Error(`A flowchart for Project ID #${projectId} could not be found.`);
        }
        setFlowchartData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFlowchartData();
  }, [projectId]);

  // Helper function to get styling for different node types
  const getNodeStyles = (type) => {
    switch (type) {
      case 'start':
      case 'end':
        return 'bg-green-900/80 border-green-500/60 rounded-full px-6';
      case 'decision':
        return 'bg-yellow-900/80 border-yellow-500/60 transform rotate-45 w-48 h-48 flex items-center justify-center';
      case 'process':
      default:
        return 'bg-blue-900/80 border-blue-500/60 rounded-lg';
    }
  };
  
  // Renders the flowchart nodes recursively for branching logic
  const renderNode = (nodeId) => {
    const node = flowchartData.nodes.find(n => n.id === nodeId);
    if (!node) return null;

    const nodeContent = (
      <div className={`p-4 text-center text-white min-h-[4rem] flex items-center justify-center ${node.type !== 'decision' ? 'w-48' : ''}`}>
        <span className={node.type === 'decision' ? '-rotate-45' : ''}>{node.title}</span>
      </div>
    );

    return (
       <div key={node.id} className="flex flex-col items-center">
         {/* Node Element */}
         <div className={`border-2 shadow-lg ${getNodeStyles(node.type)}`}>
           {nodeContent}
         </div>

         {/* Connectors and Children */}
         {node.next && (
           <>
             <ChevronDown className="w-8 h-8 text-gray-600 my-2" />
             {renderNode(node.next)}
           </>
         )}
         {node.yes && node.no && (
           <div className="flex items-start mt-10 space-x-16 relative">
             {/* YES Branch */}
             <div className="flex flex-col items-center relative">
               <div className="absolute -top-8 text-green-400 bg-gray-800 px-2 rounded">YES</div>
               <ChevronDown className="w-8 h-8 text-gray-600" />
               {renderNode(node.yes)}
             </div>
             {/* NO Branch */}
             <div className="flex flex-col items-center relative">
               <div className="absolute -top-8 text-red-400 bg-gray-800 px-2 rounded">NO</div>
               <ChevronDown className="w-8 h-8 text-gray-600" />
               {renderNode(node.no)}
             </div>
           </div>
         )}
       </div>
    );
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-gray-950 text-gray-200 font-sans p-4">
      {/* Navigation Header */}
      <div className="flex items-center justify-between p-4 bg-gray-900/80 backdrop-blur-sm border border-gray-800/60 rounded-2xl shadow-2xl mb-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/home')}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300"
            title="Home"
          >
            <Home size={20} />
          </button>
          <div className="flex items-center space-x-2">
            <GitBranch size={24} className="text-purple-400" />
            <h1 className="text-xl font-bold text-white">
              {flowchartData ? flowchartData.name : 'Project Flowchart'}
            </h1>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate('/chat')} className="py-2 px-4 rounded-xl text-gray-500 hover:bg-gray-800/50 hover:text-white transition-all duration-300">
            Chat
          </button>
          <button onClick={() => navigate('/roadmap')} className="py-2 px-4 rounded-xl text-gray-500 hover:bg-gray-800/50 hover:text-white transition-all duration-300">
            Roadmap
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
            <p className="text-lg">Loading Flowchart...</p>
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center h-64 text-red-400 bg-red-900/20 rounded-xl">
            <AlertTriangle className="h-12 w-12 mb-4" />
            <p className="text-lg font-semibold">An Error Occurred</p>
            <p>{error}</p>
          </div>
        )}

        {flowchartData && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-2">{flowchartData.name}</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">{flowchartData.description}</p>
            </div>
            
            {/* Flowchart Visualization */}
            <div className="flex justify-center">
              {renderNode(flowchartData.nodes[0].id)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Flowchart;