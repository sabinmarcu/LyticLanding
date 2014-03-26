class LanguageController extends IS.Object
    (@scope, @runtime) ~>
        @init-runtime!
        @config-scope!

    init-runtime: ~>
        @languages = "ro": "ro-RO", "gb": "en-US"
        @runtime.set "fullscreen", false

    changeLanguage: (lang) ~> Runtime.set \language, lang
    getImage: (code) ~> DepMan.image code .toString!

    config-scope: ~>
        @safeApply = (fn) ~>
            phase = @scope.$parent.$$phase
            if phase is "$apply" or phase is "$digest"
                if fn and (typeof(fn) is 'function')
                    do fn
            else @scope.$apply(fn)
        @scope <<< @

angular.module AppInfo.displayname .controller "Language", ["$scope", "Runtime", LanguageController]
module.exports = LanguageController
