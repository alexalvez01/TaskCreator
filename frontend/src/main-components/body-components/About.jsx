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
        <h2>Elevate Your Productivity with TaskCreator</h2>
        <p>Empower your workflow with a seamless, glass-morphism inspired interface designed for modern collaboration. Track deadlines, synchronize team efforts, and transform complex projects into achievable milestones with our state-of-the-art task management system.</p>
      </div>
      <div className={`${isDark?"about_image_container about_image_container_dark":"about_image_container"} ${isVisible ? 'show' : ''}`}>
        <img src="/images/about_illustration.png" alt="Task Management Illustration" />
      </div>

    </div>
  )
}

export default About