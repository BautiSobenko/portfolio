
export const Tags = ({name}:{name: string}) => {
  return (
    <li className=" bg-bg-200/50 rounded-full px-2 py-1 list-none self-center ">
      <p className="text-text-200 font-secondary-sohne">{name}</p>
    </li>
  )
}
