import React from 'react'

//CSS
import './Landing.css'

//Section
import HeaderSection from './HeaderSection/HeaderSection'
import PackageSection from './PackageSection/PackageSection'
import ContactSection from './ContactSection/ContactSection'
import Footer from './Footer/Footer'
import AboutSection from './AboutSection/AboutSection'
import TrackingSection from './TrackingSection/TrackingSection'

export default function Landing() {
    return (
        <div className="landing-wrap">
            <HeaderSection />
            <AboutSection />
            <PackageSection />
            <TrackingSection />
            <ContactSection />
            <Footer />
        </div>
    )
}
