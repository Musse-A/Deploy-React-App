import { Code, MonitorSmartphone, BarChart2, Database } from "lucide-react";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left: Skills cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">General Programming</h4>
                  <p className="text-muted-foreground">Java, C#, JavaScript</p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Full-stack development with responsive design, using HTML5,
                    CSS3, JavaScript, and frameworks like React and Node.js.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Analysis & Visualization</h4>
                  <p className="text-muted-foreground">
                    Analyzing datasets and visualizing with Power BI and MATLAB.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Database Management</h4>
                  <p className="text-muted-foreground">
                    SQL (MySQL, PostgreSQL) and NoSQL (MongoDB, Firebase) expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Images */}
        <div className="flex flex-col gap-8 justify-center items-center">
        <img
            src="/assets/images/skills/csharp.svg"
            alt="C# Logo"
            className="w-24 h-24 rounded-lg shadow-lg object-contain"
        />

        <div className="flex gap-4 flex-wrap justify-center">
            <img
            src="/assets/images/skills/HTML.png"
            alt="HTML5 Logo"
            className="w-24 h-24 rounded-lg shadow-lg object-contain"
            />
            <img
            src="/assets/images/skills/css.svg"
            alt="CSS3 Logo"
            className="w-24 h-24 rounded-lg shadow-lg object-contain"
            />
            <img
            src="/assets/images/skills/Javascript.png"
            alt="JavaScript Logo"
            className="w-24 h-24 rounded-lg shadow-lg object-contain"
            />
        </div>

        <img
            src="/assets/images/skills/powerbi.png"
            alt="Power BI Logo"
            className="w-24 h-24 rounded-lg shadow-lg object-contain"
        />

        <div className="flex gap-4 flex-wrap justify-center">
            <img
            src="/assets/images/skills/mongodb.svg"
            alt="MongoDB Logo"
            className="w-24 h-24 rounded-lg shadow-lg object-contain"
            />
            <img
            src="/assets/images/skills/oracle.svg"
            alt="Oracle Logo"
            className="w-24 h-24 rounded-lg shadow-lg object-contain"
            />
            <img
            src="/assets/images/skills/nextjs.svg"
            alt="Next.js Logo"
            className="w-24 h-24 rounded-lg shadow-lg object-contain"
            />
        </div>
        </div>

         
        </div>
      </div>
    </section>
  );
};
