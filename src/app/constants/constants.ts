export enum ERutas {
	INICIO = "/",
	NORMATIVA_LINEAMIENTOS = "/normativa-lineamientos",
	PROCESOS_REGISTRO = "/procesos-registro",
	GESTION_CURRICULAR = "/gestion-curricular",
	FORTALECIMIENTO_DOCENTE = "/fortalecimiento-docente",
	LICENCIAMIENTO_EESP = "/licenciamiento-eesp",
	GESTION_ASEGURAMIENTO = "/gestion-aseguramiento",
	CONTACTO = "/contacto",
	NOSOTROS = "/nosotros",
}

export type TNavMenuItem = {
	label: string
	href?: string
	children?: TNavMenuItem[]
}

export const NAV_MENU: TNavMenuItem[] = [];
// 	{
// 		label: "Normativa Lineamientos",
// 		href: ERutas.NORMATIVA_LINEAMIENTOS,
// 		children: [
// 			{
// 				label: "Documentos Normativos",
// 				children: [
// 					{ label: "Ley", href: "#" },
// 					{ label: "Decreto Legislativo", href: "#" },
// 					{ label: "Decreto de Urgencia", href: "#" },
// 					{ label: "Decreto Supremo", href: "#" },
// 					{ label: "Resolución Viceministerial", href: "#" },
// 					{ label: "Resolución de Secretaría General", href: "#" },
// 					{ label: "Resolución Ministerial", href: "#" },
// 					{ label: "Resolución Jefatural", href: "#" },
// 					{ label: "Resolución Directoral", href: "#" },
// 					{ label: "Directiva", href: "#" },
// 					{ label: "Oficio", href: "#" },
// 				],
// 			},
// 			{
// 				label: "Lineamientos",
// 				children: [
// 					{ label: "Lineamientos Generales", href: "#" },
// 					{ label: "Lineamientos Específicos", href: "#" },
// 				],
// 			},
// 		],
// 	},
// 	{
// 		label: "Procesos de Registro",
// 		href: ERutas.PROCESOS_REGISTRO,
// 		children: [
// 			{ label: "Registro de Instituciones", href: "#" },
// 			{ label: "Registro de Docentes", href: "#" },
// 			{ label: "Registro de Programas", href: "#" },
// 		],
// 	},
// 	{
// 		label: "Gestión Curricular",
// 		href: ERutas.GESTION_CURRICULAR,
// 		children: [
// 			{ label: "Diseño Curricular", href: "#" },
// 			{ label: "Programas de Estudio", href: "#" },
// 			{ label: "Evaluación Curricular", href: "#" },
// 		],
// 	},
// 	{
// 		label: "Fortalecimiento Docente",
// 		href: ERutas.FORTALECIMIENTO_DOCENTE,
// 		children: [
// 			{ label: "Capacitaciones", href: "#" },
// 			{ label: "Programas de Formación", href: "#" },
// 			{ label: "Acompañamiento Pedagógico", href: "#" },
// 		],
// 	},
// 	{
// 		label: "Licenciamiento de EESP",
// 		href: ERutas.LICENCIAMIENTO_EESP,
// 		children: [
// 			{ label: "Requisitos", href: "#" },
// 			{ label: "Proceso de Licenciamiento", href: "#" },
// 			{ label: "Instituciones Licenciadas", href: "#" },
// 		],
// 	},
// 	{
// 		label: "Gestión y Aseguramiento de la Calidad",
// 		href: ERutas.GESTION_ASEGURAMIENTO,
// 		children: [
// 			{ label: "Estándares de Calidad", href: "#" },
// 			{ label: "Acreditación", href: "#" },
// 			{ label: "Monitoreo y Evaluación", href: "#" },
// 		],
// 	},
// ]

export const SLIDES = [
	{
		image: "/assets/slider/slide-4.jpg",
		title: "Educación Intercultural Bilingüe",
		description: "En el corazón de La Convención Voces diversas, una sola educación: Identidad que trasciende",
		//buttonText: "Acceder",
		//buttonUrl: "#",
	},
	{
		image: "/assets/slider/slide-5.jpg",
		title: "UGEL La Convención",
		description: "Comprometidos con la Innovación para la Mejora de los Aprendizajes",
		//buttonText: "Conocer más",
		//buttonUrl: "#",
	},
	{
		image: "/assets/slider/slide-6.jpg",
		title: "Modernización",
		description: "Ñaupa yachaywan, musoq yachaywan: Identidad e innovación para el futuro",
		//buttonText: "Conocer más",
		//buttonUrl: "#",
	},
	{
		image: "/assets/slider/slide-1.jpg",
		title: "Participamos en Buenas Practicas de Gestión Educativa",
		description: "Desarrollamos 3 estrategias de gestión innovadoras para transformar y resolver desafíos educativos en nuestra provincia",
		//buttonText: "Ver más",
		//buttonUrl: "#",
	},	
	
]

export type TTopDropdown = {
	label: string
	color: "red" | "green" | "blue"
	type: "vertical" | "fullwidth"
	items: { label: string; href: string }[]
	columns?: { title: string; items: { label: string; href: string }[] }[]
}

export const TOP_DROPDOWNS: TTopDropdown[] = [
	{
		label: "UGEL La Convención",
		color: "red",
		type: "vertical",
		items: [
			{ label: "Bienvenida", href: "pages/bienvenida" },
			{ label: "Organigrama", href: "pages/organigrama" },
			{ label: "Directorio", href: "pages/directorio" },
			{ label: "Jurisdicción", href: "pages/jurisdiccion" },
			{ label: "Instituciones Educativas", href: "pages/instituciones-educativas" },
			{ label: "Visión Misión", href: "pages/mision/visión" },
		],
	},
	{
		label: "Estructura Orgánica",
		color: "green",
		type: "fullwidth",
		items: [],
		columns: [
			{
				title: "Dirección",
				items: [
					{ label: "Órgano de Dirección", href: "/organo-de-direccion" },
					{ label: "Comisión Permanente de Procesos Administrativos Disciplinarios para Docentes", href: "/comision-permanente" },
				],
			},
			{
				title: "Control",
				items: [{ label: "Órgano de Control Institucional", href: "/organo-de-control" }],
			},
			{
				title: "Asesoramiento",
				items: [
					{ label: "Área de Asesoría Jurídica", href: "/asesoria-juridica" },
					{ label: "Área de Planificación y Presupuesto", href: "/planificacion-presupuesto" },
				],
			},
			{
				title: "Apoyo",
				items: [
					{ label: "Área de Recursos Humanos", href: "/recursos-humanos" },
					{ label: "Área de Administración", href: "/administracion" },
				],
			},
			{
				title: "Línea",
				items: [
					{ label: "AGP", href: "/agp" },
					{ label: "AGA", href: "/aga" },
					{ label: "AGI", href: "/agi" },
				],
			},
		],
	},
	{
		label: "Servicios",
		color: "blue",
		type: "vertical",
		items: [
			{ label: "Mesa de Partes", href: "/mesa-de-partes" },
			{ label: "Trámite Documentario", href: "/tramite-documentario" },
			{ label: "Boletas de Pago", href: "/boletas-de-pago" },
			{ label: "Constancias", href: "/constancias" },
			{ label: "Escalafón", href: "/escalafon" },
		],
	},
]

export const EMPRESA = {
	nombre: "UGEL La Convención",
	nombreCompleto: "Unidad de Gestión Educativa Local de La Convención",
	director: "Dr. Melquiades Cusihuaman Hermoza",
	cargoDirector: "Director de UGEL La Convención",
	direccion: "Jirón Independencia 431, La Convención - Cusco - Perú",
	correo: "mesadepartes@ugellaconvencion.gob.pe",
	mision: "Somos una Institución participativa con una educación intercultural y equitativa, dedicados en garantizar, asegurar, y promover el servicio Educativo de calidad, sustentado en el trabajo eficiente de sus colaboradores orientados y centradas en la formación integral de todos los estudiantes al logro y desarrollo humano sostenible.",
	vision: "La Unidad de Gestión Educativa Local de la Convención al 2016, es líder de la Región Cusco en la gestión educativa en el marco de la implementación de gestión por resultados con enfoque de calidad, ético de desarrollo humano sostenible, científico, tecnológico, eco productivo, pluricultural; forjadora de ciudadanos críticos, participativos e innovadores, que construyen una sociedad inclusiva, democrática y con una cultura de paz.",
	redesSociales: {
		facebook: "https://www.facebook.com/OficialUGELLC",
		youtube: "https://www.youtube.com/@ugellaconvencion_oficial",
	},
}


export interface ISidebarItem {
	id: string
	label: string
	href: string
}

export const SIDEBAR_INSTITUCIONAL: ISidebarItem[] = [
	{ id: "bienvenida", label: "Bienvenida", href: "/pages/bienvenida" },
	{ id: "organigrama", label: "Organigrama", href: "/pages/organigrama" },
	{ id: "jurisdiccion", label: "Jurisdicción", href: "/pages/jurisdiccion" },
	{ id: "instituciones-educativas", label: "Instituciones Educativas", href: "/pages/instituciones-educativas" },
	{ id: "vision-mision", label: "Visión y Misión", href: "/pages/vision-mision" },
]