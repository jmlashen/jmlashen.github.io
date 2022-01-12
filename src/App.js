import { NavBarBS } from './components/NavBarBS';
import "./styles/custom.scss"
import Video from './video';
import JakeLogo from './images/JakeLogo.svg'
import { Footer } from './components/footer';
import { Work } from './components/work';
import { Work51 } from './components/work51';
import { About } from './components/about';







export const App = () => {
  return (
    <>


      <div className='navbar-container'>
        <NavBarBS id="App"/>
      </div>

      <div className='landcontainer'>
      <div className='jake-logo-containter'>
        <img className="jakelogo" src={JakeLogo} alt="C51"></img>
      </div>
      <div className='main-video-container'>
        <Video VideoSource="https://res.cloudinary.com/djnk0ey5p/video/upload/v1641309929/My_Movie_3_xcxtif.mp4" />
      </div>
      </div>
      <div className='footer-container'>
        <Footer />
      </div>
      {/* <div className="workcontainer">
        <Work51 className="workarea" />
      </div> */}
      
        <Work className="workarea" />
      

      <div>
        <About />
      </div>
      <div className='footer-container'>
        <Footer />
      </div>

    </>
  );
}

