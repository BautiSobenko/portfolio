import React from 'react';

const SocialIcons = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.linkedin.com/in/bautistasobenko/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-2 justify-center items-center text-text-300/60 hover:text-text-100 transition duration-300"
      > 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M20.447 20.452h-3.553v-5.569c0-1.327-.027-3.037-1.849-3.037-1.852 0-2.137 1.445-2.137 2.939v5.667H9.355V9.615h3.414v1.478h.048c.476-.899 1.637-1.848 3.368-1.848 3.604 0 4.269 2.369 4.269 5.451v6.756zM5.337 8.14c-1.144 0-2.068-.926-2.068-2.068 0-1.143.925-2.068 2.068-2.068 1.143 0 2.068.926 2.068 2.068-.001 1.143-.926 2.068-2.068 2.068zm1.78 12.312H3.558V9.615h3.558v10.837zM22.225 0H1.771C.792 0 0 .771 0 1.722v20.554C0 23.23.792 24 1.771 24h20.451c.98 0 1.773-.771 1.773-1.722V1.722C24 .771 23.206 0 22.225 0z" />
        </svg>
        <p className='text-sm'>LinkedIn</p>
      </a>
      <a
        href="https://github.com/BautiSobenko"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-2 justify-center items-center text-text-300/60 hover:text-text-100 transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.385.6.113.793-.262.793-.577v-2.26c-3.338.724-4.042-1.613-4.042-1.613-.546-1.386-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.493.998.107-.774.418-1.305.762-1.606-2.665-.304-5.467-1.332-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.526.117-3.176 0 0 1.007-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.019.005 2.047.138 3.005.404 2.292-1.552 3.297-1.23 3.297-1.23.653 1.65.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.806 5.624-5.477 5.921.43.37.823 1.102.823 2.222v3.293c0 .318.193.694.8.576C20.565 21.797 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
        <p className='text-sm'>GitHub</p>
      </a>
      <a
        href="/bautista-sobenko-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-2 justify-center items-center text-text-300/60 hover:text-text-100 transition duration-300"
      >
        <svg fill='currentColor' className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
        <p className='text-sm'>My resume</p>
      </a>
    </div>
  );
};

export default SocialIcons;
