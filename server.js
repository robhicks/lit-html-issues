const liveServer = require('live-server');

liveServer.start({
  port: 5011,
  host: '0.0.0.0',
  root: './',
  mount: [
    [ '/node_modules', './node_modules' ]
  ],
  open: false,
  wait: 500
})
