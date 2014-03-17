class Application extends IS.Object
    (@getStylesFunc) ~>
        document.title = AppInfo.displayname
        @LifeCycle = new IS.Promise!
        @LifeCycle.then @checkDevMode .then @fixMobile .then @loadDepMan .then @getStyles .then @loadLibs .then @loadEssentials .then @bootStrapAngular .then @renderPage .then @completeLoad
        window.Tester = new (require "classes/helpers/Tester")(~> @LifeCycle.resolve!)

    checkDevMode: ~> if (window.isDev?) then document.title = "Testing #{window.AppInfo.displayname}!"; @LifeCycle.resolve!
    loadDepMan: ~> window.DepMan = new (require "classes/helpers/DepMan"); @LifeCycle.resolve!
    fixMobile: ~>
        meta = document.createElement "meta"
        meta.setAttribute "name", "viewport"
        meta.setAttribute "content", "width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"
        document.head.appendChild meta
        meta = document.createElement "link"
        meta.setAttribute "rel", "apple-touch-icon"
        meta.setAttribute "href", "icon.ico"
        document.head.appendChild meta
        meta = document.createElement "meta"
        meta.setAttribute "name", "apple-mobile-web-app-capable"
        meta.setAttribute "content", "yes"
        document.head.appendChild meta
        meta = document.createElement \link
        meta.set-attribute \rel, \icon
        meta.set-attribute \href, \icon.ico
        document.head.appendChild meta
        @LifeCycle.resolve!
    loadEssentials: ~>
        window.Loading = new (DepMan.helper "Loading")
        window.DBStorage = new (DepMan.helper "Storage")(~> @LifeCycle.resolve!)

    getStyles: ~> document.head.append-child @getStylesFunc!; @LifeCycle.resolve!
    loadLibs: ~>
        DepMan.google-font "Roboto", [100 400]
        DepMan.ext-link "//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"
        window.jQuery = window.$ = DepMan.lib \jquery.min
        window <<< DepMan.lib \angular.min
        window <<< DepMan.lib \prelude-browser-min
        window <<< DepMan.lib \jwerty
        window <<< DepMan.lib \heatmap
        window <<< DepMan.lib \annyang
        window <<<< window.require "prelude-ls"
        @LifeCycle.resolve!

    renderPage: ~>
        document.body.innerHTML = DepMan.render "index"
        @LifeCycle.resolve!

    bootStrapAngular: ~>
        angular.module AppInfo.displayname, []
        DepMan.helper "DynamicContent"
        DepMan.helper "Runtime"
        DepMan.helper "Translate"
        DepMan.controller "Scroll"
        DepMan.controller "Signup"
        DepMan.controller "Heatmap"
        DepMan.controller "Navigation"
        DepMan.controller "Contact"
        DepMan.controller "Content"
        DepMan.controller "Language"
        [window.Notifications, window.Toast] = DepMan.helper "Notification"
        @LifeCycle.resolve!

    completeLoad: ~>

        DepMan.controller "Modal"
        angular.bootstrap document.body, [AppInfo.displayname]


module.exports = Application

