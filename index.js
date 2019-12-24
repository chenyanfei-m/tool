// parse uri
import URI from 'urijs'

// parse html
import {jsdom} from 'jsdom'

// time convert
import 'dayjs'

// user agent
import device from 'current-device'

// vconsole webpack plugin
var VConsolePlugin = require('cy-vconsole-webpack-plugin')
var { argv } = require('yargs')

module.exports.plugins.push(new VConsolePlugin({
  // enabled: process.env.NODE_ENV === 'development'
  enabled: argv && argv.vconsole
}))


// snippets
export default {
  isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true;
    } else {
      return false;
    }
  },

  genPercentStr(d, m) {
    return `${Math.round(
      ((d + 1) / (m || 1)) * 100
    )}%`
  },
  
  getWindowHeight() {
    return Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    );
  },
  randomOne(arr) {
    return arr[Math.floor((Math.random() * arr.length))]
  }
 }
