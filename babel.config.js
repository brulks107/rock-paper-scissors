module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      'minify',
      {
        removeConsole: {
          'exclude': ['error', 'warn'],
        },
      }
    ],
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      }
    ],
  ];

  return {
    presets,
  };
}
