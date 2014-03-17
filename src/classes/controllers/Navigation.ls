class NavigationController extends IS.Object
    (@scope, @runtime) ~>
        @init-runtime!
        @config-scope!

    init-runtime: ~>
        @runtime.init "contact-form-open", false
        @runtime.subscribe \prop-contact-form-open-change, ~>
            switch @runtime.props[\contact-form-open] 
            case true
                Modal.show title: "Contact Form", content: DepMan.render ["partials", "contactform"]
            default @log "closed"

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
