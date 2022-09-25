export const Spinner: React.FC<{}> = (props) => {
  return (
    <div className="absoluteCentredContent">
      <img
        alt="loading"
        className="loadingImg"
        width="50"
        height="50"
        src={process.env.PUBLIC_URL + "images/coucou.gif"}
      />
    </div>
  );
};
