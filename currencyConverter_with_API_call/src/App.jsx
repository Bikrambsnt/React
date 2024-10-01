import { useState } from 'react'
import {InputBox} from './components'
import customHooks from './customHooks/customHook'


function App() {
  
  const [amount ,setAmount] = useState(0);
  const [from,setFrom] = useState('usd');
  const [to,setTo] = useState('inr');
  const [convertAmount,setConvertAmount] = useState(0);

  // Using customHook


  const currencyInfo = customHooks(from)//now it will take currency as a parameter so from here I can from

  // Now we have return data after fetching and its providing me keys and value so I need a key so i can extract all keys like

  const options =Object.keys(currencyInfo);

  // swap button just swap the value

  const swap= ()=>{
    setFrom(to);
    setTo(from)
    setConvertAmount(amount);
    setAmount(convertAmount);
    //swapping is going on
  }

  //convert button

  const convert =()=>{
  setConvertAmount(amount*currencyInfo[to])
  //here the final result will be on SetConvertAmount so i will multiply the amount with the key of a api value and in which I have to convet that i will take from to
  }
  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
        backgroundColor:'black',
    }}
>
    <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    convert();
                   
                }}
            >
                <div className="w-full mb-1">
                    <InputBox
                        label="From"
                        amount={amount}
                        currencyOptions={options}
                        onCurrencyChange={(currency)=> setAmount(amount)}
                        selectCurrency={from}
                        onAmountChange={(amount)=> setAmount(amount)}
                        
                    />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                    <InputBox
                        label="To"
                        amount={convertAmount}
                        currencyOptions={options}
                        onCurrencyChange={(currency)=> setTo(currency)}
                        selectCurrency={from}
                        amountDisable
                        
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert{from.toLowerCase()} to {to.toLowerCase()}
                </button>
            </form>
        </div>
    </div>
</div>
  )
}

export default App
