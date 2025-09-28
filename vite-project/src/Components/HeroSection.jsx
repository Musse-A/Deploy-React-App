import { ArrowDown } from "lucide-react";


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
           I’m excited to bring together my strong analytical skills and background in software engineering and biology to build practical, sustainable solutions that make a real difference in the world.
        </p>
        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
                View My Work
            </a>
        </div>

    </div>
</div>
<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
<span className="text-med text-muted-foreground mb-2">Scroll</span>
<ArrowDown className="h-5 w-5 text-primary text-align"/>
</div>

</section>
);
};

