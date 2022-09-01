export class Container extends HTMLElement {
  constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      const style = document.createElement('style');
      style.innerText = `div { margin: 1rem; }`;
      const container = document.createElement('div');
      const slot = document.createElement('slot');
      container.appendChild(slot);
      shadowRoot.appendChild(style);
      shadowRoot.appendChild(container);
  }

  connectedCallback() {}
}

export const containerTag = 'lib-container';
