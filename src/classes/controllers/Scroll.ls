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
            if window.innerWidth >= 1200 then $ ".app header" .css \top : 25
            else $ ".app header" .css \top : 0
            if _o > 0
                $ \.app .css \background-position : "right -#{parseInt _r * _o}px"
                if window.innerWidth < 1200 then $ ".app header" .css \top : - it.target.scrollTop * 2
                $ \.heatmap .css \top : - it.target.scrollTop
            else
                $ \.app .css \background-position : "bottom right"
                $ \.heatmap .css \top : 0
        setTimeout @headerResize, 500
        @

    headerResize: ~>
        header = $ ".app header"
        el = $ ".app header h1"
        flow = $ \.flow.prime
        nav = $ ".app header nav"
        img = $ ".app header h1 img"
        if window.innerWidth >= 1200
            for i in [0 to 5]
                header.height el.height! + nav.height!
                header.css "right": 925, "top": 25
                el.css "font-size", ((el.width! / (7 * 1.5)) * 3)
                flow.css "padding-left": window.innerWidth - 875, "padding-right": 30
        else
            el.css "font-size", ""
            flow.css "padding-left": "", "padding-right": ""
            header.height ""
            header.css "right": "", "top": 0
        img.height el.height!
        img.width el.height!
        nav.css "top", el.height!

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
