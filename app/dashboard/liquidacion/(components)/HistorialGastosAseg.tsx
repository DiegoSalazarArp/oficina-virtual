import { Button } from "@/components/ui/button";

export default function HistorialGastosAseg() {
    return (
        <>
            <div className="text-xl my-2">
                <span>Ingreso de gastos de Asegurado</span>
            </div>
            <div className="relative max-h-[50vh] overflow-auto">
                <table
                    // ref={tableRef}
                    id="tableId"
                    className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
                >
                    <thead className="sticky text-xs z-10  uppercase bg-gray-50 dark:bg-black dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 sticky top-0 bg-gray-50 dark:bg-black opacity-100">
                                Id Evento                </th>
                            <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                                Solicitud                </th>
                            <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                                Diag.                </th>
                            <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                                Descrip. Diag
                            </th>
                            <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                                F.Remesa                </th>
                            <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                                Estado                </th>
                            <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                                Tipo                </th>
                            <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                                F.Pago                </th>
                            <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                                Egreso               </th>
                            <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                                Monto Costo                </th>
                            <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                                Monto.Liq              </th>
                            <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                                Monto Deducible                </th>
                            <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                                Reliq.                </th>
                            <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                                Cont. Tto                </th>
                            <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                                Cont. Evto                </th>
                            <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                                Imprimir Sol                </th>
                            <th scope="col" className="px-6 py-3 sticky bg-gray-50 dark:bg-black top-0">
                                Inprimir Carta                </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-[#252525] dark:border-black">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                1
                            </th>
                            <td className="px-6 py-4">1231</td>
                            <td className="px-6 py-4">18453728</td>
                            <td className="px-6 py-4">Transtornos rotulo examen odontologico</td>
                            <td className="px-6 py-4">03-10-2023</td>
                            <td className="px-6 py-4">LIQ/REC</td>
                            <td className="px-6 py-4">Amb.</td>
                            <td className="px-6 py-4">10-10-2023</td>
                            <td className="px-6 py-4">23918</td>
                            <td className="px-6 py-4">294819</td>
                            <td className="px-6 py-4">21381</td>
                            <td className="px-6 py-4">919</td>
                            <td className="px-6 py-4">
                                <input
                                    type="checkbox"
                                /></td>
                            <td className="px-6 py-3">
                                <input
                                    type="checkbox"
                                />
                            </td>
                            <td className="px-6 py-3">
                                <input
                                    type="checkbox"
                                /></td>
                            <td className="px-6 py-3">
                                <Button variant={"outline"}>
                                    Imprimir
                                </Button>
                            </td>
                            <td className="px-6 py-3">
                                <Button variant={"outline"}>
                                    Imprimir
                                </Button>
                            </td>
                        </tr>



                    </tbody>
                </table>
            </div></>
    )
}