import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser } from '@fortawesome/free-solid-svg-icons'
import './Playercart.css'

const Player = (props) => {
    const {img, name, team, salary} = props.player;
    return (
        <div className="playerCart-con">
            <div className="playerCart-img">
                <img src={img}/>
            </div>
            <div className="playerCart-info">
                <h4>{name}</h4>
                <h5>Team: {team}</h5>
                <p>salary: ${salary}</p>
                <button type="button" class="btn btn-primary" onClick={() => props.handlePlayerCarter(props.player)}><FontAwesomeIcon icon={faUser} /> Add To Team</button>
            </div>
        </div>
    );
};

export default Player;