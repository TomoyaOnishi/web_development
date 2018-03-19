import Sub from './Sub';
import '../css/style.css';

window.test = function() {
    console.log('###window.test()');
    var sub = new Sub();
    sub.call();
};