class Cardnews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  // Construção dos elementos
  build() {
    const componentRoot = document.createElement('div');
    componentRoot.setAttribute('class', 'card');

    const cardLeft = document.createElement('div');
    cardLeft.setAttribute('class', 'card__left');

    const author = document.createElement('span');
    author.textContent = `by ${this.getAttribute('author') || 'Anonymous'}`;

    const linkTitle = document.createElement('a');
    linkTitle.textContent = this.getAttribute('title');
    linkTitle.href = this.getAttribute('link-url');

    const newsContent = document.createElement('p');
    newsContent.textContent = this.getAttribute('content');

    const cardRight = document.createElement('div');
    cardRight.setAttribute('class', 'card__right');

    const newsImage = document.createElement('img');
    newsImage.src = this.getAttribute('photo') || 'https://i.stack.imgur.com/l60Hf.png';
    newsImage.alt = 'Foto da notícia';

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);
    cardLeft.appendChild(author);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);
    cardRight.appendChild(newsImage);

    return componentRoot;
  }

  // Construção dos estilos
  styles() {
    const style = document.createElement('style');
    style.textContent = `
      .card {
        max-width: 830px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        box-shadow: 15px 15px 15px 0px rgba(0,0,0,0.1);
      }

      .card__left {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      .card__left span, .card__left p {
        color: gray;
      }

      .card__left a {
        text-decoration: none;
        color: black;
        font-weight: 600;
        font-size: 30px;
      }

      img {
        width: 300px;
        height: 200px;
      }
    `;

    return style;
  }
}

customElements.define('card-news', Cardnews);