import './styles.styl';
import '../Logo/Logo.js';
import '../Button/Button';
import '../Menu/Menu';
import '../MenuResponsive/MenuResponsive';

const template = document.createElement('template');
template.innerHTML = `
<style>

#MainContentBtn {
  position: absolute;
  left: -50%;
  top: 12px;
  padding: var(--space-normal);
  color: var(--color-main);
  text-decoration: none;
  background: linear-gradient(90deg, hsl(136, 65%, 70%) 0%, hsl(136, 65%, 70%) 25%, hsl(192, 70%, 80%) 100%);
  transition: 0.3s ease-in-out;
}

#MainContentBtn:focus {
  left: 12px;
}

header * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.header {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  min-width: 100%;
  width: 100%;
  max-width: 100%;
  height: 60px;
  padding: var(--space-small);
  background-color: var(--color-white);
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  z-index: 99;
  overflow: hidden;
}
.header nav ul {
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
}
.header nav ul li {
  position: relative;
  height: 100%;
  padding: var(--space-small);
  font-size: 1.5rem;
  color: var(--color-gray);
  cursor: pointer;
  transition: 0.3s ease-in-out;
}
.header nav ul li a{
  color: var(--color-gray);
  text-decoration: none;
}
.header nav ul li::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  opacity: 0;
  background: linear-gradient(90deg, #31d35c 0%, #31d35c 40%, #2bb7da 100%);
  transition: 0.3s ease-in-out;
}
.header nav ul li:hover {
  color: var(--color-main);
}
.header nav ul li:hover::after {
  content: '';
  position: absolute;
  bottom: 0;
  opacity: 1;
}
.header__menu-responsive {
  display: none;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .header {
    justify-content: space-around;
  }
  .header nav ul {
    display: none;
  }
  .header .header__button {
    display: none;
  }
  .header__menu-responsive {
    display: inline;
  }

}
</style>

<header class='header'>
  <a id="MainContentBtn" href="#MainContent">Skip Content</a>
  <easy-bank-logo></easy-bank-logo>
  <nav>
    <ul>
      <li aria-label="Go to Home Page"><a href="#">Home</a></li>
      <li aria-label="Go to About Page"><a href="#">About </a></li>
      <li aria-label="Go to Conctact page"><a href="#">Contact</a></li>
      <li aria-label="Go To Blog page"><a href="#">Blog</a></li>
      <li aria-label="Go to Carreers Page"><a href="#">Careers</a></li>
    </ul>
  </nav>
  <div class="header__button">
    <easy-bank-button title="Request Invite">
    </easy-bank-button>
  </div>
  
  <div class="header__menu-responsive">
    <easy-bank-menu></easy-bank-menu> 
  </div>
  <header>
`;

class myHeader extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(){

  }

}

customElements.define('my-header', myHeader);