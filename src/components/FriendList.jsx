import React from 'react';
import Friend from './Friend';
import PropTypes from 'prop-types';

function FriendList(props) {
  const listStyle = {
    width: '40%'
  };

  return (
    <div style={listStyle}>
      {props.friendList.map((friend, index) =>
        <Friend name={friend.name}
          tweet={friend.tweet}
          pic={friend.pic}
          key={index}/>
      )}
    </div>
  );
}
FriendList.propTypes = {
  friendList: PropTypes.array
};

export default FriendList;
