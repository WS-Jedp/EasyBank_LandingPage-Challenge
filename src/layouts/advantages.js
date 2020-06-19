import '../components/AdvantageArticle/AdvantageArticle';
import '../components/Icons/IconOnline';
import '../components/Icons/IconOnboarding';
import '../components/Icons/IconBudgeting';
import '../components/Icons/IconApi';

const template = document.createElement('template');
template.innerHTML = `
  <style>

    .advantages *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .advantages{
      position: relative;
      background-color: var(--color-grayish);
      padding: var(--space-big) 10%;
    }

    .advantages h2 {
      color: var(--color-main);
      font-weight: 400;
      margin: var(--space-normal) 0;
    }

    .advantages p{
      width: 60%;
      font-size: 1.6rem;
      font-weight: 300;
      color: var(--color-gray);
    }

    .advantages__advantage{
      width: 100%;
      padding: var(--space-medium) 0;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
    }

    @media screen and (max-width: 800px){
      .advantages{
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        padding: var(--space-big);
      }

      .advantages h2 {
        text-align: center;
      } 

      .advantages p{
        width: 90%;
        text-align: center;
      }

      .advantages__advantage {
        width: auto;
        margin: 0;
        justify-content: space-around;
        align-items: center;
      }
    }
  </style>


  <section class="advantages">
    <h2 id="title"></h2>
    <p id="description"></p>

    <article class="advantages__advantage">
      <easy-bank-advantage
        title="Online Banking"
        description="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
      >
        <i slot="icon"><easy-bank-icon-online></easy-bank-icon-online></i>
      </easy-bank-advantage>
      
      <easy-bank-advantage
        title="Simple Budgeting"
        description="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
      >
        <i slot="icon"><easy-bank-icon-budgeting></easy-bank-icon-online></i>
      </easy-bank-advantage>

      <easy-bank-advantage
        title="Fast Onboarding"
        description="We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
      >
        <i slot="icon"><easy-bank-icon-onboarding></easy-bank-icon-online></i>
      </easy-bank-advantage>

      <easy-bank-advantage
        title="Open API"
        description="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
      >
        <i slot="icon"><easy-bank-icon-api></easy-bank-icon-online></i>
      </easy-bank-advantage>
    </article>
  </section>
`;

class EasyBankAdvantages extends HTMLElement{
  constructor(){
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.getElementById('title').innerText = this.getAttribute('title');
    this.shadowRoot.getElementById('description').innerText = this.getAttribute('description');
  }
}

customElements.define('easy-bank-advantages', EasyBankAdvantages);