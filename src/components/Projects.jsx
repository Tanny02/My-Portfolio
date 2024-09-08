import { projects } from "../data";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="flex items-center justify-center text-blue-800 w-[90vw] h-[100vh]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 h-[90%] sm:h-[80%] md:gap-3 cursor-pointer mt-14 lg:mt-20 lg:w-[90%] lg:h-[80%]">
        {projects.map((project) => (
          <motion.div
            whileHover={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            key={project.id}
            className="rounded-xl glassss flex flex-col items-center justify-center p-1 gap-1 sm:p-2 md:p-4 lg:gap-2"
          >
            <h2 className="text-base sm:text-lg md:text-2xl font-semibold">
              -{project.title}-
            </h2>
            <p className="text-xs md:text-base text-center font-light">
              {project.description}
            </p>
            <motion.a
              whileHover={{ scale: 1.1 }}
              className="hover:underline text-xs sm:text-sm md:text-base text-slate-300"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              (View Repository)
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
