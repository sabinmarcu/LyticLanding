# Including some base necessities and creating the compilation package (anonymously)
require "isf"
stitch   = require "stitchw"
stylus   = require "stylus"
nib      = require "nib"
path     = require 'path'
fs       = require "fs"
base     = path.resolve "@{__dirname}/../src/data/stylesheets"
json     = require path.resolve "@{__dirname}/../package.json"
pack     = stitch.createPackage
    "dependencies": ["./node_modules/isf/lib/isf.min.js"]
    "paths": ["./src"]


# The Compiler Bootstrap
class Compiler

    @echo: (args...) ->
        _d = new Date
        owner = "<not supported>"
        if @__proto__? then owner = @__proto__.constructor.name
        args[0] = "[#{do _d.getHours}:#{do _d.getMinutes}:#{do _d.getSeconds}][#{@name or owner}] #{args[0]}"
        console.log args
        @

    @log: (args...) ->
        args.unshift ""
        @echo.apply @, args

    @talk: (args...) -> if @options["verbose"] then @log.apply @, args

    @sources: []
    @options: {}

    @throw: (error, callback = null) ->
        if callback then callback error
        else throw error

    # Compile the application to its designated location.
    @compile: (to = "./public/js/#{json.name}.js", callback = null) ->
        try
            pack.compile (err, source) =>
                if err then return @throw ( CompilerErrorReporter.generate 2, CompilerErrorReporter.wrapCustomError err ), callback
                critem = """
                    #{require path.resolve "#{__dirname}/data/copyright"}
                """
                @sources.push """
                    window.AppInfo = #{fs.readFileSync path.resolve "@{__dirname}/../package.json"};
                """
                @sources.push """
                    /** COPYRIGHT
                    #{critem}

                    #{( require path.resolve "#{__dirname}/data/appinfo" )(json, new Date())}
                    **/
                """
                source += src for src in @sources when src.substr?
                source += do src for src in @sources when src.apply?
                @sources.length -= 1
                added = false
                @compileStyles(null, (error, styles) =>
                    if error then return @throw error, callback
                    source = """
						(function(){
                            var getStylesheets = function() { element = document.createElement('style'); element.innerHTML = \"#{styles.replace(/\"/g, "'").replace(/\n/g, "\\n")}\"; element.id = \"compiled_styles\"; return element; };
                            #{if @options.verbose then "window.isDev = true; "}

							#{source}

							window.addEventListener('load', function(){ 
								new ( require("Application") )(getStylesheets); 
							});
						})();
                    """
                    @talk "Compiled styles, now joining"
                    try
                        (require "fs").writeFileSync to.toString(), source, "utf8"
                        console.log "Wrote sources to file"
                    catch e then return @throw ( CompilerErrorReporter.generate 3, CompilerErrorReporter.wrapCustomError e ), callback
                    if callback? then callback null, source
                    @talk "SENT"
                , true)
        catch e then return @throw e, callback

    @addSource: (source) -> @sources.push source

    @compileStyles: (to = "./public/css/styles.css", callback = null, override = false) ->
        @talk "Starting to compile styles"
        sty = (require "fs").readFileSync "#{base}/index.styl", "utf8"
        paths = [
             "#{base}"
        ]
        @talk "Got the data for the styles"
        stylus(sty).set("filename", "#{base}/index.styl").set("paths", paths).use(do nib).import("nib").render (err, css) =>
            @talk "Compiled the styles"
            if err then return @throw ( CompilerErrorReporter.generate 4, CompilerErrorReporter.wrapCustomError err ), callback
            else if callback? then callback null, css

    @setAttribute: (attr, value) -> @options[attr] = value

# Defining the Compiler Error Reporter
class CompilerErrorReporter extends IS.Object

    # Setting the error parameters
    @errors:
        "CompilationError": [
            "An error occured when compiling the application"
            "The compiler failed"
            "The styles failed"
            "An error occured when compiling the stylesheets"
        ]
        "WriteError" : [
            "Couldn't write the application to the file"
            "Couldn't write the styles to the file"
        ]


    # Making sure it behaves properly
    @extend IS.ErrorReporter

# Exporting the Compiler
module.exports = Compiler
