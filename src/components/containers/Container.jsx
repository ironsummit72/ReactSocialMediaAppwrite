

function Container({children,className}) {
  return (
    <div className={` w-full relative top-10 flex-col  bg-gray-100 ${className}`}>
     {children}
    </div>
  )
}

export default Container