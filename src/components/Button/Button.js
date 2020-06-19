import './styles.styl';

const template = document.createElement('template');
template.innerHTML = `
    <style>
      .easy-bank-button { 
        min-width: 150px;
        width: 150px;
        max-width: 150px;
        padding: 1.2rem;
        border-radius: 30px;
        border: none;
        cursor: pointer;
        background: linear-gradient(90deg, var(--color-secondary) 0%, var(--color-secondary) 25%, var(--color-third) 100%);
        color: var(--color-white);
        transition: 0.1s ease-in-out;
      }
      .easy-bank-button:hover{
        background: linear-gradient(90deg, hsl(136, 65%, 70%) 0%, hsl(136, 65%, 70%) 25%, hsl(192, 70%, 80%) 100%);
        box-shadow: 0 2px 9px hsl(192, 70%, 80%);
      }
    </style>

    <button class='easy-bank-button' id='title'>
    </button>
`;

class EasyBankButton extends HTMLElement {
  constructor(){
    super();

    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.shadowRoot.getElementById('title').innerText = this.getAttribute('title');
  }
}

customElements.define('easy-bank-button', EasyBankButton);