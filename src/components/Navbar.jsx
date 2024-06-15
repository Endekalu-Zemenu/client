import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import { navItems } from "../constants/list"
import LoginButton from "./buttons/LoginButton"
import RegisterButton from "./buttons/RegisterButton"
import HomePage from "./HomePage"

const Navbar = () => {
  return (
    <nav className=" top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 place-self-stretch text-white">
      <div className="container px-4 mx-auto relative text-xl">
        <div className="flex justify-between items-center">  
          <Link to="/" element={<HomePage />}>
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="logo"/>
              <span className="text-4xl tracking-tight font-bold">HMYC</span>
            </div>
          </Link>
          {/* <ul className="flex ml-14 space-x-12 font-semibold font-mono items-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul> */}
          <div className="lg:flex justify-center gap-6 items-center">
            <LoginButton data-className="h-10 w-32 font-semibold"/>
            <RegisterButton data-className="h-10 w-32 font-semibold"/>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar