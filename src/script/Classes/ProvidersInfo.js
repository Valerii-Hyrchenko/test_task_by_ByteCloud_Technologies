export class ProvidersInfo {
  constructor(options) {
    const { backblaze, bunny, scaleway, vultr } = options;
    this.backblaze = backblaze;
    this.bunny = bunny;
    this.scaleway = scaleway;
    this.vultr = vultr;
  }

  createProvider({ title, logo, isRadio, radio1, radio2 }, container) {
    const titleProv = `<p class="storage-calc__providers-title">${title}</p>`;
    const radioInputHtml = `
    <div class="storage-calc__providers-radio-flex">
      <div>
        <label class="storage-calc__providers-label" for=${title}1>${radio1}</label>
        <input class="storage-calc__providers-input" id=${title}1 name=${title} checked="true" type="radio" />
      </div>
      <div>
        <label class="storage-calc__providers-label" for=${title}2>${radio2}</label>
        <input class="storage-calc__providers-input" id=${title}2 name=${title} type="radio" />
      </div>
    </div>
    `;
    const providerInfoHtml = `
      ${isRadio ? `<div>${titleProv}${radioInputHtml}</div>` : `${titleProv}`}
      <div class="storage-calc__providers-logo-container">
        <img class="storage-calc__providers-logo" src=${logo} alt="provider_icon">
      <div/>
    `;

    container.innerHTML = providerInfoHtml;
  }
}
