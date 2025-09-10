type Props = {
  description: string
  power: number
  pp: number
  accuracy: number
}

export const MoveDetailBody = ({ accuracy, description, power, pp }: Props) => {
  return (
    <article className="flex flex-col gap-5 justify-center">
      <div>
        <span>
          <strong>Description</strong>
          <p>{description}</p>
        </span>
      </div>
      <div className="flex gap-5 justify-center sm:justify-start flex-wrap">
        <span className="flex gap-2 w-[120px] items-center justify-center bg-white font-mono px-5 py-3 rounded-md shadow-md">
          <small>Power: </small>
          <strong>{power}</strong>
        </span>
        <span className="flex gap-2 w-[120px] items-center justify-center bg-white font-mono px-5 py-3 rounded-md shadow-md">
          <small>PP: </small>
          <strong>{pp}</strong>
        </span>
        <span className="flex gap-2 w-[120px] items-center justify-center bg-white font-mono px-5 py-3 rounded-md shadow-md">
          <small>Accuracy: </small>
          <strong>{accuracy}%</strong>
        </span>
      </div>
    </article>
  )
}
