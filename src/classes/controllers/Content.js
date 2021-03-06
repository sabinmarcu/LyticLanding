// Generated by LiveScript 1.2.0
(function(){
  var ContentController;
  ContentController = (function(superclass){
    var prototype = extend$((import$(ContentController, superclass).displayName = 'ContentController', ContentController), superclass).prototype, constructor = ContentController;
    function ContentController(scope, runtime){
      var this$ = this instanceof ctor$ ? this : new ctor$;
      this$.scope = scope;
      this$.runtime = runtime;
      this$.configScope = bind$(this$, 'configScope', prototype);
      this$.disableVoice = bind$(this$, 'disableVoice', prototype);
      this$.initRuntime = bind$(this$, 'initRuntime', prototype);
      this$.initRuntime();
      this$.configScope();
      return this$;
    } function ctor$(){} ctor$.prototype = prototype;
    prototype.initRuntime = function(){
      var iter, this$ = this;
      this.runtime.init("fullscreen", false);
      if (annyang) {
        DBStorage.get("voiceDisabled", function(enabled){
          if (!enabled) {
            this$.scope.voiceCommand = true;
            annyang.addCommands({
              "show me more": this$.disableVoice
            });
            return annyang.start();
          }
        });
      }
      iter = 0;
      $('#rest > article .team').hover(function(){
        return $(this).addClass('hovered');
      }, function(){
        return $(this).removeClass('hovered');
      });
      return $('#rest > article#partners').each(function(index, el){
        var img, wrapper;
        el = $(el);
        img = el.find("img");
        wrapper = document.createElement("section");
        el[0].appendChild(wrapper);
        return img.each(function(index, img){
          var f, d;
          setTimeout(function(){
            this$.log(img.naturalWidth, img.naturalHeight, img.naturalWidth > img.naturalHeight);
            if (img.naturalWidth > img.naturalHeight) {
              return $(img).css("width", 240);
            } else {
              return $(img).css("height", 240);
            }
          }, 50);
          f = document.createElement("figure");
          d = document.createElement("div");
          d.appendChild($(img).parent()[0]);
          f.appendChild(d);
          wrapper.appendChild(f);
          return $('#rest > article#aboutus').each(function(index, el){
            var img, as;
            el = $(el);
            img = el.find("img");
            el.addClass("img");
            as = document.createElement("aside");
            el[0].appendChild(as);
            as.appendChild(img[0]);
            iter += 1;
            if (iter % 2 === 0) {
              return el.addClass("alt");
            }
          });
        });
      });
    };
    prototype.disableVoice = function(){
      this.log("Recognized");
      this.scope.voiceCommand = false;
      DBStorage.set("voiceDisabled", true);
      return this.safeApply();
    };
    prototype.configScope = function(){
      var this$ = this;
      this.safeApply = function(fn){
        var phase;
        phase = this$.scope.$parent.$$phase;
        if (phase === "$apply" || phase === "$digest") {
          if (fn && typeof fn === 'function') {
            return fn();
          }
        } else {
          return this$.scope.$apply(fn);
        }
      };
      return import$(this.scope, this);
    };
    return ContentController;
  }(IS.Object));
  angular.module(AppInfo.displayname).controller("Content", ["$scope", "Runtime", ContentController]);
  module.exports = ContentController;
  function bind$(obj, key, target){
    return function(){ return (target || obj)[key].apply(obj, arguments) };
  }
  function extend$(sub, sup){
    function fun(){} fun.prototype = (sub.superclass = sup).prototype;
    (sub.prototype = new fun).constructor = sub;
    if (typeof sup.extended == 'function') sup.extended(sub);
    return sub;
  }
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
