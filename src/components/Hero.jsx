import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="Home"
      className="flex items-center justify-center text-blue-800 w-[100vw] h-[100vh]"
    >
      <motion.div
        className="border w-[120px] h-[120px] lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px] sm:w-[150px] sm:h-[150px] absolute top-[100px] lg:-top-[100px] md:-top-[100px] sm:top-[100px] -z-20"
        initial={{ opacity: 0, scale: 0, borderRadius: 50, rotateZ: 360 }}
        animate={{
          opacity: 1,
          scale: 1,
          borderRadius: 0,
          rotateZ: 0,
        }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      >
        <motion.div
          className="border w-[120px] h-[120px] lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px] sm:w-[150px] sm:h-[150px]"
          initial={{ opacity: 0, scale: 0, borderRadius: 100, rotateZ: 360 }}
          animate={{
            opacity: 1,
            scale: 1,
            borderRadius: 0,
            rotateZ: 0,
          }}
          transition={{
            duration: 5,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <motion.div
            className="border w-[120px] h-[120px] lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px] sm:w-[150px] sm:h-[150px]"
            initial={{
              opacity: 0,
              scale: 0,
              borderRadius: 150,
              rotateZ: 360,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              borderRadius: 0,
              rotateZ: 0,
            }}
            transition={{
              duration: 5,
              delay: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <motion.div
              className="border w-[120px] h-[120px] lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px] sm:w-[150px] sm:h-[150px]"
              initial={{
                opacity: 0,
                scale: 0,
                borderRadius: 200,
                rotateZ: 360,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                borderRadius: 0,
                rotateZ: 0,
              }}
              transition={{
                duration: 5,
                delay: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <motion.div
                className="border w-[120px] h-[120px] lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px] sm:w-[150px] sm:h-[150px]"
                initial={{
                  opacity: 0,
                  scale: 0,
                  borderRadius: 200,
                  rotateZ: 360,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  borderRadius: 0,
                  rotateZ: 0,
                }}
                transition={{
                  duration: 5,
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <motion.div
                  className="border w-[120px] h-[120px] lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px] sm:w-[150px] sm:h-[150px]"
                  initial={{
                    opacity: 0,
                    scale: 0,
                    borderRadius: 200,
                    rotateZ: 360,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    borderRadius: 0,
                    rotateZ: 0,
                  }}
                  transition={{
                    duration: 5,
                    delay: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <motion.div
                    className="border w-[120px] h-[120px] lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px] sm:w-[150px] sm:h-[150px]"
                    initial={{
                      opacity: 0,
                      scale: 0,
                      borderRadius: 200,
                      rotateZ: 360,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      borderRadius: 0,
                      rotateZ: 0,
                    }}
                    transition={{
                      duration: 5,
                      delay: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    <motion.div
                      className="border w-[120px] h-[120px] lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px] sm:w-[150px] sm:h-[150px]"
                      initial={{
                        opacity: 0,
                        scale: 0,
                        borderRadius: 200,
                        rotateZ: 360,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        borderRadius: 0,
                        rotateZ: 0,
                      }}
                      transition={{
                        duration: 5,
                        delay: 3.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <motion.div
                        className="border w-[120px] h-[120px] lg:w-[300px] lg:h-[300px] md:w-[250px] md:h-[250px] sm:w-[150px] sm:h-[150px]"
                        initial={{
                          opacity: 0,
                          scale: 0,
                          borderRadius: 200,
                          rotateZ: 360,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          borderRadius: 0,
                          rotateZ: 0,
                        }}
                        transition={{
                          duration: 5,
                          delay: 4,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      ></motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="flex items-center justify-center flex-col gap-4">
        <motion.h1
          initial={{ x: -800, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 2,
            type: "spring",
            damping: 10,
          }}
          className="gradienttt text-center text-4xl sm:text-6xl lg:text-8xl font-bold"
        >
          Tanish Marick
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 3,
          }}
          className="text-center text-base md:text-xl lg:text-3xl font-semibold text-slate-600"
        >
          Focused on Delivering Elegant Web Experiences
        </motion.p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#About"
          className="flex items-center justify-center text-slate-50 bg-blue-800 p-2 rounded-md w-28"
        >
          Learn More
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
