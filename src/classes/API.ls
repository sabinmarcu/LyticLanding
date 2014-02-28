_local = translator: null

class API

    ~> 

        _local.translator = new (require "classes/helpers/Translator")

        if window.isDev? 
            window.Translator = _local.translator
            window.exposeToWindow "Translator"

        window.IS.Object.log "API Initialized"

    start: ~>
        if not _local.translator? then window.IS.Object.log "There is no translator!"
        else
            if not _local.translator.recorder? then _local.translator.init _local.translator.start
            else _local.translator.start!
    stop: ~>
        if not _local.translator? then window.IS.Object.log "There is no translator!"
        else _local.translator.stop!

module.exports = window.GTranslate = new API
window.exposeToWindow "GTranslate"
