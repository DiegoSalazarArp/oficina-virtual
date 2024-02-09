'use client'

import { driver } from "driver.js";
import LayoutPage from "../../_components/layout-page";
import RemesasAsignadas from "../(components)/RemesasAsignadas";
import HistorialGastosAseg from "../(components)/HistorialGastosAseg";
import CuadroBeneficiosGrupo from "../(components)/CuadroBeneficiosGrupo";
import ConsultaPreexistencia from "../(components)/ConsultaPreexistencia";



export default function Page() {
  return (
    <LayoutPage title="Ingreso" onTourStart={() => { }}>
      <div className="w-full my-2 mx-auto">

        {/* <RemesasAsignadas />
        <hr className="my-2" />
        <HistorialGastosAseg />
        <hr className="my-2" />
        <CuadroBeneficiosGrupo />
        <hr className="my-2" /> */}
        <ConsultaPreexistencia />

      </div>
    </LayoutPage>
  )

}