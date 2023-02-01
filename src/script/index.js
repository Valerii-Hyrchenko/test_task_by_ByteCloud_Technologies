import "../style/main.css";
import { GeneralLayout } from "./Classes/GeneralLayout";
import { ProvidersInfo } from "./Classes/ProvidersInfo";
import { CostBar } from "./Classes/CostBar";
import { Input } from "./Classes/Input";
import { inputsControlConfig } from "./configs/inputsConfigs";
import { providersConfig } from "./configs/providersConfigs";

const renderApp = () => {
  const appContainer = document.getElementById("app-container");

  const appLayout = new GeneralLayout({
    storageControl: new Input(inputsControlConfig.storage),
    transferControl: new Input(inputsControlConfig.transfer),
    providersInfo: new ProvidersInfo(providersConfig),
    costBar: new CostBar(),
    appContainer,
  });
  appLayout.renderControls();
  appLayout.renderProvidersInfo();
  appLayout.renderCostBar();
  appLayout.calculateProvidersCost();
};

renderApp();
