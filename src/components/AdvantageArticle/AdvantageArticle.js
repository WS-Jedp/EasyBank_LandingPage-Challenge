const template = document.createElement('template');
template.innerHTML = `
  <style>

    .advantage *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .advantage{
      position: relative;
      display: inline-block;
      min-width: 200px;
      width: 20%;
      max-width: 240px;
      margin-bottom: var(--space-big);
    }

    .advantage h3{
      margin: var(--space-medium) 0;    
      color: var(--color-main);
      font-weight: 500;
    }
    .advantage p{
      color: var(--color-gray);
      font-weight: 300;
      font-size: 1.6rem;
    }

    @media screen and (max-width: 550px){
      .advantage{
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        min-width: 200px;
        width: auto;
        max-width: 360px;
        margin-bottom: var(--space-big);
      }
      .advantage h3{
        margin: var(--space-normal);
      }
      .advantage p, .advantage h3{
        text-align: center; 
      }
    }
  </style>

  <article class="advantage">
    <i class="advantage__icon"><slot name="icon"></slot></i>
    <h3 id="title"></h3>
    <p id="description"></p>
  </article>
`;

class AdvantageArticle extends HTMLElement {
  constructor(){
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.getElementById('title').innerText = this.getAttribute('title');
    this.shadowRoot.getElementById('description').innerText = this.getAttribute('description');
  }
}

customElements.define('easy-bank-advantage', AdvantageArticle);