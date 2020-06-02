import _ from 'lodash';
import TrelloPowerUp from 'https://p.trellocdn.com/power-up.min.js'

function component() {
  const element = document.createElement('div');


  element.innerHTML = _.join(['Hello', 'webpack 2020'], ' ');

  return element;
}

document.body.appendChild(component());

TrelloPowerUp.initialize({
  'card-buttons': function (t, options) {
    return [{
      icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
      text: 'Estimate Size',
    }];
  },
});
