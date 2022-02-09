import React from 'react';
import { useState } from 'react';
import Popup from "./Popup";
import IconDownload from '@site/src/components/IconDownload';

export default function DownloadsPage({children}) {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <span>
      <span onClick={() => setButtonPopup(true)}>
        <span><IconDownload /></span>
      </span>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        {children}
      </Popup>
    </span>
  )
}