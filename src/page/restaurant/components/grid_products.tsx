import CardProduct from "../../../components/cards/card_product";
import {IProduct} from "../../../core/models/index";

function GridProducts() {
    return ( <>
    <div className="grid grid-cols-2  md:grid-cols-4 gap-3 ">
     {
        ListProduct.map((e, i)=>(
        <CardProduct key={i} {...e}/>
        ))
     }
    </div>
    </> );
}

export default GridProducts;



const ListProduct: IProduct[] = [
  {
    img: "https://sistemasestrategicosgt.restbar.com.gt/Images/menu_images/4.jpeg",
    name: "7Up lata",
    price: 15.0,
  },
  {
    img: 'https://sistemasestrategicosgt.restbar.com.gt/Images/menu_images/47.jpeg',
    name: 'Canada Dry',
    price: 15.00
  },
  {
    img: "https://sistemasestrategicosgt.restbar.com.gt/Images/menu_images/2.jpeg",
    name: "7Up lata",
    price: 15.0,
  },
  {
    img: 'https://sistemasestrategicosgt.restbar.com.gt/Images/menu_images/46.jpeg',
    name: 'Canada Dry',
    price: 15.00
  },
  {
    img: "https://sistemasestrategicosgt.restbar.com.gt/Images/menu_images/45.jpeg",
    name: "7Up lata",
    price: 15.0,
  },
  {
    img: 'https://sistemasestrategicosgt.restbar.com.gt/Images/menu_images/33.jpeg',
    name: 'Canada Dry',
    price: 15.00
  },
  {
    img: "https://sistemasestrategicosgt.restbar.com.gt/Images/menu_images/14.jpeg",
    name: "7Up lata",
    price: 15.0,
  },
  {
    img: 'https://sistemasestrategicosgt.restbar.com.gt/Images/menu_images/43.png',
    name: 'Canada Dry',
    price: 15.00
  },
  {
    img: "https://sistemasestrategicosgt.restbar.com.gt/Images/menu_images/5.jpeg",
    name: "7Up lata",
    price: 15.0,
  },
  {
    img: 'https://sistemasestrategicosgt.restbar.com.gt/Images/menu_images/34.jpeg',
    name: 'Canada Dry',
    price: 15.00
  },  {
    img: "https://sistemasestrategicosgt.restbar.com.gt/Images/menu_images/4.jpeg",
    name: "7Up lata",
    price: 15.0,
  },
  {
    img: 'https://sistemasestrategicosgt.restbar.com.gt/Images/menu_images/47.jpeg',
    name: 'Canada Dry',
    price: 15.00
  },
  {
    img: "https://sistemasestrategicosgt.restbar.com.gt/Images/menu_images/2.jpeg",
    name: "7Up lata",
    price: 15.0,
  },
  {
    img: 'https://sistemasestrategicosgt.restbar.com.gt/Images/menu_images/46.jpeg',
    name: 'Canada Dry',
    price: 15.00
  },
  {
    img: "https://sistemasestrategicosgt.restbar.com.gt/Images/menu_images/45.jpeg",
    name: "7Up lata",
    price: 15.0,
  },
  {
    img: 'https://sistemasestrategicosgt.restbar.com.gt/Images/menu_images/33.jpeg',
    name: 'Canada Dry',
    price: 15.00
  }
];