_dataSet = {"0,0": 0}

class HeatmapController extends IS.Object

    @extend IS.DefineProperty.extend

    (@scope) ~>
        window.HC = @
        @config-scope!
        @init-runtime!

    init-runtime: ~>

        $ \.heatmap .height ($ ".flow .container" .height!)
        $ \.heatmap .width ($ ".flow .container" .width!)

        @flow = $ \.flow
        @map = window.h337.create radius: 30, opacity: 100, element: ($ \.heatmap .0)

        @refresh!

        handler = ~>

            _add = (it, amnt = 1) ~>
                set = x: it.pageX, y: it.pageY
                set.x = window.innerWidth / 2 - set.x
                @log set
                for i = [1 to amnt]
                    @dataSet = "#{set.x + @flow.scrollLeft!},#{set.y + @flow.scrollTop!}"

            if it.touches? 
                for touch in it.touches 
                    _add touch, 5
            else _add it

            @refresh!

        resHandler = ~>
            if window.innerWidth < 1000 then $ \heatmap .width 1000
            else $ \.heatmap .width window.innerWidth
            @map.set "width", ($ \.heatmap .width!)
            @map.resize!

        resHandler!
        window.addEventListener "resize", resHandler
        window.addEventListener "mousemove", handler
        window.addEventListener "touchstart", handler
        if not Tester.ios then window.addEventListener "touchmove", handler
        window.addEventListener "touchend", handler

    refresh: ~> 
        set = @dataSet
        try 
            TOLERANCE = 3
            _set = set
            if set.length > TOLERANCE
                _set = []
                for i in [1 to TOLERANCE]
                    _set.push set[i]
            max = 0
            for item in _set
                max = max + item.count
            max = (max + 1)
        catch e
            max = 999999
        @map.store.set-data-set data: set, max: max

    @defineGetter "dataSet", -> 
        set = []
        for key, value of _dataSet
            [x, y] = key.split ","
            set.push {x: window.innerWidth / 2 - (parseInt x), y: (parseInt y), count: value}
        set.sort (a, b) ~> b.count - a.count

    @defineSetter "dataSet", (set) ->
        if _dataSet[set]? then _dataSet[set] += 1
        else _dataSet[set] = 1


    config-scope: ~>
        @safeApply = (fn) ~>
            phase = @scope.$parent.$$phase
            if phase is "$apply" or phase is "$digest"
                if fn and (typeof(fn) is 'function')
                    do fn
            else @scope.$apply(fn)
        @scope <<< @

angular.module AppInfo.displayname .controller "Heatmap", ["$scope", HeatmapController]
module.exports = HeatmapController
