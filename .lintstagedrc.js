/* eslint-disable no-undef */
module.exports = {
  '*.js': ['prettier --write', 'git add'],
  '*.jsx': ['prettier --write', 'git add'],
  '*.ts': ['prettier --write', 'git add'],
  '*.tsx': ['prettier --write', 'git add'],
  '.lintstagedrc.js': ['prettier --write', 'git add']
}
