import React, { useState } from 'react';
import { Send, Plus, User, Home, Map, GitBranch, FolderOpen, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ChatInterface = () => {
  const navigate = useNavigate();

  const user = { name: 'John Doe', username: 'johndoe' };

  const [chatHistory, setChatHistory] = useState([
    { role: 'ai', text: 'Hello! I am ready to assist you with your projects. What can I help you with?' },
  ]);
  const [input, setInput] = useState('');
  const [selectedChat, setSelectedChat] = useState(0);
  const [activeSection, setActiveSection] = useState('chat');

  const existingTopics = [
    { id: 1, title: 'React App Development', lastMessage: 'How to implement routing?', timestamp: '2 hours ago' },
    { id: 2, title: 'Database Design', lastMessage: 'Schema optimization tips', timestamp: '1 day ago' },
    { id: 3, title: 'API Integration', lastMessage: 'REST vs GraphQL', timestamp: '3 days ago' },
    { id: 4, title: 'UI/UX Discussion', lastMessage: 'Color scheme feedback', timestamp: '1 week ago' },
  ];

  const userProjects = [
    { id: 1, title: 'AI Helper App', status: 'active' },
    { id: 2, title: 'E-commerce Platform', status: 'planning' },
    { id: 3, title: 'Mobile App', status: 'completed' },
  ];

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      const newUserMessage = { role: 'user', text: input };
      setChatHistory((prev) => [...prev, newUserMessage]);
      setInput('');

      setTimeout(() => {
        const aiResponse = { role: 'ai', text: 'I understand your question. Let me help you with that...' };
        setChatHistory((prev) => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleNewChat = () => {
    setChatHistory([
      { role: 'ai', text: 'Hello! I am ready to assist you with your projects. What can I help you with?' },
    ]);
    setInput('');
    setSelectedChat(0);
  };

  const handleTopicSelect = (topicId) => {
    setSelectedChat(topicId);
    setChatHistory([
      { role: 'ai', text: `Continuing conversation about ${existingTopics.find(t => t.id === topicId)?.title}...` },
    ]);
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-gradient-to-br from-gray-950 via-slate-950 to-gray-950 text-gray-200 font-sans p-2">
      <style>
        {`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1e293b;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #475569;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }
        `}
      </style>
      
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between p-4 bg-gray-900/80 backdrop-blur-sm border border-gray-800/60 rounded-2xl shadow-2xl mb-2">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/')}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300"
            title="Home"
          >
            <Home size={20} />
          </button>
          <h1 className="text-xl font-bold text-white">AI Helper - Chat</h1>
        </div>
        
        <div className="flex space-x-4">
          <button 
            onClick={() => setActiveSection('chat')}
            className={`py-2 px-4 rounded-xl transition-all duration-300 ${
              activeSection === 'chat' 
                ? 'text-white bg-gray-800/50' 
                : 'text-gray-500 hover:bg-gray-800/50 hover:text-white'
            }`}
          >
            Chat
          </button>
          <button 
            onClick={() => navigate('/roadmap')}
            className="py-2 px-4 rounded-xl text-gray-500 hover:bg-gray-800/50 hover:text-white transition-all duration-300 flex items-center space-x-2"
            title="Roadmap"
          >
            <Map size={16} />
            <span>Roadmap</span>
          </button>
          <button 
            onClick={() => navigate('/flowchart')}
            className="py-2 px-4 rounded-xl text-gray-500 hover:bg-gray-800/50 hover:text-white transition-all duration-300 flex items-center space-x-2"
            title="Flowchart"
          >
            <GitBranch size={16} />
            <span>Flowchart</span>
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
      <div className="flex flex-1 overflow-hidden space-x-2">
        
        {/* Left Sidebar */}
        <div className="w-80 bg-gray-900/80 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-4 flex flex-col space-y-4">
          <button
            onClick={handleNewChat}
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl flex items-center justify-center space-x-2 shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/25"
          >
            <Plus size={20} />
            <span>New Chat</span>
          </button>
          
          <div className="space-y-2 flex-1">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Recent Chats</h3>
            <div className="space-y-2 max-h-full overflow-y-auto custom-scrollbar">
              {existingTopics.map((topic) => (
                <div
                  key={topic.id}
                  onClick={() => handleTopicSelect(topic.id)}
                  className={`w-full p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedChat === topic.id
                      ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-white shadow-lg'
                      : 'bg-gray-800/30 text-gray-300 hover:bg-gray-800/50 hover:text-white'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    <MessageCircle size={16} className="mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{topic.title}</p>
                      <p className="text-xs text-gray-500 truncate">{topic.lastMessage}</p>
                      <p className="text-xs text-gray-600 mt-1">{topic.timestamp}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex-1 bg-gray-900/60 backdrop-blur-sm border border-gray-800/60 rounded-2xl flex flex-col p-4">
          <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
            {chatHistory.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <MessageCircle size={64} className="mx-auto text-gray-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-400 mb-2">Start a New Conversation</h3>
                  <p className="text-gray-500">Ask me anything about your projects!</p>
                </div>
              </div>
            ) : (
              chatHistory.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] p-4 rounded-3xl backdrop-blur-sm ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-lg shadow-lg'
                        : 'bg-gray-900/60 border border-gray-800/60 text-gray-100 rounded-bl-lg shadow-xl'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.text}</p>
                  </div>
                </div>
              ))
            )}
          </div>
          
          <div className="flex items-end space-x-3 mt-4 p-3 bg-gray-900/60 backdrop-blur-sm border border-gray-700/60 rounded-3xl">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message... (Shift+Enter for new line)"
              className="flex-1 bg-transparent border-none outline-none text-gray-100 placeholder-gray-500 pl-2 resize-none max-h-32 focus:ring-0"
              rows="1"
              style={{
                minHeight: '24px',
                height: 'auto',
              }}
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = e.target.scrollHeight + 'px';
              }}
            />
            <button
              onClick={handleSendMessage}
              disabled={!input.trim()}
              className={`p-3 rounded-2xl transition-all duration-300 shadow-lg ${
                input.trim() 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:shadow-purple-500/25' 
                  : 'bg-gray-700 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Send size={18} />
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-72 bg-gray-900/60 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-4 flex flex-col">
          <h2 className="text-lg font-semibold mb-4 text-white flex items-center space-x-2">
            <FolderOpen size={20} />
            <span>Project Context</span>
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">Active Projects</h3>
              <div className="space-y-2">
                {userProjects.filter(p => p.status === 'active').map((project) => (
                  <div key={project.id} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/60 rounded-xl p-3">
                    <p className="font-medium text-white text-sm">{project.title}</p>
                    <p className="text-xs text-green-400 capitalize">{project.status}</p>
                    <div className="flex space-x-2 mt-2">
                      <button
                        onClick={() => navigate(`/roadmap/${project.id}`)}
                        className="text-xs px-2 py-1 bg-orange-600/20 text-orange-400 rounded hover:bg-orange-600/30 transition-colors"
                      >
                        Roadmap
                      </button>
                      <button
                        onClick={() => navigate(`/flowchart/${project.id}`)}
                        className="text-xs px-2 py-1 bg-purple-600/20 text-purple-400 rounded hover:bg-purple-600/30 transition-colors"
                      >
                        Flowchart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
