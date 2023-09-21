import { html, css, LitElement } from 'https://unpkg.com/lit-element?module';

class CounterApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      text-align: center;
      font-family: Arial, sans-serif;
    }
    button {
      font-size: 1rem;
      padding: 8px 16px;
      margin: 4px;
    }
  `;

  static properties = {
    count: { type: Number },
    state: { type: String },
  };

  constructor() {
    super();
    this.count = 0;
    this.state = 'Normal';
  }

  increment() {
    this.count++;
    this.updateState();
  }

  decrement() {
    this.count--;
    this.updateState();
  }

  updateState() {
    if (this.count === 0) {
      this.state = 'Minimum Reached';
    } else if (this.count === 10) {
      this.state = 'Maximum Reached';
    } else {
      this.state = 'Normal';
    }
  }

  render() {
    return html`
      <h1>Counter App</h1>
      <p>Current Count: ${this.count}</p>
      <p>State: ${this.state}</p>
      <button @click="${this.increment}">Increment</button>
      <button @click="${this.decrement}" ?disabled="${this.count === 0}">Decrement</button>
    `;
  }
}

customElements.define('counter-app', CounterApp);