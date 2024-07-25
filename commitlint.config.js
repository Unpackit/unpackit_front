module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['fix', 'feat', 'docs', 'style', 'refactor', 'test', 'chore', 'revert'],
    ],
    'header-case': [2, 'always', 'lower-case'],
    'header-max-length': [2, 'always', 72],
    'subject-case': [0, 'never', ['sentence-case']],
  },
};
