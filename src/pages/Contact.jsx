import React from 'react'

const Contact = () => {

const handleFormSubmit = (event) => {

  event.preventDefault();

  const formData =new FormData(event.target)
  
  const formInputData= Object.fromEntries(formData.entries());
  console.log(formInputData)
  event.target.reset()

}

  return (
    <section className='flex justify-center items-center flex-col mb-20 '>
      <h2 className='text-center my-10 text-3xl text-zinc-100 font-bold '>Contact Us</h2>
      <div className=' form-sec w-1/2 h-auto flex items-center justify-center mx-6 rounded-xl py-8 border'>
      <form onSubmit={handleFormSubmit}>
        <input className='pr-48 pl-3 py-2  mt-3 text-left rounded-xl bg-gray-800  text-white' type="text" required autoComplete='false' placeholder='Enter Your Name' name='username' /><br/><br/>

        <input className='w-full py-2  mt-3 text-left rounded-xl bg-gray-800 pl-3  text-white' type="email" required autoComplete='false' placeholder='Enter Your Email' name='email' /> <br/><br/>

        <textarea className='w-full  py-2 pl-3  mt-3 text-left rounded-xl bg-gray-800 text-white'
         name="message"
          id=""
           
           rows={4}
           placeholder='Enter Your Message'
            required autoComplete='off' >

        </textarea>
        <br/>
        <button type='submit' value="send" className='bg-zinc-600  w-full  rounded-3xl my-5 p-3 text-white font-bold border hover:bg-gray-700' >Send</button>
      </form>
      </div>
    </section>
  )
}

export default Contact