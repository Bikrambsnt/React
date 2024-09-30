
//Here we will write the logic for currency exchange
 import React,{useId} from 'react'

//  useId is a hook that provide unique value like number or string.


 function InputBox({
    label, /*For amount label */
    amount, /*Amount */
    onAmountChange, /*When amount change */
    onCurrencyChange, /*On currency change */
    currencyOptions=[], /*This is a currency options fetch from api */
    selectCurrency='usd', /*Default selected value */
    amountDisable =false, /*to check weather user want to add amount or not */
    currencyDisable=false,
    className = "", /*This is a optional that if user want to change the class then we can */

}) {

    const amountId = useId()
    // now with this we can bind the label and input with the unique value this is same as we do in html like label for email and in input we do id=email same as that



   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={amountId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange &&  /* Here I have added && because I want to check if this is available then we we will  onAmountChaneg function because its a function so we cannot give its a default value so pervent crash we will use &&*/
                        onAmountChange(Number(e.target.value))/*js will take everything inside a string as a string so to prevent that we we use number */
                    }
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange &&
                        onCurrencyChange(e.target.value)
                        }
                    disabled={currencyDisable}
                    // here I am also doing the same thing as above 
                >
                    
                    {/* Here we will use loop to iterate on each options received from api */}
                      
                      {/* {currencyOptions.map( (currency)=>(
                          <option value="usd">
                          usd
                      </option>
                      ))} 

                      if I do only like this then we we get the problem because its repeating same element

                      to fix this we we have to pass key always in key what to pass we can pass , index or id   or the current value

                      which means pass key eveytime in react while using loop
                      
                      so better approach we will do
                       
                       */}

                       {currencyOptions.map((currency)=>
                       ( 
                         <option key={currency}
                          value={currency}>
                            {currency}
                        </option>))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;

// we can export like this also but if we create a file then call everything on that file then in app.jsx file we only have to call a single file

// Now lets move to app.jsx