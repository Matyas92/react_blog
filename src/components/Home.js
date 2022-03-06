import ListBlogs from './ListBlogs'
import useFetch from './useFetch';

const Home = () => {
  //Putting data here to use all the params
  const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
  
  return (
    <div className="home">
      {error && <div> {error} </div> }
      { isPending && <div class="bg-gray-50 flex items-center">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      <span class="block">Loading......</span>
      <span class="block text-indigo-600">Soon It will load the contents please wait!</span>
    </h2>
    
  </div>
</div> }
      {blogs && <ListBlogs blogs={blogs} />}
    </div>
       
      )
}

export default Home