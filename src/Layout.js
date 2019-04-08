import React from 'react';
import Round0 from './Round0';
import Round1 from './Round1';
import Round2 from './Round2';
import Round3 from './Round3';
import Round4 from './Round4';
import Round5 from './Round5';

const Layout = ({ data, currentRound, games, setCurrentRound }) => {
  const round0 = <Round0 data={data} games={games} />;
  const round1 = <Round1 data={data} games={games} />;
  const round2 = <Round2 data={data} games={games} />;
  const round3 = <Round3 data={data} games={games} />;
  const round4 = <Round4 data={data} games={games} />;
  const round5 = <Round5 data={data} games={games} />;
  let selectedRound = round0;

  switch(currentRound) {
    case "1": selectedRound = round1; break;
    case "2": selectedRound = round2; break;
    case "3": selectedRound = round3; break;
    case "4": selectedRound = round4; break;
    case "5": selectedRound = round5; break;
  }

  const round = parseInt(currentRound);
  const prevRound = round > 0 ? (round - 1).toString() : '0';
  const nextRound = round < 5 ? (round + 1).toString() : '5';
  const previousHidden = currentRound === '0' ? "hidden" : '';
  const nextHidden = currentRound === '5' ? "hidden" : '';

  return(
    <div className="layout">
      {selectedRound}
      <div className="nav">
        <div className={`previous round-text ${previousHidden}`} onClick={setCurrentRound.bind(this, prevRound)}>
          <img src={`../assets/images/next.png`}/>
          <h3>Previous Round</h3>
        </div>
        <div className={`next round-text ${nextHidden}`} onClick={setCurrentRound.bind(this, nextRound)}>
          <h3>Next Round</h3>
          <img src={`../assets/images/next.png`}/>
        </div>
      </div>
    </div>
  )
}

export default Layout;