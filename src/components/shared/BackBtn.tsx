import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export const BackBtn: React.FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <button className="absolute left-6 top-6" onClick={() => navigate(-1)}>
      <FontAwesomeIcon className="text-2xl text-gray-800 mr-2" icon={faArrowLeft} />
    </button>
  );
};
