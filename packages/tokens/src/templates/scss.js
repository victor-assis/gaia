export const scssFormatter = (dictionary) => {
  let output = '';

  dictionary.allTokens.forEach(({ value, name, darkValue }) => {
    if (!darkValue) { output += `$${name}: ${value};\n`; }
    if (darkValue) { output += `$${name}: if(not $darkMode, ${value}, ${darkValue});\n`; }
  });

  if (dictionary.allTokens.find(({ darkValue }) => darkValue)) {
    output += `$darkMode: false;\n`;
  }

  return output;
};

export const scssFormatterRef = (dictionary) => {
  let output = '';

  dictionary.allTokens.forEach(({ value, name, attributes, theme }) => {

    output += theme === 'no-theme' || attributes.type === 'breakpoint' ?
      `$${name}: ${value};\n` :
      attributes.type === 'columns' || attributes.type === 'gutter' ?
        `$${name}: var(--${name}, ${value});\n` :
        `$${name}: var(--${name}) !default;\n`;
  });

  return output;
};