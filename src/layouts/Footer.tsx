interface FooterProps {
  children: React.ReactNode
  className?: string
}

const Footer = ({ children, className = '' }: FooterProps) => {
  return (
    <footer className={`footer ${className}`}>
      {children}
    </footer>
  )
}

export { Footer }
