module.exports = {
  branches: [
    'main',
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'eslint',
      },
    ]
  ],
};