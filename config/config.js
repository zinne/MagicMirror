/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
  port: 8080,
  ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

  language: 'de',
  timeFormat: 24,
  units: 'metric',

  modules: [

    {
      module: 'clock',
      position: 'top_left',
      config: {
        displaySeconds: false,
      },
    },
    // {
    //   module: "MMM-EyeCandy",
    //   position: "top_right",
    //   config: {

    //     ownImagePath: 'http://78.media.tumblr.com/tumblr_m8ejztnqJi1qzt4vjo1_500.gif',      // ex: 'modules/MMM-EyeCandy/pix/YOUR_PICTURE_NAME.jpg', or internet url to image
    //   }
    // },
    
    {
      module: 'currentweather',
      position: 'top_left',
      config: {
        location: 'Konstanz,Germany',
        appid: '097e3865c82a1bc8856be39eca1c8943'
      }
    },
    {
      module: 'calendar',
      position: 'top_left',   // This can be any of the regions. Best results in left or right regions.
      config: {
        fade: false,
        maximumNumberOfDays: 2,
        calendars: [
          {

            url: 'https://calendar.google.com/calendar/ical/thomas.zinnbauer%40ymc.ch/private-ff5b71ee330f383fca4711a7eb9bbc39/basic.ics',
            symbol: 'calendar',

          },
          {
            url: 'webcal://p06-calendarws.icloud.com/ca/subscribe/1/lo0-rwp78amyuiuOamMktlu4aNngALiCuyvJhShE97QHwSIGc7ytL58Z7keTIWTi-mDDzSyDL_1JjtVlYmaVdVg9k62n8BGDAsUiFyGNuO8',
            symbol: 'calendar'
          },
        ],
      }
    },
    {
      module: 'newsfeed',
      position: 'top_left',
      config: {
        feeds: [
          {
            title: "Spiegel Online",
            url: "http://www.spiegel.de/schlagzeilen/tops/index.rss",
          },

        ],
        showDescription: false,
        showSourceTitle: true,
        showPublishDate: true,
        updateInterval: 10 * 1000,
      }
    },

    {
      module: 'newsfeed',
      position: 'top_left',
      config: {
        feeds: [
          {
            title: "MacTech News",
            url: "http://www.mactechnews.de/Rss/News.x",
          },
        ],
        showDescription: false,
        showSourceTitle: true,
        showPublishDate: true,
        updateInterval: 10 * 1000,
      }
    },

  ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {
  module.exports = config;
}
