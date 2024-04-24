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
      <Button as='a' href='/review' variant='icon'>
        <Basket />
      </Button>
    </div>
  )
}

export { Header }
