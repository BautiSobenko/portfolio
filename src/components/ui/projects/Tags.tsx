
export const Tags = ({name}:{name: string}) => {
  return (
    <li className="border border-bg-200 rounded-lg px-2 py-1 list-none self-center ">
      <p className="text-text-200 font-secondary-sohne">{name}</p>
    </li>
  )
}
