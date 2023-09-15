// Create a custom component for the website's navbar
const navBarTemplate = document.createElement("template");

// Fill navBarTemplate with relevant css and html code
navBarTemplate.innerHTML = 
    `<style>
       
    </style>
    `;

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

