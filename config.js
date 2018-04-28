import path from 'path'

const root = __dirname;

const config = {
	root,
	node_modules: path.join(root, 'node_modules'),
	src: path.join(root, 'src'),
	dist: path.join(root, 'dist'),
	public: path.join(root, 'demo')
}

export default config;
