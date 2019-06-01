//main config file

var config = {};

config.TRANSPARENCY = false;
config.TRANSPARENCY_TYPE = 'squares'; //squares, green, grey
config.LANG = 'en';
config.WIDTH = null;
config.HEIGHT = null;
config.visible_width = null;
config.visible_height = null;
config.COLOR = '#008000';
config.ALPHA = 255;
config.ZOOM = 1;
config.pixabay_key = '3ca2cd8af3fde33af218bea02-9021417';
config.layers = [];
config.layer = null;
config.need_render = false;
config.mouse = {};

//requires styles in reset.css
config.themes = [
	'dark',
	'light',
	'green',
];

config.TOOLS = [
	{
		name: 'select',
		title: 'Select object tool',
		attributes: {
			auto_select: true,
		},
	},
	{
		name: 'selection',
		title: 'Selection',
		attributes: {},
		on_leave: 'on_leave',
	},
	{
		name: 'brush',
		title: 'Brush',
		attributes: {
			size: 4,
			smart_brush: true,
		},
	},
	{
		name: 'erase',
		title: 'Erase',
		on_update: 'on_params_update',
		attributes: {
			size: 30,
			circle: true,
			strict: true,
		},
	},
	{
		name: 'fill',
		title: 'Fill',
		attributes: {
			power: 5,
			anti_aliasing: false,
			contiguous: false,
		},
	},
	{
		name: 'rectangle',
		title: 'Rectangle',
		attributes: {
			size: 1,
			radius: 0,
			fill: true,
			square: false,
		},
	},
	{
		name: 'text',
		title: 'Text',
		attributes: {},
	},
];

//link to active tool
config.TOOL = config.TOOLS[2];


export default config;
