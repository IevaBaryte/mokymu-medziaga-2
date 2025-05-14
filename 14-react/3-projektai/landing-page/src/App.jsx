import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import JsonData from './data/data.json';
import Navigation from './components/navigation/Navigation';
import Header from './pages/header/Header';
import Features from './pages/features/Features';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';

function App() {
  const [landingPageData, setLandingPageData] = useState(null);

  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])
  return (
    <>
    {
      landingPageData && (
        <>
          <Navigation 
            title={landingPageData.navigation.title}
            navItems={landingPageData.navigation.navigationItems}
          />
          <Header 
            title={landingPageData.header.title}
            subtitle={landingPageData.header.subtitle}
            button={landingPageData.header.button}
          />
          <Features
            features={landingPageData.features.featuresItems}
            title={landingPageData.features.title}
            subtitle={landingPageData.features.subtitle}
            button={landingPageData.features.button}
          />
          
          <AboutUs
            title={landingPageData.about.title}
            description={landingPageData.about.description}
            whyChooseUsTitle={landingPageData.about.whyChooseUsTitle}
            list={landingPageData.about.list}
          />
          <Services
            title={landingPageData.services.title}
            subtitle={landingPageData.services.subtitle}
            items={landingPageData.services.items}
          />
        </>
      )
    }
  </>
  )
}

export default App
