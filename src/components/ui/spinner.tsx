type Props = {
  size: 'sm' | 'md' | 'lg'
}

export const Spinner = ({ size = 'md' }: Props) => {
  const spinnerSize = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-20 h-20',
  }

  return (
    <span
      className={`absolute top-[50%] left-[50%] translate-[-50%] ${spinnerSize[size]} animate-spin rounded-full border-4 border-r-transparent border-blue-500`}
    />
  )
}
