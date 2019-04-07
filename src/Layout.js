import React from 'react';
import Round from './Round';

const Layout = ({ data }) => {
  return(
    <div className="layout">
      <Round data={data} />
      <div className="next-round">
        <h3>Next Round</h3>
        <img src={`../assets/images/next.png`}/>
      </div>
    </div>
  )
}

export default Layout;