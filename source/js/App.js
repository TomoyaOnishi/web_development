import Sub from './Sub';
import '../css/style.scss';
import {MDCRipple} from '@material/ripple';
import ReactDOM from 'react-dom';
import React from 'react';

window.test = function() {
    console.log('###window.test()');
    var sub = new Sub();
    sub.call();
    const ripple = new MDCRipple(document.querySelector('.foo-button'));
};

class TestComponent extends React.Component {

    render() {
        return (<div></div>);
    }

}

ReactDOM.render(<TestComponent/>, document.querySelector('#react-root'));