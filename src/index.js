import "./styles.css"
import { AboutPage } from "./about.js";
import { LoadHomePage } from "./page_load.js";
import { ContactPage } from "./contact.js";
import { MenuPage } from "./menu.js";

console.log("Helllo");

function clearContent(){
    const content = document.querySelector('#content');
    content.innerHTML=''
}

function intializeWebsite(){

    const content = document.getElementById('content');

    let Home = document.querySelector('#Home');
    Home.addEventListener('click',()=>{
        clearContent();
        content.appendChild(LoadHomePage());
    });

    let Menu = document.querySelector('#Menu');
    Menu.addEventListener('click',()=>{
        clearContent();
        content.appendChild(MenuPage());
    });

    let About = document.querySelector('#About');
    About.addEventListener('click',()=>{
        clearContent();
        content.appendChild(AboutPage());
    });

    let Contact = document.querySelector('#Contact');
    Contact.addEventListener('click',()=>{
        clearContent();
        content.appendChild(ContactPage());
    });

}

document.addEventListener('DOMContentLoaded',intializeWebsite);