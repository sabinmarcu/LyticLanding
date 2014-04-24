_dataSet = '683,396':2,'305,348':1,'669,394':1,'669,387':1,'677,384':1,'697,413':1,'697,417':1,'697,420':1,'697,648':1,'690,687':1,'496,665':1,'314,604':1,'334,622':1,'373,672':1,'357,1010':1,'307,1010':1,'230,1017':1,'190,1352':1,'190,1347':1,'190,1348':1,'192,1414':1,'183,2113':1,'184,2111':1,'184,2112':1,'184,2115':1,'184,2116':1,'184,2117':1,'184,2142':1,'184,2386':1,'184,3347':1,'184,1597':1,'184,512':1,'183,505':1,'190,288':1,'263,63':1,'265,62':1,'276,72':1,'243,216':1,'208,195':1,'238,130':1,'344,106':1,'326,123':1,'254,140':1,'245,144':1,'280,95':1,'338,50':1,'330,62':1,'236,233':1,'236,235':1,'239,235':1,'149,170':1,'105,125':1,'102,133':1,'105,175':1,'120,177':1,'242,128':1,'346,105':1,'315,180':1,'320,178':1,'487,66':1,'513,278':1,'531,251':1,'553,30':1,'478,40':1,'411,220':1,'439,217':1,'531,188':1,'430,222':1,'222,373':1,'296,307':1,'387,213':1,'668,425':1,'314,353':1,'404,304':1,'280,307':1,'403,309':1,'430,203':1,'259,367':1,'292,371':1,'292,382':1,'278,651':1,'285,651':1,'352,531':1,'329,525':1,'277,510':1,'294,436':1,'296,512':1,'391,460':1,'352,442':1,'248,456':1,'294,460':1,'325,458':1,'284,463':1,'267,493':1,'283,484':1,'302,471':1,'297,481':1,'295,520':1,'360,474':1,'396,450':1,'383,497':1,'424,503':1,'587,460':1,'578,501':1,'595,477':1,'585,460':1,'494,481':1,'490,481':1,'549,496':1,'571,500':1,'565,500':1,'543,437':1,'550,443':1,'562,498':1,'568,414':1,'560,387':1,'509,459':1,'527,377':1,'522,368':1,'517,377':1,'525,310':1,'523,321':1,'523,316':1,'525,316':1,'538,327':1,'570,323':1,'514,343':1,'487,376':1,'502,376':1,'579,319':1,'595,311':1,'599,321':1,'726,252':1,'727,250':1,'762,194':1,'704,215':1,'528,244':1,'551,180':1,'553,179':1,'554,180':1,'1014,394':1,'640,0':0

class HeatmapController extends IS.Object

    @extend IS.DefineProperty.extend

    (@scope) ~>
        window.HC = @
        @init-runtime!
        @config-scope!

    init-runtime: ~>

        $ \.heatmap .height ($ ".flow .container" .height!)
        $ \.heatmap .width ($ ".flow .container" .width!)

        @flow = $ \.flow
        @map = window.h337.create radius: 30, opacity: 100, element: ($ \.heatmap .0) #, gradient: { 0.45: "rgb(150,150,255)", 0.55: "rgb(0,255,255)", 0.65: "rgb(0,255,0)", 0.95: "yellow", 1.0: "rgb(255,0,0)"}

        @refresh!

        handler = ~>

            _add = (it, amnt = 1) ~>
                if ( it.pageX? and it.pageY? ) or ( it.screenPosition? )
                    if it.pageX? and it.pageY? then set = x: it.pageX, y: it.pageY
                    else set = x: it.screenPosition![0], y: it.screenPosition![1];
                    set.x = window.innerWidth / 2 - set.x
                    for i = [1 to amnt]
                        @dataSet = "#{set.x + @flow.scrollLeft!},#{set.y + @flow.scrollTop!}"
                        @map.store.add-data-point ( window.innerWidth / 2 - set.x ) + @flow.scrollLeft!, set.y + @flow.scrollTop!

            if it.touches?
                for touch in it.touches
                    _add touch, 5
            else if it.hands? and it.hands.length
                for hand in it.hands
                    _add hand
            else _add it

        resHandler = ~>
            if window.innerWidth < 1200 then $ \.heatmap .width 1200
            else $ \.heatmap .width window.innerWidth
            @map.set "width", ($ \.heatmap .width!)
            @map.resize!
            @refresh!

        window.addEventListener "resize", resHandler
        window.addEventListener "mousemove", handler
        window.addEventListener "touchstart", handler
        if not Tester.ios then window.addEventListener "touchmove", handler
        window.addEventListener "touchend", handler

        @leap = new Leap.Controller!
        @leap.use \screenPosition, verticalOffset: 500
        @leap.on \connected, ~> @log "Leap Online"
        @leap.on \deviceConnected, ~> @log "Leap Connected"
        @leap.on \deviceDisconnected, ~> @log "Leap Disconnected"
        @leap.on \frame, handler
        @leap.connect!
        @log "Leap Created"

        resHandler!

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
        set = set.sort (a, b) ~> b.count - a.count
        set |> map ~> it.toString = -> "'#{@x},#{y}':#{@count}"
        set

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
