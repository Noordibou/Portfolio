import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

export default function ContactMe() {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
       window.location.href = `mailto:noordibou.nd@gmail.com?subject=${formData.subject}&body=${formData.message}`};
    return (
        <div className='h-screen relative flex flex-col text-center items-center md:text-left md:flex-row max-w-7xl mx-auto px-10 justify-evenly'>
            <h3 className='absolute top-36 uppercase tracking-[20px] text-gray-500 text-2xl'>Get In Touch</h3>

            <div className='flex flex-col space-y-10'>
                <h4 className='text-2xl font-semibold text-center'>Whether you have an idea for a project or just want to chat,{' '}<span className='decoration-[#F7AB0A]/50 underline'>feel free to shoot me an email!</span></h4>
                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#F7AB0A] w-7 h-7 animate-pulse' />
                        <p className='text-2xl'>noordibou.nd@gmail.com</p>

                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='space-x-2'>
                        <input {...register('name')} placeholder='Name' className="contactInput" type='text' />
                        <input {...register('email')} placeholder='Email' className="contactInput" type='email' />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className="contactInput" type='text' />
                    <textarea {...register('message')}placeholder='Message' className="contactInput" />
                    <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Send</button>
                </form>
            </div>
        </div >
    )
}
