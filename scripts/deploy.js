const path = require('path')
const ghpages = require('gh-pages')
const distPath = path.resolve(__dirname, '../build')

ghpages.publish(distPath, {force: true}, function (error) {
  throw error
})
