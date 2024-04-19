interface HeaderProps {
  className?: string
}

const Header = ({ className = '' }: HeaderProps) => {
  return (
    <div className={`header ${className}`}>
      Header
    </div>
  )
}

export { Header }
