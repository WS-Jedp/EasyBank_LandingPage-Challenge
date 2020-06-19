const template = document.createElement('template');
template.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19"><g fill="#2D314D" fill-rule="evenodd"><path d="M.868.661l16.97 16.97-.706.708L.162 1.369z"/><path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z"/></g></svg>
`;

class IconClose extends HTMLElement{
  constructor(){
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('easy-bank-icon-close', IconClose);