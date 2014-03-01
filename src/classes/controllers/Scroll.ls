class ScrollController extends IS.Object
    (@scope) ~>
        @config-scope!
        @init-runtime!

    init-runtime: ~>
        $ \.flow .scroll ~> 
            _r = (it.target.scrollTop + 1) / (it.target.scrollHeight - window.innerHeight)
            _o = 1000 - window.innerHeight 
            if _o > 0 
                $ \.app .css \background-position : "right -#{parseInt _r * _o}px"
                $ ".app header" .css \top : - it.target.scrollTop * 2
                $ \.heatmap .css \top : - it.target.scrollTop
            else 
                $ \.app .css \background-position : "bottom right"
                $ ".app header" .css \top : 0
                $ \.heatmap .css \top : 0

        if annyang
            annyang.addCommands "show me more": ~> $ \.flow .scrollTop 500
            annyang.start!


    config-scope: ~>
        @safeApply = (fn) ~>
            phase = @scope.$parent.$$phase
            if phase is "$apply" or phase is "$digest"
                if fn and (typeof(fn) is 'function')
                    do fn
            else @scope.$apply(fn)
        @scope <<< @

angular.module AppInfo.displayname .controller "Scroll", ["$scope", ScrollController]
module.exports = ScrollController
