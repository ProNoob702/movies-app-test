interface IChipProps {
  title: string;
  variant: "lightGray" | "red" | "blue";
}

export const ChipComponent: React.FC<IChipProps> = ({ title, variant }) => {
  switch (variant) {
    case "lightGray": {
      return (
        <span
          className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
        >
          {title}
        </span>
      );
    }
    case "red": {
      return (
        <span className={`inline-block bg-red-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2`}>
          {title}
        </span>
      );
    }
    case "blue": {
      return (
        <span className={`inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2`}>
          {title}
        </span>
      );
    }

    default: {
      return (
        <span
          className={`inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
        >
          {title}
        </span>
      );
    }
  }
};
