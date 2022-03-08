import React from 'react';
import './styles.scss';
import IconOverleaf from './IconOverleaf';
import IconDownload from './IconDownload';
import IconHelp from './IconHelp';


export default function TexCard({img_light, img_dark, overleaf, help}) {
  return (
    <>
      <div className={"texcard"}>
        <div className={"multi-button"}>
            <a className={"texbutton"} href={overleaf} target="_blank"><IconOverleaf /></a>
            <a className={"texbutton"} href={img_light} target="_blank" download><IconDownload /></a>
            {/* <a className={"texbutton"} href={help}><IconHelp /></a> */}
        </div>
        <img className={"teximg"} src={img_light}/>
        <img className={"teximg"} src={img_dark}/>
      </div>
    </>
  );
}