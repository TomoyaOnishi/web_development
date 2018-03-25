
import React from 'react';
import ReactDOM from 'react-dom';

import * as mdc from 'material-components-web';

class TestComponent extends React.Component {

    componentDidMount() {
        mdc.autoInit();
    }

    render() {
        return (
            <div>
                <div className="mdc-checkbox">
                    <input type="checkbox"
                           className="mdc-checkbox__native-control"/>
                    <div className="mdc-checkbox__background">
                        <svg className="mdc-checkbox__checkmark"
                             viewBox="0 0 24 24">
                            <path className="mdc-checkbox__checkmark-path"
                                  fill="none"
                                  stroke="white"
                                  d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                        </svg>
                        <div className="mdc-checkbox__mixedmark"></div>
                    </div>
                </div>
                <button className='mdc-button mdc-button--raised' data-mdc-auto-init="MDCRipple">button</button>
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
    <TestComponent/>
    ,
    document.querySelector('#react-root')
);