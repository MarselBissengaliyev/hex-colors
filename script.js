document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const title = document.querySelector('.title'),
        body = document.querySelector('body'),
        hex = document.querySelector('#hex'),
        btn = document.querySelector('#btn');

    btn.addEventListener('click', (e) => {
        e.preventDefault()
        const color = getComputedStyle(title).color;
        let rgbArr = color.replace(/[()' 'rgb]/g, '').split(',');
        rgbArr = rgbArr.map(r => +r)
        body.style.background = rgbToHex(...rgbArr);
        hex.textContent = rgbToHex(...rgbArr);
    })

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
});