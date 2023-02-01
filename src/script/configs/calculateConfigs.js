export const calculateConfigs = {
  backblaze: {
    minPayment: 7,
    storagePrice: 0.005,
    transferPrice: 0.01,
  },
  bunny: {
    maxPayment: 10,
    storagePrice: {
      hdd: 0.01,
      ssd: 0.02,
    },
    transferPrice: 0.01,
  },
  scaleway: {
    saleSpace: 75,
    storagePrice: {
      multi: 0.06,
      single: 0.03,
    },
    transferPrice: 0.02,
  },
  vultr: {
    minPayment: 5,
    storagePrice: 0.01,
    transferPrice: 0.01,
  },
};
