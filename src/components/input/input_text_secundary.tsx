import { IconType } from "react-icons";

interface IInputTextSecundary {
    Icon?: IconType;
    placeholder?: String;
    type: String;
  }
  
  export const InputTextSecundary = ({ Icon, placeholder = "", type }: IInputTextSecundary) => {
    return (
      <div 
      
      className="flex border-1 border-gray-100 bg-white rounded-3xl  px-5 h-12 focus-within:border-gray-100 items-center">
        {
          Icon != null &&
        <Icon className="icon-input text-gray-600 text-2xl" />
        }
        <input
          type={`${type}`}
          className="input-text h-20"
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
  