import '../MenuResponsive/MenuResponsive';
import '../Icons/IconClose';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    .menu__responsive-nav{
      position: absolute;
      width: 100%;
      height: 100vh;
      right: -100%;
      transition: 0.3s ease-in-out;
    }
  </style>
  <div>
    <div id="menu__easy-bank">
      <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="11"><g fill="#2D314D" fill-rule="evenodd"><path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z"/></g></svg>
    </div>

    <div class="menu__responsive-nav" id="menu__nav">
      <easy-bank-menu-responsive></easy-bank-menu-responsive>
    </div>
  </div>
`

class EasyBankMenu extends HTMLElement {
  constructor(){
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(){
    let btn_menu = this.shadowRoot.getElementById('menu__easy-bank');
    let menu_nav = this.shadowRoot.getElementById('menu__nav');

    btn_menu.addEventListener('click', (ev) => {
      if(!btn_menu.classList.contains('open')){
        menu_nav.style.right = '0%';
        btn_menu.classList.add('open');
        btn_menu.innerHTML = `
          <svg  xmlns="http://www.w3.org/2000/svg" width="18" height="19"><g fill="#2D314D" fill-rule="evenodd"><path d="M.868.661l16.97 16.97-.706.708L.162 1.369z"/><path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z"/></g></svg>
        `
      }else {
        menu_nav.style.right = '-100%';
        btn_menu.classList.remove('open');
        btn_menu.innerHTML = `
          <svg id="menu__easy-bank" xmlns="http://www.w3.org/2000/svg" width="24" height="11"><g fill="#2D314D" fill-rule="evenodd"><path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z"/></g></svg>
        `;
      }
    })
  }
}

customElements.define('easy-bank-menu', EasyBankMenu);