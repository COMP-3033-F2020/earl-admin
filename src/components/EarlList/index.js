import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import { Table } from 'react-bootstrap';

const EarlList = (props) => {
  const match = useRouteMatch();

  if (!props.earls || props.earls.length === 0) {
    return <div>No Earls to display</div>
  }

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Target</th>
            <th>Short Code</th>
            <th>Created Date</th>
            <th>Last Updated</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            props.earls.map((earl) => {
              return (
                <tr key={earl._id}>
                  <td>{earl.target}</td>
                  <td>{earl.shortCode}</td>
                  <td>{earl.createdAt}</td>
                  <td>{earl.updatedAt}</td>
                  <td>
                    <Link to={`${match.path}/${earl._id}`}>Details</Link>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
      
    </div>
  );
}

export default EarlList;