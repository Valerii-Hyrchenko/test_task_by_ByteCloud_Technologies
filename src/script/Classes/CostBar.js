export class CostBar {
  createCostBar(container) {
    const costBars = `
      <div>
        <div id="backblaze-bar" class="storage-calc__progress-bar">
          <p class="storage-calc__total-sum"></p>
        </div>
      </div>
      <div>
        <div id="bunny-bar" class="storage-calc__progress-bar">
          <p class="storage-calc__total-sum"></p>
        </div>
      </div>
      <div>
        <div id="scaleway-bar" class="storage-calc__progress-bar">
          <p class="storage-calc__total-sum"></p>
        </div>
      </div>
      <div>
        <div id="vultr-bar" class="storage-calc__progress-bar">
          <p class="storage-calc__total-sum"></p>
        </div>
      </div>
    `;

    container.innerHTML = costBars;
  }
}
