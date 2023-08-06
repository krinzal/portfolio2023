"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import LocalFont from "next/font/local";
const stylish = LocalFont({ src: "../assets/fonts/mitera.otf" });
import { delay, motion } from "framer-motion";
import Reveal from "@/components/reveal";
import Transform from "@/components/transformy";
import Transformx from "@/components/transformx";
import { useState, useEffect } from "react";
import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import Image from "next/image";
import Link from "next/link";
import Imgreveal from "@/components/img";
import Imgscale from "@/components/imgscale";
import Lenis from "@studio-freight/lenis";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis(
      {duration:3, smoothTouch:true}
    );

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const [Theme, setTheme] = useState("");
  return (
    <main
      className={`${Theme === "dark" ? "darkmode" : ""} bg-main text-mainw`}
    >
      <Reveal>
        <div
          className={`flex w-screen  items-center uppercase px-[6.3vw] py-[3.4vw] lg:py-[1.4vw] lg:text-[1.5vw] lg:leading-[1.6vw] leading-[2.6vw] text-[2.5vw] justify-between`}
        >
          <h1>Krinzal</h1>
          <h1>Web Developer</h1>
        </div>
      </Reveal>

      <div className="main w-full pl-8 pr-12 overflow-hidden">
        {/* <p className="py-4 text-center mb-4 text-3xl ">Hi I am Ruff !</p> */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="marquee my-12 mt-24"
        >
          <h1
            className={`${stylish.className} marquee__content text-[17vw] lg:text-[11.5vw]`}
          >
            {" "}
            Take action{" "}
          </h1>
          <h1
            className={`${stylish.className} marquee__content text-[17vw] lg:text-[11.5vw]`}
          >
            {" "}
            Take action{" "}
          </h1>
        </motion.div>
        <div className="lg:mt-32 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-3"
          >
            <Link href="https://discord.com/users/1034313558017712128">
              <FontAwesomeIcon
                icon={faDiscord}
                className="text-mainw md:text-2xl "
              />
            </Link>
          </motion.div>

          <div className="text-[0.8rem] py-4">
            <Reveal>
              <p className=""> scroll to know more </p>
            </Reveal>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-3"
          >
            <Link href="https://github.com/krinzal">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-mainw md:text-2xl"
              />
            </Link>
          </motion.div>
        </div>

        <div className="whatido flex flex-col items-start text-left p-2 mt-20 text-[7.2vw] leading-[7.35vw] md:text-[3.4vw] uppercase md:leading-[3.65vw]">
  <Reveal>I am currently</Reveal>
  <Reveal>exploring, learning,</Reveal>
  <Reveal>and trying to build</Reveal>
  
  <Reveal> some Amazing Websites.</Reveal>
        </div>

        <div
          className={`batman flex w-full  justify-center md:justify-end  ${
            Theme === "" ? "invert-0" : "invert"
          }`}
        >
          <Transform>
            <svg
              className=" md:h-[512px] h-[80vw] max-[382px]:h-[60vw] max-[382px]:w-[60vw] w-[80vw] md:m-[-70px] p-0 "
              onClick={() => (Theme === "" ? setTheme("dark") : setTheme(""))}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="auto"
              height="auto"
            >
              <path d="M 16 13.394531 C 16.492188 13.394531 16.613281 13.511719 16.613281 13.511719 L 16.859375 12.488281 C 16.859375 12.488281 17.105469 13.394531 17.105469 14.191406 C 17.230469 14.875 18.585938 14.417969 19.691406 14.191406 C 20.921875 13.964844 21 11.972656 21 11.972656 L 32 11.972656 C 32 11.972656 25.398438 13.996094 27 17.972656 C 27 17.972656 17.476563 16.464844 16 22.03125 C 14.523438 16.464844 5 17.972656 5 17.972656 C 6.601563 13.996094 0 11.972656 0 11.972656 L 11 11.972656 C 11 11.972656 11.078125 13.964844 12.183594 14.191406 C 13.292969 14.417969 14.769531 14.875 14.769531 14.191406 C 14.894531 13.511719 15.015625 12.488281 15.015625 12.488281 L 15.261719 13.511719 C 15.386719 13.511719 15.632813 13.394531 16 13.394531 Z" />
            </svg>
          </Transform>
        </div>

        <div className="">
          <Reveal>
            <p
              className={`text-6xl font-bold  pt-6 text-[7.2vw] leading-[7.35vw] md:text-[4.4vw] uppercase md:leading-[3.65vw] ${stylish.className}`}
            >
              My Works
            </p>
          </Reveal>

          <Transformx>
            <hr className=" w-full  bg-mainw h-[4px] mt-2" />
          </Transformx>
        </div>

        <div className="works mt-6">
          <div className="flex-col md:flex-row flex justify-between gap-5 overflow-hidden">
            <Imgreveal>
              <div className="md:min-w-[40%] w-full  md:max-w-[100%] filter grayscale overflow-hidden">
                <Link href="https://krinzal.github.io">
                  <Imgscale>
                    <Image src={p1} alt={"first react project"} />
                  </Imgscale>
                </Link>
              </div>
            </Imgreveal>
            <div className="md:w-[40%] flex mt-1 ">
              <div className="flex md:flex-col w-full  items-center flex-row md:justify-between justify-around">
                <h1
                  className={`${stylish.className} mt-[-1rem] font-bold md:text-3xl flex flex-col justify-center items-center tracking-wider`}
                >
                  <Reveal>
                    <h1 className="pt-4">05/12</h1>
                  </Reveal>
                  <Reveal>
                    <h1 className="pt-4">2023</h1>
                  </Reveal>
                </h1>

                <h1 className="uppercase pl-6 font-bold md:text-3xl flex flex-col justify-center items-center md:items-start">
                  <Reveal>
                    <h1>First</h1>
                  </Reveal>
                  <Reveal>
                    <h1>React</h1>
                  </Reveal>
                  <Reveal>
                    <h1>Project</h1>
                  </Reveal>
                </h1>
              </div>
            </div>
          </div>
          <Transformx>
            <hr className=" w-full  bg-mainw h-[4px] my-6" />
          </Transformx>
          <div className="flex-col md:flex-row flex justify-between gap-5 overflow-hidden">
            <Imgreveal>
              <div className="md:min-w-[90%] w-full  md:max-w-[100%] filter grayscale overflow-hidden">
                <Link href="https://stevie6969.vercel.app">
                  <Imgscale>
                    <Image src={p2} alt={"first react project"} />
                  </Imgscale>
                </Link>
              </div>
            </Imgreveal>
            <div className="md:w-[40%] flex mt-1 ">
              <div className="flex md:flex-col w-full  items-center flex-row md:justify-between justify-around">
                <h1
                  className={`${stylish.className} mt-[-1rem] font-bold md:text-3xl flex flex-col justify-center items-center tracking-wider`}
                >
                  <Reveal>
                    <h1 className="pt-4">07/20</h1>
                  </Reveal>
                  <Reveal>
                    <h1 className="pt-4">2023</h1>
                  </Reveal>
                </h1>

                <h1 className="uppercase pl-6 font-bold md:text-3xl flex flex-col justify-center items-center md:items-start">
                  <Reveal>
                    <h1>client</h1>
                  </Reveal>
                  <Reveal>
                    <h1>Project</h1>
                  </Reveal>
                  {/* <Reveal><h1>for</h1></Reveal> */}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <Transformx>
          <hr className=" w-full  bg-mainw h-[4px] my-6" />
        </Transformx>

        <div className="final uppercase">
          <Reveal>
            <p
              className={` font-bold  pt-6 text-[7.2vw] leading-[7.35vw] md:text-[4.4vw] uppercase md:leading-[3.65vw] ${stylish.className}`}
            >
              Final Words
            </p>
          </Reveal>

          <div className="whatido flex flex-col items-start text-left p-2 mt-10 text-[5.2vw] leading-[5.35vw] md:text-[2.4vw] uppercase md:leading-[3.65vw]">
            <Reveal>This website is </Reveal>
            <Reveal>heavily inspired by</Reveal>
            <Reveal>
              <Link
                className={` underline  font-bold outline-1`}
                href="https://sam-phlix.com"
              >
                Sam Plix's
              </Link>{" "}
              Website.{" "}
            </Reveal>
          </div>

          <div className="whatido flex flex-col items-start text-left p-2 mt-5 text-[4.2vw] leading-[4.35vw] md:text-[1.9vw] uppercase md:leading-[3.65vw]">
            <Reveal>All credit goes to him</Reveal>
            <Reveal>for this awesome design.</Reveal>
          </div>
        </div>
        <Transformx>
          <hr className=" w-full  bg-mainw h-[4px] my-6" />
        </Transformx>

        <div className="flex md:flex-row flex-col justify-between items-center">
          <Reveal>
            <div>
              <p>krinzal@duck.com</p>
            </div>
          </Reveal>
          <div className="flex gap-4">
            <Reveal>
              <Link href="https://www.youtube.com/channel/UC0kc72Ix5B3NchytoT88dJA">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-mainw md:text-xl"
                />
              </Link>
            </Reveal>

            <Reveal>
              <Link href="https://discord.com/users/1034313558017712128">
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="text-mainw md:text-xl "
                />
              </Link>
            </Reveal>

            <Reveal>
              <Link href="https://www.instagram.com/krinzal_46/">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-mainw md:text-xl "
                />
              </Link>
            </Reveal>

            <Reveal>
              <Link href="https://github.com/krinzal">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-mainw md:text-xl "
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}
