// Create a custom component for the website's navbar
const navBarTemplate = document.createElement("template");

// Fill navBarTemplate with relevant css and html code
navBarTemplate.innerHTML = 
    `<style>
        ul {
            list-style: none;
        }
        #navUl {
            display: flex;
            padding: 0;
            margin-top: 30px;
            align-items: center;
            justify-content: space-evenly;
        }

        #mobileLogo{
            width: 100%;
            margin-top: 10px;
            display: flex;
        }

        #mobileUl {
            padding: 0;
            margin: 0;
            text-align: center;
        }

        #mobileUl li{
            padding: 10px 0px;
        }

        nav a{
            color: #D6D9B6;
            padding: 12px 16px;
            text-decoration: none;
            font-size: 22px;
            font-family: "Judson", serif;
        }

        @media only screen and (max-width: 600px) {
            #webNavBar {
                display: none;
            }
            #mobileNavBar{
                display: inline;
            }
        }
        @media only screen and (min-width: 600px) {
            #webNavBar {
                display: inline;
            }
            #mobileNavBar{
                display: none;
            }
        }
    </style>
    <nav>
        <div id="webNavBar">
            <ul id="navUl">
                <li>
                    <a href="home.html">music</a>
                </li>
                <li>
                    <a href="">writing</a>
                </li>
                <li class="logoContainer">
                    <a href="/home.html">
                        <img width="130" class="logo" alt="Jackie Marchal logo" src="assets/JM.svg"></img>
                    </a>
                </li>
                <li>
                    <a href="">bio/contact</a>
                </li>
                <li>
                    <a href="/live.html">live</a>
                </li>
            </ul>
        </div>
        <div id="mobileNavBar">
            <div id="mobileLogo">
                <a href="/home.html">
                    <img width="80" alt="Jackie Marchal logo" src="assets/JackieMarchal.svg"></img>
                </a>
                <svg onclick="toggleHamburger()" fill="#D6D9B6" id="hamburger" style="height: 20px; position: fixed; top: 25px; right: 20px" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                </svg>
            </div>

        </div>
    </nav>`;

// Construct NavBar class 
class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.appendChild(navBarTemplate.content);
    }
}

// Define component
customElements.define('nav-component', NavBar);