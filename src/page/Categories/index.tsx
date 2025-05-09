import { useEffect, useState } from "react";
import DataTable from "../../components/DataTable/dataTable";
import { ICategory } from "../../core/models";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';


const CategoriesPage = () => {
 
  const [data, setData] = useState<ICategory[]>([]);


  useEffect(() => {
    
   setTimeout(() => {
    setData(dataC)
   }, 3000);
  }, []);

  return (
    <>
    {data.length > 0 ?
     <DataTable
     title="Categorías"
     colums={[
       { key: "nombre", label: "Nombre" },
       { key: "orden", label: "Orden" },

       { key: "fechaCreo", label: "Fecha de creación" },
       { key: "activo", label: "Estado" },
     ]}
     data={data}
     onDelete={(item) => {
       console.log(item);
     }}
     itemsPerPage={14}
     onEdit={(item) => {
       console.log(item);
     }}
   />  : 
   Array(8).fill(null).map((_, rowIndex) => (
    <tr key={rowIndex}>
      <td><Skeleton
       width={120}  className="px-5"/></td>
      <td><Skeleton width={180} className="px-5"/></td>
      <td><Skeleton width={140} className="px-5"/></td>
      <td><Skeleton width={160} className="px-5"/></td>
      <td><Skeleton width={100} className="px-5"/></td>
    </tr>
  ))
    }
     
    </>
  );
};

export default CategoriesPage;

export const dataC: ICategory[] = [
  {
    nombre: "Hamburguesas",
    orden: 1,
    activo: 0,
    fechaCreo: "2024-01-05",
  },
  {
    nombre: "Pizzas",
    orden: 2,
    activo: 1,
    fechaCreo: "2024-01-10",
  },
  {
    nombre: "Ensaladas",
    orden: 3,
    activo: 1,
    fechaCreo: "2024-01-12",
  },
  {
    nombre: "Tacos",
    orden: 4,
    activo: 0,
    fechaCreo: "2024-02-01",
  },
  {
    nombre: "Bebidas",
    orden: 5,
    activo: 1,
    fechaCreo: "2024-02-15",
  },
  {
    nombre: "Postres",
    orden: 6,
    activo: 0,
    fechaCreo: "2024-03-01",
  },
  {
    nombre: "Sopas",
    orden: 7,
    activo: 0,
    fechaCreo: "2024-03-05",
  },
  {
    nombre: "Complementos",
    orden: 8,
    activo: 1,
    fechaCreo: "2024-03-10",
  },
  {
    nombre: "Hamburguesas",
    orden: 1,
    activo: 0,
    fechaCreo: "2024-01-05",
  },
  {
    nombre: "Pizzas",
    orden: 2,
    activo: 1,
    fechaCreo: "2024-01-10",
  },
  {
    nombre: "Ensaladas",
    orden: 3,
    activo: 1,
    fechaCreo: "2024-01-12",
  },
  {
    nombre: "Tacos",
    orden: 4,
    activo: 0,
    fechaCreo: "2024-02-01",
  },
  {
    nombre: "Bebidas",
    orden: 5,
    activo: 1,
    fechaCreo: "2024-02-15",
  },
  {
    nombre: "Postres",
    orden: 6,
    activo: 0,
    fechaCreo: "2024-03-01",
  },
  {
    nombre: "Sopas",
    orden: 7,
    activo: 0,
    fechaCreo: "2024-03-05",
  },
  {
    nombre: "Complementos",
    orden: 8,
    activo: 1,
    fechaCreo: "2024-03-10",
  },
  {
    nombre: "Hamburguesas",
    orden: 1,
    activo: 0,
    fechaCreo: "2024-01-05",
  },
  {
    nombre: "Pizzas",
    orden: 2,
    activo: 1,
    fechaCreo: "2024-01-10",
  },
  {
    nombre: "Ensaladas",
    orden: 3,
    activo: 1,
    fechaCreo: "2024-01-12",
  },
  {
    nombre: "Tacos",
    orden: 4,
    activo: 0,
    fechaCreo: "2024-02-01",
  },
  {
    nombre: "Bebidas",
    orden: 5,
    activo: 1,
    fechaCreo: "2024-02-15",
  },
  {
    nombre: "Postres",
    orden: 6,
    activo: 1,
    fechaCreo: "2024-03-01",
  },
  {
    nombre: "Sopas",
    orden: 7,
    activo: 0,
    fechaCreo: "2024-03-05",
  },
  {
    nombre: "Complementos",
    orden: 8,
    activo: 1,
    fechaCreo: "2024-03-10",
  },
  {
    nombre: "Hamburguesas",
    orden: 1,
    activo: 1,
    fechaCreo: "2024-01-05",
  },
  {
    nombre: "Pizzas",
    orden: 2,
    activo: 1,
    fechaCreo: "2024-01-10",
  },
  {
    nombre: "Ensaladas",
    orden: 3,
    activo: 0,
    fechaCreo: "2024-01-12",
  },
  {
    nombre: "Tacos",
    orden: 4,
    activo: 1,
    fechaCreo: "2024-02-01",
  },
  {
    nombre: "Bebidas",
    orden: 5,
    activo: 1,
    fechaCreo: "2024-02-15",
  },
  {
    nombre: "Postres",
    orden: 6,
    activo: 1,
    fechaCreo: "2024-03-01",
  },
  {
    nombre: "Sopas",
    orden: 7,
    activo: 0,
    fechaCreo: "2024-03-05",
  },
  {
    nombre: "Complementos",
    orden: 8,
    activo: 1,
    fechaCreo: "2024-03-10",
  },
];
