import React from 'react';

function Nav() {
  const navStyles = {
    width: '100%',
    display: 'flex',
    borderBottom: '2px dotted black',
    justifyContent: 'space-between',
    height: '75px',
    alignItems: 'center'
  };
  const group = {
    display: 'inline-block'
  };
  const lineItems ={
    listStyle: 'none',
    display: 'inline-block',
    padding: '10px',
    border: '2px solid black',
    width: '50px',
    height: '90%'
  }
  const funStuff = {
    display: 'flex',
    justifyContent: 'space-between',
    color: 'gray'
  };
  const search = {
    width: "300px",
    border: '2px solid blue',
    outline: 'none',
    borderRadius: '15px',
    height: '30px',
    marginRight: '50px'
  };

  const Tweetin = {
    border: '2px solid blue',
    outline: 'none',
    borderRadius: '15px',
    height: '30px',
    width: '150px'
  }
  return (
    <div style={navStyles}>
      <div style={group}>
        <ul>
          <li style={lineItems}>Fest</li>
          <li style={lineItems}>Faygo</li>
          <li style={lineItems}>Furries</li>
        </ul>
      </div>
      <div style={funStuff}>
        <button style={search}>Surch</button>
        <button style={Tweetin}>Whoop Whoop</button>
      </div>
    </div>
  );
}

export default Nav;
