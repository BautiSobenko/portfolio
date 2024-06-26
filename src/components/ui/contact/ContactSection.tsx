'use client'

import { useState } from "react";

import { useFormSubmit } from "@hooks/useFormSubmit";

import SucessAlert from "./SucessAlert";

export const ContactSection = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { handleSubmit } = useFormSubmit();

  const formSubmit = (e: any) => {
    handleSubmit(e);
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 4000);    
  }

  return (
    <section id="contact-section" className="mb-36 lg:px-24 xl:px-52 mx-10">
      {
        isModalOpen && <SucessAlert />
      }
      
      <div className="justify-center text-center py-10">
        <h2 className="text-5xl font-bold mb-3">Contact me</h2>
        <p className="text-sm md:text-base">
          {"Let's get in touch!"}
        </p>
      </div>

      <form method="POST" onSubmit={formSubmit} className="font-secondary-sohne my-4 space-y-4 text-sm md:text-base">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:flex-[0_1_50%]">
            <label htmlFor="name" className="block mb-2 font-medium text-text-100">Name</label>
            <input type="text" name="name" required className="block p-2.5 w-full text-text-300 focus:border-primary-100 focus:ring-primary-100 bg-bg-100 rounded-lg border outline-none border-bg-200 placeholder-text-300/50" placeholder="Your name"/>
          </div>
          <div className="md:flex-[0_0_50%]">
            <label htmlFor="email" className="block mb-2 font-medium text-text-100">Email</label>
            <input type="email" name="email" required className="block p-2.5 w-full text-text-300 focus:border-primary-100 focus:ring-primary-100 bg-bg-100 rounded-lg border outline-none border-bg-200 placeholder-text-300/50" placeholder="Your email"/>
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 font-medium text-text-100">Message</label>
          <textarea id="message" name="message" required rows={4} className="p-2.5 min-h-32 w-full text-text-300 focus:border-primary-100 focus:ring-primary-100 bg-bg-100 rounded-lg border outline-none border-bg-200 placeholder-text-300/50" placeholder="Your message"></textarea>
        </div>
        <input type="submit" value="Send Message" className="cursor-pointer w-full gap-2 rounded border py-3 border-accent-100 bg-accent-100 text-white hover:bg-bg-100" />
      </form>

    </section>
  )
}
