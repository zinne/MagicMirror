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

        {
            module: 'currentweather',
            position: 'top_left',
            config: {
                location: 'Konstanz,Germany',
                appid: '097e3865c82a1bc8856be39eca1c8943'
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
                showPublishDate: false,
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
                showPublishDate: false,
                updateInterval: 10 * 1000,
            }
        },

    ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {
    module.exports = config;
}
