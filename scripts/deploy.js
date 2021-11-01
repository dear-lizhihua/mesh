
const path = require('path')
var ghpages = require('gh-pages')
console.log(path.resolve(__dirname, '../build'))
ghpages.publish(path.resolve(__dirname, '../build'), function (err) { })