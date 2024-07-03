import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const inputRef = useRef(null);

  const openSearch = () => {
    setSearchIsOpen(!searchIsOpen);
  };

  useEffect(() => {
    if (searchIsOpen && inputRef.current) {
      inputRef.current.focus();
    } else if (!searchIsOpen) {
      inputRef.current.value = '';
    }
  }, [searchIsOpen]);
  return (
    <header className="py-4 fixed w-full bg-neutral-950">
      <div className="container">
        <div className="relative flex justify-between items-center gap-[30px] max-md:gap-[15px] text-neutral-100 font-semibold">
          <Link to="/" className={`px-4 py-3 duration-200 ${searchIsOpen ? 'opacity-0' : ''}`}>
            Anime
          </Link>
          {/* search */}
          <input type="text" className="w-[400px] px-6 py-3 outline-none rounded-full bg-neutral-800 text-neutral-100 placeholder:text-neutral-400 max-md:hidden" placeholder="Поиск" />
          <div className="flex items-center space-x-6 whitespace-nowrap max-md:hidden">
            <Link className="font-medium py-3 px-3">Sign in</Link>
            <Link className="font-medium py-3 px-3 bg-neutral-100 rounded-full text-neutral-950 outline outline-1 outline-neutral-100 duration-300 hover:bg-transparent hover:text-neutral-100">Sign up</Link>
          </div>
          <div className={`flex-1 justify-end hidden max-md:flex duration-200 ${searchIsOpen ? 'opacity-0' : ''}`}>
            <button onClick={openSearch} className="px-4 py-3">
              ?
            </button>
          </div>
          {/* search input */}
          <div className={`absolute flex items-center z-10 w-full duration-500 ${searchIsOpen ? 'scale-100 -translate-y-0 opacity-100' : 'opacity-0 -translate-y-[100px] scale-0'}`}>
            <input ref={inputRef} type="text" className={`w-full bg-neutral-800 rounded-full outline-none px-6 py-3 pr-14 placeholder:text-neutral-400`} placeholder="Поиск" />
            <button onClick={openSearch} className="absolute w-6 h-6 right-6">
              <div className="absolute bg-neutral-100 w-full h-0.5 rotate-45"></div>
              <div className="absolute bg-neutral-100 w-full h-0.5 -rotate-45"></div>
            </button>
          </div>
          {/* menu */}
          <button className={`hidden justify-center items-center p-3 max-md:flex duration-200 ${searchIsOpen ? 'opacity-0' : ''}`}>
            <div className="w-6 h-6 space-y-1 flex flex-col justify-center">
              <div className="w-full h-0.5 bg-neutral-100"></div>
              <div className="w-full h-0.5 bg-neutral-100"></div>
              <div className="w-full h-0.5 bg-neutral-100"></div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
