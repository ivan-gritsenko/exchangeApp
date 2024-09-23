import { useState, useEffect } from 'react'
import useStore from '../../stores/store';
import axios from 'axios';

const Header = () => {
  const { setRateUSD, setRateEUR } = useStore();
  const [usd, setUsd] = useState(0);
  const [euro, setEuro] = useState(0);

  async function fetchExchangeRates() {
    // axios.get('https://v6.exchangerate-api.com/v6/b7fb48fb5c3617617132d3bf/latest/UAH')
    //   .then((response) => {
    //     setRateUSD(response.data.conversion_rates.USD);
    //     setRateEUR(response.data.conversion_rates.EUR);
    //     setEuro(Number(1 / response.data.conversion_rates.EUR).toFixed(2));
    //     setUsd(Number(1 / response.data.conversion_rates.USD).toFixed(2));
    //   }).catch((error) => {
    //     console.log(error);
    //   })

    setRateUSD(0.031);
    setRateEUR(0.028);
    setEuro(Number(1 / 0.028).toFixed(2));
    setUsd(Number(1 / 0.031).toFixed(2));
  }

  useEffect(() => {
    fetchExchangeRates();
  }, []);

  return (
    <header className="border-b-2 border-gray-600 bg-gray/60 backdrop-blur-lg backdrop-filter">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">ExchangeAPP</span>
            <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" />
          </a>
        </div>
        <div className='flex row gap-2' >

          <h2 href="#" className="text-lg font-semibold leading-6 text-gray-900 cursor-default">
            EURO - {euro}
          </h2>
          <h2 href="#" className="text-lg font-semibold leading-6 text-gray-900 cursor-default">
            USD - {usd}
          </h2>
        </div>
      </nav>
    </header>
  )
}

export default Header