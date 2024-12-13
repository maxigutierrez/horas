import { Table, TableBody, TableCell, TableHeader, TableColumn, TableRow } from "@nextui-org/react";

export default function HorasPage() {
  // Datos iniciales de ejemplo
  const extraHoursData = [
    {
      "sistema": "ADMIN",
      "tareas": [
        {
          "menu": "Guias",
          "subtareas": [
            {
              "fecha": "8/5/2024",
              "descripcion": "Arreglar 'Generar guías desde Excel' (Grandes clientes)",
              "horas": 2
            },
            {
              "fecha": "30/5/2024",
              "descripcion": "Agregar campo observaciones, y grabar donde corresponde (tabla comprobantes campo observaciones). (Longitud 100)"
            },
            {
              "fecha": "30/5/2024",
              "descripcion": "Filtro para poder ver TODAS las guías, mostrando las de mi sucursal por defecto. Mostrar solo sucursales que generan guías (IDs: 2 al 8; 95, 98, 99, 100, 111, 191)."
            }
          ]
        },
        {
          "menu": "Filiales",
          "subtareas": [
            {
              "fecha": "22/8/2024",
              "descripcion": "En el tab cobertura el mapa no busca ni autodibuja",
              "horas": 1
            }
          ]
        }
      ]
    },
    {
      "sistema": "STOCK",
      "tareas": [
        {
          "menu": "Rutas",
          "subtareas": [
            {
              "fecha": "18/5/2024",
              "descripcion": "Mapa",
              "horas": 12
            },
            {
              "fecha": "30/5/2024",
              "descripcion": "Que en todos los campos no haya límite de cantidad y que se pueda buscar"
            },
            {
              "fecha": "30/5/2024",
              "descripcion": "Agregar columna Cantidad, que cuente las paradas dentro de cada ruta"
            }
          ]
        },
        {
          "menu": "Rutas > Detalle",
          "subtareas": [
            {
              "fecha": "18/5/2024",
              "descripcion": "Agregar modal Domicilio Clientes",
              "horas": 2
            },
            {
              "fecha": "22/5/2024",
              "descripcion": "Dentro de cada ruta, buscar el número de teléfono de la tabla clientes"
            },
            {
              "fecha": "26/5/2024",
              "descripcion": "En el mapa permitir dibujar forma y cambiar ruta a clientes dentro",
              "horas": 3
            },
            {
              "fecha": "5/8/2024",
              "descripcion": "Inicio y Final con posibilidad de seleccionar clientes y guardar coordenadas de su domicilio",
              "horas": 1
            },
            {
              "fecha": "8/10/2024",
              "descripcion": "Agregar una columna más Próxima visita con posibilidad de editarla"
            }
          ]
        },
        {
          "menu": "Kpi objetivos",
          "subtareas": [
            {
              "fecha": "14/6/2024",
              "descripcion": "Crear tabla kpi_objetivos_recorridos y mostrar los recorridos de la zona para cargar el objetivo",
              "horas": 2
            }
          ]
        },
        {
          "menu": "Volumen",
          "subtareas": [
            {
              "fecha": "4/7/2024",
              "descripcion": "Crear Menú volumen",
              "horas": 2
            }
          ]
        }
      ]
    },
    {
      "sistema": "SPEED",
      "tareas": [
        {
          "menu": "Clientes > Domicilios",
          "subtareas": [
            {
              "fecha": "9/9/2024",
              "descripcion": "No deja guardar porque dice que tiene más de un teléfono, sin haber editado el teléfono."
            }
          ]
        }
      ]
    },
    {
      "sistema": "AUTOGESTION",
      "tareas": [
        {
          "menu": "Mis envíos",
          "subtareas": [
            {
              "fecha": "20/9/2024",
              "descripcion": "Buscar un mes para atrás, como origen y destino. Agregar búsqueda por remitente/destinatario y Remito.",
              "horas": 2
            }
          ]
        }
      ]
    },
    {
      "sistema": "THE GROUP",
      "tareas": [
        {
          "menu": "Filiales > Domicilios",
          "subtareas": [
            {
              "fecha": "30/8/2024",
              "descripcion": "Julia: Guarda bien, pero tira mensaje de error. No tiene botón de eliminar."
            }
          ]
        },
        {
          "menu": "Acuerdos > Valor declarado",
          "subtareas": [
            {
              "fecha": "25/9/2024",
              "descripcion": "Permitir agregar, editar y eliminar por cada línea y masivamente",
              "horas": 2
            }
          ]
        },
        {
          "menu": "Printer Pool",
          "subtareas": [
            {
              "fecha": "4/10/2024",
              "descripcion": "Instalador, configuración y creación de post",
              "horas": 5
            }
          ]
        }
      ]
    }
  ]
  

  return (
    <div style={{ padding: "20px" }}>
      <h1>Registro de Horas Extras</h1>
      <div style={{ overflowX: "auto" }}>
        <Table
          aria-label="Tabla de registro de horas extras jerarquizadas por sistema y menú"
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
    </div>
  );
  
  
}
