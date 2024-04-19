interface ScreenProps {
  children: React.ReactNode
  className?: string
}

const Screen = ({ children, className = '' }: ScreenProps) => {
  return (
    <div className={`screen ${className}`}>
      {children}
    </div>
  )
}

export { Screen }
