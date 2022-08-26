import { createGlobalStyle } from 'styled-components';

export const heading = (size) => {
  return `
  text-align:center;
  font-weight:bold;
  line-height:1em;
  font-size:${size};
  `;
};

export const GlobalStyles = createGlobalStyle`
${({ theme }) => `

*{
  margin:${theme['margin-zero']};
  padding:${theme['padding-zero']};
}
h1{
  ${heading(theme['font-size-xlarge'])}
}
h2{
  ${heading(theme['font-size-large'])}
}
h3{
  ${heading(theme['font-size-medium'])}
}
h4{
  ${heading(theme['font-size-small'])}
}


`}`;
