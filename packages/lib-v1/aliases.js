const registrations = [];

export function registerAliases(tagNames, aliases) {
  registrations.push({ tagNames, aliases });
}

export function getAliases(tagName) {
  const { aliases } = registrations.find(r => r.tagNames.includes(tagName));
  return aliases;
}

export function getAlias(tagName, name) {
  const aliases = getAliases(tagName);
  return aliases[name];
}
