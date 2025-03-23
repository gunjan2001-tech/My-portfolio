import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["Html", "CSS", "Bootstrap", "react", "TailwindCSS"];
  const backendSkills = ["Nodejs", "ExpressJs", "MongoDb"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
     <RevealOnScroll>
     <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400  bg-clip-text text-transparent text-center">
          About Me
        </h2>
        <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all ">
          <p className="text-gray-300 mb-6   ">
            "I'm a passionate Frontend Developer skilled in creating responsive,
            user-friendly web experiences using HTML, CSS, JavaScript, React.js,
            and Tailwind CSS." 🚀
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech,key)=>(
                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"> 
                      {tech}
                    </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech,key)=>(
                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"> 
                      {tech}
                    </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
                    <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2"> 
                      <li>
                        <strong>BSC in mathematics </strong>- MDSU University (2020-2023)
                      </li>
                      <li>
                       Relevant CourseWork : Web development
                      </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
                    <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                      <div className="space-y-4 text-gray-300">
                        
                        <div>
                          <h4 className="font-semibold">Customer support executive</h4>
                          <p>solve the customer queries and give them the write solutions </p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Frontend developer at Hub2Technologies(2025-presnet)</h4>
                          <p> I build and optimize responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and React. I work closely with designers and backend teams to ensure smooth functionality and a great user experience. 🚀 </p>
                        </div>

                      </div>
                </div>
        </div>
      </div>
     </RevealOnScroll>
    </section>
  );
};
