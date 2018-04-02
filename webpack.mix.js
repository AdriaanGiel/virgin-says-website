let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */



mix.js('resources/js/main.js', 'public/js')
    .stylus('resources/stylus/app.styl', 'public/css')
    .options({
        postCss:[
            tailwindcss('./tailwind.js')
        ]
    })
    .copy('resources/device-mockups','public/device-mockups')
    .copy('resources/images','public/images')
    .version()
    .setPublicPath('public')
    .options({
        processCssUrls: false
    });

