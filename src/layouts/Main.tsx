interface MainProps {
  children: React.ReactNode
  className?: string
}

const Main = ({ children, className = '' }: MainProps) => {
  return (
    <main className={`main ${className}`}>
      {children}
    </main>
  )
}

export { Main }
