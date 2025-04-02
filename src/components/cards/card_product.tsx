import { IProduct } from "../../core/entities";

function CardProduct({ img, name, price }: IProduct) {
  return (
    <>
<div className="bg-white rounded-xl flex flex-col items-center p-2 hover:border-1 hover:border-[#155DFC] cursor-pointer">
<img src={img} className="w-40 h-40 object-contain rounded-2xl" />
       
        <p
         className="text-gray-800 text-[14px] font-[400] pt-2"
        >{name}</p>

           <p
         className="text-gray-800 text-[14px] py-2 "
        >{`Q${price.toFixed(2)}`}</p>

      
      </div>
    </>
  );
}

export default CardProduct;
