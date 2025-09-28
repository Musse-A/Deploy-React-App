export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
          Education
        </h2>
        <div className="grid grid-cols-1 gap-10 max-w-3xl mx-auto text-left">

          <article className="gradient-border p-6 card-hover">
            <h3 className="text-xl font-semibold mb-2">
              Advanced Diploma: Software Engineering Technology CO-OP
            </h3>
            <p className="text-muted-foreground mb-1">
              Centennial College, Toronto, ON
            </p>
            <p className="mb-1">Expected Graduation: April 2026</p>
            <p className="font-medium">Current GPA: 4.3/4.5</p>
          </article>
          
          <article className="gradient-border p-6 card-hover">
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of Science: Biological Science
            </h3>
            <p className="text-muted-foreground mb-1">Minor: Sociology</p>
            <p className="text-muted-foreground mb-1">University of Guelph, Guelph, ON</p>
            <p className="mb-1">September 2018 - April 2023</p>
          </article>
          
          <article className="gradient-border p-6 card-hover">
            <h3 className="text-xl font-semibold mb-2">Certifications</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>
                Data Engineering on Microsoft Azure | Microsoft — <span className="font-medium">In-Progress</span>
              </li>
              <li>
                Introduction to Azure Fundamentals | Microsoft — <span className="font-medium">In-Progress</span>
              </li>
            </ul>
          </article>

        </div>
      </div>
    </section>
  );
};
