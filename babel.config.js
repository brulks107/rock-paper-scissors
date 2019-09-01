module.exports = function (api) {
  api.cache(true);

  const presets = [
    ['minify', {
      removeConsole: {
        'exclude': ['error', 'warn'],
      },
    }],
  ];

  return {
    presets,
  };
}
