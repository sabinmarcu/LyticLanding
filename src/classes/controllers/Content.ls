class ContentController extends IS.Object
    (@scope) ~>
        @config-scope!
        @init-runtime!

    init-runtime: ~>

        if annyang
            annyang.addCommands "show me more": ~>
                @log "Recognized"
                $ \.flow .scrollTop 500
            annyang.start!


    config-scope: ~>
        @safeApply = (fn) ~>
            phase = @scope.$parent.$$phase
            if phase is "$apply" or phase is "$digest"
                if fn and (typeof(fn) is 'function')
                    do fn
            else @scope.$apply(fn)
        @scope <<< @

angular.module AppInfo.displayname .controller "Content", ["$scope", ContentController]
module.exports = ContentController
