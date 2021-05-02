const mix = require("laravel-mix")
mix.sass("src/scss/style.scss","public/css/style.css")
    .js("src/js/script.js","public/js/script.js")
    .options({
        processCssUrls: false
    })

