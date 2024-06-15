
const DownloadButton = (
  {name, document}:
  {name:string, document:string}) => {
  return (
    <a
      className="flex-grow flex items-center justify-center gap-2 rounded border py-3 border-accent-100 bg-accent-100 text-white hover:bg-bg-100 hover:text-accent-100"
      href={`/${document}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      
      <span className="text-md text-text-100"> {name} </span>

    </a>
)}

export default DownloadButton