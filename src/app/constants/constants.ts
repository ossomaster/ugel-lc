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


export const SLIDES = [

	{
		image: "/assets/slider/slide-8.png",
		title: "Semana Santa",
		description: "",
		//buttonText: "Acceder",
		//buttonUrl: "#",
	},
	{
		image: "/assets/slider/slide-7.jpeg",
		title: "INICIO DE CLASES 16 DE MARZO",
		description: "",
		//buttonText: "Acceder",
		//buttonUrl: "#",
	},
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

export type TTopDropdownItem = {
	label: string
	href: string
	children?: { label: string; href: string }[]
}

export type TTopDropdownColumn = {
	title: string
	items: TTopDropdownItem[]
}

export type TTopDropdown = {
	label: string
	color: "red" | "green" | "blue"
	type: "vertical" | "fullwidth"
	items: TTopDropdownItem[]
	columns?: TTopDropdownColumn[]
}

export const TOP_DROPDOWNS: TTopDropdown[] = [
	{
		label: "UGEL La Convención",
		color: "red",
		type: "vertical",
		items: [
			{ label: "Bienvenida", href: "../pages/bienvenida" },
			{ label: "Organigrama", href: "../pages/organigrama" },
			{ label: "Jurisdicción", href: "../pages/jurisdiccion" },
			{ label: "Instituciones Educativas", href: "../pages/instituciones-educativas" },
			{ label: "Visión Misión", href: "../pages/mision-vision" },
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
					{ label: "Dirección", href: "/pages/en-construccion" },
					{ label: "Comisión Permanente de Procesos Administrativos Disciplinarios para Docentes", href: "/comision-permanente" },
				],
			},
			{
				title: "Control",
				items: [{ label: "Órgano de Control Institucional", href: "/pages/en-construccion" }],
			},
			{
				title: "Asesoramiento",
				items: [
					{ label: "Área de Asesoría Jurídica", href: "/pages/en-construccion" },
				],
			},
			{
				title: "Administración",
				items: [
					{ label: "Recursos Humanos", href: "/pages/en-construccion" },
				],
			},
			{
				title: "Línea",
				items: [
					{
						label: "AGP",
						href: "/pages/en-construccion",
						children: [
							{ label: "EBR. Inicial", href: "/pages/en-construccion" },
							{ label: "EBR. Primaria", href: "/pages/en-construccion" },
							{ label: "EBR. Secundaria", href: "/pages/en-construccion" },						
							
						],
					},
					{
						label: "AGA",
						href: "/pages/en-construccion",
						children: [
							/* { label: "Recursos Humanos", href: "/pages/en-construccion" },
							{ label: "Airhsp", href: "/pages/en-construccion" },
							{ label: "Nexus", href: "/pages/en-construccion" },
							{ label: "Nexus", href: "/pages/en-construccion" },
							{ label: "Contabilidad", href: "/pages/en-construccion" },
							{ label: "Tesoreria", href: "/pages/en-construccion" },
							{ label: "Remuneraciones", href: "/pages/en-construccion" },
							{ label: "Control Patrimonial", href: "/pages/en-construccion" },
							{ label: "Escalafón", href: "/pages/en-construccion" },
							{ label: "Abastecimientos", href: "/pages/en-construccion" },
							{ label: "Almacén", href: "/pages/en-construccion" }, */
							
						],
					},
					{
						label: "AGI",
						href: "/pages/en-construccion",
						children: [
							{ label: "Racionalización", href: "/pages/en-construccion" },
							{ label: "Estadística", href: "/pages/en-construccion" },
							{ label: "Presupuesto y Finanzas", href: "/pages/en-construccion" },
							{ label: "Planificación", href: "/pages/planeamiento-organizacion" },
							{ label: "Siagie", href: "/pages/en-construccion" },
							{ label: "Mantenimiento", href: "/pages/en-construccion" },
							{ label: "Infraestructura", href: "/pages/en-construccion" },
						],
					},
				],
			},
		],
	},
	{
		label: "Servicios",
		color: "blue",
		type: "vertical",
		items: [
			{ label: "Trámite Documentario", href: "../pages/atencion-ciudadano" },
			{ label: "Boletas de Pago", href: "https://servicios-ayni.minedu.gob.pe/" },
			{ label: "SIAMEP", href: "https://siamep.ugellaconvencion.gob.pe/autenticacion/iniciar-sesion" },
			{ label: "Escalafón", href: "/pages/en-construccion" },
			{ label: "Reporte de Asistencia II.EE", href: "/pages/reporte-asistencia" },
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
	{ id: "bienvenida", label: "Bienvenida", href: "../pages/bienvenida" },
	{ id: "organigrama", label: "Organigrama", href: "../pages/organigrama" },
	{ id: "jurisdiccion", label: "Jurisdicción", href: "../pages/jurisdiccion" },
	{ id: "instituciones-educativas", label: "Instituciones Educativas", href: "../pages/instituciones-educativas" },
	{ id: "vision-mision", label: "Visión y Misión", href: "../pages/vision-mision" },
]

