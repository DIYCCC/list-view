export default {
  esm: {
    type: 'rollup',
  },
  cjs: {
    type: 'rollup',
  },
  umd: {
    name: 'LoadMoreListView',
    globals: {
      react: 'React',
    },
  },
  disableTypeCheck: true,
  // namedExports: {
  //   'react-is': [
  //     'isFragment',
  //   ]
  // },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
};
