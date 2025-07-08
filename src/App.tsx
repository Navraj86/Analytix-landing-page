import { ReactLenis } from 'lenis/react'
import { Suspense, lazy } from 'react'
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Brand from '@/components/Brand'

const Feature = lazy(() => import('@/components/Feature'))
const Process = lazy(() => import('@/components/Process'))
const Overview = lazy(() => import('@/components/Overview'))
const Review = lazy(() => import('@/components/Review'))
const Blog = lazy(() => import('@/components/Blog'))
const Cta = lazy(() => import('@/components/Cta'))
const Footer = lazy(() => import('@/components/Footer'))

const App = () => {
  return (
    <ReactLenis root>
      <div className="relative isolate overflow-hidden">
        <Header />
        <main>
          <Hero />
          <Brand />
          <Suspense fallback={<div>Loading...</div>}>
            <Feature />
            <Process />
            <Overview />
            <Review />
            <Blog />
            <Cta />
            <Footer />
          </Suspense>
        </main>
      </div>
    </ReactLenis>
  )
}

export default App
