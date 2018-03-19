import Sub from './Sub';
import '../css/style.scss';
import {MDCRipple} from '@material/ripple';

window.test = function() {
    console.log('###window.test()');
    var sub = new Sub();
    sub.call();
    const ripple = new MDCRipple(document.querySelector('.foo-button'));
};