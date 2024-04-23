interface FooterProps {
  children: React.ReactNode
  className?: string
  variant?: string
}

const Footer = ({ children, className = '', variant = '' }: FooterProps) => {
  return (
    <footer className={`footer ${className} ${variant}`}>
      {children}
    </footer>
  )
}

export { Footer }
