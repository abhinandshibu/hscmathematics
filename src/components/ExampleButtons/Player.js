import React from 'react';
import ReactPlayer from 'react-player';
import "./Player.css"

const Player = ({ url }) => {
    return (
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player'
                url={url}
                width='100%'
                height='100%'
                controls={true}
                playing={true}
            />
        </div>
    )
}

export default Player