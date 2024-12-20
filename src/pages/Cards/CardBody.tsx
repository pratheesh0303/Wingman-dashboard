

const CardBody = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={`px-6 py-8 ${className}`}>{children}</div>
  )
}

export default CardBody