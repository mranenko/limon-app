import {
  Basket,
} from '@phosphor-icons/react'

import { Button } from '../components'

interface HeaderProps {
  className?: string
}

const Header = ({ className = '' }: HeaderProps) => {
  return (
    <div className={`header ${className}`}>
      <a className='logo' href='/'>
        <img src='/assets/images/logos/limon-logo-light.svg' alt='Limon Logo' />
      </a>
      <Button as='a' href='/review' variant='icon'>
        <Basket />
      </Button>
    </div>
  )
}

export { Header }
