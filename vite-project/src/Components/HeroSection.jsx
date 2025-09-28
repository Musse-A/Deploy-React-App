

export const HeroSection = () => {
return (
<section 
    id="hero" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4"
> 
<div className="container max-w-4xl mx-auto text-center z-10">
    <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight" >
          <span className="opacity-0 animate-fade-in">Hello, I'm </span>
          <span className="text-primary opacity-0 animate-fade-in-delay-1">Ayan </span>
          <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Musse</span>
        </h1>
        <p className="text-lg text-primary md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            <b>Welcome!</b>
        </p>
        <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I’m Ayan, a motivated <b>Software Engineering Student</b> and <b>Biological Sciences Graduate</b>.
            Dive into my world of innovative projects, technical skills, and my
            passion for problem-solving.
        </p>
        <p className="text-lg text-primary md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          <b>Mission Statement:</b>
        </p>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
           To apply my strong analytical skills, combined with my background in software
            engineering and biological sciences, to create impactful, sustainable solutions that
            drive real-world change.
        </p>
        <div>
            <a href="#projects" className="cosmic-button">
                View My Work
            </a>
        </div>
    </div>
</div>

</section>
);
};

