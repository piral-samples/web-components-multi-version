import { Button, buttonTag, buttonStyle } from './Button';
import { ButtonGroup, buttonGroupTag } from './ButtonGroup';
import { Container, containerTag } from './Container';
import { registerAliases } from './aliases';

const mapping = {
  [buttonTag]: Button,
  [buttonGroupTag]: ButtonGroup,
  [containerTag]: Container,
};

const styles = {
  [buttonTag]: buttonStyle,
};

function getSheet() {
  const element = document.createElement('style');
  document.head.prepend(element);
  return element.sheet;
}

export function registerAll(setName = (name) => name) {
  const aliases = {};
  const tagNames = [];
  const sheet = getSheet();

  Object.entries(mapping).forEach(([name, value], i) => {
    const tagName = setName(name);
    const exists = customElements.get(tagName);

    if (!exists) {
      const style = styles[name] || '';
      aliases[name] = tagName;
      tagNames.push(tagName);
      sheet.insertRule(`${tagName} { ${style} }`, i);
      customElements.define(tagName, class extends value {});
    }
  });

  registerAliases(tagNames, aliases);
}
