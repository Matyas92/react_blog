import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const DetailsBlog = () => {
    //Used params to the useFetch 
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();
    const handleClick = () => {

      //Navigate as to use history and Delete method. Blog.id is a special reference
      fetch('http://localhost:8000/blogs/'+ blog.id, {
          method: 'DELETE'
        }).then(()=> {
        navigate('/');
      })
    }
      return (
      <div className="blog-details">
        { isPending && <div class="bg-gray-50 flex items-center">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      <span class="block">Loading......</span>
    </h2>
    
  </div>
</div>}
        { error && <div>{ error }</div> }
        { blog && (
<div class="relative bg-white overflow-hidden">
  <div class="max-w-7xl mx-auto">
    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">{blog.title} </span>
            <span class="block text-indigo-600 xl:inline">from {blog.author}</span>
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">{blog.body}</p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          </div>
          <button onClick={handleClick} class="bg-red-500 hover:bg-violet-900 text-white font-bold py-2 px-4 rounded">
  Delete
</button> 
        </div>
      </main>
    </div>
  </div>
 
</div>

        )}
      </div>
    );
}

export default DetailsBlog