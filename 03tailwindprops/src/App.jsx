import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  // let myobj = {
  //   username:'Faiza',
  //   age:25
  // }

  return (
    <>
      <h1 className='bg-purple-400 text-white p-5 rounded-xl mb-10'>Tailwind</h1>
      {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="./1long.jpg" alt="" width="384" height="512" />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              Sarah Dayan
            </div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure> */}
      <Card  username = "Faiza" btntxt = "Click me"/>
      <Card  username = "Sania" btntxt = "Click me"/>

    </>
  )
}

export default App
