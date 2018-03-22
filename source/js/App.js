import '../css/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import {MDCRipple} from '@material/ripple';

class TestComponent extends React.Component {

    componentDidMount() {
        MDCRipple.attachTo(document.querySelector('.mdc-button'));
    }

    render() {
        return (
            <div>
                <button className={'mdc-button'}>button</button>
            </div>);
    }

}

ReactDOM.render(<TestComponent/>, document.querySelector('#react-root'));