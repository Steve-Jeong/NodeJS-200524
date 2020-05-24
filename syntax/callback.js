var a = function () {
    console.log('A');
}

function slowfunc(afunc) {
    console.log('too slow function processing....');
    afunc();
}

slowfunc(a);