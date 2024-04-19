interface FooterProps {
  className?: string
}

const Footer = ({ className = '' }: FooterProps) => {
  return (
    <footer className={`footer ${className}`}>
      Footer
    </footer>
  )
}

export { Footer }
