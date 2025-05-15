import { PageWrapper } from "@/components/page-wrapper";
import { FadeIn } from "@/components/fade-in";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    //   id: 1,
    //   title: "Portfolio Website",
    //   slug: "portfolio-website",
    //   description:
    //     "A high-performance personal portfolio website showcasing my skills, projects, and experience.",
    //   image: "/screenshots/homepage.jpg",
    //   tags: ["Next.js", "Tailwind CSS",  "TypeScript", "Firebase", "Redux"],
    //   features: [
    //     "Developed a high-performance personal portfolio, improving load times by 40% and boosting user engagement.",
    //     "Enhanced UI/UX with Tailwind CSS, reducing development time by 20% and ensuring responsiveness across devices.",
    //     "Implemented Redux for efficient state management across 50+ components, improving data consistency.",
    //   ],
    //   github: "https://github.com/Falcon-J/Portfolio_2.0",
    //   live: "https://portfolio-2-0-seven-theta.vercel.app/",
    // },
    {
      id: 1,
      title: "TravelTrouve",
      slug: "travel-trouve",
      description:
        "A cross-platform travel photo-sharing platform with real-time categorization and geotagging.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["ReactJS", "Node.js", "Firebase", "Firestore", "Agile (Scrum)"],
      features: [
        "Built TravelTrouve, a cross-platform travel photo-sharing platform.",
        "Integrated real-time photo categorization and geotagging, improving content organization efficiency by 60%.",
        "Engineered a collaborative trip-planning feature, allowing users to share itineraries and recommendations, increasing engagement by 35%.",
      ],
      github: "https://github.com/omkarjawalikar/traveltrouve",
      live: "https://traveltrouve.vercel.app",
    },
    {
      id: 2,
      title: "SmartExpense AI",
      slug: "smartexpense-ai",
      description:
        "An AI-powered tool that automatically categorizes expense transaction descriptions using NLP.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Python", "NLP", "Scikit-learn", "React", "Streamlit"],
      features: [
        "Built SmartExpense AI to classify transaction descriptions into expense categories automatically.",
        "Trained an NLP classifier with 85%+ accuracy on labeled transaction data.",
        "Designed an intuitive UI for uploading transaction data and viewing categorized expenses.",
        "Deployed as a Streamlit app for quick user testing and feedback.",
      ],
      github: "https://github.com/omkarjawalikar/smartexpense-ai",
      live: "https://smartexpense-ai.streamlit.app",
    },
  ];

  return (
    <PageWrapper>
      <section className="py-20">
        <div className="container">
          <FadeIn>
            <h1 className="text-4xl font-bold mb-16 text-center text-navy">
              Projects
            </h1>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <FadeIn key={project.id} delay={0.2 + index * 0.1}>
                <Card className="overflow-hidden border-beige hover:shadow-xl transition-all duration-300 group">
                  <div className="h-48 bg-beige relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent"></div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-navy">
                        {project.title}
                      </CardTitle>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-navy hover:bg-beige hover:text-navy"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-navy hover:bg-beige hover:text-navy"
                          asChild
                        >
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <CardDescription className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-navy text-navy"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-navy/80 mb-4">{project.description}</p>
                    <ul className="space-y-2 text-sm text-navy/80">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 text-navy flex-shrink-0"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button
                        className="w-full bg-navy text-cream hover:bg-navy/90"
                        asChild
                      >
                        <Link href={`/projects/${project.slug}`}>
                          View Project Details
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
