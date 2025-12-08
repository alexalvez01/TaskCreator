import '../../main-styles/cardsstyle.css'
import {useContext} from 'react'
import {MainContext} from '../../contexts/MainContext'

function Cards() {

  const {isDark}=useContext(MainContext)

  return (
    <div className={isDark?"information_cards_container container_dark":"information_cards_container"}>
      <div className='text_container'>
        <h2>The benefits of using this tool</h2>
      </div>
      <div className='card_container'>
        <div className={isDark?"card card_dark":"card"}>
            <div className='card_header'>
              <h3 className='card_title'>Organize your task list</h3>
              <img src="/images/tasklist.png" alt="task list" className='card_icon' />
            </div>
            <p className='card_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi debitis vero ex rem illo, in iusto voluptas pariatur, amet quasi eaque ipsum tempore atque deserunt, incidunt quam repudiandae possimus et.</p>
        </div>
        <div className={isDark?"card card_dark":"card"}>
            <div className='card_header'>
              <h3 className='card_title'>Add details to each task</h3>
              <img src="/images/details.png" alt="written book" className='card_icon' />
            </div>
            <p className='card_text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum esse nihil cupiditate voluptatem ipsa similique? Nam eum incidunt temporibus qui, fugit fuga, quas iure cupiditate ratione praesentium ducimus odio doloremque!</p>
        </div>
        <div className={isDark?"card card_dark":"card"}>
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