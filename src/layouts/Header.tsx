import {
  Basket,
} from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

interface HeaderProps {
  className?: string
}

const Header = ({ className = '' }: HeaderProps) => {
  return (
    <div className={`header ${className}`}>
      <a className='logo' href='/'>
        <img src='/assets/images/logos/limon-logo-light.svg' alt='Limon Logo' />
      </a>
      <nav>
        <NavLink to='/review' className='button icon'>
          <Basket />
        </NavLink>
      </nav>
    </div>
  )
}

export { Header }
