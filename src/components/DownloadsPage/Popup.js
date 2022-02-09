import React from 'react';
import "./Popup.css";

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn button button--outline button--primary" onClick={() => props.setTrigger(false)}>Close</button>
                <div>{ props.children }</div>
            </div>
        </div>
    ) : "" ;
}

export default Popup;