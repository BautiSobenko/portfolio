
import { useFormSubmit } from "@hooks/useFormSubmit";

export const ContactSection = () => {

  const { handleSubmit } = useFormSubmit();

  return (
    <section className="mb-24">
      <div className="text-center py-10">
        <h2 className="text-5xl font-bold mb-3">Contact me</h2>
        <p className="text-sm md:text-base">
          {"Let's get in touch!"}
        </p>
      </div>

      <form method="POST" className="px-40 space-y-4 my-4">
        <div className="flex gap-2">
          <div className="flex-[0_1_50%]">
            <label htmlFor="name" className="block mb-2 text-base font-medium text-text-100">Your name</label>
            <input type="text" name="name" required className="block p-2.5 w-full text-base text-text-300 focus:border-primary-100 focus:ring-primary-100 bg-bg-100 rounded-lg border outline-none border-bg-200 placeholder-text-300/50" placeholder=":)"/>
          </div>
          <div className="flex-[0_0_50%]">
            <label htmlFor="email" className="block mb-2 text-base font-medium text-text-100">Your email</label>
            <input type="email" name="email" required className="block p-2.5 w-full text-base text-text-300 focus:border-primary-100 focus:ring-primary-100 bg-bg-100 rounded-lg border outline-none border-bg-200 placeholder-text-300/50" placeholder="email@gmail.com"/>
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-base font-medium text-text-100">Your message</label>
          <textarea id="message" name="message" required rows={4} className="p-2.5 min-h-32 w-full text-base text-text-300 focus:border-primary-100 focus:ring-primary-100 bg-bg-100 rounded-lg border outline-none border-bg-200 placeholder-text-300/50" placeholder="Leave a comment..."></textarea>
        </div>
        <input type="submit" value="Send Message" className="py-3.5 text-center inline-block bg-accent-100 w-full rounded-lg font-medium" />
      </form>

    </section>
  )
}
