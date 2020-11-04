import { INestApplication } from '@nestjs/common';
import { createProxyMiddleware } from 'http-proxy-middleware';

const demo = demo => {
  return function onProxyReq(proxyReq) {
    if (demo) {
      proxyReq.setHeader('x-yzh-env', demo);
    }
  };
};

export default (app: INestApplication) => {
  const data = [
    { key: '/client-center/', target: 'http://local.jiesuan.zz:3010' },
    { key: '/', target: 'http://master.jiesuan.zz', header: 'add-client' },
  ];

  data.forEach(item => {
    app.use(
      item.key,
      createProxyMiddleware({
        onProxyReq: demo(item.header),
        target: item.target,
        changeOrigin: true,
      }),
    );
  });
};
