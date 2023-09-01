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
            margin-top: 20px;
            display: flex;
            justify-content: center;
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
                    <img width="100" alt="Jackie Marchal 'JM' logo" src="assets/JM.svg"></img>
                </a>
            </div>
            <ul id="mobileUl">
                <li>
                    <a href="home.html">music</a>
                </li>
                <li>
                    <a href="">writing</a>
                </li>
                <li>
                    <a href="">bio/contact</a>
                </li>
                <li>
                    <a href="/live.html">live</a>
                </li>
            </ul>
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