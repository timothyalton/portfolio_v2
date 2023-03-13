import React from 'react';
import Head from 'next/head';
import { useState } from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { AiFillLinkedin, AiFillBook, AiFillYoutube, AiFillGithub } from 'react-icons/ai';
import Image from "next/image";
import malton from "../public/malton_logo.png";
import design from "../public/design.png";
import fullstack from "../public/website_design.png";

import funfinance from "../public/funfinancial.gif";
import leaguetracker from "../public/leaguetracker.gif";
import flightguru from "../public/flightguru.gif";
import viruscity from "../public/viruscity.gif";
import typewars from "../public/typewars.gif";
import neblar from "../public/neblarsabotage.gif";

import ImageCard from './components/imageCard';
import ContactMe from './components/ContactMe';

export default function Home() {

  const [isHovering, setIsHovering] = useState('Resume');

  const [darkMode, setDarkMode] = useState(false)

  const onButtonClick = () => {
    fetch('resume_malton.pdf').then(res => {
      res.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'resume_malton.pdf';
        alink.click();
      })
    })
  }

  const handleMouseOver = () => {
    setIsHovering('Download')
  }

  const handleMouseOut = () => {
    setIsHovering('Resume')
  }

  const imageCardObj = [
    {
      title: "League Tracker",
      image: leaguetracker,
      description: "An app to track league of legends stats.",
      demo: "https://www.youtube.com/watch?v=1pCmolcUHWQ&ab_channel=MitchellAlton",
      code: "https://github.com/timothyalton/league_tracker",
      tech: ["Ruby", "Ruby on Rails", "PostgreSQL", "JavaScript", "React.JS", "CSS", "RIOT API", "YouTube API"]
    },
    {
      title: "Fun Financial",
      image: funfinance,
      description: "An app to teach kids credit at a younge age.",
      demo: "https://www.youtube.com/watch?v=-E7yAPN--tk&ab_channel=MitchellAlton",
      code: "https://github.com/timothyalton/Fun-Financial-v2",
      tech: ["Ruby", "Ruby on Rails", "PostgreSQL", "JavaScript", "React.JS", "Hook", "Semantic UI"]
    },
    {
      title: "Flight Guru",
      image: flightguru,
      description: "An app to search what restaurants are near your terminal at the airport",
      demo: "https://www.youtube.com/watch?v=HRak-gZP3Q0&t=173s&ab_channel=MitchellAlton",
      code: "https://github.com/timothyalton/flight-guru-app",
      tech: ["Ruby", "Ruby on Rails", "SQLite3", "JavaScript", "HTML/CSS", "AviationStack API", "Google Places API"]
    },
    {
      title: "Virus City",
      image: viruscity,
      description: "A simulator created with JavaScript to show the rate of infection.",
      demo: "https://www.youtube.com/watch?v=MhRjIXeBixw&ab_channel=SumayaKhair",
      code: "https://github.com/timothyalton/virusCity",
      tech: ["Ruby on Rails", "SQLite3", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Type Wars",
      image: typewars,
      description: "A CLI game built with Ruby to test your words per minute.",
      demo: "https://www.youtube.com/watch?v=QRCCYkc8oMU&t=29s&ab_channel=MitchellAlton",
      code: "https://github.com/timothyalton/Type-Wars-",
      tech: ["Ruby", "AFPlay"]
    },
    {
      title: "Neblar Sabotage",
      image: neblar,
      description: "A CLI app that is a math puzzle game where you need to save your ship and crew.",
      demo: "https://www.youtube.com/watch?v=r4NU2K3ID0M&t=168s&ab_channel=MitchellAlton",
      code: "https://github.com/timothyalton/NeblarSabotage",
      tech: ["C++"]
    }

  ]

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Mitchell Alton Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      </Head>
      <main className=' bg-white px-10 font-burtons md:px-20 lg:px-40 dark:bg-gray-900'>
        <ContactMe />
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>

            <h1 className='text-xl'>Mitchell Alton</h1>
            <ul className='flex items-center'>
              <li>
                {/* <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/> */}
                <BsFillMoonStarsFill onClick={() => alert("Dark Mode In Development...")} className='cursor-pointer text-2xl'/>
              </li>
              <li><button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={onButtonClick} className='bg-gradient-to-r from-cyan-500 to-black bg-cyan-500 text-white px-4 py-2 rounded-md ml-8'>{isHovering}</button></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Mitchell Alton</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Software Engineer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>
              Software Engineer, father, & husband. I'm a Tech enthusiast who loves problem solving.
              I attended a coding bootcamp, Flatiron School, where I learned the amazing world of coding. 
              I am highly motivated and am always open to new opportunities where I can utilize my skills 
              in the creation of meaningful software applications.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a className='hover:text-teal-600' href="https://www.linkedin.com/in/mitchell-alton" target="_blank" alt="LinkedIN" title="LinkedIN"><AiFillLinkedin /></a>
            <a className='hover:text-teal-600' href="https://www.youtube.com/@mitchellalton402" target="_blank" alt="YouTube" title="YouTube"><AiFillYoutube /></a>
            <a className='hover:text-teal-600' href="https://github.com/timothyalton" target="_blank" alt="GitHub" title="GitHub"><AiFillGithub /></a>
          </div>
          <div className='relative mx-auto rounded-full w-80 h-80 mt-20'>
            <Image className="rounded-full w-80 h-80" src={malton} fill="true" style="cover"/>
          </div>
        </section>

        <section>
          <div className=' text-center'>
            <h3 className="text-3xl py-5 md:text-3xl">Technical Skills & Services</h3>
            <p className='text-md py-2 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>
              I have learned a wide variety of technical skills along my journey into the Tech world. 
              I specialize in building full stack web applications. I offer services such as <span className='text-teal-500'>freelance websites, full stack web applications, e-commerce,</span> etc.
            </p>
          </div>
          <div className=' justify-center lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image className='mx-auto' src={design} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Website Design</h3>
              <p className='py-2'>
                Modern website designs built to suit your need. <br /> 
                I use the latest technologies
                to build beautiful static websites. 
              </p>
              <h4 className=' bg-gradient-to-bg-blend-hard-light py-4 text-teal-600'>Technologies I use</h4>
              <p className='text-gray-800 py-1'>HTML</p>
              <p className='text-gray-800 py-1'>CSS</p>
              <p className='text-gray-800 py-1'>JavaScript | React.js</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image className='mx-auto' src={fullstack} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Full Stack Web Applications</h3>
              <p className='py-2'>
                Powerful applications built to serve your needs. <br />
                I have worked on many full stack projects <br /> utilizing modern technologies. 
              </p>
              <h4 className=' bg-radient-to-r from-white via-black to-white py-4 text-teal-600'>Technologies I use</h4>
              <p className='text-gray-800 py-1'>Ruby | Ruby on Rails</p>
              <p className='text-gray-800 py-1'>JavaScript | React.js/Next.js</p>
              <p className='text-gray-800 py-1'>CSS | TailwindCSS | SASS</p>
              <p className='text-gray-800 py-1'>SQL | PostgreSQL | PGAdmin4</p>
              <p className='text-gray-800 py-1'>Python | Django</p>
            </div>
          </div>
        </section>
        <section>
          <div className='text-center'>
            <h3 className='text-3xl py-1 md:text-3xl'>Portfolio</h3>
            <p className='text-md p-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>
              Since the beginning of my journey into the world of programming,
              I have always had a passion for problem solving and have developed projects that have meaning,
              and taught me a lot. Below are some of the projects that I have developed.
            </p>
          </div>
          <div className='flex min-h-screen items-center justify-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10'>
              {imageCardObj.map((card, index) => (
                <ImageCard image={card.image} title={card.title} description={card.description} demo={card.demo} code={card.code} tech={card.tech} />
              ))}
            </div>
          </div>
          
        </section>
        <section className='p-5'>

        </section>
      </main>
    </div>
  )
}
