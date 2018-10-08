'use strict';

// import Logo from './logo.png';

export default function (message) {

    if (process.env.NODE_ENV === 'development') {
        console.log(message);
    }
    const div = document.createElement("div");
    div.innerHTML = `Welcome ${message}!`;
    // let logo = new Image();
    // logo.src = Logo;
    // div.appendChild(logo);
    div.classList.add('hello');
    document.body.appendChild(div);
};