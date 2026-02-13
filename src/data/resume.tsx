import { Icons } from "@/components/icons";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Docker } from "@/components/ui/svgs/docker";
import { Golang } from "@/components/ui/svgs/golang";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Python } from "@/components/ui/svgs/python";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Nasif Fuad",
  initials: "NF",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Product Engineer with a background in marketing and supply chain, focused on building reliable products and improving go-to-market and distribution strategy.",
  summary:
    "Product-minded builder bridging design, engineering, and business strategy. Currently developing full-stack landing pages and e-commerce solutions at Buildora Studio while shaping content and go-to-market strategies at The Tork. Combining hands-on technical development with supply chain and operations knowledge from University of Liberal Arts Bangladesh. Passionate about user-centered design, growth marketing, and building products that solve real problems through the intersection of engineering, design thinking, and data-driven decision making.",
  avatarUrl: "https://media.licdn.com/dms/image/v2/D5603AQGaNYvWSh-yqA/profile-displayphoto-scale_400_400/B56ZrKs.SoK4Ak-/0/1764337383649?e=1772668800&v=beta&t=DRxKfMeLRtQXQGfpdeiZ17wlp_W-Oi6PQYr3KzwVpgQ",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "C++", icon: Csharp }
    ,
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nf-714",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nasif-fuad-5bba61186/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/nasif_dev",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:nasif.fuad.arif@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Buildora Studio",
      badges: [],
      href: "https://buildorastudio.com",
      location: "Remote",
      title: "Founder",
      logoUrl: "/buildora.svg",
      start: "January 2026",
      end: "Ongoing",
        description:
          "Building Buildora Studio, delivering premium landing pages and e-commerce development for D2C brands to strengthen digital presence and conversion.",
    },
    {
      company: "The Tork",
      href: "https://www.thetork.com",
      badges: [],
      location: "Remote",
      title: "Marketing Executive",
      logoUrl: "/tork.svg",
      start: "September 2025",
      end: "Ongoing",
      description:
        "Creating content for the Tork's social media platforms and managing the company's online presence. Developing and implementing content strategies to enhance brand visibility and engagement. Writing and editing blog posts, social media content, and other marketing materials to support the company's marketing efforts.",
    },
  
  ],
  education: [
 
    {
      school: "University of Liberal Arts ",
      href: "https://www.ulab.edu.bd",
      degree: "Bachelor's of Business Administration in Supply Chain Management",
      logoUrl: "/ulab.svg",
      start: "2022",
      end: "2027",
    },
    {
      school: "University of Liberal Arts",
      href: "https://www.ulab.edu.bd",
      degree: "Bachelor's of Computer Science (Minor)",
      logoUrl: "/ulab.svg",
      start: "2022",
      end: "2027",
    },
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s5",
      logoUrl: "/buildspace.jpg",
      start: "2024",
      end: "2024",
    }

  ],
  projects: [
    {
      title: "EcommerX - Coming Soon",
      href: "https://ecmmerx.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Ecommerks is a platform that allows users to create and manage their own ecommerce store. It will have a lot of features like product management, order management, inventory management, customer management, etc.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Shopify"
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Salsey AI - Coming Soon",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "AI Agent for handling facebook, instagram and website's queries and customer support.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "FastAPI",
        "Langchain",
        "Facebook",
        "Instagram",
        "Website",
        "Customer Support",
        "AI Agent"
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Buildora OS",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
         "It's an platform for agency owners to manage their clients, projects, and invoices.",
      technologies: [
        "Next.js",
        "Typescript",
        "React",
        "TailwindCSS",
        "Shadcn UI",
        "React Native",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Productivity Hunter",
      href: "https://ecmmerx.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "An SaaS for managing your time, project and tasks.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Shopify"
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  
  ],

} as const;
