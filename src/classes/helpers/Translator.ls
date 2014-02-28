class Translator extends window.IS.Object
    
    context: new (window.getWindow!audioContext)!
    recorder: null

    ~> @log "Translator Created"
    init: (callback) ~>
        window.getWindow!navigator.get-user-media audio: true, (stream) ~>

            source = @context.create-media-stream-source stream
            @recorder = new (window.getWindow!Recorder)(source, workerPath: "js/recorder/recorderWorker.js")

            @log @recorder

            callback?!

        , (err) ~>
            @log "An error has occurred!", err

    start: ~>
        if not @recorder? then return @echo "There is no recorder!"
        else @recorder.record!

    stop: ~>
        if not @recorder? then return @echo "There is no recorder!"
        else 
            @recorder.stop!
            @recorder.export-w-a-v (blob) ~>
                fr = new (window.getWindow!FileReader)
                fr.add-event-listener "loadend", ~>
                    bytes = new Uint8Array fr.result
                    res = ""
                    for b in bytes
                        res += String.from-char-code b
                    res = window.getWindow!btoa res
                    $.post "/translate", content: res, ~> @log arguments
                fr.read-as-array-buffer blob
            @recorder.clear!
                


module.exports = Translator