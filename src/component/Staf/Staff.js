import React from 'react';
import './Staff.css';
import { staffdata } from './TeamData';

function Staff() {
  return (
    <div className='staf-container'>
        {staffdata.map((item) => (
            <div className="card" style={{"width": "18rem"}}>
            <img className="card-img-top" src={item.img} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <h6 className='profession'>{item.job}</h6>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Staff;
