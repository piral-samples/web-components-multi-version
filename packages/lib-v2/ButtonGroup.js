import { LitElement, html, css } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { getAlias } from "./aliases";
import { buttonTag } from "./Button";

export class ButtonGroup extends LitElement {
  static styles = css`
    div {
      color: purple;
    }
  `;

  // play with this
  createRenderRoot() {
    return this;
  }

  render() {
    const button = getAlias(this.localName, buttonTag);
    const code = unsafeHTML(
      `<div><${button}>A</${button}><${button}>B</${button}><${button}>C</${button}></div>`
    );
    return html`${code}`;
  }
}

export const buttonGroupTag = "lib-button-group";
