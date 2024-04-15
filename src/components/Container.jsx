import SideNavigation from "./SideNavigation"
function Container({children}) {
  return (
    <div className="relative top-16 h-screen w-full bg-gray-100 flex ">
      <SideNavigation/>
       {children}
    </div>
  )
}

export default Container