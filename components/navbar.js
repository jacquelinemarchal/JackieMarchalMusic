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

        nav a{
            color: #D6D9B6;
            text-decoration: none;
            font-size: 22px;
            font-family: "Judson", serif;
            padding-right: 4px;
        }

        nav li{
            padding: 12px 16px;
        }

        #dropdownMenu a {
            padding: 0;
            font-size: 15px;
        }

        #dropdownMenu li {
            padding: 8px 10px;
            font-size: 15px;
        }

        #dropdownMenu{
            position: absolute;
            padding: 0;
            background-color: #000000;
            opacity: 0.7;
            width: 170px;
            border-radius: 2px;
        }

        #hamburger{
            height: 20px; 
            position: fixed; 
            top: 25px; 
            right: 20px;
            cursor: pointer;
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
                    <a target="_blank" href="https://share.amuse.io/album/jackie-marchal-as-is">listen</a>
                    <svg fill="#D6D9B6" xmlns="http://www.w3.org/2000/svg" height=".8em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                    <ul id="dropdownMenu">
                        <li>
                            <a target="_blank" href="https://open.spotify.com/artist/0impl8NVq1NoLQssU18V1P?si=MXM3iY_8R2mOlsHIaUA1ZA">spotify</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://music.apple.com/us/artist/jackie-marchal/1495174236">apple music</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://jackiemarchal.bandcamp.com/">bandcamp</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://music.amazon.com/artists/B083Y1QSJG/jackie-marchal">amazon music</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://music.youtube.com/browse/MPREb_gmrrWD3dsyq">youtube music</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.deezer.com/album/454169445">deezer</a>
                        </li>
                        
                    </ul>
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
                <svg onclick="toggleHamburger()" fill="#D6D9B6" id="hamburger" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
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