import React, { Component } from 'react';

const UserDetails = (props) => { // instead of doing (props) you can also directly access the properties. eg: ({userDetails}). This would be the same as `const userDetails = props.userDetails`
debugger
  const renderUserDetails = props.userDetails.map((user, index) => {
    return ( // only use the brackets when using mulitlines. If it's just one line of return statement, brackets aren't necessary
      <li key={index}>
        {user.name}
      </li>
    )
  });
    return (
      <ul>
      {renderUserDetails}
      </ul>
    )


}

export default UserDetails
