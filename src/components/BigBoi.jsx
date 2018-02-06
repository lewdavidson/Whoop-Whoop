import React from 'react';
import Nav from './Nav';
import FriendList from './FriendList';
import Profile from './Profile';
import Paragraph from './Paragraph';
import Newsfeed from './Newsfeed';

function BigBoi (){
  const bigBoiStyles = {
    display: 'flex',
    justifyContent: 'spaceAround',
    flexWrap: 'wrap',
    fontFamily: 'Helvetica'
  };
  return (
    <div style={bigBoiStyles}>
      <Nav />
      <Profile />
      <Paragraph />
      <FriendList />
      <Newsfeed />
    </div>
  );
}

export default BigBoi;
