import { IconType } from "react-icons";

interface IInputText {
    Icon: IconType;
    placeholder?: String;
    type: String;
  }
  
  export const InputText = ({ Icon, placeholder = "", type }: IInputText) => {
    return (
      <div className="content-input">
        <Icon className="icon-input" />
        <input
          type={`${type}`}
          className="input-text"
          placeholder={`${placeholder}`}
        />
      </div>
    );
  };