import "../../main-styles/homestyle.css";

function Home() {
  return (
    <div id="home" className="home_container">
      <div className="aurora_container">
        <div className="aurora aurora_1"></div>
        <div className="aurora aurora_2"></div>
        <div className="aurora aurora_3"></div>
      </div>
      <div className="home_text">
        <h2 className="title">TaskCreator</h2>
        <h3 className="subtitle">Here you can create and update tasks</h3>
      </div>
    </div>
  )
}

export default Home