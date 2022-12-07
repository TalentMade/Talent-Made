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
       p-8 flex flex-col
        bg-slate-200
       text-black drop-shadow-xl`} >
        <motion.div

          className='text-center mb-[10rem]'>
          <motion.div
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='text-[5.16rem] font-bold pb-7 uppercase'>Talent Made</h1>
          </motion.div>

          <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className='text-[24px]'>Welcome to YOUR last portfolio builder</p>
          </motion.div>

        </motion.div>
        <div className='text-center '>

          <div className='flex justify-between gap-8'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-1/2">
              <p className='text-6xl mb-10 font-bold'>Your calling is calling</p>
              <p className='mb-10 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, deleniti dolor magni itaque laboriosam beatae porro repellendus accusamus optio voluptas! Ducimus labore natus mollitia ut, blanditiis dicta voluptatum culpa aut.</p>

              <Button
                className="bg-blue-700 px-16 text-xl py-5 rounded-lg text-white tracking-widest"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                buttonText="Job Seeker"></Button>
            </motion.div>


            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-1/2">
              <p className='text-6xl mb-10 font-bold '>Your calling is calling</p>
              <p className='mb-10 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, deleniti dolor magni itaque laboriosam beatae porro repellendus accusamus optio voluptas! Ducimus labore natus mollitia ut, blanditiis dicta voluptatum culpa aut.</p>
              <Button
                className="bg-blue-700 px-16 text-xl py-5 rounded-lg text-white tracking-widest"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                buttonText="Recruiter"></Button>
            </motion.div>

          </div>
        </div>

      </div>


    </div>

  )
}
