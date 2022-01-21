// This section displays all the components to the DOM

import { NavBar } from './components/navbar';
import "./styles/custom.scss"
import Video from './video';
import JakeLogo from './images/JakeLogo.svg'
import { Footer } from './components/footer';
import { IconsTop } from './components/icons-top';
import { About } from './components/about';
import { Work } from './components/work';








export const App = () => {
  return (
    <>
      <div className='navbar-container'>
        <NavBar id="App" />
      </div>

      <div className='landcontainer'>
        <div className='jake-logo-containter'>
          <img className="jakelogo" src={JakeLogo} alt="C51"></img>
        </div>

        <div className='main-video-container'>
          <Video VideoSource="https://res.cloudinary.com/djnk0ey5p/video/upload/v1642173955/Jake_intro_g2ufsq.mp4" />
        </div>
      </div>

      <div className='footer-container'>
        <IconsTop />
      </div>

      <div className='about'>
        <About className='about' />
      </div>

      <div className='work'>
        <Work className="work" />
      </div>

      <div className='footer-container'>
        <Footer />
      </div>

    </>
  );
}

