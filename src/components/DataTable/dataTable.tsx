import PaginationTable from "./pagination";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { useEffect, useState } from "react";
import { ButtonCustom } from "../buttons/button_custom";

interface IColum {
  key: string;
  label: string;
}
interface DataTableProps {
  buttonAdd?: boolean;
  title?: string;
  colums: IColum[];
  data: Record<string, any>[];
  onEdit: (item: Record<string, any>) => void;
  onDelete: (item: Record<string, any>) => void;
  itemsPerPage: number;
}

const DataTable = ({
  colums,
  title,
  buttonAdd = true,
  data,
  onDelete,
  onEdit,
  itemsPerPage,
}: DataTableProps) => {

  // state
  const [currentPage, setCurrentPage] = useState(0);
  const [paginatedData, setPaginatedData] = useState<Record<string, any>[]>([]);

  useEffect(() => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedData(data.slice(startIndex, endIndex));
  }, [currentPage, data]);

  return (
    <>
      <div className="overflow-x-auto p-5">
        <div className="bg-white px-6 py-3">
          <div className=" flex items-center justify-between">
            <p className="text-xl font-[400] text-gray-600 pt-2 pb-6">
              {title}
            </p>
           <ButtonCustom
           icon={IoMdAdd}
           text="Agregar"
           />
          </div>
          <table className="min-w-full text-left text-sm  bg-white rounded-sm shadow">
            <thead className="bg-gray-100">
              <tr>
                {colums.length > 0 &&
                  colums.map((e, i) => (
                    <th
                      key={i}
                      className="px-4 py-3 text-[12px] font-[400] text-gray-500"
                    >
                      {e.label}
                    </th>
                  ))}
                <th className="px-4 py-3 text-[12px] font-[400] text-gray-500 w-24">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((row, i) => (
                <tr
                  key={i}
                  className="border-t border-gray-200 hover:bg-gray-50  "
                >
                  {colums.map((col) => {
                    if (col.key == "activo") {
                      return (
                        <td key={col.key}>
                          <span
                            className={`${
                              row[col.key] == 1
                                ? "bg-green-200 text-green-700"
                                : "bg-red-200 text-red-700"
                            }
                            text-[12px] rounded-xl px-3 py-0.5
                            `}
                          >
                            • {row[col.key] == 1 ? "Activo" : "Inactivo"}
                          </span>
                        </td>
                      );
                    }

                    return (
                      <td
                        key={col.key}
                        className="px-4 py-2 text-[13px] text-gray-600"
                      >
                        {row[col.key]}
                      </td>
                    );
                  })}
                  <td className="px-4 py-3">
                    <div className="flex justify-around">
                      <MdOutlineDeleteOutline
                        onClick={() => {
                          onDelete(row);
                        }}
                        className="text-gray-500 text-xl cursor-pointer"
                      />
                      <MdOutlineEdit
                        onClick={() => {
                          onEdit(row);
                        }}
                        className="text-gray-500 text-xl cursor-pointer"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end">
            <PaginationTable
              onPageChange={(selected) => setCurrentPage(selected)}
              pageCount={Math.ceil(data.length / itemsPerPage)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DataTable;
