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

        #el = document.createElement "script"
        #el.src = "#{document.location.protocol}//platform.twitter.com/widjets.js"
        #el.id = "twitter-wjs"
        #document.head.appendChild el

        # Dealing with images
        iter = 0
        $ '#rest > article .team' .hover (-> $ @ .add-class 'hovered'), (-> $ @ .remove-class 'hovered')

        el = $ '#rest > article#partners'
        img = el.find "img"
        wrapper = document.create-element "section"
        el.0.append-child wrapper

        img.each (index, img) ~> 
            setTimeout( ~>
                @log img.natural-width, img.natural-height, img.natural-width > img.natural-height
                if img.natural-width > img.natural-height then ($ img).css "width", 240
                else ($ img).css "height", 240
            , 50)
            f = document.create-element "figure"
            d = document.create-element "div"
            d.append-child ($ img).parent!.0
            f.append-child d
            wrapper.append-child f

        el = $ '#rest > article#aboutus'
        img = el.find "img"
        el.add-class "img"
        as = document.create-element "aside"
        el.0.append-child as
        as.appendChild img.0
        iter += 1
        if iter % 2 is 0 then el.add-class "alt"


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
