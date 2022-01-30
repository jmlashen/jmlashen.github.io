// This section displays all the components to the DOM

import { NavBar } from './components/navbar';
import "./styles/custom.scss"
import { ApplicationViews } from './ApplicationViews';








export const App = () => {
  return (
    <>
      <div className='navbar-container'>
        <NavBar id="App" />
      </div>
      <ApplicationViews />
     

    </>
  );
}

