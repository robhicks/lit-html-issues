import { render } from './node_modules/lit-html/lit-html.js';
import template from './template.js';

class MyForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.text = 'foo';
    this.selected = '2';
    this.checkbox = 'on';
    this.radioButton = '1';
  }

  attributeChangedCallback(name, oVal, nVal) {

  }

  connectedCallback() {
    this.render();
    setInterval(() => {
      this.text = 'foobar';
      this.selected = '3';
      this.checkbox = 'off';
      this.radioButton = '2';
      this.render();
    }, 2000);
  }

  disconnectedCallback() {

  }

  changeText(ev) {
    const { value } = ev.currentTarget;
    this.text = value;
    this.render();
  }

  render() {
    render(template(this), this.shadowRoot);
  }

  static get observedAttributes() {
    return ['']
  }
}
customElements.get('my-form') || customElements.define('my-form', MyForm);

export { MyForm }
