// uri parse
import URI from 'urijs'
// user agent
import device from 'current-device'

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
