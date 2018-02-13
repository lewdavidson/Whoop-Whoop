import React from 'react';
import PropTypes from 'prop-types';
import YouLiike from './YouLiike';

class Friend extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      likeVisibleOnPage: false
    };
    this.handleLikeClick = this.handleLikeClick.bind(this);
  }
  //use prevState to toggle between boolean values//
  handleLikeClick(){
    this.setState(prevState => ({
      likeVisibleOnPage: !prevState.likeVisibleOnPage
    }));
  }
  render() {
    let contentVisible = null;
    if (this.state.likeVisibleOnPage) {
      contentVisible = <YouLiike />;
    } else {
      contentVisible = null;
    }
    return (
      <div className='friendStyles'>
        <div className='wildStyle'>
          <img className='imageStyles' src={this.props.pic}></img>
          <h2 className='tameStyle'>{this.props.name}</h2>
        </div>
        <p>{this.props.tweet}</p>
        <div className='flexy'>
          <button onClick={this.handleLikeClick}>Like</button>
          {contentVisible}
        </div>
        <style jsx>{`
            .flexy {
            display: flex;
            justify-content: space-between;
            align-items: center;
            }
            .friendStyles {
              border: 2px solid black;
              margin: 20px;
              padding: 5px;
            }
            .imageStyles {
              maxWidth: 100%;
              width: 90px;
              marginLeft: 5px;
              marginTop: 5px;
              maxHeight: 90px;
              borderRadius: 15px;
            }
            .wildStyle {
              display: flex;
              align-items: center;
            }
            .tameStyle {
              align-self: center;
              padding-left: 30px;
            }
              `}</style>
      </div>
    );
  }
}
Friend.propTypes = {
  name: PropTypes.string,
  tweet: PropTypes.string,
  pic: PropTypes.string,
};
export default Friend;
