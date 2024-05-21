import './Button.scss'

interface ButtonProps {
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  href?: string
  variant?: string
}

const Button = ({
  as = 'button',
  children,
  className = '',
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const Component = as
  
  return (
    <Component
      className={`button ${variant} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

export { Button }
