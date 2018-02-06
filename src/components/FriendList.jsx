import React from 'react';
import Friend from './Friend';

const masterFriendList = [
  {
    name: 'Violent J',
    tweet: 'The Dark Carnival Games Con is so densely packed with freshness, it is like a karma enhancing Super Burrito with +1 freshness points.',
    pic: 'https://weirdestband.files.wordpress.com/2013/07/icp_pop.jpg'
  },
  {
    name: 'Shaggy 2 Dope',
    tweet: 'Thou shalt always holla a "Whoop Whoop" to let thy neighbor know youre around',
    pic: 'https://slm-assets3.secondlife.com/assets/534279/lightbox/b19f4172390ddc5212d01c013ccd4281.jpg?1277044998'
  },
  {
    name: 'Kid Villian',
    tweet: 'remember if thou art faketh, we shall braketh thine ass in half',
    pic: 'https://s3.amazonaws.com/wapopartners.com/wweek-wp/wp-content/uploads/2015/10/28170730/maxresdefault-1.jpg'
  },
  {
    name: 'John Kickjazz',
    tweet: 'thou shalt always keep ye hatchet sharp and ready for haters',
    pic:'https://i.pinimg.com/736x/e2/c6/eb/e2c6ebd85b18d27ae132d4bcd82c7eb8--insane-clown-posse-favorite-quotes.jpg'
  },
  {
    name: 'Greez-E',
    tweet: 'thou shalt always keep ye shit wicked and wild',
    pic: 'http://www.icp.co.th/storage/Logo/icp%20logo%20.jpg'
  },
];
function FriendList() {
  const listStyle = {
    width: '40%'
  };

  return (
    <div style={listStyle}>
      {masterFriendList.map((friend, index) =>
        <Friend name={friend.name}
          tweet={friend.tweet}
          pic={friend.pic}
          key={index}/>
      )}
    </div>
  );
}

export default FriendList;
