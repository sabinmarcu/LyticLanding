require "isf" # We're gonna need the ISF framework to help with ErrorReporting (for now)

info = require ( require "path" ).resolve "#{__dirname}/../package.json"
mc = new (require "mailchimp-api").Mailchimp "2c7f80a167418320ed90825042873b02-us3"

# Defining the Server Bootstrap class (the actual work is done by Express)
class Server

    # On construction we need an address and a port to start the server on
    # @param data Object An Object containing the address and port (both strings)
    # @return Server The server instance
    constructor: (data, @watch = false) ->

        for item, values of data
            if values.length <= 1 then data[item] = values[0]

        # Testing to check for the right value
        return throw ServerErrorReporter.generate 1 if not data.address?
        return throw ServerErrorReporter.generate 2 if not data.port?
        return throw ServerErrorReporter.generate 3 if not data.address.substr?
        return throw ServerErrorReporter.generate 4 if not data.port.substr?

        # Going forward with the construction
        @address = data.address
        @port = data.port

    # Connect a compiler or other objects (if some other dev enables it)
    # @param CompilerObject Compiler The compiler object to be attached to the static server.
    # @return Server The current server instance
    connect: (CompilerObject) ->

        # Checking for the right object
        return throw ServerErrorReporter.generate 5 if not CompilerObject?
        return throw ServerErrorReporter.generate 6 if not CompilerObject.compile?

        # Moving forward
        @compiler = CompilerObject
        @

    # Start the server on the address and port specified when constructing it
    # @return Server The current server instance
    start: ->

        # Grabbing Express and checking if it is there
        Express = require "express"
        return throw ServerErrorReporter.generate 7 if not Express?

        try # Attempt to configure the server and return an error
            App = do Express
            Server = require("http").createServer App
            App.configure =>
                App.use Express.bodyParser()
                App.use App.router
                if @compiler?
                    App.get "/js/#{info.name}.js", (req, res) => @compiler.compile null, (err, source) ->
                        if err then console.log "ERROR : #{err}"
                        else res.send source, {"Content-Type": "application/javascript"}, 201
                App.post "/subscribe", (req, res) =>
                    if req.body.email is "" or not /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test req.body.email
                        res.send "ERROR"
                    else mc.lists.subscribe id: "91af16d98f", double_optin: false, email: {email: req.body.email}, (data) ->
                            if data is null then res.send "ERROR"
                            else res.send "SUCCESS"
                        , (err) -> res.send "ERROR - #{err.error}" 
                App.get "*", (req, res) =>
                    console.log "Requested", (require "path").resolve "#{__dirname}/../public#{req.url}"
                    (require "fs").exists ((require "path").resolve "#{__dirname}/../public#{req.url}"), (exists) ->
                        if exists and req.url isnt "/" then res.sendfile ((require "path").resolve "#{__dirname}/../public#{req.url}")
                        else 
                            content = (require "fs").readFileSync (require "path").resolve("#{__dirname}/../public/_index.html"), "utf-8"
                            content = content.replace /\<\<appname\>\>/, info.name
                            (require "fs").writeFileSync (require "path").resolve("#{__dirname}/../public/index.html"), content
                            res.send content, {"Content-Type": "text/html"}, 201
            # And if watch is enabled ...
            if @watch
                livereload = require "livereload"
                server = livereload.createServer exts: ["styl", "coffee", "json"]
                server.watch "#{__dirname}/../src"
        catch e then console.log "ERROR: #{e}"
        # Finally launch the server
        try
            Server.listen @port, @address
            console.log "Started the static server on address : #{@address}, and port : #{@port}"
            console.log "Instant compiling is enabled." if @compiler?
        catch e
            console.log "Error: #{e}"
        @

# Defining the ErrorReporting for the Server class
class ServerErrorReporter extends IS.Object

    # Defining the error messages, assigning them to groups and naming them.
    @errors = 
        "ConstructorError": [
            "There is no address supplied"
            "There is no port supplied"
            "The address is not a string"
            "The port is not a string"
        ]
        "CompileConnectionError": [
            "There was no object supplied"
            "The object supplied was not compatible"
        ]
        "InternalError": [
            "Express module was not installed"
            "Error at configuring the server"
            "Error at starting the server"
            "Error at starting the data transfer server"
        ]

    # Making sure it behaves as it should
    @extend IS.ErrorReporter


# Exporting the server
module.exports = Server


