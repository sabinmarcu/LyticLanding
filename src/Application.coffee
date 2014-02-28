class Application extends window.IS.Object
    constructor: ->

    window.jQuery = (require "classes/lib/jquery-2.1.0.min")(window)
    window.Tester = new (require "classes/helpers/Tester") (=> 
        if (window.isDev?) then document.title = "Testing #{window.AppInfo.displayname} Library!"
    )


module.exports = Application
