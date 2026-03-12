// TablaDocumentos.tsx
"use client";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import dynamic from "next/dynamic";
import { type ComponentType } from "react";
import { type TableColumn } from "react-data-table-component";
import { FaFilePdf } from "react-icons/fa6";
import type { default as DataTableComponent } from "../../../commons/components/DataTable";
import { type TDocumentoNormativo } from "./constants";

dayjs.extend(customParseFormat);

const FECHA_FORMAT = "DD.MM.YYYY";

const DataTable = dynamic(
  () => import("../../../commons/components/DataTable"),
  { ssr: false },
) as ComponentType<
  Parameters<typeof DataTableComponent<TDocumentoNormativo>>[0]
>;

// ---------------------------------------------------------------------------
// Auto-actualización de estado según fecha del sistema (usando dayjs)
// - cancelada  → se mantiene sin comparar fechas
// - vigente    → hoy está entre inicio y fin (inclusive)
// - concluida  → la fecha de fin ya pasó
// ---------------------------------------------------------------------------
function actualizarEstados(docs: TDocumentoNormativo[]): TDocumentoNormativo[] {
  const hoy = dayjs().startOf("day");

  return docs.map((doc) => {
    let nuevoEstado: TDocumentoNormativo["estado"] = doc.estado;

    if (doc.estado !== "cancelada") {
      const fechaInicio = dayjs(doc.inicio, FECHA_FORMAT);
      const fechaFin = dayjs(doc.fin, FECHA_FORMAT);

      if (fechaFin.isBefore(hoy)) {
        nuevoEstado = "concluida";
      } else if (
        (fechaInicio.isBefore(hoy) || fechaInicio.isSame(hoy)) &&
        (hoy.isBefore(fechaFin) || hoy.isSame(fechaFin))
      ) {
        nuevoEstado = "vigente";
      }
    }

    // construye badge según el estado resultante
    let badge: { label: string; color: string } | undefined;
    if (nuevoEstado === "cancelada") {
      badge = { label: "Cancelado", color: "#dc2626" };
    } else if (nuevoEstado === "vigente") {
      badge = { label: "Vigente", color: "#10b981" };
    } else if (nuevoEstado === "concluida") {
      badge = { label: "Concluida", color: "#3b82f6" };
    }

    return {
      ...doc,
      estado: nuevoEstado,
      badge,
    };
  });
}

const columns: TableColumn<TDocumentoNormativo>[] = [
  {
    id: "numero",
    name: "#",
    selector: (row) => row.numero,
    sortable: true,
    width: "60px",
  },
  {
    id: "numcotizacion",
    name: "N° Cotiz",
    selector: (row) => row.numcotizacion,
    sortable: true,
    width: "110px",
  },
  {
    id: "tipo",
    name: "Tipo",
    selector: (row) => row.tipo,
    sortable: true,
    width: "110px",
  },
  {
    id: "descripcion",
    name: "Descripción",
    selector: (row) => row.descripcion,
    sortable: true,
    grow: 3,
    wrap: true,
  },
  {
    id: "archivoUrl",
    name: "Documento / Publicación",
    width: "120px",
    style: { justifyContent: "center" },
    cell: (row) => (
      <div className="flex flex-col items-center gap-1 py-1">
        <a
          href={row.archivoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors text-[10px] font-bold"
          title="Ver Cotización"
        >
          <FaFilePdf className="text-sm" />
          PDF
        </a>
        <span className="text-[9px] text-slate-500 font-medium leading-none">
          {row.fechapublicacion}
        </span>
      </div>
    ),
  },
  {
    id: "fechainicio",
    name: "Inicio Presentación",
    selector: (row) => row.inicio,
    sortable: true,
    width: "150px",
    wrap: true,
  },
  {
    id: "fechafin",
    name: "Fin Presentación",
    selector: (row) => row.fin,
    sortable: true,
    width: "135px",
    wrap: true,
  },
  {
    id: "estado",
    name: "Estado",
    selector: (row) => row.estado,
    sortable: true,
    width: "120px",
    wrap: true,
    cell: (row) => {
      const estado = row.estado.toLowerCase();

      const estilos: Record<
        string,
        { clases: string; label: string; dot?: boolean }
      > = {
        vigente: {
          clases: "bg-green-100 text-green-700 border-green-200",
          label: "Vigente",
          dot: true,
        },
        concluida: {
          clases: "bg-blue-100 text-blue-600 border-blue-200",
          label: "Concluida",
        },
        cancelada: {
          clases: "bg-red-100 text-red-500 border-red-200",
          label: "Cancelada",
        },
      };

      const { clases, label, dot } = estilos[estado] ?? {
        clases: "bg-gray-100 text-gray-500 border-gray-200",
        label: row.estado,
      };

      return (
        <span
          className={`relative flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase border ${clases}`}
        >
          {dot && (
            <span className="absolute -left-1 top-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          )}
          {label}
        </span>
      );
    },
  },
];

interface TablaDocumentosProps {
  datos: TDocumentoNormativo[];
}

export default function TablaDocumentos({ datos }: TablaDocumentosProps) {
  // Evalúa el estado de cada documento en tiempo de render según la fecha actual
  const datosActualizados = actualizarEstados(datos);

  return (
    <DataTable
      columns={columns}
      data={datosActualizados}
      title="Documentos Normativos - UGEL La Convención"
      defaultSortFieldId="numero"
      defaultSortAsc={false}
      paginationPerPage={10}
    />
  );
}
