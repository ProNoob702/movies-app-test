import { NiceBtn } from "./btn.component";
import { ChipComponent } from "./chip.component";

interface ICardProps {
  title: string;
  description: string;
  imgUrl: string;
  imgHeight: number;
  chips: string[];
}

export const CardComponent: React.FC<ICardProps> = ({ imgUrl, title, imgHeight, description, chips }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <div
        className={`imgContainer w-full overflow-y-hidden`}
        style={{
          height: imgHeight,
          backgroundImage: `linear-gradient( rgba(0,0,0,.2), rgba(0,0,0,.2) ), url(${imgUrl}) `,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base whitespace-nowrap text-ellipsis overflow-hidden">{description}</p>
      </div>
      <div className="px-6 pb-2">
        {chips.map((x) => (
          <ChipComponent key={x} title={x} variant="lightGray" />
        ))}
      </div>
      <div className="px-6 pb-4 text-right">
        <NiceBtn label="View detail" variant="primary" />
      </div>
    </div>
  );
};
