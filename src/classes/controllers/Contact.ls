class ContactController extends IS.Object
    (@scope, @runtime) ~>
        @log "Contact"
        @init-runtime!config-scope!

    init-runtime: ~>
        @runtime.init "contact-form-open", false
        @error = type: "hidden", message: "No Errors"
        @mail = name: "", mail: "", content: ""
        @

    config-scope: ~>
        @safeApply = (fn) ~>
            phase = @scope.$parent.$$phase
            if phase is "$apply" or phase is "$digest"
                if fn and (typeof(fn) is 'function')
                    do fn
            else @scope.$apply(fn)
        @scope <<< @
        @

    send-mail: ~>
        $.post "/contact", @mail, (res) ~>
            if /ERROR/.test res
                Toast "Error", "Holy Crap!"
            else Toast "Success", "E-Mail Sent!"

angular.module AppInfo.displayname .controller "Contact", ["$scope", "Runtime", ContactController]
module.exports = ContactController
