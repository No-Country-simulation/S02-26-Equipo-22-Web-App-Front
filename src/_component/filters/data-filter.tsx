"use client"
import { useId } from "react";
import { DataComponentFilter } from "./nav-filter";
// import { TypesSelectMarca } from "../../types/types";

const Filter = () => {
    interface TypesData {
        id: number
        op: string
        valor: string
    }

    const categoryFilterId = useId();
    const { setFilters } = DataComponentFilter();



    const handleChangeCategory = (event: any) => {
        setFilters((prevState: TypesData) => ({ ...prevState, marca: event.target.value }));
        // console.log(event.target.value)
    };
    const filterData = [
        {
            id: 1,
            op: "todos los caballos",
            data: "all",
        },
        // {
        //     id: 2,
        //     op: "raza",
        //     data: "breed",
        // },
        // {
        //     id: 3,
        //     op: "ofertas",
        //     data: "installments"
        // },
        // {
        //     id: 5,
        //     op: "temperamento",
        //     data: "temperament",
        // },
        {
            id: 2,
            op: "mayor a 3 años",
            data: "moreAgeThan3",
        },
        {
            id: 6,
            op: "mas vendidos",
            data: "moreSales",
        },
        {
            id: 7,
            op: "menor precio",
            data: "minPrice",
        }
    
    ];
    // const { pathname } = location
    // console.log(pathname)
    return (
        <section className="bg-[#F9F9F9] dark:bg-dark-theme ">
            <div className="  w-full  mx-auto h-[10vh] pb-4 max-w-maximo-ancho  ">
                <ul className="flex flex-col justify-center  h-[10vh] max-w-maximo-ancho">
                    <form
                        className="flex flex-col  md:flex-row items-center  justify-between content-center mx-auto max-w-maximo-ancho w-full  "
                        method="post"
                        action="/send/"
                    >
                        <p className="flex items-center opacity-70">

                        </p>

                        <div className="flex items-center gap-2">
                            <label className="hidden" htmlFor={categoryFilterId}>
                                Filtro
                            </label>
                            <select
                                id={categoryFilterId}
                                onChange={handleChangeCategory}
                                className="p-2 rounded-md cursor-pointer focus:outline-none  border border-b-amber-700"
                            >
                                {filterData.map((e) => (
                                    <option key={e.id} value={e.data}>
                                        {e.op}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </form>
                </ul>

            </div>
        </section>
    );
};

export default Filter;