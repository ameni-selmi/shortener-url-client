
interface HeaderProps {
  title: string
  description: string
  subtitle: string
}

const Header: React.FC<HeaderProps> = ({ title, description, subtitle }) => {
  return (
    <div className="text-center mb-2">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-l from-blue-600 to-blue-400 text-transparent bg-clip-text">
        {title}
      </h1>
      <p className="text-sm text-gray-600 max-w-2xl text-center">
        {description}
      </p>
      <p className="text-sm text-gray-600 max-w-2xl text-center">
        {subtitle}
      </p>
    </div>
  )
}

export default Header
