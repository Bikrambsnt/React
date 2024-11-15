
import React, {forwardRef, useId} from "react";

 function Select({
    options,
    label,
    className,
    ...props
 },ref) {

     const id = useId()
    return (
        <div className="w-full">
            {label && <label htmlFor={id} className=""></label>}
        <select
            {...props}
            id={id}
            ref={ref}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
                
                {/* Taking options as a array to loop on it */}

                {options?.map((option) =>(
                    <options id={option} value={option}>
                        {option}
                        {/* I have used option as a value and id because option is unique on each */}
                    </options>
                ))}
        </select>


        </div>
    )
 }

 export default forwardRef(Select);

 //Now this component created in different file so we need forward ref so we can directly use it in export only like
