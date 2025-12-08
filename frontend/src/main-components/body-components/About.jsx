import "../../main-styles/aboutstyle.css";
import {useContext, useEffect} from 'react'
import {MainContext} from '../../contexts/MainContext'


function About() {

  const {isDark}=useContext(MainContext)

  useEffect(() => {

    var about_text = document.querySelector('.about_text');
    var about_img = document.querySelector('.about_image_container');
    var about_container = document.querySelector('.about_container');


    const handleScroll= ()=> {
        var scrollTop = window.scrollY || document.documentElement.scrollTop;
        var aboutContainerPosition = about_container.offsetTop;


    
        if (scrollTop > aboutContainerPosition - window.innerHeight / 1.8) {

                about_text.classList.add("show")
                about_img.classList.add("show")
    
        }else {
                about_text.classList.remove("show")
                about_img.classList.remove("show")
                }
  
    }


    window.addEventListener('scroll', handleScroll);
  },[])
  
  return (
    <div className={isDark?"about_container about_dark":"about_container"} id="about">
      <div className="about_text">
        <h2>Organize your team's task list and increase productivity</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus corrupti facere vel sit earum laborum id nisi non? Expedita aperiam accusantium, facilis accusamus aliquam aut ullam quibusdam ipsum impedit excepturi!</p>
      </div>
      <div className={isDark?"about_image_container about_image_container_dark":"about_image_container"}>
        <img src="/images/page.png" alt="" />
      </div>

    </div>
  )
}

export default About