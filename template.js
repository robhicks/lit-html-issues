import { html } from './node_modules/lit-html/lit-html.js';
import css from './css.js';

export default function template(c) {
  console.log('props', c.text, c.selected, c.checkbox, c.radioButton);
  const changeText = c.changeText.bind(c);
  return html`
    ${css()}
    <form>
      <div>input cannot be updated programatically</div>
      <input type="text" value="${c.text}" @input="${changeText}"/>

      <div>select cannot be set/changed programatically</div>
      <select @change="${ev => {c.selected = ev.currentTarget.value; console.log('value set to', ev.currentTarget.value)}}">
        <option value="" ?selected="${c.selcted === ''}">Select</option>
        <option value="1" ?selected="${c.selcted === '1'}">1</option>
        <option value="2" ?selected="${c.selcted === '2'}">2</option>
        <option value="3" ?selected="${c.selcted === '3'}">3</option>
        <option value="4" ?selected="${c.selcted === '4'}">4</option>
      </select>
      <div>checkbox cannot be updated programatically</div>
      <input
        type="checkbox"
        @change="${(ev) => {c.checkbox = ev.currentTarget.value; console.log('checkbox value:', ev.currentTarget.value)}}"
        ?checked="${c.checkbox === 'on'}"
      />
      <div>radio buttons cannot be updated programatically</div>
      <input
        name="radio"
        type="radio"
        value="1"
        @change="${ev => {c.radioButton = '1'; console.log('radio button value: ', ev.currentTarget.value)}}"
        ?checked="${c.radioButton === '1'}"/>
      <label>1</label>
      <input
        name="radio"
        type="radio"
        value="2"
        @change="${ev => {c.radioButton = '2'; console.log('radio button value: ', ev.currentTarget.value)}}"
        ?checked="${c.radioButton === '2'}"/>
      <label>2</label>
      <input
        name="radio"
        type="radio"
        value="3"
        @change="${ev => {c.radioButton = '3'; console.log('radio button value: ', ev.currentTarget.value)}}"
        ?checked="${c.radioButton === '3'}"/>
      <label>3</label>
    </form>
  `;
}
