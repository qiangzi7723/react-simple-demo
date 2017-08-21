import React from 'react';
import ReactDOM from 'react-dom';
import LogControl from './component/event-state-demo';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(< LogControl / >, document.getElementById('root'));
registerServiceWorker();