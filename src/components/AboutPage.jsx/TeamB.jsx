import React, { useState } from "react";
import Teams from "./Teams";
import Board from "./Board";

function TeamB() {
  const [display, setDisplay] = useState(true);
  const [teamcolor, setTeamColor] = useState("teambtns");
  const [boardcolor, setBoardColor] = useState("boardbtn");

  const displayToggle = () => {
    setDisplay(true);
    setTeamColor("teambtns");
    setBoardColor("boardbtn");
  };
  const displayToggles = () => {
    setDisplay(false);
    setTeamColor("teambtn");
    setBoardColor("boardbtns");
  };
  return (
    <div className="">
      <div className="displaybtn">
        <button className={teamcolor} onClick={displayToggle}>
          {" "}
          Team
        </button>
        <button className={boardcolor} onClick={displayToggles}>
          Advisory Board
        </button>
      </div>
      {display ? <Teams /> : <Board />}
    </div>
  );
}

export default TeamB;
