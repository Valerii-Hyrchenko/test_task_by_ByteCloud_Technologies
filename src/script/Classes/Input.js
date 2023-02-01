export class Input {
  constructor(options) {
    const {
      id,
      name,
      type = "range",
      minValue,
      maxValue,
      startValue,
      label,
      step,
    } = options;
    this.id = id;
    this.name = name;
    this.type = type;
    this.minValue = minValue;
    this.maxValue = maxValue;
    if (startValue) this.startValue = startValue;
    if (label) this.label = label;
    this.step = step;
  }

  createControlInput(container) {
    const inputHtml = `
      <label for=${this.id}>
      ${this.label}
        <input
          class="storage-calc__controls-gigabytes"
          placeholder="enter GB"
          id="${this.id}-text"
          type="number"
          min=${this.minValue}
          max=${this.maxValue}
          value="${this.startValue}"
        />
        GB
      </label>
      <input
        class="storage-calc__controls-input"
        id=${this.id}
        name=${this.name}
        type=${this.type}
        min=${this.minValue}
        max=${this.maxValue}
        step=${this.step}
        value="${this.startValue}";
      />
    `;
    container.innerHTML = inputHtml;
  }
}
