import { html } from './node_modules/lit-html/lit-html.js';

export default function css() {
  return html`
  <style>
    input {
      font-size: 1.3rem;
      padding: .5rem;
      min-width: 300px;
    }
    select {
      min-width: 300px;
      font-size: 1.3rem;
      padding: .5rem;
    }
  </style>
  `;
}
