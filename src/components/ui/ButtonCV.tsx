
const ButtonCV = ({ styles, name, href}: { styles:string, name:string, href:string}) => {
  return (
    <a
      className={`flex-grow flex items-center justify-center gap-2 rounded border py-3 ${styles}`}
      href={href}
    >
      <span className="text-md text-text-100"> {name} </span>

    </a>
)}

export default ButtonCV