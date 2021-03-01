import React from 'react';

import './Newteam.css';

const Newteam = (props) => {
    const player = props.newTeam;

    let playerSalary = 0;
    for (let i = 0; i < player.length; i++) {
        const element = player[i];
        let play = parseFloat(element.salary)
        playerSalary += play;
    }


    return (
        <div className="teamList">
            <div>
                <h4>Team Members</h4>
                <h5>Total Player: {player.length}</h5>
                <p>{player.name}</p>
            </div>
            <div className="playerSelected">
                <h4>Player Selected</h4>
                {
                    player.map(player => <h6>{player.name}   (${player.salary}) </h6>)
                }
            </div>
            <div className="totalSalary">
                <button type="button" class="btn btn-success">Total Salary: ${playerSalary}</button>
            </div>
        </div>

    );
};

export default Newteam;