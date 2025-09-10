type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="min-w-[100px] bg-blue-500 md:hover:bg-blue-700 transition-colors text-white font-bold py-2 px-4 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  )
}
