import '../css/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';

class TestComponent extends React.Component {

    componentDidMount() {
        // mdc.ripple.MDCRipple.attachTo(document.querySelector('.mdc-button'));
    }

    render() {
        return (
            <div>
                <button className='mdc-button'>button</button>
                <div className="mdc-text-field mdc-text-field--upgraded">
                    <input type="text" id="pre-filled" className="mdc-text-field__input"/>
                    <label className="mdc-floating-label mdc-floating-label--float-above" htmlFor="pre-filled">
                        Label in correct place
                    </label>
                    <div className="mdc-line-ripple"></div>
                </div>
            </div>
        );

    }
}

ReactDOM.render(
    <TestComponent/>,
    document.querySelector('#react-root')
);