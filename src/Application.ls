class Application extends IS.Object
    (@getStylesFunc) ~>

        document.title = AppInfo.displayname

        @LifeCycle = new IS.Promise!
        @LifeCycle.then @checkDevMode .then @fixMobile .then @loadDepMan .then @getStyles .then @loadLibs .then @loadEssentials .then @bootStrapAngular .then @completeLoad

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

        DepMan.ext-script "//ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular.min.js"
        DepMan.ext-script "//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"
        DepMan.ext-script "http://preludels.com/prelude-browser-min.js", ~>
            window <<<< window.require "prelude-ls"
            @LifeCycle.resolve!


    bootStrapAngular: ~> 

        angular.module AppInfo.displayname, []

        DepMan.helper "Runtime"
        DepMan.helper "Translate"
        [window.Notifications, window.Toast] = DepMan.helper "Notification"

        @LifeCycle.resolve!

    completeLoad: ~>    
        document.body.innerHTML = DepMan.render "index"


module.exports = Application
