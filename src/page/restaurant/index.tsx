import { ButtonCustom, TextSecundary } from "../../components";
import { InputTextSecundary } from "../../components/input/input_text_secundary";
import ListCategories from "./components/categories";
import GridProducts from "./components/grid_products";
import "./style/restaurant.css";
import { IoIosSearch, IoMdAdd } from "react-icons/io";

function RestaurantPage() {
  return (
    <>
      <>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 p-5 ">
          <div className="col-span-1 md:col-span-4 flex flex-col ">
            <ListCategories />

            <div className="my-4">
              <InputTextSecundary
                Icon={IoIosSearch}
                type="string"
                placeholder="Ingrese el nombre del menú"
              />
            </div>
            <div
              className=" overflow-auto "
              style={{ height: "calc(100vh - 260px)" }}
            >
              <GridProducts />
            </div>
          </div>

          <div
            className="col-span-1 md:col-span-2 rounded-xl bg-white p-4 "
            
          >
            <div
            className=""
            >
               <TextSecundary
            size={18}
            fontWeight={400}
            text={'Centro 1 - Centro'}
            />

            <div className="flex ">
            <span className="color-complement rounded-3xl text-[12px] text-gray-600 h-10 px-4 flex items-center w-full">
              Cesar Pichola
            </span>
            <div className="w-56 ml-3">
              <ButtonCustom
                        icon={IoMdAdd}
                        text="Agregar cliente"
                        />

            </div>
            </div>
            </div>
            
           



          
           
            
          </div>
        </div>
      </>
    </>
  );
}

export default RestaurantPage;
