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
        <div className={(isDark?"card card_dark ":"card ") + (isVisible ? "visible" : "")}>
            <div className='card_header'>
              <h3 className='card_title'>Organize your task list</h3>
              <img src="/images/tasklist.png" alt="task list" className='card_icon' />
            </div>
            <p className='card_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi debitis vero ex rem illo, in iusto voluptas pariatur, amet quasi eaque ipsum tempore atque deserunt, incidunt quam repudiandae possimus et.</p>
        </div>
        <div className={(isDark?"card card_dark ":"card ") + (isVisible ? "visible" : "")}>
            <div className='card_header'>
              <h3 className='card_title'>Add details to each task</h3>
              <img src="/images/details.png" alt="written book" className='card_icon' />
            </div>
            <p className='card_text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum esse nihil cupiditate voluptatem ipsa similique? Nam eum incidunt temporibus qui, fugit fuga, quas iure cupiditate ratione praesentium ducimus odio doloremque!</p>
        </div>
        <div className={(isDark?"card card_dark ":"card ") + (isVisible ? "visible" : "")}>
            <div className='card_header'>
              <h3 className='card_title'>Set a certain time</h3>
              <img src="/images/time-date.png" alt="the date on the calendary" className='card_icon' />
            </div>
            <p className='card_text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti in consectetur tempora rerum reiciendis repudiandae. Tempora illo magnam nesciunt quaerat nobis eligendi accusamus nam, quas esse error, aspernatur deserunt asperiores!</p>
        </div>
      </div>
    </div>
  )
}

export default Cards