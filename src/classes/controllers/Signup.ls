class SignupController extends IS.Object
    (@scope) ~>
        @config-scope!init-runtime!

    init-runtime: ~>
        @scope.isHidden = false
        DBStorage.get "signedup", (data) ~>
            if data? then @scope.isHidden = true
            @scope.safeApply!
            $ \.flow.prime .add-class \signedup
        $ \#mail .change ~> @signup ($ \#mail .val!)

    signup: (email) ~>
        @log email
        $.post "/subscribe", email: email, (res) ~>
            if /ERROR/.test res 
                body = "We really don't know what happened ..."
                @log res
                if (res.indexOf "ERROR -") >= 0 then body = res.substr 8
                Toast "Error", body
            else 
                Toast "Success!", "You have been signed up for the betas."
                @scope.isHidden = true
                DBStorage.set "signedup", true
                @scope.safeApply!

    config-scope: ~>
        @safeApply = (fn) ~>
            phase = @scope.$parent.$$phase
            if phase is "$apply" or phase is "$digest"
                if fn and (typeof(fn) is 'function')
                    do fn
            else @scope.$apply(fn)
        @scope <<< @

angular.module AppInfo.displayname .controller "Signup", ["$scope", SignupController]
module.exports = SignupController
