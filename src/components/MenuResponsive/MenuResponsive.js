const template = document.createElement('template');
template.innerHTML = `
  <style>
    .menu-responsive{
      position: absolute;
      display: flex;
      justify-content: center;
      top: 20px;
      left: 0;
      rigth: 0;
      width: 100%;
      height: 100vh;
      background: rgb(255,255,255);
      background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.5158438375350141) 50%, rgba(0,0,0,0.5018382352941176) 100%);
      z-index: -1;
    }

    .menu-responsive__nav{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70%;
      min-height: 200px;
      height: auto;
      max-height: 300px;
      margin: var(--space-medium);
      border-radius: 6px;
      background-color: var(--color-white);
    }

    .menu-responsive__nav ul{
      list-style: none;
      padding: 0;
    }
    .menu-responsive__nav ul li{
      margin: 0;
      padding: var(--space-normal);
      transition: 0.3s ease-in-out;
      text-align: center;
    }

    .menu-responsive__nav ul li a{
      text-decoration: none;
      color: var(--color-main);
    }
    
    .menu-responsive__nav ul li:hover{
      color: var(--color-secondary);
    }
    .menu-responsive__nav ul li:active{
      color: var(--color-secondary);
    }
  </style>

  <section class="menu-responsive">
    <article class="menu-responsive__nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </article>
  </section>
`;

class MenuResponsive extends HTMLElement{

  constructor(){
    super();
    
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('easy-bank-menu-responsive', MenuResponsive);
