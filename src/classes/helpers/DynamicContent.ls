angular.module AppInfo.displayname .directive "dynamic", ["$compile", "$sce", (compile, sce) ~>
    {
        replace: true
        link: (scope, ele, attrs) ->
            scope.$watch attrs.dynamic, (html) ->
                if not html then return
                ele.html (if typeof ( html ) is "string" then html else html.data)
                compile(ele.contents())(scope)
    }
]
