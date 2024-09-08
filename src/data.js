const navItems = ["Home", "About", "Projects", "Contact"];

const about = [
  "Hi, I’m a Computer Science graduate with a strong foundation in software development. My passion lies in building dynamic, user-centric web applications. Over the past few years, I have honed my skills in both frontend and backend technologies, primarily focusing on the MERN stack and Next.js.",
  "With hands-on experience in developing responsive, high-performance web applications, I’m proficient in JavaScript, React, Node.js, and MongoDB. I have completed several projects that demonstrate my ability to build and maintain scalable, efficient web solutions. My interests also extend to learning new technologies and improving UX through seamless design and smooth functionality.",
  "I’m currently seeking opportunities to apply my knowledge in a challenging, frontend or full-stack development role. Having spent a gap year upskilling, I’m confident in my ability to adapt to new environments, solve complex problems, and contribute meaningfully to any team.",
];

const techStack = [
  {
    category: "Frontend",
    items: [
      {
        label: "Languages",
        skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
      },
      {
        label: "Frameworks/Libraries",
        skills: [
          "React.js",
          "Next.js",
          "Three.js",
          "Tailwind CSS",
          "Framer Motion",
          "Material-UI",
        ],
      },
      { label: "Tools", skills: ["Vite"] },
      {
        label: "State Management",
        skills: [
          "Redux",
          "Context API",
          "Formik",
          "React Query",
          "Styled Components",
        ],
      },
    ],
  },
  {
    category: "Backend",
    items: [
      { label: "Languages", skills: ["JavaScript (Node.js)", "TypeScript"] },
      {
        label: "Frameworks",
        skills: ["Express.js", "Next.js (API routes)", "Socket.io"],
      },
      { label: "Databases", skills: ["MongoDB", "Mongoose"] },
      {
        label: "Authentication",
        skills: ["JWT", "OAuth", "NextAuth"],
      },
      { label: "API Design", skills: ["RESTful APIs"] },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { label: "Version Control", skills: ["Git", "GitHub"] },
      { label: "Containerization", skills: ["Docker"] },
      { label: "Testing", skills: ["Jest"] },
      {
        label: "Hosting Platforms",
        skills: ["Vercel", "Netlify"],
      },
    ],
  },
];

const projects = [
  {
    id: 1,
    title: "JS-Projects",
    description:
      "A collection of JavaScript projects showcasing core concepts, algorithms, and DOM manipulation techniques.",
    githubLink: "https://github.com/Tanny02/JS-Projects.git",
  },
  {
    id: 2,
    title: "React-Projects",
    description:
      "Diverse React applications demonstrating component-based architecture, hooks, and state management with modern libraries.",
    githubLink: "https://github.com/Tanny02/React-Projects.git",
  },
  {
    id: 3,
    title: "Portfolios",
    description:
      "Collection of personal portfolio designs built using modern web technologies, including animations and responsive layouts.",
    githubLink: "https://github.com/Tanny02/Portfolio-Websites.git",
  },
  {
    id: 4,
    title: "MERN Stack",
    description:
      "Full-stack applications leveraging MongoDB, Express.js, React, and Node.js for dynamic web development.",
    githubLink: "https://github.com/Tanny02/MERN.git",
  },
  {
    id: 5,
    title: "Next JS",
    description:
      "Projects utilizing Next.js for server-side rendering, static site generation, and API route handling.",
    githubLink: "https://github.com/Tanny02/NEXTjs.git",
  },
  {
    id: 6,
    title: "CRUD API",
    description:
      "RESTful API projects implementing Create, Read, Update, Delete operations using Node.js and MongoDB.",
    githubLink: "https://github.com/Tanny02/CRUD-API.git",
  },
];

export { navItems, projects, about, techStack };
