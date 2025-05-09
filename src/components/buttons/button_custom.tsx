import { IconType } from "react-icons";


interface IButtonCustomProps {
    text: string;
    icon: IconType;
  }
  
  export const ButtonCustom = ({ icon: Icon, text }: IButtonCustomProps) => {
    return (
      <button className="text-white rounded-2xl flex px-4 h-8 items-center bg-theme cursor-pointer">
        <span>
          <Icon className="w-4 h-4" />
        </span>
        <span className="ml-1 text-[12px]">{text}</span>
      </button>
    );
  };
