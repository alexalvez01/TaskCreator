import '../../main-styles/cardsstyle.css'
import '../../main-styles/cardsstyle.css'
import {useContext, useEffect, useRef, useState} from 'react'
import {MainContext} from '../../contexts/MainContext'

function Cards() {

  const {isDark} = useContext(MainContext)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if(entry.isIntersecting) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className={isDark?"information_cards_container container_dark":"information_cards_container"} ref={containerRef}>
      <div className={`text_container ${isVisible ? 'visible' : ''}`}>
        <h2>The benefits of using this tool</h2>
      </div>
      <div className='card_container'>
        <div className={(isDark?"card card_dark ":"card ") + (isVisible ? "visible" : "") + " hover-lift"}>
            <div className='card_header'>
              <h3 className='card_title'>Organize your task list</h3>
              <img src="/images/tasklist.png" alt="task list" className='card_icon' />
            </div>
            <p className='card_text'>Keep your to-dos under control with our intuitive interface. Classify, edit, and manage your daily tasks efficiently in one place.</p>
        </div>
        <div className={(isDark?"card card_dark ":"card ") + (isVisible ? "visible" : "") + " hover-lift"}>
            <div className='card_header'>
              <h3 className='card_title'>Add details to each task</h3>
              <img src="/images/details.png" alt="written book" className='card_icon' />
            </div>
            <p className='card_text'>Never lose sight of important information. Add notes and detailed descriptions to every task to ensure perfect results for your projects.</p>
        </div>
        <div className={(isDark?"card card_dark ":"card ") + (isVisible ? "visible" : "") + " hover-lift"}>
            <div className='card_header'>
              <h3 className='card_title'>Manage your deadlines</h3>
              <img src="/images/time-date.png" alt="the date on the calendary" className='card_icon' />
            </div>
            <p className='card_text'>Set deadlines and organize your schedule. Our tool helps you prioritize the most urgent tasks so you never miss a delivery.</p>
        </div>
      </div>
    </div>
  )
}

export default Cards