import { TextField } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import landingStyle from '../styles/landingpage.module.css'
import { motion } from 'framer-motion'
import { Button } from '../components/button.component'
import Navbar from '../components/navbar.component'
import Router from 'next/router'

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar></Navbar>
      <div className={`h-full
      flex flex-col
      border-amber-300
      bg-[#FF8552]
       text-black drop-shadow-xl`} >
        <div className='w-full justify-start absolute -z-10'>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path stroke="#ffffff" fill="#535b83" fill-opacity="1" d="M0,256L40,266.7C80,277,160,299,240,282.7C320,267,400,213,480,192C560,171,640,181,720,202.7C800,224,880,256,960,261.3C1040,267,1120,245,1200,208C1280,171,1360,117,1400,90.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs>
              {/* <filter id="f2" x="0" y="0" width="200%" height="200%">
                <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
                <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" />
                <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />

              </filter> */}
              <filter id="dropShadow2">
                <feGaussianBlur in="SourceAlpha" stdDeviation="10" />
                <feOffset dx="2" dy="4" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path fill="#E6E6E6" fill-opacity="1" d="M0,256L24,250.7C48,245,96,235,144,213.3C192,192,240,160,288,170.7C336,181,384,235,432,256C480,277,528,267,576,250.7C624,235,672,213,720,170.7C768,128,816,64,864,74.7C912,85,960,171,1008,170.7C1056,171,1104,85,1152,74.7C1200,64,1248,128,1296,176C1344,224,1392,256,1416,272L1440,288L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
          </svg>
        </div>
        {/* <svg height="300" width="300" className='absolute top-[200px] left-[50px] z-10'>
          <defs>
            <filter id="f2" x="0" y="0" width="200%" height="200%">
              <feOffset result="offOut" in="SourceGraphic" dx="0" dy="0" />
              <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" />
              <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
            </filter>
          </defs>
          <circle cx="50" cy="50" r="50" fill="#fcd34d" filter="url(#f2)" />
        </svg> */}
        <div className='h-full w-full flex items-center'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={`w-full h-1/2 flex justify-center text-white`}>
            <div className={`w-1/2 flex flex-col justify-center items-center ${landingStyle.landingpagecard_secondary}`}>
              <p className='text-6xl mb-10 font-bold'>Your calling is calling</p>
              <p className='mb-10 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, deleniti dolor magni itaque laboriosam beatae porro repellendus accusamus optio voluptas! Ducimus labore natus mollitia ut, blanditiis dicta voluptatum culpa aut.</p>
              <div className='flex gap-8 justify-center'>
                <Button
                  className="bg-[#57CC99] px-16 text-xl py-5 rounded-lg text-white tracking-widest"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  buttonText="Job Seeker"></Button>
                <Button
                  className="bg-[#57CC99] px-16 text-xl py-5 rounded-lg text-white tracking-widest"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  buttonText="Recruiter"></Button>
              </div>

            </div>

          </motion.div>


        </div>
        <div className='w-full absolute bottom-0 -z-10'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs>
              <filter id="dropShadow">
                <feGaussianBlur in="SourceAlpha" stdDeviation="10" />
                <feOffset dx="2" dy="4" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/*Skyscraper*/}
            {/* <path filter="url(#dropShadow)" fill="#353638" fill-opacity="1" d="M0,32L0,224L46.5,224L46.5,224L92.9,224L92.9,160L139.4,160L139.4,32L185.8,32L185.8,192L232.3,192L232.3,128L278.7,128L278.7,256L325.2,256L325.2,256L371.6,256L371.6,160L418.1,160L418.1,128L464.5,128L464.5,256L511,256L511,64L557.4,64L557.4,32L603.9,32L603.9,128L650.3,128L650.3,160L696.8,160L696.8,320L743.2,320L743.2,160L789.7,160L789.7,160L836.1,160L836.1,256L882.6,256L882.6,256L929,256L929,224L975.5,224L975.5,32L1021.9,32L1021.9,288L1068.4,288L1068.4,192L1114.8,192L1114.8,96L1161.3,96L1161.3,256L1207.7,256L1207.7,192L1254.2,192L1254.2,224L1300.6,224L1300.6,256L1347.1,256L1347.1,128L1393.5,128L1393.5,32L1440,32L1440,320L1393.5,320L1393.5,320L1347.1,320L1347.1,320L1300.6,320L1300.6,320L1254.2,320L1254.2,320L1207.7,320L1207.7,320L1161.3,320L1161.3,320L1114.8,320L1114.8,320L1068.4,320L1068.4,320L1021.9,320L1021.9,320L975.5,320L975.5,320L929,320L929,320L882.6,320L882.6,320L836.1,320L836.1,320L789.7,320L789.7,320L743.2,320L743.2,320L696.8,320L696.8,320L650.3,320L650.3,320L603.9,320L603.9,320L557.4,320L557.4,320L511,320L511,320L464.5,320L464.5,320L418.1,320L418.1,320L371.6,320L371.6,320L325.2,320L325.2,320L278.7,320L278.7,320L232.3,320L232.3,320L185.8,320L185.8,320L139.4,320L139.4,320L92.9,320L92.9,320L46.5,320L46.5,320L0,320L0,320Z"></path> */}
            <path fill="#297373" fill-opacity="1" d="M0,256L24,250.7C48,245,96,235,144,213.3C192,192,240,160,288,170.7C336,181,384,235,432,256C480,277,528,267,576,250.7C624,235,672,213,720,170.7C768,128,816,64,864,74.7C912,85,960,171,1008,170.7C1056,171,1104,85,1152,74.7C1200,64,1248,128,1296,176C1344,224,1392,256,1416,272L1440,288L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
          </svg>
        </div>
        {/* <div className='w-1/2 h-full flex items-center justify-center'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center text-white">
            <div className={`w-1/2 text-center ${landingStyle.landingpagecard_primary}`}>
              <p className='text-6xl mb-10 font-bold '>Your calling is calling</p>
              <p className='mb-10 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, deleniti dolor magni itaque laboriosam beatae porro repellendus accusamus optio voluptas! Ducimus labore natus mollitia ut, blanditiis dicta voluptatum culpa aut.</p>
              <Button
                className="bg-blue-700 px-16 text-xl py-5 rounded-lg text-white tracking-widest"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                buttonText="Recruiter"></Button>
            </div>

          </motion.div>
        </div> */}
        {/* <motion.div

          className={`w-1/2 text-left mb-[2rem] text-white`}>
          <motion.div
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='text-[3rem] font-bold pb-7 uppercase'>Welcome to YOUR last portfolio builder.</h1>
          </motion.div>
        </motion.div> */}
        {/* <div className=''>

          <div className='flex justify-between gap-8 h-full'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className={`flex w-1/2 text-white`}>
              <div className={`w-1/2 ${landingStyle.landingpagecard}`}>
                <p className='text-6xl mb-10 font-bold'>Your calling is calling</p>
                <p className='mb-10 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, deleniti dolor magni itaque laboriosam beatae porro repellendus accusamus optio voluptas! Ducimus labore natus mollitia ut, blanditiis dicta voluptatum culpa aut.</p>

              <Button
                className="bg-blue-700 px-16 text-xl py-5 rounded-lg text-white tracking-widest"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                buttonText="Job Seeker"
                onClick={() => Router.push('/profiles')}
                ></Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-1/2 text-white flex justify-end">
              <div className={`w-1/2 text-right ${landingStyle.landingpagecard}`}>
                <p className='text-6xl mb-10 font-bold '>Your calling is calling</p>
                <p className='mb-10 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, deleniti dolor magni itaque laboriosam beatae porro repellendus accusamus optio voluptas! Ducimus labore natus mollitia ut, blanditiis dicta voluptatum culpa aut.</p>
                <Button
                  className="bg-blue-700 px-16 text-xl py-5 rounded-lg text-white tracking-widest"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  buttonText="Recruiter"></Button>
              </div>

            </motion.div>

          </div>
        </div> */}

      </div>


    </div>

  )
}
