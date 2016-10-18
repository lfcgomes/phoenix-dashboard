exports.config = {
    // See http://brunch.io/#documentation for docs.
    files: {
        javascripts: {
            joinTo: 'js/app.js',

            // To use a separate vendor.js bundle, specify two files path
            // http://brunch.io/docs/config#-files-
            // joinTo: {
            //   "js/app.js": /^(web\/static\/js)/,
            //   "js/vendor.js": /^(web\/static\/vendor\/js)/
            // }
            //
            // To change the order of concatenation of files, explicitly mention here
            order: {
                // joinTo: {
                //     "js/app.js": /^(web\/static\/js)/
                //     // "js/vendor.js": /^(web\/static\/vendor\/js)/
                // },
                before: [
                    'web/static/vendor/js/jquery.min.js',
                    'web/static/vendor/js/bootstrap.min.js',
                    'web/static/vendor/js/Chart.min.js',
                    'web/static/vendor/js/fastclick.js',
                    'web/static/vendor/js/nprogress.js',
                    'web/static/vendor/js/gauge.min.js',
                    'web/static/vendor/js/bootstrap-progressbar.min.js',
                    'web/static/vendor/js/icheck.min.js',
                    'web/static/vendor/js/skycons.js',
                    'web/static/vendor/js/jquery.flot.js',
                    'web/static/vendor/js/jquery.flot.pie.js',
                    'web/static/vendor/js/jquery.flot.time.js',
                    'web/static/vendor/js/jquery.flot.stack.js',
                    'web/static/vendor/js/jquery.flot.resize.js',
                    'web/static/vendor/js/jquery.flot.orderBars.js',
                    'web/static/vendor/js/date.js',
                    'web/static/vendor/js/jquery.flot.spline.js',
                    'web/static/vendor/js/curvedLines.js',
                    'web/static/vendor/js/jquery-jvectormap-2.0.3.min.js',
                    'web/static/vendor/js/moment.min.js',
                    'web/static/vendor/js/daterangepicker.js',
                    'web/static/vendor/js/custom.min.js',
                    'web/static/vendor/js/jquery-jvectormap-us-aea-en.js',
                    'web/static/vendor/js/jquery-jvectormap-world-mill-en.js',
                    'web/static/vendor/js/gdp-data.js'
                ]
            }
        },
        stylesheets: {
            // joinTo: "css/app.css",
            joinTo: {
                "css/app.css": /^(web\/static\/css)/,
                "css/vendor.css": /^(web\/static\/vendor\/css)/
            }
            // order: {
            //   after: ["web/static/css/app.css"] // concat app.css last
            // }
        },
        templates: {
            joinTo: "js/app.js"
        }
    },

    conventions: {
        // This option sets where we should place non-css and non-js assets in.
        // By default, we set this to "/web/static/assets". Files in this directory
        // will be copied to `paths.public`, which is "priv/static" by default.
        assets: /^(web\/static\/assets)/
    },

    // Phoenix paths configuration
    paths: {
        // Dependencies and current project directories to watch
        watched: [
            "web/static",
            "test/static"
        ],

        // Where to compile files to
        public: "priv/static"
    },

    // Configure your plugins
    plugins: {
        babel: {
            // Do not use ES6 compiler in vendor code
            ignore: [/web\/static\/vendor\/js/]
        }
    },

    modules: {
        autoRequire: {
            "js/app.js": ["web/static/js/app"]
        }
    },

    npm: {
        enabled: true
    }
};
