import '../components/Button/Button';
import bgImg from '../assets/images/bg-intro-desktop.svg';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    .welcome *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .welcome{
      position: relative;
      box-sizing: border-box;
      display: flex;
      flex-flow: row wrap-reverse;
      align-items: center;
      justify-content: flex-start;
      width:100%;
      max-width:100%;
      height: 80vh;
      padding: var(--space-big) 10%;
      background-color: var(--color-light);
      background-image: url(${bgImg});
      background-size: 60% 180vh;
      background-position: 135% 80%;
      background-repeat: no-repeat;
    }
    .welcome__introduction{
      position: relative;
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;
      justify-content: center;
      min-width: 368px;
      width: 50%;
      max-width: 50%;
      height: 100%;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .welcome__introduction h1 {
      font-size: 3.9rem;
      font-weight: 400;
      color: var(--color-main);
    }

    .welcome__introduction p {
      margin: var(--space-medium) 0;
      font-weight: 300;
      color: var(--color-main);
    }


    .welcome__images{
      position: relative;
      min-width: 350px;
      width: 50%;
      max-width: 50%;
      height: 100%;
      max-height: 100%;
      margin: 0;
      padding: 0;

    }
    .welcome__images img {
      position: relative;
      object-fit: cover;
      width: 90%;
      z-index: 2;
    }

    @media screen and (max-width: 768px){
      .welcome {
        min-height: 80vh;
        height: auto;
        align-items: center;
        justify-content: center;
        background-size: 120% 120vh;
        background-position: -25% -60vh;
      }
      .welcome__introduction{
        width: 100%;
        padding: var(--space-normal);
        justify-contnent: center;
        align-items: center;
        text-align: center;
      }
      .welcome__images{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;  
        width: 100%;
        max-width: 100%;
      }

      .welcome__images img{
        width: 300px;
      }
    }
  </style>

  <section class="welcome">
    <div class="welcome__introduction">
      <h1 id="title"></h1>
      <p id="description"></p>
      <easy-bank-button title="Request Invite"></easy-bank-button>
    </div>

    <figure class="welcome__images">
      <img id="picture" alt="Phones and mobile computers for easyBank"/>
    </figure>
  </section>
`;

class WelcomeEasyBank extends HTMLElement{
  constructor(){
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.getElementById('title').innerText = this.getAttribute('title');
    this.shadowRoot.getElementById('description').innerText = this.getAttribute('description');

    this.shadowRoot.getElementById('picture').src = this.getAttribute('image');
  }
}

customElements.define('welcome-easy-bank', WelcomeEasyBank);
