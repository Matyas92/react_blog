import React from 'react'

const Navbar = () => {
  //Usef here the built in Tailwind template to use Link
  return (
<nav className="flex sm:justify-center space-x-20">
  {[
    ['Home', '/'],
    ['Create', '/create'],
    ['About', '/about'],
  ].map(([title, url]) => (
    <a href={url} className="text-3xl m-6 rounded-lg px-3 py-2 text-slate-1000 font-medium hover:bg-violet-500 hover:text-slate-700 active:bg-violet-400">{title}</a>
  ))}
</nav>  )
}

export default Navbar