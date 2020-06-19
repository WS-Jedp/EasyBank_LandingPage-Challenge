import '../components/CardArticle/CardArticle';
import imgageCurrency from '../assets/images/image-currency.jpg';
import imagePlane from '../assets/images/image-plane.jpg';
import imageConfetti from '../assets/images/image-confetti.jpg';
import imageRestaurant from '../assets/images/image-restaurant.jpg';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    .last-articles *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .last-articles{
      padding: var(--space-big) 10%;
      background-color: var(--color-light);
    }

    .last-articles h2{
      color: var(--color-main);
      font-size: 3.3rem;
      font-weight: 400;
    }

    .last-articles__articles {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;
      padding: var(--space-big) 0;
    }

    @media screen and (max-width: 900px){
      .last-articles__articles {
        justify-content: space-around;
      }
    }

    @media screen and (max-width: 600px){
      .last-articles{
        jsutify-content: center;
      }
      .last-articles h2{
        text-align: center;
      }
    }
  </style>

  <section class="last-articles">
    <h2 id="title"></h2>

    <article class="last-articles__articles">
      <easy-bank-card-article
        author="By Claire Robinson"
        title="Receive money in any currency with no fees"
        description="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single"
        src="${imgageCurrency}">
      </easy-bank-card-article>
      
      <easy-bank-card-article
        author="By Claire Robinson"
        title="Receive money in any currency with no fees"
        description="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single"
        src="${imageRestaurant}">
      </easy-bank-card-article>

      <easy-bank-card-article
        author="By Claire Robinson"
        title="Receive money in any currency with no fees"
        description="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single"
        src="${imagePlane}">
      </easy-bank-card-article>

      <easy-bank-card-article
        author="By Claire Robinson"
        title="Receive money in any currency with no fees"
        description="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single"
        src="${imageConfetti}">
      </easy-bank-card-article>
    </article>
  </section>
`;

class LastArticles extends HTMLElement{
  constructor(){
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.getElementById('title').innerText = this.getAttribute('title');
  }
}

customElements.define('easy-bank-last-articles', LastArticles);