import React from 'react';
import './styles.scss';
import IconOverleaf from './IconOverleaf';
import IconDownload from './IconDownload';
import IconHelp from './IconHelp';
// import { useState } from 'react';
// import Popup from './Popup';

export default function TexCard({img_light, img_dark, overleaf, help}) {
  // const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <div className={"texcard"}>
        <div className={"multi-button"}>
            <a className={"texbutton"} href={overleaf} target="_blank"><IconOverleaf /></a>
            <a className={"texbutton"} href={img_light} target="_blank" download><IconDownload /></a>
            {/* <a className={"texbutton"} href={help}><IconHelp /></a> */}
            {/* <button className={"texbutton"} onClick={() => setButtonPopup(true)}>X</button> */}
        </div>
        <img className={"teximg"} src={img_light}/>
        <img className={"teximg"} src={img_dark}/>
      </div>
      {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        
      </Popup> */}
    </>
  );
}