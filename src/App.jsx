import React, { Suspense, useState, useEffect } from 'react';
import Navigationbar from './partials/Navbar';
import Footer from './partials/footer';
import Dark_Light_mode from './Components/Light_dark_mode';
import LoadingSpinner from './Components/LoadingSpinner';
import Certification from './Components/Certification';
import Services from './Components/Services';

// Lazily import components
const PresentationSection = React.lazy(() => import('./Components/presentation_part'));
const Stars = React.lazy(() => import('./Components/Stars'));
const Experience = React.lazy(() => import('./Components/Experience'));
const Skills = React.lazy(() => import('./Components/Skills'));
const Contact = React.lazy(() => import('./Components/Contact'));


function App() {
  const [loading, setLoading] = useState(true);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    // Set a delay of 1 second
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
  <>
  {/*** NavBar component ***/}
    <Navigationbar onOpenServices={() => setShowServices(true)} />
      <Suspense fallback={<LoadingSpinner />}>
        <PresentationSection onOpenServices={() => setShowServices(true)} />
 
        <Stars />

        <Experience />

        <Certification/>

        <Skills />

        {/* <Contact /> */}

        <Footer/>
      </Suspense>

  {/*** Services Modal ***/}
  <Services isOpen={showServices} onClose={() => setShowServices(false)} />
  </>
  )
}

export default App
