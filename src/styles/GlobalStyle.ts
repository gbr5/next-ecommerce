import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --primary-color: #ff9000;
  --title-color: rgb(255, 200, 55);
  --background-color: #FFFFFF;
  --text: rgb(18, 16, 15);
  --letter-color-1: #FFF;
  --letter-color-2: rgb(149, 152, 158);
  --letter-color-3: rgb(179, 182, 178);
  --letter-color-4: rgb(120, 122, 125);
  --letter-color-5: rgb(20, 22, 25);
  --box-shadow: 1px 2px 2px 3px rgba(0, 0, 0, 0.1);
  --red-color: #c53030;
  --input-container-color: #232129;
  --toast-info-color: #3172b7;
  --toast-info-background-color: #ebf8ff;
  --toast-success-color: #2e656a;
  --toast-success-background-color: #e6fffa;
  --toast-error-color: #c53030;
  --toast-error-background-color: #fddede;
  --green-background-color: rgba(10, 200, 0);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body {
  background: var(--background-color);
  color: var(--text);
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}

button, link, a {
  cursor: pointer;
}
`;
