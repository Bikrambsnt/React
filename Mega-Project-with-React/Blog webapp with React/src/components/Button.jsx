
//as we are using button repeatedly 

function Button({
    children,
    type= 'button',
    bgColor = 'bg-blue-600',
    textColor = 'white',
    className = '',//expecting user will also pass the className
    ...props
    //if we add any more props then we can spread it

}) {



return (
    <button className= {`px-4 py-2 rounded-lg  ${className}  ${bgColor} ${textColor}`} {...props}>{children}</button>
)
}
export default Button;