import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { BsGithub } from 'react-icons/bs';
import { FiLinkedin, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};
type Props = {
    directionLeft?: boolean;
};

const ContactMe: React.FC<Props> = () => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:noordibou.nd@gmail.com?subject=${formData.subject}&body=${formData.message}`
    };

    return (
        <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className='h-screen relative flex flex-col text-center items-center md:text-left md:flex-row max-w-7xl mx-auto px-5 md:px-10 justify-evenly mt-36 pt-8 pb-10'>
           
                <h3 className='absolute top-[8%] md:top-[16%] xl:top-[20%] flex font-titleFont md:text-3xl text-sm font-semibold items-center uppercase tracking-[10px] md:tracking-[20px] text-textGreen '>Get In Touch</h3>
            
            <div className='flex flex-col space-y-7 ' >
                <h4 className='text-md md:text-3xl pt-12 font-semibold text-center'>Whether you have an idea for a project or just want to chat,{' '}<span className='decoration-textGreen/50 underline'>feel free to shoot me an email!</span></h4>
                <div className='flex items-center space-x-5 justify-center'>
                    <a href='mailto:noordibou.nd@gmail.com' target='_blank'>
                        <span className='w-10 inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                            <FiMail size={24} />
                        </span>
                    </a>
                    <a href='https://github.com/Noordibou' target='_blank'>
                        <span className='w-10 inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                            <BsGithub size={24} />
                        </span>
                    </a>
                    <a href='https://www.linkedin.com/in/noordibou/' target='_blank'>
                        <span className='w-10  inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                            <FiLinkedin size={24} />
                        </span>
                    </a>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='mx-auto w-full md:w-3/4 '>
                    <div className='flex flex-col space-y-2'>
                        <div className='flex flex-col md:flex-row gap-2'>
                            <input {...register('name')} placeholder='Name' className="contactInput flex-grow" type='text' />
                            <input {...register('email')} placeholder='Email' className="contactInput flex-grow" type='email' />
                        </div>
                        <input {...register('subject')} placeholder='Subject' className="contactInput" type='text' />
                        <textarea {...register('message')} placeholder='Message' className="contactInput" />
                        <button type='submit' className='bg-textGreen/70 py-5 px-10 rounded-md text-black font-bold text-lg mx-auto w-full md:w-auto'>
                            Send
                        </button>
                    </div>
                </form>
            </div>
          
        </motion.div>
    )
}

export default ContactMe
