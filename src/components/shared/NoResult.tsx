export const NoResult: React.FC<{}> = (props) => {
  return (
    <div className="mt-20">
      <img alt="no result" className="mx-auto" width="200" src={process.env.PUBLIC_URL + "/images/noRes1.png"} />
    </div>
  );
};
