import React from "react";

function App() {
  const projects = [
    {
      title: "Currency Converter",
      description: "A web application that converts Philippine Peso (PHP) to USD, CNY, EUR, and JPY with real-time exchange rates.",
      tags: ["JavaScript", "API"],
      image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      color: "from-blue-900 to-blue-800",
      link: "/public/converter-activity/index.html"
    },
    {
      title: "Todo List App",
      description: "Full-stack to-do list with Express.js and PostgreSQL. Create, update, delete tasks with user authentication.",
      tags: ["Node.js", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      color: "from-purple-900 to-purple-800",
      link: "/projects/portfolio"
    },
    {
      title: "JavaScript Calculator",
      description: "Responsive calculator with vanilla JavaScript that performs basic arithmetic operations with clean UI.",
      tags: ["JavaScript", "CSS"],
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      color: "from-green-900 to-green-800",
      link: "/public/calculator/index.html"
    },
    {
      title: "Number Loop Analyzer",
      description: "Input a number to see sum, factorial, odd and even numbers from 1 to that number using JavaScript loops.",
      tags: ["JavaScript", "Algorithms"],
      image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
      color: "from-indigo-900 to-indigo-800",
      link: "/public/loop/index.html"
    },
    {
      title: "Employee Management",
      description: "System using JavaScript arrays and objects to store, manage, and display employee information in table format.",
      tags: ["JavaScript", "Data Structures"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      color: "from-amber-900 to-amber-800",
      link: "/public/ARRAY_OBJECT/index.html"
    }
  ];

  return (
    <div className="font-sans bg-gray-900 text-gray-100 scroll-smooth">
      {/* Navigation Bar - Minimalist */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <span className="text-xl font-light tracking-wider">Lorman</span>
          <div className="flex space-x-8">
            {["About", "Projects", "Contact"].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="text-gray-400 hover:text-white font-light text-sm tracking-wider transition-colors duration-300"
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Add spacing for fixed nav */}
      <div className="h-16" />

      {/* Hero Section - Split Screen */}
      <header className="min-h-screen flex flex-col md:flex-row">
        <div className="md:w-1/2 flex items-center justify-center p-8 md:p-16 order-2 md:order-1 bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="max-w-md">
            <h1 className="text-4xl md:text-5xl font-light mb-4 leading-tight">
              Lorman Heart <span className="text-blue-400">Buenavista</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-400 font-light mb-6">
              Web Developer & BSIT Student
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Crafting digital experiences with clean code and thoughtful design.
              Currently exploring the full-stack landscape.
            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="px-6 py-2 border border-blue-400 text-blue-400 hover:bg-blue-400/10 transition-colors duration-300 rounded"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-2 bg-blue-400/10 text-blue-400 hover:bg-blue-400/20 transition-colors duration-300 rounded"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 order-1 md:order-2 bg-gray-800 flex items-center justify-center p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10"></div>
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-700 relative z-10 shadow-xl">
            <img
              src="/public/1.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* About Section - Paragraph Form */}
      <section id="about" className="py-20 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-center mb-10 tracking-wider">
            <span className="text-blue-400">/</span> About Me
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            I am currently pursuing a Bachelor of Science in Information Technology, a journey that began in 2021 and continues to this day. My academic path has equipped me with a solid foundation in both theoretical and practical aspects of computing.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            My primary focus lies in Full-Stack Development, particularly within the JavaScript ecosystem. I am passionate about crafting efficient and responsive web applications using modern tools and frameworks.
          </p>

          <p className="text-gray-300 leading-relaxed mb-12">
            My approach to development emphasizes problem-solving and writing clean, maintainable code. I believe that building scalable and readable solutions is as important as functionality itself.
          </p>

          {/* Skills */}
          <div className="mt-10">
            <h3 className="text-xl font-light mb-6 text-center">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['React', 'Node.js', 'Express', 'PostgreSQL', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'Git'].map((skill) => (
                <div key={skill} className="px-4 py-2 bg-gray-700 rounded-full text-sm hover:bg-gray-600 transition-colors duration-300">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section - Card Grid */}
      <section id="projects" className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-center mb-16 tracking-wider">
            <span className="text-blue-400">/</span> Projects
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:translate-y-1 transition-transform duration-300 group">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-70`}></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-gray-700 px-2 py-1 rounded">{tag}</span>
                      ))}
                    </div>
                    <a href={project.link} className="text-blue-400 text-sm hover:underline transition-colors duration-300">
                      View →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Minimal Form */}
      <section id="contact" className="py-20 px-6 bg-gray-800">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-light text-center mb-16 tracking-wider">
            <span className="text-blue-400">/</span> Get In Touch
          </h2>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-400/10 text-blue-400 py-3 rounded hover:bg-blue-400/20 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </form>

          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6">Or connect with me through</p>
            <div className="flex justify-center space-x-6">
              {[
                {
                  name: "GitHub",
                  icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                },
                {
                  name: "LinkedIn",
                  icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                },
                {
                  name: "Twitter",
                  icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                },
                {
                  name: "Email",
                  icon: "M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  title={social.name}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-500 text-sm">
          Lorman Heart Buenavista
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;