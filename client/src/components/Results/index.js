import React from 'react';
import './style.css';
import ColorCard from '../../components/ColorCard';


function Results({ children }) {
  return (
    <div className='colorResults'>
      <ColorCard style={{ width: "100vw" }}/>
    </div>
  );
}

export default Results;
