interface IProps {
  label: string;
  classname?: string;
  onClick?: (...args: any[]) => any;
  variant: "primary" | "secondary" | "danger";
}

export const NiceBtn: React.FC<IProps> = ({ variant, label, classname, onClick }) => {
  return (
    <button className={`primary-btn ${classname}`} type="button" onClick={onClick}>
      {label}
    </button>
  );
};
