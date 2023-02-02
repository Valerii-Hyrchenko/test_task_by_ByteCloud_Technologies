import { calculateConfigs } from "../configs/calculateConfigs";

export class GeneralLayout {
  constructor(options) {
    const {
      storageControl,
      transferControl,
      appContainer,
      providersInfo,
      costBar,
    } = options;
    this.storageControl = storageControl;
    this.transferControl = transferControl;
    this.appContainer = appContainer;
    this.providersInfo = providersInfo;
    this.costBar = costBar;
    this.storageValue = 100;
    this.transferValue = 400;
  }

  renderControls() {
    const { controls, storage, transfer } = this.createDiv([
      "controls",
      "storage",
      "transfer",
    ]);

    controls.classList.add("storage-calc__controls-container");
    storage.classList.add("storage-calc__controls-input-container");
    transfer.classList.add("storage-calc__controls-input-container");

    this.storageControl.createControlInput(storage);
    this.transferControl.createControlInput(transfer);

    controls.append(storage, transfer);
    this.appContainer.append(controls);
  }

  renderProvidersInfo() {
    const { providers, backblaze, bunny, scaleway, vultr } = this.createDiv([
      "providers",
      "backblaze",
      "bunny",
      "scaleway",
      "vultr",
    ]);
    this.providerFlexContainer = document.createElement("div");

    this.providerFlexContainer.classList.add("storage-calc__providers-flex");
    providers.classList.add("storage-calc__providers");

    this.providersInfo.createProvider(this.providersInfo.backblaze, backblaze);
    this.providersInfo.createProvider(this.providersInfo.bunny, bunny);
    this.providersInfo.createProvider(this.providersInfo.scaleway, scaleway);
    this.providersInfo.createProvider(this.providersInfo.vultr, vultr);
    providers.append(backblaze, bunny, scaleway, vultr);
    this.providerFlexContainer.append(providers);
    this.appContainer.append(this.providerFlexContainer);
  }

  renderCostBar() {
    const { costBar, startPointArea } = this.createDiv([
      "costBar",
      "startPointArea",
    ]);
    startPointArea.classList.add("storage-calc__cost-startpoint");

    costBar.classList.add("storage-calc__cost");
    this.costBar.createCostBar(costBar);
    this.providerFlexContainer.append(startPointArea, costBar);
  }

  //for Backblaze and Vultr
  calculateMain = ({ minPayment, storagePrice, transferPrice }) => {
    const totalCost =
      +this.storageValue * storagePrice + +this.transferValue * transferPrice;
    if (totalCost < minPayment && totalCost > 0) {
      return minPayment;
    } else {
      return totalCost;
    }
  };

  calculateBunny = ({
    maxPayment,
    storagePrice: { hdd, ssd },
    transferPrice,
  }) => {
    let checkedBunny = document.querySelector('input[name="Bunny"]:checked');
    let selectedBunny = checkedBunny.previousElementSibling.textContent;
    let storagePrice = selectedBunny === "HDD" ? hdd : ssd;

    const totalCost =
      +this.storageValue * storagePrice + +this.transferValue * transferPrice;

    if (totalCost > maxPayment) {
      return maxPayment;
    } else {
      return totalCost;
    }
  };

  calculateScaleway = ({
    saleSpace,
    storagePrice: { multi, single },
    transferPrice,
  }) => {
    let checkedScaleway = document.querySelector(
      'input[name="Scaleway"]:checked'
    );
    let selectedScaleway = checkedScaleway.previousElementSibling.textContent;
    let storagePrice = selectedScaleway === "Multi" ? multi : single;

    const totalCost = () => {
      let transferCost = (+this.transferValue - saleSpace) * transferPrice;
      let storageCost = (+this.storageValue - saleSpace) * storagePrice;
      let total = 0;
      if (transferCost > 0) total += transferCost;
      if (storageCost > 0) total += storageCost;
      return total;
    };
    return totalCost();
  };

  getCurrentBarWith = (currentCost) => {
    //max cost bar $74 max barWith 100%
    return Math.round((100 / 74) * currentCost);
  };

  getCheapestProvider = (providers) => {
    providers.forEach((item) => (item.bar.style.background = "#696666"));
    let cheapest = providers.reduce((cheapest, current) => {
      if (current.value < cheapest.value) {
        return current;
      } else if (current.value === cheapest.value) {
        return [cheapest, current];
      } else {
        return cheapest;
      }
    });
    if (Array.isArray(cheapest)) {
      cheapest.forEach((item) => (item.bar.style.background = "#6743ee"));
    } else {
      cheapest.bar.style.background = "#6743ee";
    }
  };

  createDiv(names) {
    let divs = {};
    names.forEach((item) => {
      divs[item] = document.createElement("div");
    });
    return divs;
  }

  calculateProvidersCost() {
    const backblazeBar = document.getElementById("backblaze-bar");
    const bunnyBar = document.getElementById("bunny-bar");
    const scalewayBar = document.getElementById("scaleway-bar");
    const vultrBar = document.getElementById("vultr-bar");
    const elementsForListener = [
      document.getElementById("Bunny1"),
      document.getElementById("Bunny2"),
      document.getElementById("Scaleway1"),
      document.getElementById("Scaleway2"),
      document.getElementById("storage-text"),
      document.getElementById("transfer-text"),
      document.getElementById("storage"),
      document.getElementById("transfer"),
    ];

    const handleChangeControl = (event) => {
      if (event) {
        const {
          target: { id, value },
        } = event;
        const storageInput = elementsForListener.slice(4, 5);
        const transferInput = elementsForListener.slice(5, 6);
        const storageControlInput = elementsForListener.slice(6, 7);
        const transferControlInput = elementsForListener.slice(7);

        if (value > 1000 || value < 0) {
          storageInput[0].value = this.storageValue;
          transferInput[0].value = this.transferValue;
          return;
        }
        //in a real project, it would be necessary to show the user a modal window
        //or a tooltip about exceeding the minimum or maximum value
        if (id === "storage" || id === "storage-text")
          this.storageValue = value;
        if (id === "transfer" || id === "transfer-text")
          this.transferValue = value;

        switch (id) {
          case "storage":
            storageInput[0].value = value;
            break;
          case "transfer":
            transferInput[0].value = value;
            break;
          case "storage-text":
            if (value > 0) {
              storageControlInput[0].value = value;
            } else {
              storageControlInput[0].value = 0;
            }
            break;
          case "transfer-text":
            if (value > 0) {
              transferControlInput[0].value = value;
            } else {
              transferControlInput[0].value = 0;
            }
            break;
          default:
            break;
        }
      }
      let backblazeValue =
        Math.round(this.calculateMain(calculateConfigs.backblaze) * 100) / 100;
      backblazeBar.childNodes[1].innerText = `${backblazeValue}$`;
      backblazeBar.style.width = `${this.getCurrentBarWith(backblazeValue)}%`;

      let vultrValue =
        Math.round(this.calculateMain(calculateConfigs.vultr) * 100) / 100;
      vultrBar.childNodes[1].innerText = `${vultrValue}$`;
      vultrBar.style.width = `${this.getCurrentBarWith(vultrValue)}%`;

      let bunnyValue =
        Math.round(this.calculateBunny(calculateConfigs.bunny) * 100) / 100;
      bunnyBar.childNodes[1].innerText = `${bunnyValue}$`;
      bunnyBar.style.width = `${this.getCurrentBarWith(bunnyValue)}%`;

      let scalewayValue =
        Math.round(this.calculateScaleway(calculateConfigs.scaleway) * 100) /
        100;
      scalewayBar.childNodes[1].innerText = `${scalewayValue}$`;
      scalewayBar.style.width = `${this.getCurrentBarWith(scalewayValue)}%`;

      this.getCheapestProvider([
        { bar: backblazeBar, value: backblazeValue },
        { bar: vultrBar, value: vultrValue },
        { bar: bunnyBar, value: bunnyValue },
        { bar: scalewayBar, value: scalewayValue },
      ]);
    };
    handleChangeControl();

    elementsForListener.forEach((item) =>
      item.addEventListener("input", handleChangeControl)
    );
  }
}
