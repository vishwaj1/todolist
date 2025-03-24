import logoimg from './panera.jpeg.avif'

export function LoadHomePage(){


    let Homediv = document.createElement('div');

    let h1 = document.createElement('H1');
    h1.innerHTML = 'We are Panera Bread';
    h1.style = 'display:flex; justify-content:center;'
    content.appendChild(h1);

    let img = document.createElement('img');
    img.src = logoimg
    img.style = 'margin-left:100px;'
    content.appendChild(img)

    return Homediv;

}



