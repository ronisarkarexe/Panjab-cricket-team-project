import React from 'react';
import { useState, useEffect } from 'react';
import fakeData from '../../../fakedata/fakedata.json';
import Playercart from '../Playercart/Playercart';
import Newteam from '../../Newteam/Newteam'
import './Playerlist.css';

const Playerlist = () => {

    const[player, setPlayer] = useState([])
    useEffect(() =>{
        setPlayer(fakeData)
    },[])

    const[newTeam, setNewTeam] = useState([])


    const handlePlayerCarter = (teamPlayer) => {
        const  myTeam = [...newTeam,teamPlayer];
        setNewTeam(myTeam);
    }

    return (
        <div className="player-container">
            <div className="player-image">
                {
                    player.map(play => <Playercart handlePlayerCarter={handlePlayerCarter} player={play}></Playercart>)
                }
            </div>
            <div>
                <Newteam newTeam={newTeam}></Newteam>
            </div>
        </div>
    );
};

export default Playerlist;