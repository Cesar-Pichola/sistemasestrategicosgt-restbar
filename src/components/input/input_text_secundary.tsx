import { IconType } from "react-icons";

interface IInputTextSecundary {
    Icon: IconType;
    placeholder?: String;
    type: String;
  }
  
  export const InputTextSecundary = ({ Icon, placeholder = "", type }: IInputTextSecundary) => {
    return (
      <div className="flex border border-gray-100 bg-white rounded-xl py-3 px-5 focus-within:border-[#155DFC]">
        <Icon className="icon-input text-gray-600" />
        <input
          type={`${type}`}
          className="input-text"
          placeholder={`${placeholder}`}
        />
      </div>
    );
  };

//   .content-input {
//     display: flex;
//     border: solid #F3F4F6;
//     margin-bottom: 10px;
//     background-color: #F3F4F6;
//     border-radius: 8px;
//     border-width: 1px;
//     padding: 15px 10px;
  
//   }
  