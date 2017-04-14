require('es6-shim');

const context = require.context('../src/', true, /\.spec\.ts$/);

context.keys().forEach(context);

Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;