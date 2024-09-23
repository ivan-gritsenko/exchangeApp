import useStore from '../../stores/store'
import ComboBox from '../Combobox/Combobox'


const ExchangeComponent = () => {
  const { firstInput, secondInput, setFirstInput, setSecondInput, firstCurrency, secondCurrency, setFirstCurrency, setSecondCurrency, rateUSD, rateUAH, rateEUR } = useStore();

  const getExchangeRate = (fromCurrency, toCurrency) => {
    if (fromCurrency === toCurrency) return 1;

    const rates = {
      USD: rateUSD || 1,
      EUR: rateEUR || 1,
      UAH: rateUAH || 1,
    };

    const result = rates[toCurrency] / rates[fromCurrency];
    
    return result;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const numericValue = parseFloat(value) || 0;

    if (name === 'firstInput') {
      setFirstInput(numericValue);
      const exchangeRate = getExchangeRate(firstCurrency, secondCurrency);
      setSecondInput(Number(numericValue * exchangeRate).toFixed(2));
    } else {
      setSecondInput(numericValue);
      const exchangeRate = getExchangeRate(secondCurrency, firstCurrency);
      setFirstInput(Number(numericValue * exchangeRate).toFixed(2));
    }
  };

  const handleComboChange = (e) => {
    const { name, value } = e.target;

    if (name === 'firstCurrency') {
      setFirstCurrency(value);
      const exchangeRate = getExchangeRate(value, secondCurrency);
      setSecondInput(Number(firstInput * exchangeRate).toFixed(2));
    } else {
      setSecondCurrency(value);
      const exchangeRate = getExchangeRate(firstCurrency, value);
      setSecondInput(Number(firstInput * exchangeRate).toFixed(2));
    }
  };

  return (
    <div className="mx-auto max-w-4xl py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-12 sm:px-0">

        <div className="relative">
          <div className="h-48 border border-gray-400 rounded-md bg-slate-200/80 p-16 relative backdrop-blur-sm z-20">
            <div className='flex row gap-2'>
              <div className='flex row gap-2 w-full'>
                <input type="number" name='firstInput' value={firstInput} onChange={handleInputChange} placeholder='0,00' className='border border-gray-300 rounded p-2 w-full' />
                <ComboBox name='firstCurrency' inputValue={firstCurrency} onChange={handleComboChange} />
              </div>
              <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.499 8.248h15m-15 7.501h15" />
                </svg>
              </div>

              <div className='flex row gap-2 w-full'>
                <input type="number" value={secondInput} onChange={handleInputChange} placeholder='0,00' className='border border-gray-300 rounded p-2 w-full' />
                <ComboBox name='secondCurrency' inputValue={secondCurrency} onChange={handleComboChange} />
              </div>
            </div>
          </div>
          <div className="absolute -inset-1 rounded-md bg-gray-600 blur-lg bg-gradient-to-br z-10" />
        </div>
      </div>
    </div>
  )
}

export default ExchangeComponent