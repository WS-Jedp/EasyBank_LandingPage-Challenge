import '../Logo/Logo';
import '../Icons/IconFacebook';
import '../Icons/IconInstagram';
import '../Icons/IconTwitter';
import '../Icons/IconPinterst';
import '../Icons/IconYoutube';
import '../Button/Button';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    .footer *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
    }

    .footer{
      position: relative;
      box-sizing: border-box; 
      display: flex;
      flex-flow: row wrap;
      align-items:center;
      justify-center: center;
      width: 100%;
      min-height: 30vh;
      height: auto;
      padding: var(--space-big);
      background-color: var(--color-main);
    }

    .footer__social-media{
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      height: auto;
    }

    .footer__social-icons{
      padding: var(--space-normal) 0;
    }

    .footer__social-icons *{
      padding: 0 var(--space-small);
    }

    .footer__nav{
      display: flex;
      flex-flow: row wrap;
    }

    .footer__nav ul{
      padding: 0 var(--space-big)
    }

    .footer__nav ul li {
      font-size: 1.6rem;
      padding: var(--space-small);
      color: var(--color-white);
      cursor: pointer;
      transition: 0.3s ease-in-out;
    }

    .footer__nav ul li:hover{
      color: var(--color-secondary);
    }

    .footer__nav ul li a {
      color: var(--color-white);
      text-decoration: none;
    }

    .footer__copyright{
      position: absolute;
      right: var(--space-big);
      top: var(--space-big);
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-end;
      align-self: center;
    }

    .footer__copyright small{
      padding: var(--space-medium) 0;
      font-size: 1.6rem;
      font-weight: 400;
      color: var(--color-gray);
    }

    @media screen and (max-width: 1000px){
      .footer{
        justify-content: center;
        align-items: center;
      }
      .footer__copyright {
        position: relative;
        right: initial;
        top: initial;
        justify-content: center;
        align-items: center;
        padding: var(--space-normal);
      }

      .footer__copyright small{
        text-align: center;
      }
    }

    @media screen and (max-width: 768px){
      .footer__social-media{
        align-items: center;
      }
      .footer__nav ul li{
        text-align: center;
      }
    }

    @media screen and (max-width: 600px){
      .footer__nav{
        align-items: center;
        justify-content: center;
      }
    }

    @media screen and (max-width: 400px){
      .footer {
        padding: var(--space-medium);
      }
    }
  </style>

  <footer class="footer">
    <addres class="footer__social-media">
      <easy-bank-logo color="#fff";"></easy-bank-logo>
      <div class="footer__social-icons">
        <a href="#">
          <easy-bank-icon-facebook></easy-bank-icon-facebook>
        </a>
        <a href="#">
          <easy-bank-icon-youtube></easy-bank-icon-youtube>
        </a>
        <a href="#">
          <easy-bank-icon-twitter></easy-bank-icon-twitter>
        </a>
        <a href="#">
          <easy-bank-icon-pinterest></easy-bank-icon-pinterest>
        </a>
        <a href="#">
          <easy-bank-icon-instagram></easy-bank-icon-instagram>
        </a>
      </div>
    </addres>

    <div class="footer__nav">
      <ul>
       <li><a href="#">About Us</a></li> 
       <li><a href="#">Contact</a></li> 
       <li><a href="#">Blog</a></li> 
      </ul>

      <ul>
       <li><a href="#">Careers</a></li> 
       <li><a href="#">Support</a></li> 
       <li><a href="#">Privacy Policy</a></li> 
      </ul>
    </div>

    <div class="footer__copyright">
      <easy-bank-button title="Request Invited"></easy-bank-button>
      <small>
        © Easybank. All Rights Reserved
      </small>
    </div>
  </footer>
`;

class EasyBankFooter extends HTMLElement{
  constructor(){
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('easy-bank-footer', EasyBankFooter);