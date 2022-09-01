import { LitElement, html, css } from "lit";

export class Container extends LitElement {
  static styles = css`
    div {
      color: purple;
      margin: 1rem;
    }
  `;

  render() {
    return html`<div><slot></slot></div>`;
  }
}

export const containerTag = 'lib-container';
