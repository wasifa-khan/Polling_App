import esbuild from 'esbuild';

esbuild.build({
  entryPoints: ['src/pages/Login.js', 'src/pages/PollDetails.js'],  // Specify your entry files
  bundle: true,
  outdir: 'dist',  // Specify the output directory for the bundled files
  loader: {
    '.js': 'jsx',  // Tell esbuild to treat .js files as JSX files
  },
  sourcemap: true, 
  jsxFactory: 'React.createElement',  // For React JSX syntax
  jsxFragment: 'React.Fragment',  // For React Fragments (<>...</>)
}).catch(() => process.exit(1));  // Exit process if there's an error
