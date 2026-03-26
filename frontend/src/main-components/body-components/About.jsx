import "../../main-styles/aboutstyle.css";
import {useContext, useEffect, useRef, useState} from 'react'
import {MainContext} from '../../contexts/MainContext'


function About() {

  const {isDark}=useContext(MainContext)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }, { threshold: 0.4, rootMargin: '0px 0px -50px 0px' })

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }
    
    return () => observer.disconnect()
  },[])
  
  return (
    <div className={isDark?"about_container about_dark":"about_container"} id="about" ref={containerRef}>
      <div className={`about_text ${isVisible ? 'show' : ''}`}>
        <h2>Organize your team's task list and increase productivity</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus corrupti facere vel sit earum laborum id nisi non? Expedita aperiam accusantium, facilis accusamus aliquam aut ullam quibusdam ipsum impedit excepturi!</p>
      </div>
      <div className={`${isDark?"about_image_container about_image_container_dark":"about_image_container"} ${isVisible ? 'show' : ''}`}>
        <img src="/images/page.png" alt="" />
      </div>

    </div>
  )
}

export default About