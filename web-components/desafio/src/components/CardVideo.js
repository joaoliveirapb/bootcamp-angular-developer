class Cardvideo extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement('div');
    componentRoot.setAttribute('class', 'card');

    const cardImage = document.createElement('div');
    cardImage.setAttribute('class', 'card__image');

    const contentImage = document.createElement('img');
    contentImage.src = this.getAttribute('photo') || 'https://www.openaire.eu/components/com_easyblog/themes/wireframe/images/placeholder-video.png';
    contentImage.alt = 'Foto do vídeo.';
    
    const cardInfos = document.createElement('div');
    cardInfos.setAttribute('class', 'card__infos');

    const cardInfosImageProfile = document.createElement('img');
    cardInfosImageProfile.src = this.getAttribute('photo-profile') || 'https://i.stack.imgur.com/l60Hf.png';

    const cardInfosDetails = document.createElement('div');
    cardInfosDetails.setAttribute('class', 'card__infos__details');

    const title = document.createElement('p');
    title.textContent = this.getAttribute('title');

    const channelName = document.createElement('span');
    channelName.textContent = this.getAttribute('channel-name');

    const amountOfViews = document.createElement('span');
    amountOfViews.textContent = `${this.getAttribute('views')} visualizações`;

    componentRoot.appendChild(cardImage);
    componentRoot.appendChild(cardInfos);
    cardImage.appendChild(contentImage);
    cardInfos.appendChild(cardInfosImageProfile);
    cardInfos.appendChild(cardInfosDetails);
    cardInfosDetails.appendChild(title);
    cardInfosDetails.appendChild(channelName);
    cardInfosDetails.appendChild(amountOfViews);

    return componentRoot;
  }

  styles() {
    const style = document.createElement('style');
    style.textContent = `
      .card {
        max-width: 360px;
        display: flex;
        flex-direction: column;
        background-color: #252525;
        color: #fff;
        border-radius: 10px;
      }

      .card__image > img {
        display: block;
        max-width: 100%;
        border-radius: 10px 10px 0 0;
      }

      .card__infos {
        display: flex;
        margin: 10px 0;
        gap: 10px;
      }

      .card__infos > img {
        width: 36px;
        height: 36px;
        margin-left: 5px;
        border-radius: 50%;
      }

      .card__infos__details {
        display: flex;
        flex-direction: column;
      }

      .card__infos__details > p {
        margin: 0 0 8px 0;
        font-weight: 600;
      }

      .card__infos__details > span {
        color: gray;
        font-size: 14px;
        margin-bottom: 3px;
      }
    `

    return style;
  }
}

customElements.define('card-video', Cardvideo);