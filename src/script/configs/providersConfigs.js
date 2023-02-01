import backblazeLogo from "../../img/icons/backblaze_logo.svg";
import bunnyLogo from "../../img/icons/bunny_logo.svg";
import scalewayLogo from "../../img/icons/scaleway_logo.svg";
import vultrLogo from "../../img/icons/vultr_logo.svg";

export const providersConfig = {
  backblaze: {
    title: "Backblaze",
    logo: backblazeLogo,
    isRadio: false,
  },
  bunny: {
    title: "Bunny",
    logo: bunnyLogo,
    isRadio: true,
    radio1: "HDD",
    radio2: "SSD",
  },
  scaleway: {
    title: "Scaleway",
    logo: scalewayLogo,
    isRadio: true,
    radio1: "Multi",
    radio2: "Single",
  },
  vultr: {
    title: "Vultr",
    logo: vultrLogo,
    isRadio: false,
  },
};
