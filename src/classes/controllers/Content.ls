class ContentController extends IS.Object
    (@scope, @runtime) ~>
        @init-runtime!
        @config-scope!

    init-runtime: ~>
        @runtime.init "fullscreen", false
        if annyang
            (enabled) <~ DBStorage.get "voiceDisabled"
            unless enabled
                @scope.voiceCommand = true
                annyang.addCommands "show me more": @disableVoice
                annyang.start!

    disableVoice:  ~>
        @log "Recognized"
        @scope.voiceCommand = false
        DBStorage.set "voiceDisabled", true
        @safeApply!


    config-scope: ~>
        @safeApply = (fn) ~>
            phase = @scope.$parent.$$phase
            if phase is "$apply" or phase is "$digest"
                if fn and (typeof(fn) is 'function')
                    do fn
            else @scope.$apply(fn)
        @scope <<< @

angular.module AppInfo.displayname .controller "Content", ["$scope", "Runtime", ContentController]
module.exports = ContentController
