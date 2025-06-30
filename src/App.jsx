/**
 * @copyright 2024 Versenco
 * @license Apache-2.0
 */


/**
 * Node Modules
 */
import { ReactLenis, useLenis } from 'lenis/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/**
 * Components
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About"; 
import Skill from "./components/Skill"
import Work  from "./components/Work";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import { element } from 'prop-types';


const App = () => {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    })

    useGSAP(() =>{
        const elements = gsap.utils.toArray('.reveal-up')
        elements.forEach((element) =>{
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: '-200 bottom',
                    end: 'bottom 80%',
                    scrub: true,
                    // start: 'top 80%',
                    // markers: true,
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power4.out'      
            })
        })

        const elements2 = gsap.utils.toArray('.reveal-right')
        elements2.forEach((element) =>{
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: true,
                    // start: '-200 bottom',
                    // markers: true,
                },
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power4.out'      
            })
        })

        const elements3 = gsap.utils.toArray('.reveal-left')
        elements3.forEach((element) =>{
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: true,
                    // start: '-200 bottom',
                    // markers: true,
                },
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power4.out'      
            })
        })

        const elements4 = gsap.utils.toArray('.reveal-down')
        elements4.forEach((element) =>{
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: true,
                    // start: '-200 bottom',
                    // markers: true,
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power4.out'
            })
        })

        const elements5 = gsap.utils.toArray('.reveal-scale')
        elements5.forEach((element) =>{
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: true,
                    // start: '-200 bottom',
                    // markers: true,
                },
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: 'power4.out'
            })
        })

        const elements6 = gsap.utils.toArray('.reveal-rotate')
        elements6.forEach((element) =>{
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: true,
                    // start: '-200 bottom',
                    // markers: true,
                },
                rotate: 0,
                opacity: 1,
                duration: 1,
                ease: 'power4.out'
            })
        })

        const elements7 = gsap.utils.toArray('.reveal-skew')
        elements7.forEach((element) =>{
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: true,
                    // start: '-200 bottom',
                    // markers: true,
                },
                skewX: 0,
                opacity: 1,
                duration: 1,
                ease: 'power4.out'
            })
        })

        const elements8 = gsap.utils.toArray('.reveal-skew-y')
        elements8.forEach((element) =>{
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: true,
                    // start: '-200 bottom',
                    // markers: true,
                },
                skewY: 0,
                opacity: 1,
                duration: 1,
                ease: 'power4.out'
            })
        })

        const elements9 = gsap.utils.toArray('.reveal-rotate-x')
        elements9.forEach((element) =>{
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: true,
                    // start: '-200 bottom',
                    // markers: true,
                },
                rotateX: 0,
                opacity: 1,
                duration: 1,
                ease: 'power4.out'
            })
        })

        const elements10 = gsap.utils.toArray('.reveal-rotate-y')
        elements10.forEach((element) =>{
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: true,
                    // start: '-200 bottom',
                    // markers: true,
                },
                rotateY: 0,
                opacity: 1,
                duration: 1,
                ease: 'power4.out'
            })
        })

        const elements11 = gsap.utils.toArray('.reveal-rotate-z')
        elements11.forEach((element) =>{
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: true,
                    // start: '-200 bottom',
                    // markers: true,
                },
                rotateZ: 0,
                opacity: 1,
                duration: 1,
                ease: 'power4.out'
            })
        })



    });

    return (
        <ReactLenis root>
            <Header />

            <main>
                <Hero />
                <About />
                <Skill />
                <Work />
                <Review />
                <Contact />
            </main>

            <Footer />
        </ReactLenis>
    )
        
}


export default App;