class ScrollController extends IS.Object
    (@scope, @runtime) ~>
        @log @runtime
        @init-runtime!config-scope!

    init-runtime: ~>
        window.addEventListener "resize", @headerResize
        window.addEventListener "orientationchange", @headerResize
        @runtime.init "contact-form-open", false
        $ ".app header nav" .css "top", ($ ".app header h1" .height!)
        $ \.flow .scroll ~> 
            _r = (it.target.scrollTop + 1) / (it.target.scrollHeight - window.innerHeight)
            _o = 1000 - window.innerHeight 
            $ ".app header" .css \top : 0
            if _o > 0 
                $ \.app .css \background-position : "right -#{parseInt _r * _o}px"
                if window.innerWidth < 1200 then $ ".app header" .css \top : - it.target.scrollTop * 2
                $ \.heatmap .css \top : - it.target.scrollTop
            else 
                $ \.app .css \background-position : "bottom right"
                $ \.heatmap .css \top : 0
        @

    headerResize: ~>
        el = $ ".app header h1"
        flow = $ \.flow.prime
        if window.innerWidth >= 1200
            el.css "font-size", ((el.width! / (7 * 1.5)) * 3)
            flow.css "padding-left", window.innerWidth - 900
        else 
            el.css "font-size", ""
            flow.css "padding-left", ""
        $ ".app header nav" .css "top", el.height!

    config-scope: ~>
        @safeApply = (fn) ~>
            phase = @scope.$parent.$$phase
            if phase is "$apply" or phase is "$digest"
                if fn and (typeof(fn) is 'function')
                    do fn
            else @scope.$apply(fn)
        @scope <<< @
        @

angular.module AppInfo.displayname .controller "Scroll", ["$scope", "Runtime", ScrollController]
module.exports = ScrollController
