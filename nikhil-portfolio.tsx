import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Award, Code, Briefcase, GraduationCap, Trophy, ChevronDown, ExternalLink, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const skills = {
    languages: ['Python', 'Java', 'C/C++', 'SQL', 'HTML/CSS'],
    aiml: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Generative AI', 'LLM Concepts'],
    frameworks: ['TensorFlow', 'Keras', 'PyTorch', 'scikit-learn', 'OpenCV', 'Pandas', 'NumPy'],
    tools: ['IBM Watson Studio', 'GitHub', 'Google Colab', 'VS Code', 'MySQL']
  };

  const projects = [
    {
      title: 'Tech Yoga – AI-Based Web Yoga Assistant',
      tech: 'Python, TensorFlow, React, Supabase',
      description: 'Real-time pose detection with chatbot instructions and user performance tracking',
      highlights: ['Real-time pose detection', 'Interactive chatbot', 'Performance analytics']
    },
    {
      title: 'Sign Language Detection System',
      tech: 'Python, OpenCV, TensorFlow',
      description: 'Real-time gesture recognition system for differently-abled users',
      highlights: ['Real-time recognition', 'Accessibility focus', 'High accuracy']
    },
    {
      title: 'Health Insurance Cost Prediction',
      tech: 'Neural Networks, Python',
      description: 'Predicts insurance charges using regression with MAE < 3500',
      highlights: ['Neural network model', 'Low error rate', 'Predictive analytics']
    },
    {
      title: 'Cat vs Dog Image Classification',
      tech: 'CNN, TensorFlow',
      description: 'Convolutional neural network achieving 90%+ validation accuracy',
      highlights: ['CNN architecture', '90%+ accuracy', 'Image classification']
    },
    {
      title: 'SMS Spam Classification',
      tech: 'NLP, scikit-learn',
      description: 'Detects spam messages using machine learning models',
      highlights: ['NLP techniques', 'Text classification', 'High precision']
    },
    {
      title: 'Book Recommendation System',
      tech: 'Python, KNN',
      description: 'Collaborative filtering-based recommendation engine',
      highlights: ['Collaborative filtering', 'KNN algorithm', 'Personalized recommendations']
    }
  ];

  const certifications = [
    'Machine Learning with Python – FreeCodeCamp (300 hours)',
    'Introduction to Machine Learning – NPTEL, IIT Madras',
    'Core Java – 60 hours training',
    'Advanced SQL – HackerRank Certified',
    'Generative AI – IBM',
    'Large Language Models – IBM',
    'Enterprise-Grade AI – IBM',
    'Python Programming – AI Adventures'
  ];

  const achievements = [
    '1st Place – Storytelling Competitions (College + Aspire Institute)',
    '1st Place – Leadership Workshop + Trophy',
    'Best Performer, Student of the Month, 100% Attendance Award',
    'Anchored Annual Day, Teachers\' Day, Aagaz 2k25 Fest',
    'Core Committee Member – IBM AI Workshop & Aagaz Fest',
    'Ranked 1159 in Unstop Engineering Daily Quiz (Feb 2025)',
    'Volunteer at ATVC 2024 & RoboRashtra Robotics Event'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              NR
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Certifications', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors ${activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Certifications', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-md"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Nikhil Gokul Raghuwanshi
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6">
              AI/ML Engineer & Deep Learning Enthusiast
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Passionate about building impactful AI-driven solutions with expertise in Machine Learning, Deep Learning, NLP, and Computer Vision
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="https://github.com/Nikhil270703" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700 transition-all hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nikhil-raghuvanshi-8a7704259/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700 transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="https://leetcode.com/u/nick_27/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700 transition-all hover:scale-110">
              <Code size={24} />
            </a>
            <a href="mailto:nraghuvanshi100@gmail.com" className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700 transition-all hover:scale-110">
              <Mail size={24} />
            </a>
          </div>

          <button onClick={() => scrollToSection('about')} className="animate-bounce">
            <ChevronDown size={32} className="text-cyan-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I am an aspiring AI/ML Engineer passionate about building impactful AI-driven solutions. I specialize in Machine Learning, Deep Learning, and NLP, with hands-on experience in computer vision models, neural networks, and real-time AI applications.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I enjoy creating practical projects such as AI Yoga Trainer systems, sign language detection, recommendation systems, and cloud-powered chatbots. With a balance of technical expertise, leadership experience, and communication skills, I aim to work on challenging AI solutions that make a real difference.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                <div className="flex items-center mb-2">
                  <MapPin className="text-cyan-400 mr-2" size={20} />
                  <span className="text-gray-400">Location</span>
                </div>
                <p className="text-white">Pune, Maharashtra, India</p>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                <div className="flex items-center mb-2">
                  <Mail className="text-cyan-400 mr-2" size={20} />
                  <span className="text-gray-400">Email</span>
                </div>
                <p className="text-white">nraghuvanshi100@gmail.com</p>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                <div className="flex items-center mb-2">
                  <Phone className="text-cyan-400 mr-2" size={20} />
                  <span className="text-gray-400">Phone</span>
                </div>
                <p className="text-white">+91 7666781458</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-700/50 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">AI/ML Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.aiml.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-700/50 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-pink-400">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-3">
                {skills.frameworks.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-700/50 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-700/50 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Major Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105">
                <div className="flex items-start justify-between mb-3">
                  <Briefcase className="text-cyan-400 flex-shrink-0" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-purple-400 text-sm mb-3">{project.tech}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight, j) => (
                    <span key={j} className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-cyan-400">{highlight}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen flex items-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 max-w-3xl mx-auto">
            <div className="flex items-start mb-4">
              <GraduationCap className="text-cyan-400 mr-4 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-2xl font-semibold mb-2">B.Tech in Computer Science & Engineering</h3>
                <p className="text-purple-400 text-lg mb-2">AI Specialization</p>
                <p className="text-gray-300 mb-2">Nutan College of Engineering & Research, Talegaon Dabhade</p>
                <p className="text-gray-400 mb-2">Affiliated to BATU | 2022 – 2026</p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <span className="px-4 py-2 bg-slate-700/50 rounded-full text-sm">CGPA: 6.49/10</span>
                  <span className="px-4 py-2 bg-slate-700/50 rounded-full text-sm">Top 20%</span>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Class XII</p>
                <p className="text-white text-lg font-semibold">61.60%</p>
              </div>
              <div className="bg-slate-700/30 p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Class X</p>
                <p className="text-white text-lg font-semibold">88.80%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="min-h-screen flex items-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all flex items-start">
                <Award className="text-cyan-400 mr-4 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-300">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="min-h-screen flex items-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Achievements & Leadership
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, i) => (
              <div key={i} className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all flex items-start">
                <Trophy className="text-yellow-400 mr-4 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-300">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-4 py-20">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-300 text-lg mb-12">
            I'm always open to discussing AI/ML projects, collaborations, or opportunities!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:nraghuvanshi100@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full hover:scale-105 transition-transform">
              <Mail size={20} />
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/nikhil-raghuvanshi-8a7704259/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all hover:scale-105">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="https://github.com/Nikhil270703" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all hover:scale-105">
              <Github size={20} />
              GitHub
            </a>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <a href="https://leetcode.com/u/nick_27/" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700 transition-all">
              <Code className="mx-auto mb-2 text-cyan-400" size={24} />
              <p className="text-sm">LeetCode</p>
            </a>
            <a href="https://www.hackerrank.com/profile/nraghuvanshi100" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700 transition-all">
              <Code className="mx-auto mb-2 text-green-400" size={24} />
              <p className="text-sm">HackerRank</p>
            </a>
            <a href="https://www.codechef.com/users/nick_1011" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700 transition-all">
              <Code className="mx-auto mb-2 text-orange-400" size={24} />
              <p className="text-sm">CodeChef</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 py-8 text-center">
        <p className="text-gray-400">© 2025 Nikhil Gokul Raghuwanshi. All rights reserved.</p>
        <p className="text-gray-500 text-sm mt-2">Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}