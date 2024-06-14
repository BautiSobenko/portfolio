
const HeaderLink = ({name, sectionId}:{name: string, sectionId: string }) => {

  const handleScroll = () => {
    const targetSection = document.getElementById(`${sectionId}`);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a onClick={handleScroll} className="hover:text-accent-100 cursor-pointer">
      {name}
    </a>
  )
}

export default HeaderLink
