import { InputTextSecundary } from "../../components/input/input_text_secundary";
import ListCategories from "./components/categories";
import GridProducts from "./components/grid_products";
import "./style/restaurant.css";
import { IoIosSearch } from "react-icons/io";

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
              style={{ height: "calc(100vh - 250px)" }}
            >
              <GridProducts />
            </div>
          </div>

          <div
            className="col-span-1 md:col-span-2 rounded-xl bg-white"
            
          >
              <p className="flex justify-center text-[16px] text-gray-400  py-4">Centro 1 - Centro  </p>
            <div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default RestaurantPage;
