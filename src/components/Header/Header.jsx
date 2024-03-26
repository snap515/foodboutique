import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <header>
      <div>
        <NavLink to="/">Food Boutique</NavLink>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/cart'>Cart</NavLink>
        </nav>
      </div>
    </header>
  )
}