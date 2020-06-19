const template = document.createElement('template');
template.innerHTML = `
  <style>
    .article *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .article {
      position: relative;
      display: inline-block;
      overflow: hidden;
      min-width: 200px;
      width: auto;
      max-width: 240px; 
      margin-bottom: var(--space-medium);
      border-radius: 6px;
      background-color: var(--color-white);
    }

    .article__image{
      position: realtive;
      width: 100%;
    }

    .article__image img {
      object-fit: cover;
      width: 100%
    }

    .article__content{
      padding: var(--space-medium);
    }

    .article__content span {
      color: var(--color-gray);
      font-size: 1.2rem;
    }
    
    .article__content h2{
      margin: var(--space-small) 0;
      color: var(--color-main);
      font-size: 1.8rem;
      font-weight: 500;
      cursor: pointer;
      transition: 0.3s ease-in-out;
    }

    .article__content h2:hover{
      color: var(--color-secondary);
    }

    .article__content p {
      color: var(--color-gray);
      font-size: 1.2rem;
      font-weight: 300;
    }

    @media screen and (max-width: 768px) {
      .article{
        width: auto;
        max-width: 300px;
      }
    }

    @media screen and (max-width: 500px){
      .article{
        width: auto;
        max-width: initial;
      }
    }
  </style>

  <article class="article">
    <figure class="article__image">
      <img id="imgArt" />
    </figure>
    <div class="article__content">
      <span id="author"></span>
      <h2 id="title"><h2>
      <p id="description"><p>
    </div>
  </article>
`

class CardArticle extends HTMLElement {
  constructor(){
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.getElementById('imgArt').src = this.getAttribute('src');
    this.shadowRoot.getElementById('author').innerText = this.getAttribute('author');
    this.shadowRoot.getElementById('title').innerText = this.getAttribute('title');
    this.shadowRoot.getElementById('description').innerText = this.getAttribute('description');
  }
}

customElements.define('easy-bank-card-article', CardArticle); 
