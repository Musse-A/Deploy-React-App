export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
       <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
       Featured
        <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-8">A showcase of my key projects demonstrating diverse skills and technologies.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Project 1 */}
          <article className="gradient-border rounded-lg overflow-hidden card-hover shadow-lg bg-card">
            <img
              src="/assets/projects/RealEstateProject.png"
              alt="Real Estate Website"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2">Real Estate Website</h3>
              <p className="text-muted-foreground mb-2">
                Developed a fully responsive real estate platform using JavaScript and MySQL,
                featuring backend database integration for seamless property listing management.
              </p>
              <p className="font-medium mb-1">Role: Full-stack developer</p>
              <p className="text-muted-foreground">
                Outcome: Enhanced user experience and simplified property management for clients.
              </p>
            </div>
          </article>

          {/* Project 2 */}
          <article className="gradient-border rounded-lg overflow-hidden card-hover shadow-lg bg-card">
            <img
              src="/assets/projects/BugCatcherGame.png"
              alt="Bug Catcher Game"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2">Bug Catcher – HTML Browser Game</h3>
              <p className="text-muted-foreground mb-2">
                Created an interactive browser-based game using HTML, CSS, and JavaScript,
                where users catch animated bugs within a time limit.
              </p>
              <p className="font-medium mb-1">Role: Game designer and front-end developer</p>
              <p className="text-muted-foreground">
                Outcome: Delivered an engaging, lightweight game demonstrating DOM manipulation and event handling.
              </p>
            </div>
          </article>

          {/* Project 3 */}
          <article className="gradient-border rounded-lg overflow-hidden card-hover shadow-lg bg-card">
            <img
              src="/assets/projects/atm.png"
              alt="ATM Simulator"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2">ATM Simulator (C#)</h3>
              <p className="text-muted-foreground mb-2">
                Built a fully functional ATM simulator in C#, supporting multiple users, secure data validation, and transaction history logging.
              </p>
              <p className="font-medium mb-1">Role: Software developer</p>
              <p className="text-muted-foreground">
                Outcome: Applied object-oriented programming principles to simulate real-world banking operations with robust user account management.
              </p>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};
