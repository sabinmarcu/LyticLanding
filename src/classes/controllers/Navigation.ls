class NavigationController extends IS.Object
    (@scope, @runtime) ~>
        @init-runtime!config-scope!

    init-runtime: ~>
        @runtime.init "contact-form-open", false
        @error = type: "hidden", message: "No Errors"
        @mail = name: "", mail: "", content: ""
        @

    config-scope: ~>
        @safeApply = (fn) ~>
            phase = @scope.$parent.$$phase
            if phase is "$apply" or phase is "$digest"
                if fn and (typeof(fn) is 'function')
                    do fn
            else @scope.$apply(fn)
        @scope <<< @
        @

angular.module AppInfo.displayname .controller "Navigation", ["$scope", "Runtime", NavigationController]
module.exports = NavigationController
