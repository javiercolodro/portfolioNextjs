"use client";
import React, { useState, useRef } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
//ACA TENEMOS QUE AGREGAR LAS RUTAS HACIA EL GITHUB DE CADA PROYECTO Y AL SITIO
const projectsData = [
  {
    id: 1,
    title: "TMDB",
    description:
      "The Movie Database is an app where you can see the latest films and series currently airing, as well as upcoming movies and series. Customers can register and easily store their favorite shows.",
    image: "/images/projects/tmdb.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Javierdigital85/tmdb/tree/main/src",
    previewUrl: "https://github.com/Javierdigital85/tmdb/tree/main/api",
    web: "https://tmdb-app-gfkr.onrender.com/",
  },
  {
    id: 2,
    title: "House of Dev",
    description:
      "House Of Dev App is an application where you can rent or buy properties within Argentina and visit the properties that the customer is interested in.",
    image: "/images/projects/houseOfDev.png",

    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/hernanortiz18/houseOfDev-src/tree/develop/Front",
    previewUrl: "https://github.com/Javierdigital85/houseOfDev",
    web: "",
  },
  {
    id: 3,
    title: "Delivery App",
    description:
      "Box App is a mobile delivery application where the admin can monitor daily operations, assign or reassign packages as necessary, and edit shipments to modify addresses or change delivery personnel.",
    image: "/images/projects/boxApp.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/javiertrombetta/p5-box-front",
    previewUrl: "https://github.com/javiertrombetta/p5-box-back",
    web: "",
  },
  {
    id: 4,
    title: "Portfolio",
    description:
      "This portfolio serves as a snapshot of my journey as a developer, showcasing a diverse range of projects that I've undertaken. Each project is a testament to my adaptability and dedication to learn and mastering new technologies. Whether it's creating responsive web designs, developing interactive mobile apps, or implementing frontend and backend solutions.",
    image: "/images/projects/portfolioia.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Javierdigital85/portfolioNextjs",
    previewUrl:
      "https://github.com/Javierdigital85/portfolioNextjs/tree/main/portfolio-website/app/api/send",
    web: "https://lorenzojaviercolodro.vercel.app/",
  },
  {
    id: 5,
    title: "To Do List",
    description:
      "This is a to-do-app using the PERN stack.It also has a user registration and once registered you have to login to use the app.You can store many duties as you want and plans for your weekend and month.What I like about this project is that I have leart to implement testing.In the backend there are Unit Tests made with Jest and Integration testing with Supertest and Jest.For the frontend I worked with Cypress to do a E2E testing and try out every functionality for many users at the same time and works amazingly",
    image: "/images/projects/doalist.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Javierdigital85/Front-ToDoApp",
    previewUrl: "https://github.com/Javierdigital85/Back-ToDoApp-",
    web: "https://front-todoapp.onrender.com",
  },
  {
    id: 6,
    title: "My favourites videos",
    description:
      "This is a video gallery where you can store all your favorite videos and manage your personal video preferences by copy and paste the video url. The technologies I implemented includes React Vite, Node.js, PostgreSQL, Tailwind CSS, and TypeScript.",
    image: "/images/projects/videos.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/Javierdigital85/front-videos-reactvite-typescript-tailwind",
    previewUrl:
      "https://github.com/Javierdigital85/back-videos-node-postgres-typescript",
    web: "https://front-videos-reactvite-typescript.onrender.com",
  },
  // comunidad Perros & Gatos
  {
    id: 7,
    title: "Comunidad Perros&Gatos",
    description:
      "This is an international collaborative project involving team members from different countries, where we developed an adoption app. In this app, users can register, log in, request adoptions from shelters, and approve or disapprove applications. The main technologies we implemented include React Vite, Node.js, PostgreSQL, Material UI, and TypeScript.",
    image: "/images/projects/perros&gatos.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/No-Country-simulation/c21-18-m-node-react/tree/develop/frontend",
    previewUrl:
      "https://github.com/No-Country-simulation/c21-18-m-node-react/tree/develop/backend",
    web: "",
  },
  {
    id: 8,
    title: "Klowhub",
    description:
      "Klowhub is an innovative educational platform where users can create projects, purchase courses, and access applications, fostering a dynamic learning ecosystem. Designed as part of a Hackathon challenge, Klowhub aims to provide an interactive space for knowledge sharing, skill development, and collaboration within a digital environment.",
    image: "/images/projects/klowhub.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl:
      "https://github.com/No-Country-simulation/h3-03-klowhub/tree/main/frontend",
    previewUrl:
      "https://github.com/No-Country-simulation/h3-03-klowhub/tree/main/backend",
  },
  {
    id: 9,
    title: "Pokemon App",
    description:
      "This is a pokemon game where you have to guess the pokemon by their image.The appication was developed with VUE.JS Traditional: Options API.",
    image: "/images/projects/charmanderOff.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Javierdigital85/vue-pokemon-game",
    previewUrl: "https://github.com/Javierdigital85/vue-pokemon-game",
    web: "https://vue-pokemon-game-selection.netlify.app/",
  },
  {
    id: 9,
    title: "Music Ecommerce instruments",
    description:
      "This is a fullstack e-commerce application built with a modern stack: Node.js (Express) for the backend, React 19 with Vite and Tailwind CSS for the frontend, and PostgreSQL for data storage. The platform features user authentication, product management, shopping cart functionality, order processing, and secure payment integration with MercadoPago. It also includes a Large Language Model (LLM)-powered chatbot for enhanced customer support and product search. The project leverages TypeScript, DaisyUI, and cloud services for media management, providing a scalable and responsive shopping experience.",
    image: "/images/projects/musicEcommerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.dev/Javierdigital85/Frontend-ecommerce",
    previewUrl: "https://github.dev/Javierdigital85/Backend-ecommerce",
    web: "https://frontend-ecommerce-h7j0.onrender.com",
    inDevelopment: false,
  },
    {
    id: 10,
    title: "Pizzeria AWS CDK",
    description:
      "A serverless pizza-ordering backend built with AWS CDK in TypeScript. It exposes a REST API to create and retrieve orders, processing them asynchronously through an event-driven pipeline using API Gateway, Lambda, DynamoDB, and SQS. Orders flow through queues and streams to be prepared and dispatched automatically.",
    image: "/images/projects/aws-cdk-pizza.png",
    tag: ["All", "AWS Serverless"],
    gitUrl: "",
    previewUrl: "https://github.com/Javierdigital85/pizzeria-aws-cdk",
    web: "",
  },
  {
    id: 11,
    title: "Travel World",
    description:
      "This is a fullstack travel e-commerce application built with React, AWS CDK, and serverless technologies. It features user authentication with Cognito, product and booking management, a personalized travel experience, shopping cart functionality, and a modern, responsive design.",
    image: "/images/projects/travelWorldPicture.png",
    tag: ["All", "Web", "Mobile", "AWS Serverless"],
    gitUrl: "https://github.com/Javierdigital85/front-webapp",
    previewUrl: "https://github.com/Javierdigital85/infra-webapp",
    web: "",
    inDevelopment: true,
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-6">
      <div className="flex justify-center mt-10 mb-6 md:mb-8">
        <div className="inline-block">
          <h2
            id="projects"
            className="text-center text-4xl font-bold text-white"
          >
            My Projects
          </h2>
          <div className="h-1 bg-blue-500 rounded mt-2" />
        </div>
      </div>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AWS Serverless"
          isSelected={tag === "AWS Serverless"}
        />
      </div>
      <ul
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectsCard
              key={project.id}
              imgUrl={project.image}
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              web={project.web}
              inDevelopment={project.inDevelopment}
              tag={project.tag}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
