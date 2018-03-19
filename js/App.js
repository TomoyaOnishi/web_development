import Sub from './Sub';

window.test = function() {
    console.log('###window.test()');
    var sub = new Sub();
    sub.call();
};