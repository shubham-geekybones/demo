import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
const ContactUS = () => {
    const form = useRef();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({ defaultValues: { message: "", reply_to: "", from_name: "" } })

    const onSubmit = async (data) => {
        try {
            emailjs.sendForm('service_7jybzkk', 'template_33yv11z', form.current, 'qGt-Y2CUXtGVEvNRT')
                .then(() => {
                    toast.success("message sent successfully");
                    reset()
                }, (error) => {
                    console.log(error.text);
                });
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <form ref={form} onSubmit={handleSubmit(onSubmit)} className='contact-form flex flex-col p-5  mb-10'>
                <h4 className='text-3xl font-bold'>Message Here</h4>
                <hr className='py-3 mt-2' />

                <label className='block mb-5'>
                    <span className='text-gray-700'>Name</span>
                    <input
                        {...register("from_name", { required: true })}
                        className='shadow rounded py-2 px-3 mt-1 form-textarea block w-full ring-yellow-500 focus:ring outline-none'
                        type="text"
                        name='from_name'
                        placeholder='Enter Your Name' />
                    {errors.name && <span className='text-red-500'>The name field is required</span>}
                </label>
                <label className='block mb-5'>
                    <span className='text-gray-700'>Email</span>
                    <input
                        {...register('reply_to', { required: true })}
                        name='reply_to'
                        className='shadow rounded py-2 px-3 mt-1 form-textarea block w-full ring-yellow-500 focus:ring outline-none'
                        type="email"
                        placeholder='Enter Your Email' />
                    {errors.email && <span className='text-red-500'>The email field is required</span>}
                </label>
                <label className='block mb-5'>
                    <span className='text-gray-500'>Message</span>
                    <textarea
                        {...register("message", { required: true })}
                        className='shadow rounded py-2 px-3 mt-1 form-textarea block w-full ring-yellow-500 focus:ring outline-none'
                        placeholder="Your message ...."
                        name='message'
                        rows={8} />
                    {errors.comment && <span className='text-red-500'>The comment field is required</span>}
                </label>
                <input type="submit" className='p-3 rounded bg-yellow-500 hover:bg-yellow-400 text-white 
        focus:shadow-outline font-bold cursor-pointer focus:outline-none' />
            </form>
        </>
    )
}

export default ContactUS