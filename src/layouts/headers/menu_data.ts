interface DataType {
	id: number;
	title: string;
	link: string;
	has_dropdown?: boolean;
	sub_menus?: {
		link: string;
		title: string;
	}[];
}
const menu_data: DataType[] = [
	{ id: 1, title: 'Início', link: '#home', has_dropdown: false },
	{ id: 2, title: 'Sobre', link: '#about', has_dropdown: false },
	{ id: 3, title: 'Serviços', link: '#services', has_dropdown: false },
	{ id: 4, title: 'Portfólio', link: '#portfolio', has_dropdown: false },
	{ id: 5, title: 'Experiência', link: '#experience', has_dropdown: false },
	{ id: 6, title: 'Clientes', link: '#brands', has_dropdown: false },
	{ id: 7, title: 'Contato', link: '#contact', has_dropdown: false },
];
export default menu_data;
