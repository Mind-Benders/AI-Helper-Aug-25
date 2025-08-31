import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  Zap,
  Clock,
  Menu,
  X,
  User,
  ArrowRight,
  Bot,
  Settings,
  BarChart3,
  Calendar,
  CheckCircle,
  Home,
  Star,
  Sparkles,
  Shield,
  Rocket,
  Globe,
  Heart,
  LogIn,
  UserPlus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  // Enhanced animations and effects
  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
      }
    };
    if (activeModal) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [activeModal]);

  const handleNavigateToChat = () => {
    navigate('/chat');
    setIsMobileMenuOpen(false);
  };

  const handleNavigateToProfile = () => {
    navigate('/profile');
    setIsMobileMenuOpen(false);
  };

  const handleNavigateToAuth = () => {
    navigate('/auth');
    setIsMobileMenuOpen(false);
  };

  const handleNavigateHome = () => {
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleGetStarted = () => {
    navigate('/chat');
  };

  // Enhanced modal content
  const modalContent = {
    instantAnswers: {
      title: "⚡ Instant Answers",
      content: "Experience lightning-fast responses powered by cutting-edge AI technology. Get accurate answers in milliseconds with our advanced neural networks trained on vast knowledge bases.",
      features: ["Real-time processing", "99.9% accuracy rate", "Multi-language support", "Context-aware responses"]
    },
    taskAutomation: {
      title: "🤖 Task Automation",
      content: "Transform your workflow with intelligent automation that learns from your patterns and preferences. Say goodbye to repetitive tasks forever.",
      features: ["Smart workflow detection", "Custom automation rules", "Integration with 100+ apps", "AI-powered optimization"]
    },
    support: {
      title: "🛡 24/7 Support",
      content: "Round-the-clock assistance with human-like understanding. Our AI never sleeps, ensuring you get help exactly when you need it.",
      features: ["Instant response time", "Multi-channel support", "Proactive assistance", "Personalized help"]
    },
    aboutUs: {
      title: "🚀 About Our Vision",
      content: "We're pioneering the next generation of AI assistance, creating technology that doesn't just respond—it anticipates, understands, and evolves with you.",
      features: ["Cutting-edge research", "User-centric design", "Ethical AI development", "Global accessibility"]
    }
  };

  // Enhanced feature cards
  const features = [
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: "Instant Answers",
      description: "Lightning-fast AI responses that understand context and nuance",
      modalKey: "instantAnswers",
      gradient: "from-blue-500 to-purple-600",
      hoverGradient: "from-blue-600 to-purple-700"
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: "Smart Automation",
      description: "Intelligent task automation that learns and adapts to your workflow",
      modalKey: "taskAutomation",
      gradient: "from-emerald-500 to-teal-600",
      hoverGradient: "from-emerald-600 to-teal-700"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Always Available",
      description: "24/7 support with enterprise-grade reliability and security",
      modalKey: "support",
      gradient: "from-orange-500 to-red-600",
      hoverGradient: "from-orange-600 to-red-700"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      content: "This AI assistant has revolutionized how I work. It's like having a super-powered colleague.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Developer",
      content: "The automation features saved me 20+ hours per week. Incredible technology!",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Designer",
      content: "Intuitive, powerful, and always helpful. This is the future of productivity tools.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 text-gray-100 font-sans overflow-x-hidden">
      {/* Advanced CSS Styles */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(1deg); }
            66% { transform: translateY(-20px) rotate(-1deg); }
          }
          
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(147, 51, 234, 0.3); }
            50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(147, 51, 234, 0.6), 0 0 80px rgba(236, 72, 153, 0.4); }
          }
          
          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            25% { background-position: 100% 50%; }
            50% { background-position: 100% 100%; }
            75% { background-position: 0% 100%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(40px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          
          @keyframes particle-float {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            25% { transform: translateY(-20px) translateX(10px) rotate(90deg); }
            50% { transform: translateY(-10px) translateX(-10px) rotate(180deg); }
            75% { transform: translateY(-30px) translateX(5px) rotate(270deg); }
          }
          
          @keyframes text-shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          
          @keyframes border-dance {
            0%, 100% { border-color: rgba(59, 130, 246, 0.5); }
            25% { border-color: rgba(147, 51, 234, 0.5); }
            50% { border-color: rgba(236, 72, 153, 0.5); }
            75% { border-color: rgba(59, 130, 246, 0.5); }
          }
          
          .animate-float { animation: float 8s ease-in-out infinite; }
          .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
          .animate-gradient { 
            animation: gradient-shift 8s ease infinite; 
            background-size: 400% 400%; 
          }
          .animate-slide-up { animation: slide-up 0.8s ease-out; }
          .animate-particle-float { animation: particle-float 10s linear infinite; }
          .animate-text-shimmer { 
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            background-size: 200% 100%;
            animation: text-shimmer 2s infinite;
          }
          .animate-border-dance { animation: border-dance 3s ease-in-out infinite; }
          
          .glass-effect {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .glass-effect-strong {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(30px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .custom-scrollbar::-webkit-scrollbar { width: 12px; }
          .custom-scrollbar::-webkit-scrollbar-track { 
            background: rgba(17, 24, 39, 0.5); 
            border-radius: 10px; 
          }
          .custom-scrollbar::-webkit-scrollbar-thumb { 
            background: linear-gradient(180deg, rgba(59, 130, 246, 0.8), rgba(147, 51, 234, 0.8)); 
            border-radius: 10px; 
            border: 2px solid rgba(17, 24, 39, 0.5);
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { 
            background: linear-gradient(180deg, rgba(59, 130, 246, 1), rgba(147, 51, 234, 1)); 
          }
          
          .hover-lift:hover { 
            transform: translateY(-12px) scale(1.02); 
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          .hover-glow:hover { 
            box-shadow: 0 25px 50px rgba(59, 130, 246, 0.4), 0 15px 30px rgba(147, 51, 234, 0.3); 
          }
          
          .parallax-bg {
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }
          
          .text-glow {
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(147, 51, 234, 0.3);
          }
          
          .perspective-container {
            perspective: 1000px;
          }
          
          .rotate-y-6:hover {
            transform: rotateY(6deg);
          }
          
          .gradient-border {
            position: relative;
          }
          
          .gradient-border::before {
            content: '';
            position: absolute;
            inset: 0;
            padding: 2px;
            background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
            border-radius: inherit;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
          }
        `}
      </style>

      {/* Enhanced Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Main background orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-l from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Floating particles */}
        {Array.from({length: 12}).map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full animate-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Enhanced Navigation */}
      <nav className="relative z-50 glass-effect shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Bot className="w-10 h-10 text-blue-400 animate-pulse-glow" />
                <div className="absolute inset-0 w-10 h-10 bg-blue-400/20 rounded-full animate-ping"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI Helper
                </h1>
                <p className="text-xs text-gray-400">Next-Gen Assistant</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {[
                { icon: <Home size={18} />, label: 'Home', action: handleNavigateHome },
                { icon: <MessageSquare size={18} />, label: 'Chat', action: handleNavigateToChat },
                { icon: <Heart size={18} />, label: 'About', action: handleScrollToAbout }
              ].map((item, index) => (
                <button 
                  key={index}
                  onClick={item.action}
                  className="flex items-center space-x-3 py-3 px-5 rounded-2xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 hover-lift group relative overflow-hidden"
                >
                  <span className="group-hover:text-blue-400 transition-colors duration-300 group-hover:scale-110 relative z-10">{item.icon}</span>
                  <span className="font-medium relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </button>
              ))}
            </div>

            {/* Auth and Profile Icons Section */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={handleNavigateToAuth}
                className="flex items-center space-x-3 py-3 px-5 glass-effect hover:bg-white/10 text-gray-300 hover:text-white rounded-2xl transition-all duration-300 hover-lift group relative overflow-hidden"
                title="Login / Sign Up"
              >
                <LogIn size={20} className="group-hover:text-blue-400 transition-colors duration-300 group-hover:scale-110 relative z-10" />
                <span className="font-medium relative z-10">Login</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </button>

              <button
                onClick={handleNavigateToProfile}
                className="relative w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-500 hover-lift animate-pulse-glow group"
                title="Profile"
              >
                <User size={22} className="text-white group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-3 border-gray-900 animate-pulse">
                  <div className="w-full h-full bg-green-300 rounded-full animate-ping"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-3 rounded-2xl glass-effect hover:bg-white/10 transition-all duration-300 relative group"
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute h-0.5 w-6 bg-gray-300 transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                  <span className={`absolute h-0.5 w-6 bg-gray-300 transform transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'top-3'}`}></span>
                  <span className={`absolute h-0.5 w-6 bg-gray-300 transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 z-50">
              <div className="glass-effect rounded-3xl p-4 animate-slide-up shadow-2xl border border-white/20">
                {[
                  { icon: <Home size={20} />, label: 'Home', action: handleNavigateHome },
                  { icon: <MessageSquare size={20} />, label: 'Chat', action: handleNavigateToChat },
                  { icon: <Heart size={20} />, label: 'About', action: handleScrollToAbout }
                ].map((item, index) => (
                  <button 
                    key={index}
                    onClick={item.action}
                    className="w-full flex items-center space-x-4 py-4 px-4 rounded-2xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="group-hover:text-blue-400 transition-colors duration-300 group-hover:scale-110">
                      {item.icon}
                    </div>
                    <span className="font-medium text-lg">{item.label}</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </button>
                ))}
                
                <div className="border-t border-gray-600/30 my-4"></div>
                
                <button 
                  onClick={handleNavigateToAuth}
                  className="w-full flex items-center space-x-4 py-4 px-4 rounded-2xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                >
                  <LogIn size={20} className="group-hover:text-blue-400 transition-colors duration-300 group-hover:scale-110" />
                  <span className="font-medium text-lg">Login / Sign Up</span>
                  <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </button>
                
                <button 
                  onClick={handleNavigateToProfile}
                  className="w-full flex items-center space-x-4 py-4 px-4 rounded-2xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                >
                  <User size={20} className="group-hover:text-blue-400 transition-colors duration-300 group-hover:scale-110" />
                  <span className="font-medium text-lg">Profile</span>
                  <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className={`space-y-8 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full py-2 px-6">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Powered by Advanced AI
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Your Personal
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                AI Helper
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience the future of productivity with AI that understands, anticipates, and evolves with your needs. Transform how you work, create, and achieve your goals with your intelligent assistant.
            </p>
            
            <div className="flex justify-center pt-8">
              <button
                onClick={handleGetStarted}
                className="group relative py-5 px-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold rounded-3xl transition-all duration-500 hover-lift hover-glow transform hover:scale-110 shadow-2xl overflow-hidden"
              >
                <div className="relative z-10 flex items-center space-x-3">
                  <Rocket className="w-7 h-7 group-hover:animate-bounce" />
                  <span className="text-xl font-extrabold tracking-wide">START YOUR JOURNEY</span>
                  <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/60 to-purple-600/60 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float" style={{animationDelay: '0s'}}>
          <div className="w-16 h-16 bg-blue-500/20 rounded-2xl rotate-12 glass-effect"></div>
        </div>
        <div className="absolute bottom-40 right-20 animate-float" style={{animationDelay: '2s'}}>
          <div className="w-12 h-12 bg-purple-500/20 rounded-full glass-effect"></div>
        </div>
        <div className="absolute top-1/2 right-10 animate-float" style={{animationDelay: '4s'}}>
          <div className="w-8 h-8 bg-pink-500/20 rounded-lg rotate-45 glass-effect"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Unlock Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Full Potential
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover features designed to revolutionize your workflow and amplify your capabilities
            </p>
          </div>
          
          {/* Horizontal Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`relative group glass-effect rounded-3xl p-8 hover-lift hover-glow transition-all duration-500 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                  {/* Icon Section */}
                  <div className="flex-shrink-0">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed text-lg max-w-2xl">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Us
              </span>
            </h2>
            <div className="glass-effect rounded-3xl p-8 md:p-12 hover-lift transition-all duration-500">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                AI Helper is your smart companion that transforms complex tasks into simple, manageable solutions. Just give us a prompt, and our AI provides intelligent assistance tailored to your needs — whether it's technical, creative, or everyday problem-solving. We make AI accessible, helpful, and effective so you can focus on what matters most.
              </p>
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setActiveModal('aboutUs')}
                  className="group py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5" />
                    <span>Learn More About Our Vision</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className={`space-y-8 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '1.4s'}}>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to Transform
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Your Workflow?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Join thousands of professionals who have already revolutionized their productivity with AI Helper. Your journey to effortless project management starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
              <button
                onClick={handleGetStarted}
                className="group relative py-4 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-2xl transition-all duration-300 hover-lift hover-glow transform hover:scale-105 shadow-2xl"
              >
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6 group-hover:animate-spin" />
                  <span className="text-lg">Get Started Free</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              </button>
              
              <button
                onClick={handleNavigateToAuth}
                className="group py-4 px-8 glass-effect hover:bg-white/10 text-gray-300 hover:text-white font-semibold rounded-2xl transition-all duration-300 hover-lift border border-white/20"
              >
                <div className="flex items-center space-x-2">
                  <UserPlus className="w-5 h-5" />
                  <span>Sign Up Now</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 glass-effect border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Bot className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI Helper
                </h3>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed mb-6">
                Transforming ideas into actionable project roadmaps with the power of AI. Your smart companion for efficient project planning and execution.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <Globe className="w-5 h-5 text-gray-300" />
                </button>
                <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <MessageSquare className="w-5 h-5 text-gray-300" />
                </button>
                <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <Heart className="w-5 h-5 text-gray-300" />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { label: 'Home', action: handleNavigateHome },
                  { label: 'Chat', action: handleNavigateToChat },
                  { label: 'Profile', action: handleNavigateToProfile },
                  { label: 'Login', action: handleNavigateToAuth }
                ].map((link, index) => (
                  <button 
                    key={index} 
                    className="block text-gray-400 hover:text-white transition-colors text-left"
                    onClick={link.action}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">Get in Touch</h4>
              <div className="space-y-2 text-gray-400">
                <p>support@aihelper.ai</p>
                <p>+1 (555) 123-4567</p>
                <p>Available 24/7</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 AI Helper. All rights reserved. Built with ❤ for productivity enthusiasts.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</button>
              <button className="text-gray-400 hover:text-white text-sm transition-colors">Terms</button>
              <button className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="glass-effect rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto custom-scrollbar animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-white">
                {modalContent[activeModal]?.title}
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-300" />
              </button>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              {modalContent[activeModal]?.content}
            </p>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-white text-lg">Key Features:</h4>
              {modalContent[activeModal]?.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex justify-end mt-8 space-x-4">
              <button
                onClick={() => setActiveModal(null)}
                className="py-2 px-6 glass-effect hover:bg-white/10 text-gray-300 rounded-xl transition-all duration-300"
              >
                Close
              </button>
              <button
                onClick={handleGetStarted}
                className="py-2 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;