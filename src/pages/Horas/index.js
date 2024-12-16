import { Table, TableBody, TableCell, TableHeader, TableColumn, TableRow } from "@nextui-org/react";
import { useMemo } from "react";
import { extraHoursData } from "./data";

export default function HorasPage() {
  // Calcular el total de horas dedicadas
  const totalHoras = useMemo(() => {
    return extraHoursData.reduce((total, sistema) => {
      return total + sistema.tareas.reduce((tareaTotal, tarea) => {
        return tareaTotal + tarea.subtareas.reduce((subtareaTotal, subtarea) => {
          return subtareaTotal + (subtarea.horas || 0);
        }, 0);
      }, 0);
    }, 0);
  }, [extraHoursData]);

  return (
    <div style={{ padding: "15px" }}>
      <h1
        className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-600 to-purple-600 mb-6"
      >
        Registro de Horas Extras
      </h1>
      <div style={{ overflowX: "auto", maxHeight: "500px", overflowY: "auto" }}>
        <Table
          aria-label="Tabla de registro de horas extras jerarquizadas por sistema y menú"
          removeWrapper
          isHeaderSticky
          css={{ height: "auto", minWidth: "100%" }}
        >
          <TableHeader>
            <TableColumn>Sistema</TableColumn>
            <TableColumn>Menú</TableColumn>
            <TableColumn>Fecha</TableColumn>
            <TableColumn>Descripción del trabajo</TableColumn>
            <TableColumn>Horas dedicadas</TableColumn>
          </TableHeader>
          <TableBody>
            {extraHoursData.map((sistema, sistemaIndex) =>
              sistema.tareas.map((tarea, tareaIndex) =>
                tarea.subtareas.map((subtarea, subtareaIndex) => (
                  <TableRow key={`${sistemaIndex}-${tareaIndex}-${subtareaIndex}`}>
                    <TableCell>
                      {tareaIndex === 0 && subtareaIndex === 0 ? sistema.sistema : ""}
                    </TableCell>
                    <TableCell>
                      {subtareaIndex === 0 ? tarea.menu : ""}
                    </TableCell>
                    <TableCell>{subtarea.fecha || "-"}</TableCell>
                    <TableCell>{subtarea.descripcion}</TableCell>
                    <TableCell>{subtarea.horas || "-"}</TableCell>
                  </TableRow>
                ))
              )
            )}
          </TableBody>
        </Table>
      </div>
      <div style={{ marginTop: "20px", fontWeight: "bold" }}>
        Total de horas dedicadas: {totalHoras}
      </div>
    </div>
  );
}
