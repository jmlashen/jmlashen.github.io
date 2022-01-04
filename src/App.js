import { NavBar } from './components/NavBar';
import "./styles/custom.scss"
import Video from './video';
import JakeLogo  from './images/JakeLogo.svg'
import { Footer } from './components/footer';







export const App = () => {
  return (
    <>
      
      <div className="jake-container"><NavBar /></div>
      <div className="container">
        <img className="jakelogo" src={JakeLogo} alt="C51"></img>
        <Video classname="video"/>
      </div>
      
      <Footer/>
      
    </>
  );
}

