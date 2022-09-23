import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

export const NavBar: React.FC<{}> = () => {
  return (
    <header>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 ">
        <div className="px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="flex w-full items-center relative">
            <FontAwesomeIcon className="text-2xl text-gray-800 mr-2" icon={faFilm} />
            <span className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-800">
              Movies-App
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};
