import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // publicPath: '/demo/',
  // base: '/demo/',
  ssr: {},
  layout: {},
  routes: [{ path: '/', component: '@/pages/index' }],
});
