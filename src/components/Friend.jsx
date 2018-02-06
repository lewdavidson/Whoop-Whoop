import React from 'react';
import PropTypes from 'prop-types';

function Friend(props) {
  const friendStyles = {
    border: '2px solid black',
    margin: '20px',
    padding: '5px'
  };
  const imageStyles = {
    maxWidth: '100%',
    width: '90px',
    marginLeft: '5px',
    marginTop: '5px',
    maxHeight: '90px',
    borderRadius: '15px'
  };
  const wildStyle = {
    display: 'flex',
  };
  const tameStyle = {
    alignSelf: 'center',
    paddingLeft: '30px'
  }
  return (
    <div style={friendStyles}>
      <div style={wildStyle}>
        <img style={imageStyles} src={props.pic}></img>
        <h2 style={tameStyle}>{props.name}</h2>
      </div>
      <p>{props.tweet}</p>
    </div>
  );
}
Friend.propTypes = {
  name: PropTypes.string.isRequired,
  tweet: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired
};
export default Friend;
