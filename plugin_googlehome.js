//
const googlehome = require('google-home-notifier')
let language = 'ja'

const PluginGoogleHome = {
  '初期化': {
    type: 'func',
    josi: [],
    fn: function (sys) {
    }
  },
  // @GoogleHome
  'GoogleHome接続': { // @LAN内にある名前NAMEのGoogleHomeに接続する //@GOOGLEHOMEせつぞく
    type: 'func',
    josi: [['へ', 'に', 'の']],
    fn: function (name, sys) {
      if (name.match(/^[0-9.]+$/)) { // IPアドレスで接続
        googlehome.ip(name, language)
      } else {
        googlehome.device(name, language)
      }
    }
  },
  'GoogleHome言': { // @GoogleHomeにSと言わせる //@GOOGLEHOMEいう
    type: 'func',
    josi: [['と', 'を']],
    fn: function (s, sys) {
      googlehome.notify(s, (res) => {
        console.log(res)
      })
    }
  },
  'GoogleHome話': { // @GoogleHomeにSと言わせる //@GOOGLEHOMEはなす
    type: 'func',
    josi: [['と', 'を']],
    fn: function (s, sys) {
      sys.__exec('GoogleHome言', [s])
    }
  },
  'GoogleHome再生': { // @GoogleHomeでMP3を再生する //@GOOGLEHOMEさいせい
    type: 'func',
    josi: [['を', 'で']],
    fn: function (s, sys) {
      googlehome.play(s, (res) => {
        console.log(res)
      })
    }
  }
}

module.exports = PluginGoogleHome
