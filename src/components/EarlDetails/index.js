import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { fetchById } from '../../api';

const EarlDetails = (props) => {
  const { earlId } = useParams();
  const [earl, setEarl] = useState(null);
  
  if (!earl) {
    fetchById(earlId).then(data => {
      setEarl(data);
    });
  }
  
  return (
    earl ?
    <div>
      Details for: { earl.target }
    </div> : null
  );
}

export default EarlDetails;