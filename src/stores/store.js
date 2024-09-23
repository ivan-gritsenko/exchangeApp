import { create } from 'zustand'

const useStore = create((set) => ({
  firstInput: '',
  firstCurrency: 'UAH',
  secondInput: '',
  secondCurrency: 'UAH',
  setFirstInput: (value) => set(() => ({ firstInput: value })),
  setSecondInput: (value) => set(() => ({ secondInput: value })),
  setFirstCurrency: (value) => set(() => ({ firstCurrency: value })),
  setSecondCurrency: (value) => set(() => ({ secondCurrency: value })),
  rateUSD: 0,
  rateEUR: 0,
  rateUAH: 1,
  setRateUSD: (value) => set(() => ({ rateUSD: value })),
  setRateEUR: (value) => set(() => ({ rateEUR: value })),
}))

export default useStore;