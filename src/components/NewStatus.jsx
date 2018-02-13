import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';

const NewStatus = (props) => {
  let _tweet = null;
  function handleNewStatus(event) {
    event.preventDefault();
    props.onNewStatusCreation({tweet: _tweet.value, id: v4()});
    _tweet.value = '';
  }
  
  return(
    <form onSubmit={handleNewStatus}>
      <textarea
        id='tweet'
        height='500px'
        width='100%'
        placeholder='put yur status inside of me'
        ref={(textarea) => {_tweet = textarea;}} />
      <button to='/' type='submit'>Post yur deetz bruv</button>
    </form>
  );
};


NewStatus.propTypes = {
  onNewStatusCreation: PropTypes.func
};
export default NewStatus;
