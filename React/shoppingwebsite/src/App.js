import './App.css';

import {AdPopup} from "./components/AdPopup.js"

import {headphone , alexa , camera_Image , controller} from './resources/index.js'; 
import { CliconSearchTab } from './components/CliconSearchTab.js';

function App() {
  const dataForProductItem=[
    {
       itemImage:headphone,
       itemcontent:"Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
       itemPrice:"$250"
    },
    {
      itemImage:alexa,
      itemcontent:"Simple Mobile 4G LTE Prepaid Smartphone",
      itemPrice:"$2500"
   },
   {
    itemImage:camera_Image,
    itemcontent:"4K UHD LED Smart TV with Chromecast Built-in",
    itemPrice:"$2501"
   },
  {
    itemImage:controller,
    itemcontent:"Sony DSCHX8 High Zoom Point & Shoot Camera",
    itemPrice:"$2"
  },
  {
    itemImage:controller,
    itemcontent:"Sony DSCHX8 High Zoom Point & Shoot Camera",
    itemPrice:"$2"
  },
  {
    itemImage:controller,
    itemcontent:"Sony DSCHX8 High Zoom Point & Shoot Camera",
    itemPrice:"$2"
  },
  {
    itemImage:controller,
    itemcontent:"Sony DSCHX8 High Zoom Point & Shoot Camera",
    itemPrice:"$2"
  },
  {
    itemImage:controller,
    itemcontent:"Sony DSCHX8 High Zoom Point & Shoot Camera",
    itemPrice:"$2"
  }
  ]
  return (
    
    <div className="App">
       <AdPopup />
       <CliconSearchTab /> 
    </div>
  );
}

export default App;
