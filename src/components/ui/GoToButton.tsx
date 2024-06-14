
const GoToButton = ({name, sectionId}: {name:string, sectionId:string}) => {

  const handleScroll = () => {
    const targetSection = document.getElementById(`${sectionId}`);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      className="cursor-pointer flex-grow flex items-center justify-center gap-2 rounded border py-3 border-accent-100 bg-accent-100 text-white hover:bg-bg-100 hover:text-accent-100"
      onClick={handleScroll}
    >
      <span className="text-md text-text-100"> {name} </span>

    </a>
)}

export default GoToButton