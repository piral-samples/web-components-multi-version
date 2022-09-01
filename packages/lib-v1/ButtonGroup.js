import { getAlias } from "./aliases";
import { buttonTag } from "./Button";

export class ButtonGroup extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
    const button = getAlias(this.localName, buttonTag);
    this.innerHTML = `<div><${button}>A</${button}><${button}>B</${button}><${button}>C</${button}></div>`;
  }
}

export const buttonGroupTag = 'lib-button-group';
