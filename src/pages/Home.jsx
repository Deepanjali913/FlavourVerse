import React from 'react'
import Header from '../Components/Header'
import Recipes from '../Components/Recipes'

function Home() {
  return (
    <main className='w-full flex flex-col'>
        <Header title = {<p><b>Taste the world with <br/>FlavorVerse!</b></p>} type="home"/>

        <section id='recipes' className='md:max-w-[1440px] mx-auto px-4 md:px-20'>
          <Recipes/>
        </section>
    </main>
  )
}

export default Home
