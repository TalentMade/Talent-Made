import { TextField } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import landingStyle from '../styles/landingpage.module.css'
import { motion } from 'framer-motion'
import { Button } from '../components/button.component'
import Navbar from '../components/navbar.component'

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar></Navbar>
      <div className={`h-full
      flex flex-row
      ${landingStyle.landingbggradient}
       text-black drop-shadow-xl`} >
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
                  buttonText="Job Seeker"></Button>
              </div>
              
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
