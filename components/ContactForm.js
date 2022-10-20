const ContactForm = () => {
   const handleSubmit = (e) => {
      e.preventDefault();
      const els = e.target.elements;

      const formData = {
         name: els.name.value,
         email: els.email.value,
         phone: els.phone.value,
         msg: els.message.value
      }

      console.log(formData)
   }

   return <section className='w-full h-full'>
      <h1 className='text-3xl py-5'>Contact Us</h1>

      <form onSubmit={handleSubmit} className='space-y-4'>

         <input
            className='w-full rounded-lg border-gray-200 p-3 text-sm text-white'
            placeholder='Name'
            type='text'
            name='name'
            required
         />


         <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>

            <input
               className='w-full rounded-lg border-gray-200 p-3 text-sm text-white'
               placeholder='Email address'
               type='email'
               name='email'
               required
            />


            <input
               className='w-full rounded-lg border-gray-200 p-3 text-sm text-white'
               placeholder='Phone Number'
               type='tel'
               name='phone'
               required
            />

         </div>

         <textarea
            className='w-full rounded-lg border-gray-200 p-3 text-sm text-white'
            placeholder='Message (max 1000 characters)'
            maxLength='1000'
            rows='6'
            name='message'
         />

         <button
            className={`group relative inline-flex items-center overflow-hidden rounded border border-current
                        px-8 py-3 text-secondary focus:outline-none focus:none active:bg-white`}
            type='submit'
         >
           <span className='absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4'>
             <svg
                className='h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='#e84039'
             >
               <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
               />
             </svg>
           </span>

            <span className='text-sm font-medium transition-all group-hover:mr-4 text-secondary'>
                Send Message
              </span>
         </button>

      </form>
   </section>
}

export default ContactForm;