import React from 'react';
import ReactDOM from 'react-dom';
import BigBoi from './components/BigBoi';
import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(BigBoi);
/*eslint-disable*/

if (module.hot) {
  module.hot.accept('./components/BigBoi', () => {
    render(BigBoi)
  })
}

/*eslint-enable*/
