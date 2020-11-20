import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";

const EarlList = (props) => {
  const match = useRouteMatch();

  if (!props.earls || props.earls.length === 0) {
    return <div>No Earls to display</div>
  }

  return (
    <div>
      {
        props.earls.map((earl) => {
          return (
            <div key={ earl._id }>
              <Link to={`${match.path}/${earl._id}`}>{ earl.target }</Link>
            </div>
          )
        })
      }
    </div>
  );
}

export default EarlList;