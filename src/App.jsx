// import './styles/App.css';
import './styles/theme.css';
import { motion } from 'motion/react';
import { Typewriter } from './components/ui/Typewriter';
import { ThemeToggle } from './components/ui/ThemeToggle';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Globe, 
  Smartphone,
  ChevronDown
} from 'lucide-react';
import profilePhoto from './assets/Lene.jpg';
import Resume from './assets/Honeylene-Insular-CV.pdf';


function App() {
  const projects = [
    {
      title: "Receipt Scanner App",
      description: "A full-stack app for scanning and extracting receipt data using OCR. Built with React for the frontend and Node.js for the backend.",
      tags: ["React", "TailwindCss"],
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Image Classification",
      description: "A real-time image classification tool using deep learning models. Built with Python and visualized with D3.js.",
      tags: ["Python", "D3.js"],
      icon: <Cpu className="w-5 h-5" />
    },
    {
      title: "Language Exchange App",
      description: "A cross-platform mobile app for language learning and practice, using React Native and Firebase for real-time features.",
      tags: ["React Native", "Firebase", "Mobile App"],
      icon: <Smartphone className="w-5 h-5" />
    }
  ];

  const workExperience = [
    {
      jobTitle: 'Business Support Solutions Developer',
      company: 'Ovintiv Inc.',
      duration: 'October 2024 - December 2025',
      description: 
      <ul>
        <li> Developed and deployed unattended RPA solutions within Dynamics 365 using Power Automate and Power Automate Desktop.</li>
        <li> Integrated open-source RPA frameworks to enhance the automation solution’s performance and compliance, aligning with the organization’s scalable and secure development goals.</li>
        <li> Applied Agile methodologies to deliver incremental improvements to business workflows, working closely with cross-functional teams across finance, operations, and IT to optimize system </li>
        <li> Troubleshot and provided remote support for users, ensuring seamless cross-regional collaboration and operational efficiency.</li>
      </ul>
    },
    {
      jobTitle: 'Finance Solutions Developer',
      company: 'Ovintiv Inc.',
      duration: 'January 2024 - October 2024',
      description: 
      <ul>
        <li> Migrated manual financial reporting workflows to automated low-code solutions using Power Platform, enhancing processing time by 30% and reducing the risk of human error.</li>
        <li> Developed and deployed automated financial dashboards, providing real-time insights to business stakeholders and improving data accessibility for decision-making.</li>
        <li> Performed performance evaluations on financial tools, ensuring scalability, reliability, and secure integration across various platforms. </li>
      </ul>
    },
    {
      jobTitle: 'Student Custom Development',
      company: 'Ovintiv Inc.',
      duration: 'January 2023 - October 2023',
      description: 
      <ul>
        <li> Contributed to the modernization of enterprise software solutions using React, Node.js, and SQL Server in an Agile environment, improving internal productivity by 30%.</li>
        <li> Developed and deployed CRUD applications to automate internal processes, improving workflow efficiency and service delivery for multiple departments.</li>
        <li> Participated in Agile sprints, backlog grooming, and technical presentations, focusing on AI, cloud computing, and software best practices to support innovation and continuous improvement. </li>
      </ul>
    },
  ];
  
  return (
    <>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary-foreground w-full">
      
        {/* Decorative Orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-chart-3/10 blur-[120px] rounded-full" />
        </div>

        {/* NavBar */}
         <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
  <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between relative w-full">
    {/* Logo - Left */}
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="text-2xl font-black tracking-tighter"
    >
      HI<span className="text-primary">.</span>
    </motion.div>
    
    {/* Nav Links - Centered */}
    <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10">
      <a href="#work" className="text-sm font-semibold tracking-wide hover:text-primary transition-colors">WORK</a>
      <a href="#aboutme" className="text-sm font-semibold tracking-wide hover:text-primary transition-colors">ABOUT</a>
      <a href="#contact" className="text-sm font-semibold tracking-wide hover:text-primary transition-colors">CONTACT</a>
    </div>
    
    {/* Social Icons - Right */}
    <div className="flex items-center gap-3">
      <ThemeToggle />
      <div className="h-8 w-[1px] bg-border/50 mx-2 hidden sm:block" />
      <a href="https://github.com/hinsular-10" target="_blank" rel="noopener noreferrer" className="p-2.5 hover:bg-primary/5 rounded-2xl transition-all">
        <Github className="w-5 h-5" />
      </a>
      <a href="https://ca.linkedin.com/in/honeylene-insular" target="_blank" rel="noopener noreferrer" className="p-2.5 hover:bg-primary/5 rounded-2xl transition-all">
        <Linkedin className="w-5 h-5" />
      </a>
    </div>
  </div>
</nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-pink-500/10 text-pink-400 text-xs font-bold uppercase tracking-widest mb-8 border border-pink-500/20">
                <span className="w-1 h-2 rounded-full bg--500 animate-pulse" />
                Open to collaborations
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-8">
                Hi, I'm <br />
                <span className="text-pink-500 italic">Honeylene Insular</span>
              </h1>
                <div className="text-xl md:text-2xl font-medium text-muted-foreground/80 mt-20 mb-10 min-h-[1.5em] flex items-center">
                  Crafting&nbsp;
                  <Typewriter 
                    texts={[
                      "aesthetic digital spaces.",
                      "elegant user experiences.",
                      "scalable web applications.",
                      "innovative AI-powered solutions.",
                      "responsive user interfaces.",
                      "secure and efficient business workflows.",
                      "modern web interfaces.",
                      "magical interactions."
                    ]}
                    className="text-pink-500 font-bold"
                    typingSpeed={60}
                    deletingSpeed={30}
                    delayBetweenTexts={3000}
                  />
                </div>
                <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-12 leading-relaxed font-medium">
                  I’m a full-stack software engineer skilled in React, TypeScript, and Node.js, focused on building secure, scalable AI-powered applications with an emphasis on efficiency and best practices.
                </p>
                <div className="flex flex-wrap gap-5">
      
                  <button
                  onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="px-10 py-4 bg-[#FF69B4] text-white rounded-2xl font-bold hover:bg-[#FF1493] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-[#FF69B4]/30">
                    View My Work
                  </button>

                  <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-4 bg-card text-foreground border-2 border-primary/20 rounded-2xl font-bold hover:bg-primary/5 transition-all">
                    Let's Chat
                  </button>
                </div>
              </motion.div>

              {/* Image Section */}
              <div className='hidden lg:block'>
                <img 
                  src={profilePhoto}
                  alt="Profile"
                  className='w-full h-auto rounded-xl shadow-xl'
                
                />
              </div>
            </div>
          </div>
        </section>

         {/* Featured Work */}
         <section id="work" className="py-32  backdrop-blur-sm px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <span className="text-[#FF69B4] font-bold tracking-widest uppercase text-sm mb-4 block">Selected Works</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tightest">Projects in the Works</h2>
            </div>
            <a href="#" className="inline-flex items-center gap-2 font-bold text-primary group transition-all">
              Explore full gallery 
              <motion.span whileHover={{ x: 5 }}>
                <ExternalLink className="w-5 h-5" />
              </motion.span>
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card p-10 rounded-[2.5rem] border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:rotate-6 transition-transform">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{project.title}</h3>
                <p className="text-muted-foreground/80 mb-8 leading-relaxed font-medium">
                  {project.description}
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs py-1.5 px-3 bg-secondary text-secondary-foreground rounded-full font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-primary opacity-80 hover:opacity-100 transition-opacity">
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me */}
        <section id="aboutme" className="py-32 backdrop-blur-sm px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tightest">Work History</h2>
              <p className="text-muted-foreground/80 mt-4 max-w-lg leading-relaxed font-medium">
                A journey through my professional experience, showcasing the roles and projects that have shaped my career.
              </p>
              <a href= {Resume} download="Resume_Honeylene_Insular.pdf" className="inline-flex items-center gap-2 font-bold text-primary group transition-all">
              Download CV
              <motion.span whileHover={{ x: 5 }}>
                <ExternalLink className="w-5 h-5" />
              </motion.span>
            </a>
            </div>

    
            {/* Work Experience List */}
              <div className="space-y-12">
                {workExperience.map((job, index) => (
                  <div key={index} className="border-b border-border/50 pb-8">
                    <h3 className="text-2xl font-bold">{job.jobTitle}</h3>
                    <p className="text-lg font-semibold text-primary">{job.company}</p>
                    <p className="text-sm text-muted-foreground/80">{job.duration}</p>
                    <p className="text-muted-foreground/80 mt-4 leading-relaxed">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      {/* Tech Stack Banner */}
      <section className="py-20 px-6 border-y border-border/50 bg-background/40 backdrop-blur-sm overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            animate={{ x: [0, -100, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex justify-center gap-20 md:gap-40 items-center opacity-30 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-700"
          >
            {[
              { icon: <Code2 />, label: "React" },
              { icon: <Globe />, label: "JavaScript" },
              { icon: <Cpu />, label: "AI & Automation" },
              { icon: <Smartphone />, label: "Mobile" },
              { icon: <Code2 />, label: "Design" },
              { icon: <Globe />, label: "TypeScript" },
              { icon: <Code2 />, label: "Cloud & DevOps" },
              { icon: <Globe />, label: "Python" },
              { icon: <Globe />, label: "Power Platform" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 whitespace-nowrap">
                <span className="scale-150">{item.icon}</span>
                <span className="text-2xl font-black uppercase tracking-tighter">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary/5 rounded-[4rem] p-12 md:p-24 text-center border border-primary/10 backdrop-blur-sm overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF69B4]/50 blur-[100px] rounded-full -mr-32 -mt-32" />

            
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-5xl md:text-8xl font-black tracking-tightest mb-10 leading-none"
            >
              Let's create something <span className="text-primary italic">iconic.</span>
            </motion.h2>
            <p className="text-xl md:text-2xl text-muted-foreground/80 mb-16 max-w-2xl mx-auto font-medium leading-relaxed text-center">
              Currently seeking new opportunities to build beautiful, meaningful digital experiences.
            </p>
            <a 
              href="mailto:insularhoneylene@gmail.com" 
              className="inline-flex items-center gap-4 px-12 py-5 bg-primary text-primary-foreground rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-primary/30"
            >
              <Mail className="w-7 h-7" /> Work With Me
            </a>
            
            <div className="mt-32 pt-16 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="text-left">
                <p className="text-2xl font-black tracking-tighter mb-2">HI<span className="text-primary">.</span></p>
                <p className="text-sm font-medium text-muted-foreground">© 2026 Honeylene Insular. Developed with love & coffee.</p>
              </div>
              <div className="flex gap-10">
                {[
                  { name: 'GitHub', url: 'https://github.com/hinsular-10' },
                  { name: 'LinkedIn', url: 'https://ca.linkedin.com/in/honeylene-insular' },
                  { name: 'Medium', url: 'https://medium.com/@honinsu' }
                ].map(social => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank" // Opens the link in a new tab
                    rel="noopener noreferrer" // Security best practice when using target="_blank"
                    className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>    
    </>
  )
}

export default App;