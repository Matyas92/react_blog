import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const Create = () => {

  //Setting react hooks: useState to the title,body, author
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    //Navigate is the new history it is used in the newest react syntax
    const navigate = useNavigate();
    //Prevent default to refresh page and destructuring the variables
    const handleSubmit = (e) => {
      e.preventDefault()
      const blog = {title, body, author}
      //Fetch the 8000 localhost to POST ergo: create content
      fetch('http://localhost:8000/blogs', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(blog)
      }).then(() => {
        //Navigate to the root page
          navigate('/');
      })    
  }
    //Onsubmit to the upper function
    return (
   <form onSubmit={handleSubmit}>

    <div class="flex flex-col m-auto justify-center items-center">
    <div class="">
    <label class="block">
  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
    Title
  </span>
  <input 
  required
  value={title}
  onChange={(e) => setTitle(e.target.value)}                

  type="text"
  name="text"
   class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-72 rounded-md sm:text-sm focus:ring-1" placeholder="Title here.."
    />
</label>
</div>

    <div class="m-6">
     
      <textarea
      required
        value={body}
        onChange={(e) => setBody(e.target.value)}     
        class="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        id="exampleFormControlTextarea1"
        rows="3"
        placeholder="Your message"
      ></textarea>
       <div class="flex justify-center">
  <div class="m-3 xl:w-96">
    <select class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
      value={author}
      onChange={(e) => setAuthor(e.target.value)}>
        <option value="Azpilicueta">Azpilicueta</option>
        <option value="Johny">Johny</option>
        <option value="Brand">Brand</option>
        <option value="Constanza">Constanza</option>
    </select>
  </div>
</div>
    </div>
  
    <button class="bg-violet-500 hover:bg-violet-900 text-white font-bold py-2 px-4 rounded">
  Submit Post
</button> 

  </div>
 </form>

  )
}

export default Create