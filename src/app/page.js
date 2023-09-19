'use client'

import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ExploreOurPersonal from '@/components/ExploreOurPersonal'
import WeAreAwardWinning from '@/components/WeAreAwardWinning'
import GreatFeaturestoDo from '@/components/GreatFeaturestoDo'
import CheckOutOurRecentProject from '@/components/CheckOutOurRecentProject'
import ManagebussinessSeo from '@/components/ManagebussinessSeo'
import LetsSeeOurcompany from '@/components/LetsSeeOurcompany'
import PeopleSayAboutOurSupport from '@/components/PeopleSayAboutOurSupport'
import ReadytoWorktogether from '@/components/ReadytoWorktogether'
import Footer from '@/components/Footer'
import './globals.css'



export default function Home() {
  return (

  
   
    <div className="App mx-[auto] ">
      {/* Head */}
      <div className="bg-[url('/assets/hero-backgroung.svg')] trigger  " >
        <Header />
        <HeroSection/>
      </div>
      <ExploreOurPersonal/>
      <WeAreAwardWinning/>
      <GreatFeaturestoDo/>
      <CheckOutOurRecentProject/>
      <ManagebussinessSeo/>
      <LetsSeeOurcompany/>
      <PeopleSayAboutOurSupport/>
      <ReadytoWorktogether/>
      <Footer/>

      </div>
   
    
    
  )
}
