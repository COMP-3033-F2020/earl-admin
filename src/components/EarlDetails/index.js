import React, { useState } from 'react';
import { Link, useParams, useRouteMatch } from "react-router-dom";
import axios from 'axios';

const EarlDetails = (props) => {
  const { earlId } = useParams();
  const [earl, setEarl] = useState(null);
  
  if (!earl) {
    axios.get(`http://localhost:3001/earls/${earlId}`).then(({ data }) => {
      setEarl(data);
    });
  }
  
  return (
    <div>
      Details for: { earl.target }
    </div>
  );
}

export default EarlDetails;