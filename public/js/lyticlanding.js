(function(){
                            var getStylesheets = function() { element = document.createElement('style'); element.innerHTML = "body,\nhtml {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  background: #181810;\n}\nbody {\n  background: #fff;\n  font-size: 10pt;\n  overflow: hidden;\n  overflow-y: auto;\n  font-family: Roboto, Arial, Helvetica, sans-serif;\n}\nbody header {\n  display: block;\n  border-top: solid 5px #639;\n}\nbody header h1 {\n  display: block;\n  padding: 0;\n  margin: 0;\n}\nbody {\n  padding-bottom: 150px;\n}\nbody aside {\n  display: block;\n  position: fixed;\n  width: 75%;\n  height: 100px;\n  max-width: 750px;\n  min-width: 200px;\n  left: 0;\n  bottom: 0;\n  margin-bottom: 50px;\n}\nbody aside h1 {\n  display: block;\n  height: 55px;\n  background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%, #fff 100%);\n  background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, #fff 100%);\n  background: -o-linear-gradient(top, rgba(255,255,255,0) 0%, #fff 100%);\n  background: -ms-linear-gradient(top, rgba(255,255,255,0) 0%, #fff 100%);\n  background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 100%);\n  padding: 0;\n  margin: 0;\n  text-indent: 15px;\n  line-height: 55px;\n  font-weight: 100;\n  font-size: 28pt;\n}\nbody aside section {\n  background: #639;\n  height: 45px;\n  border: solid 1px rgba(0,0,0,0.1);\n  display: block;\n  position: relative;\n}\nbody aside section div {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\nbody aside section div.input {\n  right: 70px;\n}\nbody aside section div.submit {\n  left: auto;\n  width: 70px;\n}\nbody aside section input {\n  background: transparent;\n  border: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  text-align: left;\n  line-height: 45px;\n  outline: none;\n  text-indent: 15px;\n  color: #fff;\n  text-shadow: 0 1px 1px rgba(0,0,0,0.1);\n  font-size: 14pt;\n  font-family: Roboto, inherit;\n  font-weight: 100;\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n}\nbody aside section input:hover,\nbody aside section input:active {\n  background: #592d86;\n}\nbody aside section input[type=submit] {\n  font-size: 12pt;\n  text-indent: 0;\n  text-align: center;\n  background: #4c2673;\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  -webkit-appearance: none;\n  -webkit-border-radius: 0;\n  border-radius: 0;\n}\nbody aside section input[type=submit]:hover,\nbody aside section input[type=submit]:active {\n  background: #261339;\n}\n@media (max-width: 1000px) {\n  body aside {\n    margin-bottom: 0;\n    width: auto;\n    min-width: auto;\n    max-width: auto;\n    right: 0;\n    height: 45px;\n  }\n  body aside h1 {\n    display: none;\n  }\n}\nbody *::-webkit-input-placeholder {\n  color: #fff;\n  opacity: 0.5;\n  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)';\n  filter: alpha(opacity=50);\n  font-family: Roboto, inherit;\n  font-weight: 100;\n}\nbody *:-moz-placeholder {\n  color: #fff;\n  opacity: 0.5;\n  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)';\n  filter: alpha(opacity=50);\n  font-family: Roboto, inherit;\n  font-weight: 100;\n}\nbody *::-moz-placeholder {\n  color: #fff;\n  opacity: 0.5;\n  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)';\n  filter: alpha(opacity=50);\n  font-family: Roboto, inherit;\n  font-weight: 100;\n}\nbody *:-ms-input-placeholder {\n  color: #fff;\n  opacity: 0.5;\n  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)';\n  filter: alpha(opacity=50);\n  font-family: Roboto, inherit;\n  font-weight: 100;\n}\nbody #loadingscreen {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  opacity: 0;\n  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';\n  filter: alpha(opacity=0);\n  z-index: -1;\n  -webkit-transition: all 1s ease-in-out;\n  -moz-transition: all 1s ease-in-out;\n  -o-transition: all 1s ease-in-out;\n  -ms-transition: all 1s ease-in-out;\n  transition: all 1s ease-in-out;\n  overflow: hidden;\n}\nbody #loadingscreen * {\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n}\nbody #loadingscreen > section {\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0.8;\n  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=80)';\n  filter: alpha(opacity=80);\n  trnasition: all 1s ease-in-out;\n}\nbody #loadingscreen > aside {\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  position: absolute;\n  left: -200%;\n  right: 200%;\n  top: 0;\n  bottom: 0;\n  background: #fff;\n  -webkit-box-shadow: 0 0 5px rgba(0,0,0,0.2);\n  box-shadow: 0 0 5px rgba(0,0,0,0.2);\n  -webkit-transform-origin: right center;\n  -moz-transform-origin: right center;\n  -o-transform-origin: right center;\n  -ms-transform-origin: right center;\n  transform-origin: right center;\n  width: 100%;\n  height: 100%;\n}\nbody #loadingscreen > aside:last-of-type {\n  -webkit-transform-origin: left center;\n  -moz-transform-origin: left center;\n  -o-transform-origin: left center;\n  -ms-transform-origin: left center;\n  transform-origin: left center;\n  border: solid 1px rgba(0,0,0,0.05);\n  left: 200%;\n  right: -200%;\n}\nbody #loadingscreen.active > aside {\n  left: 0;\n  right: 0;\n}\nbody #loadingscreen > article {\n  height: 200px;\n  width: 350px;\n  background: #fff;\n  -webkit-border-radius: 4px;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 5px 5px rgba(0,0,0,0.2);\n  box-shadow: 0 5px 5px rgba(0,0,0,0.2);\n  border: solid 1px rgba(0,0,0,0.2);\n  opacity: 0;\n  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';\n  filter: alpha(opacity=0);\n  position: absolute;\n  z-index: 9;\n  left: 50%;\n  top: 50%;\n  margin: -100px 0 0 -175px;\n  text-align: center;\n  -webkit-transform: scale(10);\n  -moz-transform: scale(10);\n  -o-transform: scale(10);\n  -ms-transform: scale(10);\n  transform: scale(10);\n  font-family: Roboto;\n  font-size: 18pt;\n  font-weight: 100;\n  text-align: center;\n  line-height: 200px;\n  vertical-align: middle;\n}\nbody #loadingscreen > article > span,\nbody #loadingscreen > article p,\nbody #loadingscreen > article div {\n  display: inline-block;\n  vertical-align: middle;\n}\nbody #loadingscreen > article > span {\n  width: 30px;\n  height: 30px;\n  -webkit-border-radius: 100%;\n  border-radius: 100%;\n  border: solid 1px rgba(0,0,0,0.3);\n  margin-top: -6px;\n}\nbody #loadingscreen > article div {\n  width: 0;\n  overflow: hidden;\n}\nbody #loadingscreen > article div p {\n  float: left;\n}\nbody #loadingscreen > article div:last-of-type p {\n  float: right;\n}\nbody #loadingscreen > article > p {\n  line-height: 1em;\n  position: absolute;\n  left: 10%;\n  right: 10%;\n  top: 65%;\n  height: 50px;\n  font-size: 14pt;\n  overflow: hidden;\n}\nbody #loadingscreen > article:hover > span {\n  border-color: rgba(0,0,0,0.8);\n}\nbody #loadingscreen > article:hover div {\n  width: 80px;\n  margin: 0;\n  padding: 0;\n  margin-left: 11px;\n}\nbody #loadingscreen > article:hover div:last-of-type {\n  width: 11px;\n  margin: 0;\n  margin-right: 80px;\n}\nbody #loadingscreen.active > article {\n  opacity: 1;\n  -ms-filter: none;\n  filter: none;\n  -webkit-transform: scale(1);\n  -moz-transform: scale(1);\n  -o-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1);\n}\nbody #loadingscreen.active {\n  z-index: 99;\n  opacity: 1;\n  -ms-filter: none;\n  filter: none;\n}\nbody #modal-window {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  -webkit-transition: all 1s ease-in-out;\n  -moz-transition: all 1s ease-in-out;\n  -o-transition: all 1s ease-in-out;\n  -ms-transition: all 1s ease-in-out;\n  transition: all 1s ease-in-out;\n  background: rgba(0,0,0,0);\n  z-index: -1;\n}\nbody #modal-window section {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  right: 50%;\n  bottom: 50%;\n  -webkit-border-radius: 2px;\n  border-radius: 2px;\n  width: 480px;\n  height: 290px;\n  margin: -150px 0 0 -250px;\n  -webkit-box-shadow: -1px 1px 5px rgba(0,0,0,0.4);\n  box-shadow: -1px 1px 5px rgba(0,0,0,0.4);\n  background: #fff;\n  -webkit-transform: scale(0.2);\n  -moz-transform: scale(0.2);\n  -o-transform: scale(0.2);\n  -ms-transform: scale(0.2);\n  transform: scale(0.2);\n  -webkit-transition: all 1s ease-in-out;\n  -moz-transition: all 1s ease-in-out;\n  -o-transition: all 1s ease-in-out;\n  -ms-transition: all 1s ease-in-out;\n  transition: all 1s ease-in-out;\n  opacity: 0;\n  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';\n  filter: alpha(opacity=0);\n}\nbody #modal-window section > * {\n  position: absolute;\n  left: 0;\n  right: 0;\n}\nbody #modal-window section header {\n  top: 0;\n  height: 55px;\n  line-height: 55px;\n  overflow: hiden;\n  font-size: 18pt;\n  font-weight: 100;\n  padding-left: 10px;\n}\nbody #modal-window section nav {\n  top: 10px;\n  right: 10px;\n}\nbody #modal-window section nav li {\n  list-style: none;\n  margin: 5px;\n  display: inline-block;\n  float: right;\n  font-size: 12pt;\n}\nbody #modal-window section article {\n  overflow: auto;\n  top: 70px;\n  bottom: 0;\n  padding: 0 20px 20px;\n}\nbody #modal-window section article > div > div {\n  overflow: hidden;\n  clear: both;\n  min-height: 35px;\n  position: relative;\n}\nbody #modal-window section article > div > div label {\n  height: 35px;\n  line-height: 35px;\n  float: left;\n}\nbody #modal-window section article > div > div input,\nbody #modal-window section article > div > div textarea {\n  width: 99%;\n  margin: 0;\n  padding: 5px 0;\n  text-indent: 5px;\n  outline: none;\n  border: solid 1px #ccc;\n  -webkit-box-shadow: 0 0 15px rgba(0,0,0,0.1) inset;\n  box-shadow: 0 0 15px rgba(0,0,0,0.1) inset;\n  color: #444;\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n}\nbody #modal-window section article > div > div input:hover,\nbody #modal-window section article > div > div textarea:hover,\nbody #modal-window section article > div > div input:active,\nbody #modal-window section article > div > div textarea:active,\nbody #modal-window section article > div > div input:focus,\nbody #modal-window section article > div > div textarea:focus {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  color: #111;\n}\nbody #modal-window section article > div > div textarea {\n  height: 50px;\n}\nbody #modal-window section article > div > div input[type='checkbox'] {\n  width: auto;\n  float: right;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  height: 35px;\n}\nbody #modal-window section article > div > div input[type='button'] {\n  position: absolute;\n  left: 0;\n  right: 50%;\n  border: solid 1px #ccc;\n  background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%);\n  background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%);\n  background: -o-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%);\n  background: -ms-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%);\n  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%);\n  background-color: #fff;\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  top: 0;\n  bottom: 0;\n  width: auto;\n}\nbody #modal-window section article > div > div input[type='button']:hover {\n  background-color: #ccc;\n}\nbody #modal-window section article > div > div input[type='button']:last-child {\n  right: 0;\n  left: 50%;\n}\nbody #modal-window.fullscreen section {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\nbody .modal-active {\n  -webkit-transform: scale(0.9);\n  -moz-transform: scale(0.9);\n  -o-transform: scale(0.9);\n  -ms-transform: scale(0.9);\n  transform: scale(0.9);\n  -webkit-border-radius: 2px;\n  border-radius: 2px;\n  opacity: 0.8;\n  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=80)';\n  filter: alpha(opacity=80);\n  -webkit-filter: blur(2px);\n  -moz-filter: blur(2px);\n  -ms-filter: blur(2px);\n  -o-filter: blur(2px);\n  filter: blur(2px);\n}\nbody .modal-active ~ #modal-container #modal-window {\n  background: rgba(0,0,0,0.2);\n  z-index: 1;\n}\nbody .modal-active ~ #modal-container #modal-window section {\n  -webkit-transform: scale(1);\n  -moz-transform: scale(1);\n  -o-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1);\n  opacity: 1;\n  -ms-filter: none;\n  filter: none;\n}\n@media (max-width:320px) {\n  body #modal-window section {\n    width: 300px;\n    margin-left: -150px;\n  }\n}\n"; element.id = "compiled_styles"; return element; };
                            window.isDev = true; 

	(function(module){(function(){var CHARS="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");Math.uuid=function(len,radix){var chars=CHARS,uuid=[],i;radix=radix||chars.length;if(len){for(i=0;i<len;i++)uuid[i]=chars[0|Math.random()*radix]}else{var r;uuid[8]=uuid[13]=uuid[18]=uuid[23]="-";uuid[14]="4";for(i=0;i<36;i++){if(!uuid[i]){r=0|Math.random()*16;uuid[i]=chars[i==19?r&3|8:r]}}}return uuid.join("")};Math.uuidFast=function(){var chars=CHARS,uuid=new Array(36),rnd=0,r;for(var i=0;i<36;i++){if(i==8||i==13||i==18||i==23){uuid[i]="-"}else if(i==14){uuid[i]="4"}else{if(rnd<=2)rnd=33554432+Math.random()*16777216|0;r=rnd&15;rnd=rnd>>4;uuid[i]=chars[i==19?r&3|8:r]}}return uuid.join("")};Math.uuidCompact=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(c){var r=Math.random()*16|0,v=c=="x"?r:r&3|8;return v.toString(16)})}})();(function(){if(!this.require){var modules={},cache={},require=function(name,root){var path=expand(root,name),module=cache[path],fn;if(module){return module.exports}else if(fn=modules[path]||modules[path=expand(path,"./index")]){module={id:path,exports:{}};try{cache[path]=module;fn(module.exports,function(name){return require(name,dirname(path))},module);return module.exports}catch(err){delete cache[path];throw err}}else{throw"module '"+name+"' not found"}},expand=function(root,name){var results=[],parts,part;if(/^\.\.?(\/|$)/.test(name)){parts=[root,name].join("/").split("/")}else{parts=name.split("/")}for(var i=0,length=parts.length;i<length;i++){part=parts[i];if(part==".."){results.pop()}else if(part!="."&&part!=""){results.push(part)}}return results.join("/")},dirname=function(path){return path.split("/").slice(0,-1).join("/")};this.require=function(name){return require(name,"")};this.require.define=function(bundle){for(var key in bundle)modules[key]=bundle[key]}}return this.require.define}).call(this)({DefineProperty:function(exports,require,module){(function(){var DefineProperty,dp,_root,__slice=[].slice;_root=null;if(typeof root!=="undefined"&&root!==null){_root=root}else if(typeof window!=="undefined"&&window!==null){_root=window}else{_root={}}DefineProperty=function(){function DefineProperty(){}DefineProperty.prototype.define=function(property,getter,setter,parent){if(parent==null){parent=_root}this.defineSetter(property,setter,parent);return this.defineGetter(property,getter,parent)};DefineProperty.prototype.defineSetter=function(property,setter,parent){if(parent==null){parent=_root}if(property!=null&&setter!=null&&parent!=null){return parent.__defineSetter__(property,setter)}};DefineProperty.prototype.defineGetter=function(property,getter,parent){if(parent==null){parent=_root}if(property!=null&&getter!=null&&parent!=null){return parent.__defineGetter__(property,getter)}};return DefineProperty}();dp=new DefineProperty;module.exports=function(){var args;args=1<=arguments.length?__slice.call(arguments,0):[];return dp.define.apply(dp,args)};module.exports.extend={define:function(prop,getter,setter,parent){if(parent==null){parent=this.prototype}return dp.define.apply(this,[prop,getter,setter,parent])},defineSetter:function(prop,setter,parent){if(parent==null){parent=this.prototype}return dp.defineSetter.apply(this,[prop,setter,parent])},defineGetter:function(prop,getter,parent){if(parent==null){parent=this.prototype}return dp.defineGetter.apply(this,[prop,getter,parent])}}}).call(this)},Enum:function(exports,require,module){(function(){var Enum;Enum=function(){function Enum(items,offset){var item,key,_i,_len;if(offset==null){offset=0}for(key=_i=0,_len=items.length;_i<_len;key=++_i){item=items[key];this[item]=key+offset}}return Enum}();module.exports=Enum}).call(this)},ErrorReporter:function(exports,require,module){(function(){var ErrorReporter,__bind=function(fn,me){return function(){return fn.apply(me,arguments)}},__indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i}return-1};ErrorReporter=function(){function ErrorReporter(){this.toString=__bind(this.toString,this)}ErrorReporter._errors={"Unknown Error":["An unknown error has occurred"]};ErrorReporter._indices=[ErrorReporter._errors["Unknown Error"][0]];ErrorReporter._groups=["Unknown Error"];ErrorReporter.wrapCustomError=function(error){return"["+error.name+"] "+error.message};ErrorReporter.generate=function(errorCode,extra){if(extra==null){extra=null}return(new this).generate(errorCode,extra)};ErrorReporter.extended=function(){var error,errors,group,key,_i,_len,_ref;_ref=this.errors;for(group in _ref){errors=_ref[group];this._errors[group]=errors;this._groups.push(group);for(key=_i=0,_len=errors.length;_i<_len;key=++_i){error=errors[key];this._indices.push(this._errors[group][key])}}this.prototype._=this;delete this.errors;return this.include(ErrorReporter.prototype)};ErrorReporter.prototype.generate=function(errCode,extra){var errors,group,_ref,_ref1;this.errCode=errCode;if(extra==null){extra=null}if(!this._._indices[this.errCode]){this.name=this._._groups[0];this.message=this._._errors[this._._groups[0]][0]}else{this.message=this._._indices[this.errCode];if(extra){this.message+=" - Extra Data : "+extra}_ref=this._._errors;for(group in _ref){errors=_ref[group];if(!(_ref1=this.message,__indexOf.call(errors,_ref1)>=0)){continue}this.name=group;break}}return this};ErrorReporter.prototype.toString=function(){return"["+this.name+"] "+this.message+" |"+this.errCode+"|"};return ErrorReporter}();module.exports=ErrorReporter}).call(this)},"Modules/Mediator":function(exports,require,module){(function(){var Modules;Modules={Observer:require("Modules/Observer")};Modules.Mediator=function(){var extended,included,installTo,key,value,_ref;function Mediator(){}_ref=Modules.Observer;for(key in _ref){value=_ref[key];Mediator.prototype[key]=value}installTo=function(object){this.delegate("publish",object);return this.delegate("subscribe",object)};included=function(){this.prototype.queue={};return this.prototype._delegates={publish:true,subscribe:true}};extended=function(){this.queue={};return this._delegates={publish:true,subscribe:true}};return Mediator}();module.exports=Modules.Mediator.prototype}).call(this)},"Modules/ORM":function(exports,require,module){(function(){var Modules,V,__indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i}return-1};Modules={};V=require("Variable");Modules.ORM=function(){function ORM(){}ORM.prototype._identifier="BasicORM";ORM.prototype._reccords={};ORM.prototype._symlinks={};ORM.prototype._head=0;ORM.prototype._props=[];ORM.prototype.get=function(which){if(typeof which==="object"){return this.getAdv(which)}return this._symlinks[which]||this._reccords[which]||null};ORM.prototype.getAdv=function(what){var check,key,rec,results,_ref,_ref1;results=[];check=function(rec){var final,k,mod,modfinal,recs,v,val,value,_i,_len;for(k in what){v=what[k];final=false;if(rec[k]==null){break}if(typeof v==="object"){for(mod in v){val=v[mod];modfinal=true;switch(mod){case"$gt":if(rec[k].get()<=val){modfinal=false;break}break;case"$gte":if(rec[k].get()<val){modfinal=false;break}break;case"$lt":if(rec[k].get()>=val){modfinal=false;break}break;case"$lte":if(rec[k].get()>val){modfinal=false;break}break;case"$contains":recs=rec[k].get();if(recs.constructor!==Array){modfinal=false;break}modfinal=false;for(_i=0,_len=recs.length;_i<_len;_i++){value=recs[_i];if(value===val){modfinal=true;break}}}if(modfinal===false){break}}if(modfinal===true){final=true}}else if(rec[k].get()===v){final=true}else{break}}if(final){return results.push(rec)}};_ref=this._reccords;for(key in _ref){rec=_ref[key];check(rec)}_ref1=this._symlinks;for(key in _ref1){rec=_ref1[key];check(rec)}if(results.length===0){return null}if(results.length===1){return results[0]}return results};ORM.prototype["delete"]=function(which){var _base,_base1;if((_base=this._reccords)[which]==null){_base[which]=null}return(_base1=this._symlinks)[which]!=null?(_base1=this._symlinks)[which]:_base1[which]=null};ORM.prototype.create=function(id,args){var prop,uuid,_i,_len,_ref;if(this._reccords==null){this._reccords={}}if(args==null){args={}}uuid=id||args._id||this._head;if(args._id==null){args._id=uuid}uuid=Math.uuidFast(uuid);args._uuid=uuid;args._fn=this;if(typeof this.preCreate==="function"){this.preCreate(args)}this._reccords[uuid]=new this(args);this._reccords[uuid]._constructor(args);if(typeof this.postCreate==="function"){this.postCreate(this._reccords[uuid],args)}if(id!=null&&id!==this._head){this._symlinks[id]=this._reccords[uuid]}if(uuid===this._head){this._head++}_ref=this._props;for(_i=0,_len=_ref.length;_i<_len;_i++){prop=_ref[_i];this._reccords[uuid][prop]=V.spawn()}return this._reccords[uuid]};ORM.prototype.reuse=function(which,args){var rez;if(args==null){args={}}rez=this.get(which);if(rez!=null){return rez}return this.create(which,args)};ORM.prototype.addProp=function(prop){var key,rec,_ref,_results;this._props.push(prop);_ref=this._reccords;_results=[];for(key in _ref){rec=_ref[key];_results.push(rec[prop]!=null?rec[prop]:rec[prop]=V.spawn())}return _results};ORM.prototype.removeProp=function(prop){var k,key,p,rec,_i,_len,_ref,_ref1;_ref=this._reccords;for(key in _ref){rec=_ref[key];if(rec[prop]==null){rec[prop]=null}}_ref1=this._props;for(k=_i=0,_len=_ref1.length;_i<_len;k=++_i){p=_ref1[k];if(p===prop){return this._props.splice(k,1)}}};ORM.prototype.extended=function(){this._excludes=["_fn","_uuid","_id"];return this.include({_constructor:function(args){var key,value,valueSet;valueSet={};this._uuid=args._uuid||null;this._id=args._id||null;this.fn=args._fn;for(key in args){value=args[key];if(__indexOf.call(this.fn._excludes,key)<0&&this.constructFilter(key,value)!==false){valueSet[key]=value}}if(this.init!=null){return this.init.call(this,valueSet)}},constructFilter:function(key,value){return true},remove:function(){return this.parent.remove(this.id)}})};return ORM}();module.exports=Modules.ORM.prototype}).call(this)},"Modules/Observer":function(exports,require,module){(function(){var Modules,__slice=[].slice;Modules={};Modules.Observer=function(){function Observer(){}Observer.prototype.delegateEvent=function(event,handler,object){var c,_base;if(object==null){object=window}if(event.substr(0,2)==="on"){event=event.substr(2)}if((_base=this.queue)[event]==null){_base[event]=[]}c=this.queue[event].length;this.queue[event].unshift(function(){return handler.apply(object,arguments)});return c};Observer.prototype.subscribe=function(event,handler){return this.delegateEvent(event,handler,this)};Observer.prototype.publish=function(){var args,event,handler,key,_ref;args=1<=arguments.length?__slice.call(arguments,0):[];event=args[0];args=args.splice(1);if(!event||this.queue[event]==null){return this}_ref=this.queue[event];for(key in _ref){handler=_ref[key];if(key!=="__head"){handler.apply(this,args)}}return this};Observer.prototype.unsubscribe=function(event,id){if(!this.queue[event]){return null}if(!this.queue[event][id]){return null}return this.queue[event].splice(id,1)};Observer.prototype.included=function(){return this.prototype.queue={}};Observer.prototype.extended=function(){return this.queue={}};return Observer}();module.exports=Modules.Observer.prototype}).call(this)},"Modules/Overload":function(exports,require,module){(function(){var CRITERIA,Include,Modules,_count,__slice=[].slice,__bind=function(fn,me){return function(){return fn.apply(me,arguments)}};Modules={};_count=function(object){var key,nr,value;nr=0;for(key in object){value=object[key];nr++}return nr};CRITERIA={args:function(crit,args){return args.length===crit}};Include=function(){function Include(){}Include.prototype.overload=function(sets){var helper;helper=new Modules.Overload(sets,this);return function(){var args;args=1<=arguments.length?__slice.call(arguments,0):[];helper.parent=this;return helper.verifyAll.apply(helper,args)}};return Include}();Modules.Overload=function(){function Overload(sets,parent){var aux,i,j,name,set,_i,_j,_ref,_ref1,_ref2;this.parent=parent;this.verify=__bind(this.verify,this);this.verifyAll=__bind(this.verifyAll,this);this.names=[];this.verifies=[];this.handles=[];for(name in sets){set=sets[name];this.names.push(name);this.verifies.push(set["if"]||null);this.handles.push(set.then||null)}for(i=_i=0,_ref=this.verifies.length-1;0<=_ref?_i<=_ref:_i>=_ref;i=0<=_ref?++_i:--_i){for(j=_j=_ref1=i+1,_ref2=this.verifies.length;_ref1<=_ref2?_j<=_ref2:_j>=_ref2;j=_ref1<=_ref2?++_j:--_j){if(_count(this.verifies[i])<_count(this.verifies[j])){aux=this.verifies[i];this.verifies[i]=this.verifies[j];this.verifies[j]=aux;aux=this.names[i];this.names[i]=this.names[j];this.names[j]=aux;aux=this.handles[i];this.handles[i]=this.handles[j];this.handles[j]=aux}}}}Overload.prototype.verifyAll=function(){var args,how,key,set,what,_i,_len,_ref;args=1<=arguments.length?__slice.call(arguments,0):[];this.args=args;_ref=this.verifies;for(key=_i=0,_len=_ref.length;_i<_len;key=++_i){set=_ref[key];if(set!=null){for(what in set){how=set[what];if(!this.verify(what,how)){break}return this.handles[key].apply(this.parent,this.args)}}}return(this.handles["default"]||this.handles[key-1]).apply(this.parent,this.args)};Overload.prototype.verify=function(what,how){if(CRITERIA[what]){return CRITERIA[what](how,this.args)}else{what=parseInt(what.replace("arg",""))-1;if(this.args[what]!=null){return how.apply(this.parent,this.args)}return false}};return Overload}();module.exports=Include.prototype}).call(this)},"Modules/Pythonize":function(exports,require,module){(function(){var CRITERIA,Include,Modules,_count,__slice=[].slice,__bind=function(fn,me){return function(){return fn.apply(me,arguments)}},__indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i}return-1};Modules={};_count=function(object){var key,nr,value;nr=0;for(key in object){value=object[key];nr++}return nr};CRITERIA={args:function(crit,args){return args.length===crit}};Include=function(){function Include(){}Include.prototype.parameterize=function(sets,callback){var helper;helper=new Modules.Pythonize(sets,callback);return function(){var args;args=1<=arguments.length?__slice.call(arguments,0):[];helper.parent=this;return helper.verifyAll.apply(helper,args)}};return Include}();Modules.Pythonize=function(){function Pythonize(sets,callback){var item,newItem,_i,_len;this.callback=callback;this.verifyAll=__bind(this.verifyAll,this);this.parent=null;this._options=[];for(_i=0,_len=sets.length;_i<_len;_i++){item=sets[_i];newItem={name:item.name||item.toString(),"default":item["default"]||null};this._options.push(newItem)}}Pythonize.prototype.verifyAll=function(){var arg,args,curArg,i,items,lastarg,len,_i,_ref,_ref1,_ref2;args=1<=arguments.length?__slice.call(arguments,0):[];this.args=args;this.options={};len=this.args.length-1;i=0;while(this.args.length>1){curArg=this._options[i];arg=this.args.shift();this.options[curArg.name]=arg||curArg["default"];i++}lastarg=this.args.pop();items=this.verifyObject(lastarg,len);if(len<this._options.length-1){for(i=_i=_ref=len+(items.length===0),_ref1=this._options.length-1;_ref<=_ref1?_i<=_ref1:_i>=_ref1;i=_ref<=_ref1?++_i:--_i){if(!(_ref2=this._options[i].name,__indexOf.call(items,_ref2)>=0)){this.options[this._options[i].name]=this._options[i]["default"]}}}return this.callback.apply(this.parent,[this.options])};Pythonize.prototype.verifyObject=function(obj,id){var name,omits,option,valid,value,_i,_len,_ref;omits=[];if(typeof obj==="object"){for(name in obj){value=obj[name];valid=false;_ref=this._options;for(_i=0,_len=_ref.length;_i<_len;_i++){option=_ref[_i];if(option.name===name){valid=true;break}}if(!valid){this.options[this._options[id].name]=obj;return[]}else{omits.push(name);this.options[name]=value}}}else{this.options[this._options[id].name]=obj}return omits};return Pythonize}();module.exports=Include.prototype}).call(this)},"Modules/StateMachine":function(exports,require,module){(function(){var Modules,__bind=function(fn,me){return function(){return fn.apply(me,arguments)}};Modules={};Modules.StateMachine=function(){function StateMachine(){this.delegateContext=__bind(this.delegateContext,this)}StateMachine.prototype.extended=function(){this._contexts=[];return this._activeContext=null};StateMachine.prototype.included=function(){this.prototype._contexts=[];return this.prototype._activeContext=null};StateMachine.prototype.delegateContext=function(context){var l;if(this._find(context)){return null}l=this._contexts.length;this._contexts[l]=context;if(context.activate==null){context.activate=function(){}}if(context.deactivate==null){context.deactivate=function(){}}return this};StateMachine.prototype.getActiveContextID=function(){return this._activeContext};StateMachine.prototype.getActiveContext=function(){return this._activeContext};StateMachine.prototype.getContext=function(context){return this._contexts[context]||null};StateMachine.prototype._find=function(con){var key,value,_i,_len,_ref;_ref=this._contexts;for(value=_i=0,_len=_ref.length;_i<_len;value=++_i){key=_ref[value];if(con===key){return value}}return null};StateMachine.prototype.activateContext=function(context){var con;con=this._find(context);if(con==null){return null}if(this._activeContext===con){return true}this._activeContext=con;return context.activate()};StateMachine.prototype.deactivateContext=function(context){if(this._find(context)==null){return null}this._activeContext=null;return context.deactivate()};StateMachine.prototype.switchContext=function(context){var con;if(context==null){con=this._activeContext+1;if(con===this._contexts.length){con=0}}else{con=this._find(context);if(con==null){return null}}this.deactivateContext(this._contexts[this._activeContext]);this.activateContext(this._contexts[con]);return this._contexts[con]};return StateMachine}();module.exports=Modules.StateMachine.prototype}).call(this)},Object:function(exports,require,module){(function(){var $,Obiect,clone,_excludes,__indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i}return-1},__slice=[].slice;_excludes=["included","extended"];clone=function(obj){var k,o,v;o=obj instanceof Array?[]:{};for(k in obj){v=obj[k];if(v!=null&&typeof v==="object"){o[k]=clone(v)}else{o[k]=v}}return o};$=function(what){return $[what]||null};Obiect=function(){var extended,included;function Obiect(){}Obiect.clone=function(obj){if(obj==null){obj=this}debugger;return Obiect.proxy(Obiect.include,Obiect.proxy(Obiect.extend,function(){})(obj))(obj.prototype)};Obiect.extend=function(obj,into){var k,value,_ref;if(into==null){into=this}obj=clone(obj);for(k in obj){value=obj[k];if(!(__indexOf.call(_excludes,k)>=0||obj._excludes!=null&&__indexOf.call(obj._excludes,k)>=0)){if(into[k]!=null){if(into["super"]==null){into["super"]={}}into["super"][k]=into[k]}into[k]=value}}if((_ref=obj.extended)!=null){_ref.call(into)}return this};Obiect.include=function(obj,into){var key,value,_ref;if(into==null){into=this}obj=clone(obj);for(key in obj){value=obj[key];into.prototype[key]=value}if((_ref=obj.included)!=null){_ref.call(into)}return this};Obiect.proxy=function(){var to,what,_this=this;what=arguments[0];to=arguments[1];if(typeof what==="function"){return function(){var args;args=1<=arguments.length?__slice.call(arguments,0):[];return what.apply(to,args)}}else{return this[what]}};Obiect.delegate=function(property,context){var _ref;if(((_ref=this._delegates)!=null?_ref[property]:void 0)!=null===false&&this._deleagates[property]!==false){trigger("Cannot delegate member "+property+" to "+context)}return context[property]=this.proxy(function(){return this[property](arguments)},this)};Obiect.echo=function(){var args,owner,prefix,_d;args=1<=arguments.length?__slice.call(arguments,0):[];_d=new Date;owner="<owner not supported>";if(this.__proto__!=null){owner=this.__proto__.constructor.name}prefix="["+_d.getHours()+":"+_d.getMinutes()+":"+_d.getSeconds()+"]["+(this.name||owner)+"]";if(args[0]===""){args[0]=prefix}else{args[0]=""+prefix+" "+args[0]}console.log(args);return this};Obiect.log=function(){var args;args=1<=arguments.length?__slice.call(arguments,0):[];if(typeof IS!=="undefined"&&IS!==null&&IS.isDev||typeof window!=="undefined"&&window!==null&&window.isDev||typeof root!=="undefined"&&root!==null&&root.isDev||isDev){args.unshift("");this.echo.apply(this,args)}return this};extended=function(){};included=function(){};Obiect.include({proxy:Obiect.proxy,log:Obiect.log,echo:Obiect.echo});return Obiect}();module.exports=Obiect}).call(this)},Promise:function(exports,require,module){(function(){var Promise,__slice=[].slice;Promise=function(){function Promise(promise){if(promise instanceof Promise){return promise}this.callbacks=[]}Promise.prototype.then=function(ok,err,progr){this.callbacks.push({ok:ok,error:err,progress:progr});return this};Promise.prototype.resolve=function(){var args,callback,time,_this=this;args=1<=arguments.length?__slice.call(arguments,0):[];callback=this.callbacks.shift();if(callback&&callback.ok){callback.ok.apply(this,args)}else{time=setTimeout(function(){clearTimeout(time);return _this.resolve.apply(_this,args)},50)}return this};Promise.prototype.reject=function(){var args,callback,time,_this=this;args=1<=arguments.length?__slice.call(arguments,0):[];callback=this.callbacks.shift();if(callback&&callback.error){callback.error.apply(this,args)}else{time=setTimeout(function(){clearTimeout(time);return _this.reject.apply(_this,args)},50)}return this};Promise.prototype.progress=function(){var args,callback;args=1<=arguments.length?__slice.call(arguments,0):[];callback=this.callbacks[0];if(callback&&callback.progress){callback.progress.apply(this,args)}return this};return Promise}();module.exports=Promise}).call(this)},Variable:function(exports,require,module){(function(){var Variable,_ref,__hasProp={}.hasOwnProperty,__extends=function(child,parent){for(var key in parent){if(__hasProp.call(parent,key))child[key]=parent[key]}function ctor(){this.constructor=child}ctor.prototype=parent.prototype;child.prototype=new ctor;child.__super__=parent.prototype;return child};Variable=function(_super){__extends(Variable,_super);function Variable(){_ref=Variable.__super__.constructor.apply(this,arguments);return _ref}Variable.spawn=function(){var x;x=new this;x._value=null;return x};Variable.prototype.get=function(){return this._value};Variable.prototype.set=function(value){return this._value=value};Variable.prototype.add=function(reccord){if(this._value==null||this._value.constructor!==Array){this._value=[]}return this._value.push(reccord)};return Variable}(require("Object"));if(typeof module!=="undefined"&&module!==null){module.exports=Variable}}).call(this)},async:function(exports,require,module){(function(){var async={};var root,previous_async;root=this;if(root!=null){previous_async=root.async}async.noConflict=function(){root.async=previous_async;return async};function only_once(fn){var called=false;return function(){if(called)throw new Error("Callback was already called.");called=true;fn.apply(root,arguments)}}var _each=function(arr,iterator){if(arr.forEach){return arr.forEach(iterator)}for(var i=0;i<arr.length;i+=1){iterator(arr[i],i,arr)}};var _map=function(arr,iterator){if(arr.map){return arr.map(iterator)}var results=[];_each(arr,function(x,i,a){results.push(iterator(x,i,a))});return results};var _reduce=function(arr,iterator,memo){if(arr.reduce){return arr.reduce(iterator,memo)}_each(arr,function(x,i,a){memo=iterator(memo,x,i,a)});return memo};var _keys=function(obj){if(Object.keys){return Object.keys(obj)}var keys=[];for(var k in obj){if(obj.hasOwnProperty(k)){keys.push(k)}}return keys};if(typeof process==="undefined"||!process.nextTick){if(typeof setImmediate==="function"){async.nextTick=function(fn){setImmediate(fn)};async.setImmediate=async.nextTick}else{async.nextTick=function(fn){setTimeout(fn,0)};async.setImmediate=async.nextTick}}else{async.nextTick=process.nextTick;if(typeof setImmediate!=="undefined"){async.setImmediate=setImmediate}else{async.setImmediate=async.nextTick}}async.each=function(arr,iterator,callback){callback=callback||function(){};if(!arr.length){return callback()}var completed=0;_each(arr,function(x){iterator(x,only_once(function(err){if(err){callback(err);callback=function(){}}else{completed+=1;if(completed>=arr.length){callback(null)}}}))})};async.forEach=async.each;async.eachSeries=function(arr,iterator,callback){callback=callback||function(){};if(!arr.length){return callback()}var completed=0;var iterate=function(){iterator(arr[completed],function(err){if(err){callback(err);callback=function(){}}else{completed+=1;if(completed>=arr.length){callback(null)}else{iterate()}}})};iterate()};async.forEachSeries=async.eachSeries;async.eachLimit=function(arr,limit,iterator,callback){var fn=_eachLimit(limit);fn.apply(null,[arr,iterator,callback])};async.forEachLimit=async.eachLimit;var _eachLimit=function(limit){return function(arr,iterator,callback){callback=callback||function(){};if(!arr.length||limit<=0){return callback()}var completed=0;var started=0;var running=0;(function replenish(){if(completed>=arr.length){return callback()}while(running<limit&&started<arr.length){started+=1;running+=1;iterator(arr[started-1],function(err){if(err){callback(err);callback=function(){}}else{completed+=1;running-=1;if(completed>=arr.length){callback()}else{replenish()}}})}})()}};var doParallel=function(fn){return function(){var args=Array.prototype.slice.call(arguments);return fn.apply(null,[async.each].concat(args))}};var doParallelLimit=function(limit,fn){return function(){var args=Array.prototype.slice.call(arguments);return fn.apply(null,[_eachLimit(limit)].concat(args))}};var doSeries=function(fn){return function(){var args=Array.prototype.slice.call(arguments);return fn.apply(null,[async.eachSeries].concat(args))}};var _asyncMap=function(eachfn,arr,iterator,callback){var results=[];arr=_map(arr,function(x,i){return{index:i,value:x}});eachfn(arr,function(x,callback){iterator(x.value,function(err,v){results[x.index]=v;callback(err)})},function(err){callback(err,results)})};async.map=doParallel(_asyncMap);async.mapSeries=doSeries(_asyncMap);async.mapLimit=function(arr,limit,iterator,callback){return _mapLimit(limit)(arr,iterator,callback)};var _mapLimit=function(limit){return doParallelLimit(limit,_asyncMap)};async.reduce=function(arr,memo,iterator,callback){async.eachSeries(arr,function(x,callback){iterator(memo,x,function(err,v){memo=v;callback(err)})},function(err){callback(err,memo)})};async.inject=async.reduce;async.foldl=async.reduce;async.reduceRight=function(arr,memo,iterator,callback){var reversed=_map(arr,function(x){return x}).reverse();async.reduce(reversed,memo,iterator,callback)};async.foldr=async.reduceRight;var _filter=function(eachfn,arr,iterator,callback){var results=[];arr=_map(arr,function(x,i){return{index:i,value:x}});eachfn(arr,function(x,callback){iterator(x.value,function(v){if(v){results.push(x)}callback()})},function(err){callback(_map(results.sort(function(a,b){return a.index-b.index}),function(x){return x.value}))})};async.filter=doParallel(_filter);async.filterSeries=doSeries(_filter);async.select=async.filter;async.selectSeries=async.filterSeries;var _reject=function(eachfn,arr,iterator,callback){var results=[];arr=_map(arr,function(x,i){return{index:i,value:x}});eachfn(arr,function(x,callback){iterator(x.value,function(v){if(!v){results.push(x)}callback()})},function(err){callback(_map(results.sort(function(a,b){return a.index-b.index}),function(x){return x.value}))})};async.reject=doParallel(_reject);async.rejectSeries=doSeries(_reject);var _detect=function(eachfn,arr,iterator,main_callback){eachfn(arr,function(x,callback){iterator(x,function(result){if(result){main_callback(x);main_callback=function(){}}else{callback()}})},function(err){main_callback()})};async.detect=doParallel(_detect);async.detectSeries=doSeries(_detect);async.some=function(arr,iterator,main_callback){async.each(arr,function(x,callback){iterator(x,function(v){if(v){main_callback(true);main_callback=function(){}}callback()})},function(err){main_callback(false)})};async.any=async.some;async.every=function(arr,iterator,main_callback){async.each(arr,function(x,callback){iterator(x,function(v){if(!v){main_callback(false);main_callback=function(){}}callback()})},function(err){main_callback(true)})};async.all=async.every;async.sortBy=function(arr,iterator,callback){async.map(arr,function(x,callback){iterator(x,function(err,criteria){if(err){callback(err)}else{callback(null,{value:x,criteria:criteria})}})},function(err,results){if(err){return callback(err)}else{var fn=function(left,right){var a=left.criteria,b=right.criteria;return a<b?-1:a>b?1:0};callback(null,_map(results.sort(fn),function(x){return x.value}))}})};async.auto=function(tasks,callback){callback=callback||function(){};var keys=_keys(tasks);if(!keys.length){return callback(null)}var results={};var listeners=[];var addListener=function(fn){listeners.unshift(fn)};var removeListener=function(fn){for(var i=0;i<listeners.length;i+=1){if(listeners[i]===fn){listeners.splice(i,1);return}}};var taskComplete=function(){_each(listeners.slice(0),function(fn){fn()})};addListener(function(){if(_keys(results).length===keys.length){callback(null,results);callback=function(){}}});_each(keys,function(k){var task=tasks[k]instanceof Function?[tasks[k]]:tasks[k];var taskCallback=function(err){var args=Array.prototype.slice.call(arguments,1);if(args.length<=1){args=args[0]}if(err){var safeResults={};_each(_keys(results),function(rkey){safeResults[rkey]=results[rkey]});safeResults[k]=args;callback(err,safeResults);callback=function(){}}else{results[k]=args;async.setImmediate(taskComplete)}};var requires=task.slice(0,Math.abs(task.length-1))||[];var ready=function(){return _reduce(requires,function(a,x){return a&&results.hasOwnProperty(x)},true)&&!results.hasOwnProperty(k)};if(ready()){task[task.length-1](taskCallback,results)}else{var listener=function(){if(ready()){removeListener(listener);task[task.length-1](taskCallback,results)}};addListener(listener)}})};async.waterfall=function(tasks,callback){callback=callback||function(){};if(tasks.constructor!==Array){var err=new Error("First argument to waterfall must be an array of functions");return callback(err)}if(!tasks.length){return callback()}var wrapIterator=function(iterator){return function(err){if(err){callback.apply(null,arguments);callback=function(){}}else{var args=Array.prototype.slice.call(arguments,1);var next=iterator.next();if(next){args.push(wrapIterator(next))}else{args.push(callback)}async.setImmediate(function(){iterator.apply(null,args)})}}};wrapIterator(async.iterator(tasks))()};var _parallel=function(eachfn,tasks,callback){callback=callback||function(){};if(tasks.constructor===Array){eachfn.map(tasks,function(fn,callback){if(fn){fn(function(err){var args=Array.prototype.slice.call(arguments,1);if(args.length<=1){args=args[0]}callback.call(null,err,args)})}},callback)}else{var results={};eachfn.each(_keys(tasks),function(k,callback){tasks[k](function(err){var args=Array.prototype.slice.call(arguments,1);if(args.length<=1){args=args[0]}results[k]=args;callback(err)})},function(err){callback(err,results)})}};async.parallel=function(tasks,callback){_parallel({map:async.map,each:async.each},tasks,callback)};async.parallelLimit=function(tasks,limit,callback){_parallel({map:_mapLimit(limit),each:_eachLimit(limit)},tasks,callback)};async.series=function(tasks,callback){callback=callback||function(){};if(tasks.constructor===Array){async.mapSeries(tasks,function(fn,callback){if(fn){fn(function(err){var args=Array.prototype.slice.call(arguments,1);if(args.length<=1){args=args[0]}callback.call(null,err,args)})}},callback)}else{var results={};async.eachSeries(_keys(tasks),function(k,callback){tasks[k](function(err){var args=Array.prototype.slice.call(arguments,1);if(args.length<=1){args=args[0]}results[k]=args;callback(err)})},function(err){callback(err,results)
})}};async.iterator=function(tasks){var makeCallback=function(index){var fn=function(){if(tasks.length){tasks[index].apply(null,arguments)}return fn.next()};fn.next=function(){return index<tasks.length-1?makeCallback(index+1):null};return fn};return makeCallback(0)};async.apply=function(fn){var args=Array.prototype.slice.call(arguments,1);return function(){return fn.apply(null,args.concat(Array.prototype.slice.call(arguments)))}};var _concat=function(eachfn,arr,fn,callback){var r=[];eachfn(arr,function(x,cb){fn(x,function(err,y){r=r.concat(y||[]);cb(err)})},function(err){callback(err,r)})};async.concat=doParallel(_concat);async.concatSeries=doSeries(_concat);async.whilst=function(test,iterator,callback){if(test()){iterator(function(err){if(err){return callback(err)}async.whilst(test,iterator,callback)})}else{callback()}};async.doWhilst=function(iterator,test,callback){iterator(function(err){if(err){return callback(err)}if(test()){async.doWhilst(iterator,test,callback)}else{callback()}})};async.until=function(test,iterator,callback){if(!test()){iterator(function(err){if(err){return callback(err)}async.until(test,iterator,callback)})}else{callback()}};async.doUntil=function(iterator,test,callback){iterator(function(err){if(err){return callback(err)}if(!test()){async.doUntil(iterator,test,callback)}else{callback()}})};async.queue=function(worker,concurrency){if(concurrency===undefined){concurrency=1}function _insert(q,data,pos,callback){if(data.constructor!==Array){data=[data]}_each(data,function(task){var item={data:task,callback:typeof callback==="function"?callback:null};if(pos){q.tasks.unshift(item)}else{q.tasks.push(item)}if(q.saturated&&q.tasks.length===concurrency){q.saturated()}async.setImmediate(q.process)})}var workers=0;var q={tasks:[],concurrency:concurrency,saturated:null,empty:null,drain:null,push:function(data,callback){_insert(q,data,false,callback)},unshift:function(data,callback){_insert(q,data,true,callback)},process:function(){if(workers<q.concurrency&&q.tasks.length){var task=q.tasks.shift();if(q.empty&&q.tasks.length===0){q.empty()}workers+=1;var next=function(){workers-=1;if(task.callback){task.callback.apply(task,arguments)}if(q.drain&&q.tasks.length+workers===0){q.drain()}q.process()};var cb=only_once(next);worker(task.data,cb)}},length:function(){return q.tasks.length},running:function(){return workers}};return q};async.cargo=function(worker,payload){var working=false,tasks=[];var cargo={tasks:tasks,payload:payload,saturated:null,empty:null,drain:null,push:function(data,callback){if(data.constructor!==Array){data=[data]}_each(data,function(task){tasks.push({data:task,callback:typeof callback==="function"?callback:null});if(cargo.saturated&&tasks.length===payload){cargo.saturated()}});async.setImmediate(cargo.process)},process:function process(){if(working)return;if(tasks.length===0){if(cargo.drain)cargo.drain();return}var ts=typeof payload==="number"?tasks.splice(0,payload):tasks.splice(0);var ds=_map(ts,function(task){return task.data});if(cargo.empty)cargo.empty();working=true;worker(ds,function(){working=false;var args=arguments;_each(ts,function(data){if(data.callback){data.callback.apply(null,args)}});process()})},length:function(){return tasks.length},running:function(){return working}};return cargo};var _console_fn=function(name){return function(fn){var args=Array.prototype.slice.call(arguments,1);fn.apply(null,args.concat([function(err){var args=Array.prototype.slice.call(arguments,1);if(typeof console!=="undefined"){if(err){if(console.error){console.error(err)}}else if(console[name]){_each(args,function(x){console[name](x)})}}}]))}};async.log=_console_fn("log");async.dir=_console_fn("dir");async.memoize=function(fn,hasher){var memo={};var queues={};hasher=hasher||function(x){return x};var memoized=function(){var args=Array.prototype.slice.call(arguments);var callback=args.pop();var key=hasher.apply(null,args);if(key in memo){callback.apply(null,memo[key])}else if(key in queues){queues[key].push(callback)}else{queues[key]=[callback];fn.apply(null,args.concat([function(){memo[key]=arguments;var q=queues[key];delete queues[key];for(var i=0,l=q.length;i<l;i++){q[i].apply(null,arguments)}}]))}};memoized.memo=memo;memoized.unmemoized=fn;return memoized};async.unmemoize=function(fn){return function(){return(fn.unmemoized||fn).apply(null,arguments)}};async.times=function(count,iterator,callback){var counter=[];for(var i=0;i<count;i++){counter.push(i)}return async.map(counter,iterator,callback)};async.timesSeries=function(count,iterator,callback){var counter=[];for(var i=0;i<count;i++){counter.push(i)}return async.mapSeries(counter,iterator,callback)};async.compose=function(){var fns=Array.prototype.reverse.call(arguments);return function(){var that=this;var args=Array.prototype.slice.call(arguments);var callback=args.pop();async.reduce(fns,args,function(newargs,fn,cb){fn.apply(that,newargs.concat([function(){var err=arguments[0];var nextargs=Array.prototype.slice.call(arguments,1);cb(err,nextargs)}]))},function(err,results){callback.apply(that,[err].concat(results))})}};var _applyEach=function(eachfn,fns){var go=function(){var that=this;var args=Array.prototype.slice.call(arguments);var callback=args.pop();return eachfn(fns,function(fn,cb){fn.apply(that,args.concat([cb]))},callback)};if(arguments.length>2){var args=Array.prototype.slice.call(arguments,2);return go.apply(this,args)}else{return go}};async.applyEach=doParallel(_applyEach);async.applyEachSeries=doSeries(_applyEach);async.forever=function(fn,callback){function next(err){if(err){if(callback){return callback(err)}throw err}fn(next)}next()};if(typeof define!=="undefined"&&define.amd){define([],function(){return async})}else if(typeof module!=="undefined"&&module.exports){module.exports=async}else{root.async=async}})()}});var require=this.require;(function(){var IS;require("Object");require("async");IS={Variable:require("Variable"),Promise:require("Promise"),Object:require("Object"),ErrorReporter:require("ErrorReporter"),Enum:require("Enum"),DefineProperty:require("DefineProperty"),Modules:{StateMachine:require("Modules/StateMachine"),Pythonize:require("Modules/Pythonize"),Overload:require("Modules/Overload"),Observer:require("Modules/Observer"),ORM:require("Modules/ORM"),Mediator:require("Modules/Mediator")}};if(typeof window!=="undefined"&&window!==null){window.IS=IS}if(typeof module!=="undefined"&&module!==null){module.exports=IS}if(typeof root!=="undefined"&&root!==null){root.IS=IS}}).call(this)}).call({},typeof module=="undefined"?typeof window=="undefined"?root:window:module);
(function(/*! Stitch !*/) {
	if (!this.require) {
		var modules = {}, cache = {}, require = function(name, root) {
			var path = expand(root, name), module = cache[path], fn;
			if (module) {
				return module.exports;
			} else if (fn = modules[path] || modules[path = expand(path, './index')]) {
				module = {id: path, exports: {}};
				try {
					cache[path] = module;
					fn(module.exports, function(name) {
						return require(name, dirname(path));
					}, module);
					return module.exports;
				} catch (err) {
					delete cache[path];
					throw err;
				}
			} else {
				throw 'module \'' + name + '\' not found';
			}
		}, expand = function(root, name) {
			var results = [], parts, part;
			if (/^\.\.?(\/|$)/.test(name)) {
				parts = [root, name].join('/').split('/');
			} else {
				parts = name.split('/');
			}
			for (var i = 0, length = parts.length; i < length; i++) {
				part = parts[i];
				if (part == '..') {
					results.pop();
				} else if (part != '.' && part != '') {
					results.push(part);
				}
			}
			return results.join('/');
		}, dirname = function(path) {
			return path.split('/').slice(0, -1).join('/');
		};
		this.require = function(name) {
			return require(name, '');
		}
		this.require.define = function(bundle) {
			for (var key in bundle)
				modules[key] = bundle[key];
		};
	}
	return this.require.define;
}).call(this)({"Application": function(exports, require, module) {(function(){
  var Application;
  Application = (function(superclass){
    var prototype = extend$((import$(Application, superclass).displayName = 'Application', Application), superclass).prototype, constructor = Application;
    function Application(getStylesFunc){
      var this$ = this instanceof ctor$ ? this : new ctor$;
      this$.getStylesFunc = getStylesFunc;
      this$.completeLoad = bind$(this$, 'completeLoad', prototype);
      this$.bootStrapAngular = bind$(this$, 'bootStrapAngular', prototype);
      this$.loadLibs = bind$(this$, 'loadLibs', prototype);
      this$.getStyles = bind$(this$, 'getStyles', prototype);
      this$.loadEssentials = bind$(this$, 'loadEssentials', prototype);
      this$.fixMobile = bind$(this$, 'fixMobile', prototype);
      this$.loadDepMan = bind$(this$, 'loadDepMan', prototype);
      this$.checkDevMode = bind$(this$, 'checkDevMode', prototype);
      document.title = AppInfo.displayname;
      this$.LifeCycle = new IS.Promise();
      this$.LifeCycle.then(this$.checkDevMode).then(this$.fixMobile).then(this$.loadDepMan).then(this$.getStyles).then(this$.loadLibs).then(this$.loadEssentials).then(this$.bootStrapAngular).then(this$.completeLoad);
      window.Tester = new (require("classes/helpers/Tester"))(function(){
        return this$.LifeCycle.resolve();
      });
      return this$;
    } function ctor$(){} ctor$.prototype = prototype;
    prototype.checkDevMode = function(){
      if (window.isDev != null) {
        document.title = "Testing " + window.AppInfo.displayname + "!";
        return this.LifeCycle.resolve();
      }
    };
    prototype.loadDepMan = function(){
      window.DepMan = new (require("classes/helpers/DepMan"));
      return this.LifeCycle.resolve();
    };
    prototype.fixMobile = function(){
      var meta;
      meta = document.createElement("meta");
      meta.setAttribute("name", "viewport");
      meta.setAttribute("content", "width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1");
      document.head.appendChild(meta);
      meta = document.createElement("link");
      meta.setAttribute("rel", "apple-touch-icon");
      meta.setAttribute("href", "icon.ico");
      document.head.appendChild(meta);
      meta = document.createElement("meta");
      meta.setAttribute("name", "apple-mobile-web-app-capable");
      meta.setAttribute("content", "yes");
      document.head.appendChild(meta);
      meta = document.createElement('link');
      meta.setAttribute('rel', 'icon');
      meta.setAttribute('href', 'icon.ico');
      document.head.appendChild(meta);
      return this.LifeCycle.resolve();
    };
    prototype.loadEssentials = function(){
      var this$ = this;
      window.Loading = new (DepMan.helper("Loading"));
      return window.DBStorage = new (DepMan.helper("Storage"))(function(){
        return this$.LifeCycle.resolve();
      });
    };
    prototype.getStyles = function(){
      document.head.appendChild(this.getStylesFunc());
      return this.LifeCycle.resolve();
    };
    prototype.loadLibs = function(){
      var this$ = this;
      DepMan.googleFont("Roboto", [100, 400]);
      DepMan.extScript("//ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular.min.js");
      DepMan.extScript("//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js");
      return DepMan.extScript("http://preludels.com/prelude-browser-min.js", function(){
        importAll$(window, window.require("prelude-ls"));
        return this$.LifeCycle.resolve();
      });
    };
    prototype.bootStrapAngular = function(){
      var ref$;
      angular.module(AppInfo.displayname, []);
      DepMan.helper("Runtime");
      DepMan.helper("Translate");
      ref$ = DepMan.helper("Notification"), window.Notifications = ref$[0], window.Toast = ref$[1];
      return this.LifeCycle.resolve();
    };
    prototype.completeLoad = function(){
      return document.body.innerHTML = DepMan.render("index");
    };
    return Application;
  }(IS.Object));
  module.exports = Application;
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
  function importAll$(obj, src){
    for (var key in src) obj[key] = src[key];
    return obj;
  }
}).call(this);
}, "classes/helpers/DepMan": function(exports, require, module) {(function(){
  var DepMan, join$ = [].join, slice$ = [].slice;
  DepMan = (function(superclass){
    var prototype = extend$((import$(DepMan, superclass).displayName = 'DepMan', DepMan), superclass).prototype, constructor = DepMan;
    function DepMan(basePrefix, deps){
      this.basePrefix = basePrefix != null ? basePrefix : "";
      this.deps = deps != null
        ? deps
        : [];
      this.googleFont = bind$(this, 'googleFont', prototype);
      this.extScript = bind$(this, 'extScript', prototype);
      this.renderer = bind$(this, 'renderer', prototype);
      this.gesture = bind$(this, 'gesture', prototype);
      this.angular = bind$(this, 'angular', prototype);
      this.lib = bind$(this, 'lib', prototype);
      this.model = bind$(this, 'model', prototype);
      this.model = bind$(this, 'model', prototype);
      this.controller = bind$(this, 'controller', prototype);
      this.helper = bind$(this, 'helper', prototype);
      this.language = bind$(this, 'language', prototype);
      this.font = bind$(this, 'font', prototype);
      this.image = bind$(this, 'image', prototype);
      this.stylesheet = bind$(this, 'stylesheet', prototype);
      this.doc = bind$(this, 'doc', prototype);
      this.render = bind$(this, 'render', prototype);
      this.classes = bind$(this, 'classes', prototype);
      this.data = bind$(this, 'data', prototype);
      this._require = bind$(this, '_require', prototype);
      this.echo("Activated DependenciesManager!");
    }
    prototype._require = function(module, prefix){
      var str;
      prefix == null && (prefix = "");
      if (module.substr == null) {
        module = join$.call(module, "/");
      }
      str = prefix + "" + module;
      if (this.deps[str]) {
        return this.deps[str];
      } else {
        this.deps[str] = require(this.basePrefix + "" + str);
        return this.deps[prefix + "" + module];
      }
    };
    prototype.data = function(module, suffix){
      suffix == null && (suffix = "");
      return this._require(module, "data/" + suffix);
    };
    prototype.classes = function(module, suffix){
      suffix == null && (suffix = "");
      return this._require(module, "classes/" + suffix);
    };
    prototype.render = function(module){
      var args;
      args = slice$.call(arguments, 1);
      return this.data(module, "views/").apply(this, args);
    };
    prototype.doc = function(module){
      return this.data("docs/");
    };
    prototype.stylesheet = function(module){
      return this.data(module, "stylesheets/");
    };
    prototype.image = function(module){
      return this.data(module, "images/");
    };
    prototype.font = function(module){
      return this.data(module, "fonts/");
    };
    prototype.language = function(module){
      return this.data(module, "languages/");
    };
    prototype.helper = function(module){
      return this.classes(module, "helpers/");
    };
    prototype.controller = function(module){
      return this.classes(module, "controllers/");
    };
    prototype.model = function(module){
      return this.classes(module, "models/");
    };
    prototype.model = function(module){
      return this.classes(module, "models/");
    };
    prototype.lib = function(module){
      return this.classes(module, "libs/");
    };
    prototype.angular = function(module){
      return this.classes(module, "angular/");
    };
    prototype.gesture = function(module){
      return this.classes(module, "gestures/");
    };
    prototype.renderer = function(module){
      return this.classes(module, "renderers/");
    };
    prototype.extScript = function(src, callback){
      var _name, _s, this$ = this;
      callback == null && (callback = null);
      if (this.deps[src]) {
        return this.deps[src];
      }
      _name = src.substr(src.lastIndexOf("/") + 1);
      _s = this.deps[src] = document.createElement("script");
      _s.src = src;
      _s.id = _name;
      _s.onload = function(){
        this$.log(_name + " has been loaded! (" + src + ")");
        _s.parentElement.removeChild(_s);
        if (callback != null) {
          return callback(_s);
        }
      };
      document.head.appendChild(_s);
      return _s;
    };
    prototype.googleFont = function(font, sizes, subsets){
      var names, _s, string;
      subsets == null && (subsets = null);
      if (this.deps[font]) {
        return this.deps[font];
      }
      names = font.split(" ");
      _s = this.deps[font + ""] = document.createElement("link");
      string = "http://fonts.googleapis.com/css?family=" + names.join("+") + ":" + sizes.join(",");
      if (subsets != null) {
        string += "&subset=" + subsets.join(",");
      }
      _s.setAttribute("href", string);
      _s.setAttribute("rel", "stylesheet");
      _s.setAttribute("type", "text/css");
      document.head.appendChild(_s);
      return _s;
    };
    return DepMan;
  }(IS.Object));
  module.exports = DepMan;
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
}, "classes/helpers/Loading": function(exports, require, module) {(function(){
  var LoadingHelper;
  LoadingHelper = (function(superclass){
    var prototype = extend$((import$(LoadingHelper, superclass).displayName = 'LoadingHelper', LoadingHelper), superclass).prototype, constructor = LoadingHelper;
    function LoadingHelper(){
      var f, ref$, this$ = this instanceof ctor$ ? this : new ctor$;
      this$.progress = bind$(this$, 'progress', prototype);
      this$.resize = bind$(this$, 'resize', prototype);
      this$.end = bind$(this$, 'end', prototype);
      this$.start = bind$(this$, 'start', prototype);
      f = document.createElement("div");
      f.innerHTML = DepMan.render(['loading', 'index']);
      document.body.appendChild(f);
      this$.loadingScreen = document.getElementById("loadingscreen");
      this$.asides = [(ref$ = $('#loadingscreen > aside'))[0], ref$[1]];
      this$.message = document.getElementById("loadingmessage");
      window.addEventListener('resize', this$.resize);
      this$.resize();
      this$.echo("Loading screen ready");
      return this$;
    } function ctor$(){} ctor$.prototype = prototype;
    prototype.start = function(){
      this.loadingScreen.className = 'active';
      return this;
    };
    prototype.end = function(){
      this.loadingScreen.className = "";
      return this;
    };
    prototype.resize = function(){
      return map(function(it){
        var angle, arg, transString;
        angle = Math.atan(window.innerWidth / window.innerHeight);
        arg = (function(){
          switch (it.dataset.location) {
          case 'left':
            return "-50%";
          case 'right':
            return "50%";
          }
        }());
        transString = "translateX(" + arg + ")  skew(" + angle + "rad)";
        console.log(transString);
        $(it).css('transform', transString);
        return this;
      })(
      this.asides);
    };
    prototype.progress = function(arg){
      this.message.innerHTML = (function(){
        switch (typeof arg) {
        case 'number':
          return "Loading: " + arg + "%";
        default:
          return arg;
        }
      }());
      return this;
    };
    return LoadingHelper;
  }(IS.Object));
  module.exports = LoadingHelper;
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
}, "classes/helpers/Notification": function(exports, require, module) {(function(){
  var DRIVERS, Drivers, NotificationHelper, Helper, Toast, slice$ = [].slice, join$ = [].join;
  DRIVERS = ['normal', 'webkit', 'moz'];
  Drivers = new IS.Enum(DRIVERS);
  NotificationHelper = (function(superclass){
    var prototype = extend$((import$(NotificationHelper, superclass).displayName = 'NotificationHelper', NotificationHelper), superclass).prototype, constructor = NotificationHelper;
    function NotificationHelper(){
      var this$ = this instanceof ctor$ ? this : new ctor$;
      this$.toastNormal = bind$(this$, 'toastNormal', prototype);
      this$.toastWebkit = bind$(this$, 'toastWebkit', prototype);
      this$.toastMoz = bind$(this$, 'toastMoz', prototype);
      this$.toast = bind$(this$, 'toast', prototype);
      Runtime.init('toast-driver', 'number');
      Runtime.init('toast-timeout', 'number');
      DBStorage.get("toast-timeout", function(timeout){
        var handler;
        timeout == null && (timeout = 5000);
        Runtime.set('toast-timeout', timeout);
        Runtime.set('toast-driver', Drivers['normal']);
        if (Tester['webkitNotifications']) {
          if (!Tester['chrome.storage']) {
            handler = function(){
              webkitNotifications.requestPermission();
              return window.removeEventListener("click");
            };
            window.addEventListener("click", handler);
          }
          Runtime.set('toast-driver', Drivers['webkit']);
        }
        if (Tester['mozNotifications']) {
          handler = function(){
            Notification.requestPermission();
            return window.removeEventListener("click");
          };
          window.addEventListener("click", handler);
          Runtime.set('toast-driver', Drivers['moz']);
        }
        return this$.echo("Notification Helper Online, with driver : ", this$.drive, " and timeout : ", Runtime.get('toast-timeout'));
      });
      return this$;
    } function ctor$(){} ctor$.prototype = prototype;
    prototype.toast = function(title){
      var body;
      title == null && (title = "Notification");
      body = slice$.call(arguments, 1);
      switch (Runtime.get('toast-driver')) {
      case Drivers.webkit:
        if (webkitNotifications.checkPermission() === 0) {
          return this.toastWebkit(title, body);
        } else {
          return this.toastNormal(title, body);
        }
        break;
      case Drivers.moz:
        if (Notification.permission === "granted") {
          return this.toastMoz(title, body);
        } else {
          return this.toastNormal(title, body);
        }
        break;
      default:
        return this.toastNormal(title, body);
      }
    };
    prototype.toastMoz = function(title, body){
      return new Notification(title + join$.call(body, '\n'));
    };
    prototype.toastWebkit = function(title, body){
      var b, i$, len$, item, notif;
      b = body.shift();
      for (i$ = 0, len$ = body.length; i$ < len$; ++i$) {
        item = body[i$];
        b += "\n" + item;
      }
      notif = webkitNotifications.createNotification('icon.ico', title, b);
      notif.ondisplay = function(ev){
        return setTimeout(function(){
          return ev.currentTarget.cancel();
        }, Runtime.get('toast-timeout'));
      };
      return notif.show();
    };
    prototype.toastNormal = function(title, body){
      var b, i$, len$, item;
      b = "";
      if (typeof Modal != 'undefined' && Modal !== null) {
        for (i$ = 0, len$ = body.length; i$ < len$; ++i$) {
          item = body[i$];
          b += "<p>" + item + "</p>";
        }
        return Modal.show({
          title: title,
          content: b
        }, Runtime.get('toast-timeout'));
      } else {
        b = join$.call([title].concat(body), "\n");
        return alert(b);
      }
    };
    return NotificationHelper;
  }(IS.Object));
  Helper = new NotificationHelper();
  Toast = Helper.toast;
  module.exports = [Helper, Toast];
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
}, "classes/helpers/Runtime": function(exports, require, module) {(function(){
  var Runtime, runtime;
  Runtime = (function(superclass){
    var prototype = extend$((import$(Runtime, superclass).displayName = 'Runtime', Runtime), superclass).prototype, constructor = Runtime;
    function Runtime(){
      var this$ = this instanceof ctor$ ? this : new ctor$;
      this$.init = bind$(this$, 'init', prototype);
      this$.set = bind$(this$, 'set', prototype);
      this$.get = bind$(this$, 'get', prototype);
      window.Runtime = this$;
      this$.props = {};
      this$.log("Runtime Activated!");
      return this$;
    } function ctor$(){} ctor$.prototype = prototype;
    prototype.get = function(prop){
      this.log("Got " + prop);
      return this.props[prop];
    };
    prototype.set = function(prop, value){
      this.props[prop] = value;
      this.publish("prop-" + prop + "-change", value);
      return this.log("Prop " + prop + " set to " + value + "! [prop-" + prop + "-change emitted]");
    };
    prototype.init = function(prop, type){
      if (this.props[prop] == null) {
        this.props[prop] = (function(){
          switch (type) {
          case 'array':
            return [];
          case 'object':
            return {};
          case 'number':
          case 'boolean':
            return 0;
          default:
            return "";
          }
        }());
      }
      this.publish("prop-" + prop + "-init");
      return this.log("Prop " + prop + " initialized! [prop-" + prop + "-init emitted]");
    };
    Runtime.include(IS.Modules.Observer);
    return Runtime;
  }(IS.Object));
  runtime = new Runtime();
  angular.module(AppInfo.displayname).value("Runtime", runtime);
  module.exports = runtime;
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
}, "classes/helpers/Storage": function(exports, require, module) {(function() {
  var Storage, StorageItem,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  StorageItem = (function() {
    function StorageItem(item, key, parent) {
      this.item = item;
      this.key = key;
      this.parent = parent;
      this.remove = __bind(this.remove, this);
      this.set = __bind(this.set, this);
      this.get = __bind(this.get, this);
      this.driver = this.parent.driver;
    }

    StorageItem.prototype.get = function(callback, parse) {
      var e;
      if (parse == null) {
        parse = false;
      }
      try {
        return this.driver.get(this.item, (function(_this) {
          return function(value) {
            _this.value = value;
            if (parse) {
              _this.value = JSON.parse(_this.value);
            }
            return callback(_this.value);
          };
        })(this));
      } catch (_error) {
        e = _error;
        return console.log(e.message);
      }
    };

    StorageItem.prototype.set = function(value, stringify) {
      if (stringify == null) {
        stringify = false;
      }
      if (stringify) {
        value = JSON.stringify(value);
      }
      return this.driver.set(this.item, value);
    };

    StorageItem.prototype.remove = function() {
      this.driver.remove(this.item);
      return this.parent._remove(this.item);
    };

    return StorageItem;

  })();

  Storage = (function() {
    function Storage(callback) {
      this._remove = __bind(this._remove, this);
      this.remove = __bind(this.remove, this);
      this.set = __bind(this.set, this);
      this.get = __bind(this.get, this);
      this.reuse = __bind(this.reuse, this);
      var drivers, _ref;
      _ref = [
        {}, 0, {
          "localstorage": "LocalStorage",
          "indexeddb": "IndexedDB"
        }, this
      ], this.items = _ref[0], this.lastKey = _ref[1], drivers = _ref[2], window.DBStorage = _ref[3];
      Loading.start().progress("Loading Database");
      console.log(Tester);
      if (Tester.indexeddb) {
        this.driver = new (DepMan.helper("storage/Drivers/" + drivers.indexeddb))((function(_this) {
          return function() {
            Loading.end();
            return callback();
          };
        })(this));
      } else if (Tester.localstorage) {
        this.driver = new (DepMan.helper("storage/Drivers/" + drivers.localstorage))((function(_this) {
          return function() {
            Loading.end();
            return callback();
          };
        })(this));
      }
      return this;
    }

    Storage.prototype.reuse = function(item) {
      return this.items[item] || (this.items[item] = new StorageItem(item, this.lastKey++, this));
    };

    Storage.prototype.get = function(item, callback, parse) {
      if (parse == null) {
        parse = false;
      }
      return (this.reuse(item)).get(callback, parse);
    };

    Storage.prototype.set = function(item, value, stringify) {
      if (stringify == null) {
        stringify = false;
      }
      return (this.reuse(item)).set(value, stringify);
    };

    Storage.prototype.remove = function(item) {
      return (this.reuse(item)).remove();
    };

    Storage.prototype._remove = function(item) {
      return this.items[item] = null;
    };

    return Storage;

  })();

  module.exports = Storage;

}).call(this);
}, "classes/helpers/Tester": function(exports, require, module) {(function() {
  var NORMIALIZES, PREFIXES, TESTS, Tester, win,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  win = (function() {
    if (window.getWindow != null) {
      return window.getWindow();
    } else {
      return window;
    }
  })();

  PREFIXES = ["moz", "webkit", "ms"];

  TESTS = {
    "indexeddb": function() {
      var prefix, _i, _len;
      if (win.indexedDB) {
        return true;
      }
      for (_i = 0, _len = PREFIXES.length; _i < _len; _i++) {
        prefix = PREFIXES[_i];
        if (win["" + prefix + "IndexedDB"] != null) {
          return true;
        }
      }
      return false;
    },
    "localstorage": function() {
      return ((typeof chrome !== "undefined" && chrome !== null ? chrome.storage : void 0) != null) || (win.localStorage != null);
    },
    "chrome.storage": function() {
      return (typeof chrome !== "undefined" && chrome !== null) && (chrome.storage != null);
    },
    "webkitNotifications": function() {
      return typeof webkitNotifications !== "undefined" && webkitNotifications !== null;
    },
    "mozNotifications": function() {
      return typeof Notification !== "undefined" && Notification !== null;
    },
    "mac": function() {
      return (navigator.userAgent.indexOf("Macintosh")) >= 0;
    },
    "requestAnimationFrame": function() {
      var prefix, _i, _len;
      if (win.requestAnimationFrame) {
        return true;
      }
      for (_i = 0, _len = PREFIXES.length; _i < _len; _i++) {
        prefix = PREFIXES[_i];
        if (win["" + prefix + "RequestAnimationFrame"]) {
          return true;
        }
      }
      return false;
    },
    "audioContext": function() {
      return (win.AudioContext != null) || (win.webkitAudioContext != null);
    },
    "getUserMedia": function() {
      return (navigator.getUserMedia != null) || (navigator.webkitGetUserMedia != null) || (navigator.mozGetUserMedia != null) || (navigator.oGetUserMedia != null) || (navigator.msGetUserMedia != null);
    }
  };

  NORMIALIZES = {
    "indexeddb": function() {
      var PROPS, prefix, prop, _i, _j, _k, _len, _len1, _len2, _results;
      if (!win.indexedDB) {
        PROPS = ["IDBCursor", "IDBCursorWithValue", "IDBTransaction", "IDBDatabase", "IDBIndex", "IDBKeyRange", "IDBFactory", "IDBObjectStore", "IDBOpenDBRequest", "IDBRequest", "IDBVersionChangeEvent"];
        for (_i = 0, _len = PROPS.length; _i < _len; _i++) {
          prop = PROPS[_i];
          for (_j = 0, _len1 = PREFIXES.length; _j < _len1; _j++) {
            prefix = PREFIXES[_j];
            if (win["" + prefix + "IndexedDB"] != null) {
              win[prop] = win["" + prefix + prop];
            }
          }
        }
        _results = [];
        for (_k = 0, _len2 = PREFIXES.length; _k < _len2; _k++) {
          prefix = PREFIXES[_k];
          if (win["" + prefix + "IndexedDB"] != null) {
            _results.push(win.indexedDB = win["" + prefix + "IndexedDB"]);
          }
        }
        return _results;
      }
    },
    "localstorage": function() {
      win.LocalStorage = {};
      if ((typeof chrome !== "undefined" && chrome !== null) && (chrome.storage != null)) {
        win.LocalStorage.set = function(key, value) {
          return chrome.storage.local.set({
            key: value
          });
        };
        win.LocalStorage.get = function() {
          var args;
          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          return chrome.storage.local.get.apply(chrome.storage.local, args);
        };
        return win.LocalStorage.remove = chrome.storage.local.remove;
      } else {
        win.LocalStorage.set = function(key, value) {
          return localStorage.setItem(key, value);
        };
        win.LocalStorage.get = function(item, callback) {
          var res;
          res = {};
          res[item] = win.localStorage.getItem(item);
          return callback(res);
        };
        return win.LocalStorage.remove = function(item) {
          return win.localStorage.removeItem(item);
        };
      }
    },
    "requestAnimationFrame": function() {
      var prefix, _i, _len;
      if (win.requestAnimationFrame == null) {
        for (_i = 0, _len = PREFIXES.length; _i < _len; _i++) {
          prefix = PREFIXES[_i];
          if (win["" + prefix + "RequestAnimationFrame"] != null) {
            return win.requestAnimationFrame = win["" + prefix + "RequestAnimationFrame"];
          }
        }
      }
    },
    "audioContext": function() {
      return win.audioContext = win.AudioContext || win.webkitAudioContext;
    },
    "getUserMedia": function() {
      if (navigator.getUserMedia == null) {
        return navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia;
      }
    }
  };

  Tester = (function(_super) {
    __extends(Tester, _super);

    function Tester(cb) {
      this.log("Tester Online");
      this.tests();
      this.normalize();
      if (cb != null) {
        cb();
      }
    }

    Tester.prototype.tests = function() {
      var name, test, _results;
      _results = [];
      for (name in TESTS) {
        test = TESTS[name];
        _results.push(this[name] = test());
      }
      return _results;
    };

    Tester.prototype.normalize = function() {
      var name, normalize, _results;
      _results = [];
      for (name in NORMIALIZES) {
        normalize = NORMIALIZES[name];
        _results.push(normalize());
      }
      return _results;
    };

    return Tester;

  })(window.IS.Object);

  module.exports = Tester;

}).call(this);
}, "classes/helpers/Translate": function(exports, require, module) {(function(){
  var LanguageHelper;
  LanguageHelper = (function(superclass){
    var prototype = extend$((import$(LanguageHelper, superclass).displayName = 'LanguageHelper', LanguageHelper), superclass).prototype, constructor = LanguageHelper;
    function LanguageHelper(Runtime){
      var this$ = this instanceof ctor$ ? this : new ctor$;
      this$.Runtime = Runtime;
      this$._translateAll = bind$(this$, '_translateAll', prototype);
      this$._hook = bind$(this$, '_hook', prototype);
      this$._translate = bind$(this$, '_translate', prototype);
      this$.switchLanguage = bind$(this$, 'switchLanguage', prototype);
      this$.echo("Initializing Language Controls");
      this$.Runtime.init("language", "string");
      this$.Runtime.subscribe("prop-language-change", function(){
        return this$.switchLanguage(this$.Runtime.get("language"));
      });
      this$._language = {};
      DBStorage.get("lang", function(lang){
        var language;
        language = lang || "en-US";
        this$.log(language);
        return this$.Runtime.set('language', language);
      });
      return this$;
    } function ctor$(){} ctor$.prototype = prototype;
    prototype.switchLanguage = function(language){
      var e;
      this.language = language;
      this.echo("Switching language to " + this.language);
      try {
        DepMan.language(this.language);
        this._language = JSONImport[this.language + ""];
        DBStorage.set("lang", this.language);
        return this._translateAll();
      } catch (e$) {
        e = e$;
        this._language = {};
        return this.log("Error Encountered", e);
      }
    };
    prototype._translate = function(text){
      var ref$;
      return ((ref$ = this._language) != null ? ref$[text] : void 8) || text;
    };
    prototype._hook = function(text, area){
      var string;
      area == null && (area = null);
      clearTimeout(this.timer);
      this.timer = setTimeout(this._translateAll, 0);
      string = "data-translate = '" + text + "'";
      if (area != null) {
        string += " data-target='" + area + "'";
      }
      return string;
    };
    prototype._translateAll = function(){
      var me;
      me = this;
      return jQuery("*[data-translate]").each(function(element){
        var target;
        if (this.tagName === "INPUT") {
          target = this.dataset["target"] || "value";
          return this[target] = me._translate(this.dataset["translate"]);
        } else {
          return this.innerHTML = me._translate(this.dataset["translate"]);
        }
      });
    };
    return LanguageHelper;
  }(IS.Object));
  window.LanguageHelper = new LanguageHelper(Runtime);
  window.T = window.LanguageHelper._translate;
  window._T = window.LanguageHelper._hook;
  window.__T = window.LanguageHelper._translateAll;
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
}, "classes/helpers/storage/Drivers/IndexedDB": function(exports, require, module) {(function(){
  var DB_NAME, DB_STORE, DB_VERSION, IndexedDBDriver;
  DB_NAME = "tadpole";
  DB_STORE = "storage";
  DB_VERSION = 3;
  IndexedDBDriver = (function(superclass){
    var prototype = extend$((import$(IndexedDBDriver, superclass).displayName = 'IndexedDBDriver', IndexedDBDriver), superclass).prototype, constructor = IndexedDBDriver;
    function IndexedDBDriver(loadedDatabase){
      var this$ = this instanceof ctor$ ? this : new ctor$;
      this$.loadedDatabase = loadedDatabase;
      this$.upgradeEvent = bind$(this$, 'upgradeEvent', prototype);
      this$.errorEvent = bind$(this$, 'errorEvent', prototype);
      this$.successEvent = bind$(this$, 'successEvent', prototype);
      this$.init = bind$(this$, 'init', prototype);
      this$.openDatabase = bind$(this$, 'openDatabase', prototype);
      this$.remove = bind$(this$, 'remove', prototype);
      this$.set = bind$(this$, 'set', prototype);
      this$.get = bind$(this$, 'get', prototype);
      this$.init().openDatabase();
      return this$;
    } function ctor$(){} ctor$.prototype = prototype;
    prototype.get = function(key, callback){
      var trans, store, req, this$ = this;
      if (!this.db) {
        return this.log("DB NOT READY");
      }
      trans = this.db.transaction([DB_STORE], 'readonly');
      store = trans.objectStore(DB_STORE);
      req = store.get(key);
      req.onsuccess = function(it){
        var rez;
        rez = null;
        if (it.target.result && it.target.result.value) {
          rez = it.target.result.value;
        }
        return callback(rez);
      };
      req.onerror = function(){
        throw new Error("Could not get item " + key);
      };
      return this;
    };
    prototype.set = function(key, value){
      var trans, store, req, this$ = this;
      if (!this.db) {
        return this.log("DB NOT READY");
      }
      trans = this.db.transaction([DB_STORE], 'readwrite');
      store = trans.objectStore(DB_STORE);
      req = store.put({
        value: value,
        key: key
      });
      req.onsuccess = function(){
        return this$.log("Successfuly saved " + key + " as " + value);
      };
      req.onerror = function(){
        throw new Error("Could not save " + key + " as " + value);
      };
      return this;
    };
    prototype.remove = function(key){
      var trans, store, req, this$ = this;
      if (!this.db) {
        return this.log("DB NOT READY");
      }
      trans = this.db.transaction([DB_STORE], 'readwrite');
      store = trans.objectStore(DB_STORE);
      req = store['delete'](key);
      req.onsuccess = function(){
        return this$.log("Successfuly deleted " + key);
      };
      req.onerror = function(){
        throw new Error("Could not delete item " + key);
      };
      return this;
    };
    prototype.openDatabase = function(){
      var req;
      req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onsuccess = this.successEvent;
      req.onerror = this.errorEvent;
      return req.onupgradeneeded = this.upgradeEvent;
    };
    prototype.init = function(){
      this.db = null;
      return this;
    };
    prototype.successEvent = function(it){
      this.db = it.target.result;
      return this.loadedDatabase();
    };
    prototype.errorEvent = function(it){
      return this.log("Database Error : ", it);
    };
    prototype.upgradeEvent = function(it){
      var db, store;
      db = it.target.result;
      it.target.transaction.error = this.errorEvent;
      if (db.objectStoreNames.contains(DB_STORE)) {
        db.deleteObjectStore(DB_STORE);
      }
      return store = db.createObjectStore(DB_STORE, {
        keyPath: 'key'
      });
    };
    return IndexedDBDriver;
  }(IS.Object));
  module.exports = IndexedDBDriver;
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
}, "classes/helpers/storage/Drivers/LocalStorage": function(exports, require, module) {(function(){
  var LocalStorageDriver;
  LocalStorageDriver = (function(superclass){
    var prototype = extend$((import$(LocalStorageDriver, superclass).displayName = 'LocalStorageDriver', LocalStorageDriver), superclass).prototype, constructor = LocalStorageDriver;
    function LocalStorageDriver(it){
      var this$ = this instanceof ctor$ ? this : new ctor$;
      this$.removeObject = bind$(this$, 'removeObject', prototype);
      this$.remove = bind$(this$, 'remove', prototype);
      this$.handleObject = bind$(this$, 'handleObject', prototype);
      this$.get = bind$(this$, 'get', prototype);
      this$.setObject = bind$(this$, 'setObject', prototype);
      this$.set = bind$(this$, 'set', prototype);
      if (typeof it === 'function') {
        it();
      }
      return this$;
    } function ctor$(){} ctor$.prototype = prototype;
    prototype.set = function(item, value){
      switch (typeof value) {
      case "object":
        return this.setObject(item, value);
      case "function":
        return this.set(item, value());
      default:
        return this.setString(item, value);
      }
    };
    prototype.setObject = function(item, object){
      var props, res$, key, value, i$, len$, prop, results$ = [];
      res$ = [];
      for (key in object) {
        value = object[key];
        res$.push(key);
      }
      props = res$;
      this.setString(item, "#>object" + item);
      this.setString("#>object" + item + "-props", JSON.stringify(props));
      for (i$ = 0, len$ = props.length; i$ < len$; ++i$) {
        prop = props[i$];
        results$.push(this.set("#>object" + item + "-prop-" + prop, object[prop]));
      }
      return results$;
    };
    prototype.get = function(item, callback){
      var this$ = this;
      return this.getString(item, function(set){
        var init;
        init = set[item];
        if (!init) {
          return callback(null);
        }
        if (init.substr(0, 2) === '#>') {
          return this$.getObject(init, callback);
        } else {
          return callback(init);
        }
      });
    };
    prototype.getObject = function(item, callback){
      var object, this$ = this;
      object = {};
      return this.handleObject(item, 'get', object, function(){
        return callback(object);
      });
    };
    prototype.handleObject = function(item, func, object, callback){
      var propsstring, this$ = this;
      propsstring = item + "-props";
      return this.getString(propsstring, function(set){
        var props, ref$, tick, length, i$, len$, prop, int;
        props = JSON.parse(set[propsstring]);
        ref$ = [0, props.length], tick = ref$[0], length = ref$[1];
        for (i$ = 0, len$ = props.length; i$ < len$; ++i$) {
          prop = props[i$];
          (fn$.call(this$, prop, prop));
        }
        return int = setInterval(function(){
          if (tick === length) {
            clearInterval(int);
            if (callback != null) {
              return callback();
            }
          }
        }, 5);
        function fn$(p, prop){
          var propstring, f, h, this$ = this;
          propstring = item + "-prop-" + prop;
          f = (function(){
            switch (func) {
            case 'get':
              return this.get;
            default:
              return this.remove;
            }
          }.call(this));
          h = (function(){
            switch (func) {
            case 'get':
              return function(it){
                return object[p] = it;
              };
            default:
              return function(){
                return this$.removeString(propstring);
              };
            }
          }());
          (function(){
            f(propstring, h);
            return tick++;
          })();
        }
      });
    };
    prototype.remove = function(item){
      var this$ = this;
      return this.getString(item, function(set){
        var init;
        init = set[item];
        if (init.substr(0, 2) === '#>') {
          this$.removeObject(init);
        }
        this$.removeString(item);
        return this$.removeString("#>object" + item + "-props");
      });
    };
    prototype.removeObject = function(item){
      var this$ = this;
      return this.handleObject(item, 'remove', function(){});
    };
    prototype.setString = LocalStorage.set;
    prototype.getString = LocalStorage.get;
    prototype.removeString = LocalStorage.remove;
    return LocalStorageDriver;
  }(IS.Object));
  module.exports = LocalStorageDriver;
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
}, "data/languages/en-US": function(exports, require, module) {if (!window.JSONImport) window.JSONImport = {}; 
var item = JSON.parse("null", function(key, value) { var v; try { v = eval(value) } catch(e) { v = value } return v;}); 
return window.JSONImport['en-US'] = module.exports = item;}, "data/languages/ro-RO": function(exports, require, module) {if (!window.JSONImport) window.JSONImport = {}; 
var item = JSON.parse("{\"Your eMail Address\":\"Adresa ta de eMail\",\"Sign Up\":\"Inregistrează\"}", function(key, value) { var v; try { v = eval(value) } catch(e) { v = value } return v;}); 
return window.JSONImport['ro-RO'] = module.exports = item;}, "data/views/index": function(exports, require, module) {module.exports = function(__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      __out.push(DepMan.render(["partials", "header"]));
    
      __out.push('\n');
    
      __out.push(DepMan.render(["partials", "signup"]));
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
}}, "data/views/loading/index": function(exports, require, module) {module.exports = function(__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      __out.push('<section id="loadingscreen">\n    <section></section>\n    <aside data-location=\'left\'></aside>\n    <aside data-location=\'right\'></aside>\n    <article>\n        <p><span id="loadingmessage"></span></p>\n    </article>\n</section>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
}}, "data/views/partials/header": function(exports, require, module) {module.exports = function(__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      __out.push('<header>\n    <h1>');
    
      __out.push(__sanitize(window.AppInfo.displayname));
    
      __out.push(' <small>&lt;TIME&gt;</small></h1>\n</header>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
}}, "data/views/partials/signup": function(exports, require, module) {module.exports = function(__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      __out.push('<aside>\n    <label for="mail"><h1 ');
    
      __out.push(__sanitize(_T("Get invited to test")));
    
      __out.push('></h1></label>\n    <section>\n        <div class="input"><input type="email" id="mail" ');
    
      __out.push(__sanitize(_T("Your eMail Address", "placeholder")));
    
      __out.push('></div>\n        <div class="submit"><input type="submit" ');
    
      __out.push(__sanitize(_T("Sign Up")));
    
      __out.push('></input></div>\n    </section>\n</aside>');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
}}});
window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;window.AppInfo = {
  "name": "lyticlanding",
  "displayname": "Lytic",
  "version": "0.0.1",
  "author": {
    "name": "Sabin Marcu",
    "email": "sabinmarcu@gmail.com"
  },
  "dependencies": {
    "coffee-script": "*",
    "cliparser": "*",
    "express": "*",
    "stylus": "*",
    "nib": "*",
    "isf": "*",
    "stitchw": "*",
    "eco": "*",
    "mime": "*",
    "LiveScript": "*",
    "js-yaml": "*",
    "traceur": "0.0.24"
  },
  "scripts": {
    "create-dir-structure": "mkdir lib src spec bin",
    "compile": "node node_modules/.bin/coffee -c -o lib src",
    "run-tests": "node node_modules/.bin/jasmine-node --coffee --noColor spec",
    "test": "npm run-script compile && npm run-script run-tests"
  },
  "main": "node server -s -c -v -p 80",
  "subdomain": "lytic",
  "engines": {
    "node": "3"
  }
}
;/** COPYRIGHT
Copyright (c) Sabin Marcu 2009-2013, Powered by the Arrowhead System (tm)
You may not redistribute this software under any circumstance other than sharing the link to any online service supplied by myself, Sabin Marcu, or any market or application store it might be registered in without consulting with the author, or using the software in any commercial way.
Other than that, feel free to enjoy the application!

@Application Name : Lytic
@Author           : Sabin Marcu <sabinmarcu@gmail.com>
@Version          : 0.0.1
@Date Compiled    : Fri Feb 28 2014 06:04:31 GMT+0000 (GMT)
**/

(function(module){(function(){var CHARS="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");Math.uuid=function(len,radix){var chars=CHARS,uuid=[],i;radix=radix||chars.length;if(len){for(i=0;i<len;i++)uuid[i]=chars[0|Math.random()*radix]}else{var r;uuid[8]=uuid[13]=uuid[18]=uuid[23]="-";uuid[14]="4";for(i=0;i<36;i++){if(!uuid[i]){r=0|Math.random()*16;uuid[i]=chars[i==19?r&3|8:r]}}}return uuid.join("")};Math.uuidFast=function(){var chars=CHARS,uuid=new Array(36),rnd=0,r;for(var i=0;i<36;i++){if(i==8||i==13||i==18||i==23){uuid[i]="-"}else if(i==14){uuid[i]="4"}else{if(rnd<=2)rnd=33554432+Math.random()*16777216|0;r=rnd&15;rnd=rnd>>4;uuid[i]=chars[i==19?r&3|8:r]}}return uuid.join("")};Math.uuidCompact=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(c){var r=Math.random()*16|0,v=c=="x"?r:r&3|8;return v.toString(16)})}})();(function(){if(!this.require){var modules={},cache={},require=function(name,root){var path=expand(root,name),module=cache[path],fn;if(module){return module.exports}else if(fn=modules[path]||modules[path=expand(path,"./index")]){module={id:path,exports:{}};try{cache[path]=module;fn(module.exports,function(name){return require(name,dirname(path))},module);return module.exports}catch(err){delete cache[path];throw err}}else{throw"module '"+name+"' not found"}},expand=function(root,name){var results=[],parts,part;if(/^\.\.?(\/|$)/.test(name)){parts=[root,name].join("/").split("/")}else{parts=name.split("/")}for(var i=0,length=parts.length;i<length;i++){part=parts[i];if(part==".."){results.pop()}else if(part!="."&&part!=""){results.push(part)}}return results.join("/")},dirname=function(path){return path.split("/").slice(0,-1).join("/")};this.require=function(name){return require(name,"")};this.require.define=function(bundle){for(var key in bundle)modules[key]=bundle[key]}}return this.require.define}).call(this)({DefineProperty:function(exports,require,module){(function(){var DefineProperty,dp,_root,__slice=[].slice;_root=null;if(typeof root!=="undefined"&&root!==null){_root=root}else if(typeof window!=="undefined"&&window!==null){_root=window}else{_root={}}DefineProperty=function(){function DefineProperty(){}DefineProperty.prototype.define=function(property,getter,setter,parent){if(parent==null){parent=_root}this.defineSetter(property,setter,parent);return this.defineGetter(property,getter,parent)};DefineProperty.prototype.defineSetter=function(property,setter,parent){if(parent==null){parent=_root}if(property!=null&&setter!=null&&parent!=null){return parent.__defineSetter__(property,setter)}};DefineProperty.prototype.defineGetter=function(property,getter,parent){if(parent==null){parent=_root}if(property!=null&&getter!=null&&parent!=null){return parent.__defineGetter__(property,getter)}};return DefineProperty}();dp=new DefineProperty;module.exports=function(){var args;args=1<=arguments.length?__slice.call(arguments,0):[];return dp.define.apply(dp,args)};module.exports.extend={define:function(prop,getter,setter,parent){if(parent==null){parent=this.prototype}return dp.define.apply(this,[prop,getter,setter,parent])},defineSetter:function(prop,setter,parent){if(parent==null){parent=this.prototype}return dp.defineSetter.apply(this,[prop,setter,parent])},defineGetter:function(prop,getter,parent){if(parent==null){parent=this.prototype}return dp.defineGetter.apply(this,[prop,getter,parent])}}}).call(this)},Enum:function(exports,require,module){(function(){var Enum;Enum=function(){function Enum(items,offset){var item,key,_i,_len;if(offset==null){offset=0}for(key=_i=0,_len=items.length;_i<_len;key=++_i){item=items[key];this[item]=key+offset}}return Enum}();module.exports=Enum}).call(this)},ErrorReporter:function(exports,require,module){(function(){var ErrorReporter,__bind=function(fn,me){return function(){return fn.apply(me,arguments)}},__indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i}return-1};ErrorReporter=function(){function ErrorReporter(){this.toString=__bind(this.toString,this)}ErrorReporter._errors={"Unknown Error":["An unknown error has occurred"]};ErrorReporter._indices=[ErrorReporter._errors["Unknown Error"][0]];ErrorReporter._groups=["Unknown Error"];ErrorReporter.wrapCustomError=function(error){return"["+error.name+"] "+error.message};ErrorReporter.generate=function(errorCode,extra){if(extra==null){extra=null}return(new this).generate(errorCode,extra)};ErrorReporter.extended=function(){var error,errors,group,key,_i,_len,_ref;_ref=this.errors;for(group in _ref){errors=_ref[group];this._errors[group]=errors;this._groups.push(group);for(key=_i=0,_len=errors.length;_i<_len;key=++_i){error=errors[key];this._indices.push(this._errors[group][key])}}this.prototype._=this;delete this.errors;return this.include(ErrorReporter.prototype)};ErrorReporter.prototype.generate=function(errCode,extra){var errors,group,_ref,_ref1;this.errCode=errCode;if(extra==null){extra=null}if(!this._._indices[this.errCode]){this.name=this._._groups[0];this.message=this._._errors[this._._groups[0]][0]}else{this.message=this._._indices[this.errCode];if(extra){this.message+=" - Extra Data : "+extra}_ref=this._._errors;for(group in _ref){errors=_ref[group];if(!(_ref1=this.message,__indexOf.call(errors,_ref1)>=0)){continue}this.name=group;break}}return this};ErrorReporter.prototype.toString=function(){return"["+this.name+"] "+this.message+" |"+this.errCode+"|"};return ErrorReporter}();module.exports=ErrorReporter}).call(this)},"Modules/Mediator":function(exports,require,module){(function(){var Modules;Modules={Observer:require("Modules/Observer")};Modules.Mediator=function(){var extended,included,installTo,key,value,_ref;function Mediator(){}_ref=Modules.Observer;for(key in _ref){value=_ref[key];Mediator.prototype[key]=value}installTo=function(object){this.delegate("publish",object);return this.delegate("subscribe",object)};included=function(){this.prototype.queue={};return this.prototype._delegates={publish:true,subscribe:true}};extended=function(){this.queue={};return this._delegates={publish:true,subscribe:true}};return Mediator}();module.exports=Modules.Mediator.prototype}).call(this)},"Modules/ORM":function(exports,require,module){(function(){var Modules,V,__indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i}return-1};Modules={};V=require("Variable");Modules.ORM=function(){function ORM(){}ORM.prototype._identifier="BasicORM";ORM.prototype._reccords={};ORM.prototype._symlinks={};ORM.prototype._head=0;ORM.prototype._props=[];ORM.prototype.get=function(which){if(typeof which==="object"){return this.getAdv(which)}return this._symlinks[which]||this._reccords[which]||null};ORM.prototype.getAdv=function(what){var check,key,rec,results,_ref,_ref1;results=[];check=function(rec){var final,k,mod,modfinal,recs,v,val,value,_i,_len;for(k in what){v=what[k];final=false;if(rec[k]==null){break}if(typeof v==="object"){for(mod in v){val=v[mod];modfinal=true;switch(mod){case"$gt":if(rec[k].get()<=val){modfinal=false;break}break;case"$gte":if(rec[k].get()<val){modfinal=false;break}break;case"$lt":if(rec[k].get()>=val){modfinal=false;break}break;case"$lte":if(rec[k].get()>val){modfinal=false;break}break;case"$contains":recs=rec[k].get();if(recs.constructor!==Array){modfinal=false;break}modfinal=false;for(_i=0,_len=recs.length;_i<_len;_i++){value=recs[_i];if(value===val){modfinal=true;break}}}if(modfinal===false){break}}if(modfinal===true){final=true}}else if(rec[k].get()===v){final=true}else{break}}if(final){return results.push(rec)}};_ref=this._reccords;for(key in _ref){rec=_ref[key];check(rec)}_ref1=this._symlinks;for(key in _ref1){rec=_ref1[key];check(rec)}if(results.length===0){return null}if(results.length===1){return results[0]}return results};ORM.prototype["delete"]=function(which){var _base,_base1;if((_base=this._reccords)[which]==null){_base[which]=null}return(_base1=this._symlinks)[which]!=null?(_base1=this._symlinks)[which]:_base1[which]=null};ORM.prototype.create=function(id,args){var prop,uuid,_i,_len,_ref;if(this._reccords==null){this._reccords={}}if(args==null){args={}}uuid=id||args._id||this._head;if(args._id==null){args._id=uuid}uuid=Math.uuidFast(uuid);args._uuid=uuid;args._fn=this;if(typeof this.preCreate==="function"){this.preCreate(args)}this._reccords[uuid]=new this(args);this._reccords[uuid]._constructor(args);if(typeof this.postCreate==="function"){this.postCreate(this._reccords[uuid],args)}if(id!=null&&id!==this._head){this._symlinks[id]=this._reccords[uuid]}if(uuid===this._head){this._head++}_ref=this._props;for(_i=0,_len=_ref.length;_i<_len;_i++){prop=_ref[_i];this._reccords[uuid][prop]=V.spawn()}return this._reccords[uuid]};ORM.prototype.reuse=function(which,args){var rez;if(args==null){args={}}rez=this.get(which);if(rez!=null){return rez}return this.create(which,args)};ORM.prototype.addProp=function(prop){var key,rec,_ref,_results;this._props.push(prop);_ref=this._reccords;_results=[];for(key in _ref){rec=_ref[key];_results.push(rec[prop]!=null?rec[prop]:rec[prop]=V.spawn())}return _results};ORM.prototype.removeProp=function(prop){var k,key,p,rec,_i,_len,_ref,_ref1;_ref=this._reccords;for(key in _ref){rec=_ref[key];if(rec[prop]==null){rec[prop]=null}}_ref1=this._props;for(k=_i=0,_len=_ref1.length;_i<_len;k=++_i){p=_ref1[k];if(p===prop){return this._props.splice(k,1)}}};ORM.prototype.extended=function(){this._excludes=["_fn","_uuid","_id"];return this.include({_constructor:function(args){var key,value,valueSet;valueSet={};this._uuid=args._uuid||null;this._id=args._id||null;this.fn=args._fn;for(key in args){value=args[key];if(__indexOf.call(this.fn._excludes,key)<0&&this.constructFilter(key,value)!==false){valueSet[key]=value}}if(this.init!=null){return this.init.call(this,valueSet)}},constructFilter:function(key,value){return true},remove:function(){return this.parent.remove(this.id)}})};return ORM}();module.exports=Modules.ORM.prototype}).call(this)},"Modules/Observer":function(exports,require,module){(function(){var Modules,__slice=[].slice;Modules={};Modules.Observer=function(){function Observer(){}Observer.prototype.delegateEvent=function(event,handler,object){var c,_base;if(object==null){object=window}if(event.substr(0,2)==="on"){event=event.substr(2)}if((_base=this.queue)[event]==null){_base[event]=[]}c=this.queue[event].length;this.queue[event].unshift(function(){return handler.apply(object,arguments)});return c};Observer.prototype.subscribe=function(event,handler){return this.delegateEvent(event,handler,this)};Observer.prototype.publish=function(){var args,event,handler,key,_ref;args=1<=arguments.length?__slice.call(arguments,0):[];event=args[0];args=args.splice(1);if(!event||this.queue[event]==null){return this}_ref=this.queue[event];for(key in _ref){handler=_ref[key];if(key!=="__head"){handler.apply(this,args)}}return this};Observer.prototype.unsubscribe=function(event,id){if(!this.queue[event]){return null}if(!this.queue[event][id]){return null}return this.queue[event].splice(id,1)};Observer.prototype.included=function(){return this.prototype.queue={}};Observer.prototype.extended=function(){return this.queue={}};return Observer}();module.exports=Modules.Observer.prototype}).call(this)},"Modules/Overload":function(exports,require,module){(function(){var CRITERIA,Include,Modules,_count,__slice=[].slice,__bind=function(fn,me){return function(){return fn.apply(me,arguments)}};Modules={};_count=function(object){var key,nr,value;nr=0;for(key in object){value=object[key];nr++}return nr};CRITERIA={args:function(crit,args){return args.length===crit}};Include=function(){function Include(){}Include.prototype.overload=function(sets){var helper;helper=new Modules.Overload(sets,this);return function(){var args;args=1<=arguments.length?__slice.call(arguments,0):[];helper.parent=this;return helper.verifyAll.apply(helper,args)}};return Include}();Modules.Overload=function(){function Overload(sets,parent){var aux,i,j,name,set,_i,_j,_ref,_ref1,_ref2;this.parent=parent;this.verify=__bind(this.verify,this);this.verifyAll=__bind(this.verifyAll,this);this.names=[];this.verifies=[];this.handles=[];for(name in sets){set=sets[name];this.names.push(name);this.verifies.push(set["if"]||null);this.handles.push(set.then||null)}for(i=_i=0,_ref=this.verifies.length-1;0<=_ref?_i<=_ref:_i>=_ref;i=0<=_ref?++_i:--_i){for(j=_j=_ref1=i+1,_ref2=this.verifies.length;_ref1<=_ref2?_j<=_ref2:_j>=_ref2;j=_ref1<=_ref2?++_j:--_j){if(_count(this.verifies[i])<_count(this.verifies[j])){aux=this.verifies[i];this.verifies[i]=this.verifies[j];this.verifies[j]=aux;aux=this.names[i];this.names[i]=this.names[j];this.names[j]=aux;aux=this.handles[i];this.handles[i]=this.handles[j];this.handles[j]=aux}}}}Overload.prototype.verifyAll=function(){var args,how,key,set,what,_i,_len,_ref;args=1<=arguments.length?__slice.call(arguments,0):[];this.args=args;_ref=this.verifies;for(key=_i=0,_len=_ref.length;_i<_len;key=++_i){set=_ref[key];if(set!=null){for(what in set){how=set[what];if(!this.verify(what,how)){break}return this.handles[key].apply(this.parent,this.args)}}}return(this.handles["default"]||this.handles[key-1]).apply(this.parent,this.args)};Overload.prototype.verify=function(what,how){if(CRITERIA[what]){return CRITERIA[what](how,this.args)}else{what=parseInt(what.replace("arg",""))-1;if(this.args[what]!=null){return how.apply(this.parent,this.args)}return false}};return Overload}();module.exports=Include.prototype}).call(this)},"Modules/Pythonize":function(exports,require,module){(function(){var CRITERIA,Include,Modules,_count,__slice=[].slice,__bind=function(fn,me){return function(){return fn.apply(me,arguments)}},__indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i}return-1};Modules={};_count=function(object){var key,nr,value;nr=0;for(key in object){value=object[key];nr++}return nr};CRITERIA={args:function(crit,args){return args.length===crit}};Include=function(){function Include(){}Include.prototype.parameterize=function(sets,callback){var helper;helper=new Modules.Pythonize(sets,callback);return function(){var args;args=1<=arguments.length?__slice.call(arguments,0):[];helper.parent=this;return helper.verifyAll.apply(helper,args)}};return Include}();Modules.Pythonize=function(){function Pythonize(sets,callback){var item,newItem,_i,_len;this.callback=callback;this.verifyAll=__bind(this.verifyAll,this);this.parent=null;this._options=[];for(_i=0,_len=sets.length;_i<_len;_i++){item=sets[_i];newItem={name:item.name||item.toString(),"default":item["default"]||null};this._options.push(newItem)}}Pythonize.prototype.verifyAll=function(){var arg,args,curArg,i,items,lastarg,len,_i,_ref,_ref1,_ref2;args=1<=arguments.length?__slice.call(arguments,0):[];this.args=args;this.options={};len=this.args.length-1;i=0;while(this.args.length>1){curArg=this._options[i];arg=this.args.shift();this.options[curArg.name]=arg||curArg["default"];i++}lastarg=this.args.pop();items=this.verifyObject(lastarg,len);if(len<this._options.length-1){for(i=_i=_ref=len+(items.length===0),_ref1=this._options.length-1;_ref<=_ref1?_i<=_ref1:_i>=_ref1;i=_ref<=_ref1?++_i:--_i){if(!(_ref2=this._options[i].name,__indexOf.call(items,_ref2)>=0)){this.options[this._options[i].name]=this._options[i]["default"]}}}return this.callback.apply(this.parent,[this.options])};Pythonize.prototype.verifyObject=function(obj,id){var name,omits,option,valid,value,_i,_len,_ref;omits=[];if(typeof obj==="object"){for(name in obj){value=obj[name];valid=false;_ref=this._options;for(_i=0,_len=_ref.length;_i<_len;_i++){option=_ref[_i];if(option.name===name){valid=true;break}}if(!valid){this.options[this._options[id].name]=obj;return[]}else{omits.push(name);this.options[name]=value}}}else{this.options[this._options[id].name]=obj}return omits};return Pythonize}();module.exports=Include.prototype}).call(this)},"Modules/StateMachine":function(exports,require,module){(function(){var Modules,__bind=function(fn,me){return function(){return fn.apply(me,arguments)}};Modules={};Modules.StateMachine=function(){function StateMachine(){this.delegateContext=__bind(this.delegateContext,this)}StateMachine.prototype.extended=function(){this._contexts=[];return this._activeContext=null};StateMachine.prototype.included=function(){this.prototype._contexts=[];return this.prototype._activeContext=null};StateMachine.prototype.delegateContext=function(context){var l;if(this._find(context)){return null}l=this._contexts.length;this._contexts[l]=context;if(context.activate==null){context.activate=function(){}}if(context.deactivate==null){context.deactivate=function(){}}return this};StateMachine.prototype.getActiveContextID=function(){return this._activeContext};StateMachine.prototype.getActiveContext=function(){return this._activeContext};StateMachine.prototype.getContext=function(context){return this._contexts[context]||null};StateMachine.prototype._find=function(con){var key,value,_i,_len,_ref;_ref=this._contexts;for(value=_i=0,_len=_ref.length;_i<_len;value=++_i){key=_ref[value];if(con===key){return value}}return null};StateMachine.prototype.activateContext=function(context){var con;con=this._find(context);if(con==null){return null}if(this._activeContext===con){return true}this._activeContext=con;return context.activate()};StateMachine.prototype.deactivateContext=function(context){if(this._find(context)==null){return null}this._activeContext=null;return context.deactivate()};StateMachine.prototype.switchContext=function(context){var con;if(context==null){con=this._activeContext+1;if(con===this._contexts.length){con=0}}else{con=this._find(context);if(con==null){return null}}this.deactivateContext(this._contexts[this._activeContext]);this.activateContext(this._contexts[con]);return this._contexts[con]};return StateMachine}();module.exports=Modules.StateMachine.prototype}).call(this)},Object:function(exports,require,module){(function(){var $,Obiect,clone,_excludes,__indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i}return-1},__slice=[].slice;_excludes=["included","extended"];clone=function(obj){var k,o,v;o=obj instanceof Array?[]:{};for(k in obj){v=obj[k];if(v!=null&&typeof v==="object"){o[k]=clone(v)}else{o[k]=v}}return o};$=function(what){return $[what]||null};Obiect=function(){var extended,included;function Obiect(){}Obiect.clone=function(obj){if(obj==null){obj=this}debugger;return Obiect.proxy(Obiect.include,Obiect.proxy(Obiect.extend,function(){})(obj))(obj.prototype)};Obiect.extend=function(obj,into){var k,value,_ref;if(into==null){into=this}obj=clone(obj);for(k in obj){value=obj[k];if(!(__indexOf.call(_excludes,k)>=0||obj._excludes!=null&&__indexOf.call(obj._excludes,k)>=0)){if(into[k]!=null){if(into["super"]==null){into["super"]={}}into["super"][k]=into[k]}into[k]=value}}if((_ref=obj.extended)!=null){_ref.call(into)}return this};Obiect.include=function(obj,into){var key,value,_ref;if(into==null){into=this}obj=clone(obj);for(key in obj){value=obj[key];into.prototype[key]=value}if((_ref=obj.included)!=null){_ref.call(into)}return this};Obiect.proxy=function(){var to,what,_this=this;what=arguments[0];to=arguments[1];if(typeof what==="function"){return function(){var args;args=1<=arguments.length?__slice.call(arguments,0):[];return what.apply(to,args)}}else{return this[what]}};Obiect.delegate=function(property,context){var _ref;if(((_ref=this._delegates)!=null?_ref[property]:void 0)!=null===false&&this._deleagates[property]!==false){trigger("Cannot delegate member "+property+" to "+context)}return context[property]=this.proxy(function(){return this[property](arguments)},this)};Obiect.echo=function(){var args,owner,prefix,_d;args=1<=arguments.length?__slice.call(arguments,0):[];_d=new Date;owner="<owner not supported>";if(this.__proto__!=null){owner=this.__proto__.constructor.name}prefix="["+_d.getHours()+":"+_d.getMinutes()+":"+_d.getSeconds()+"]["+(this.name||owner)+"]";if(args[0]===""){args[0]=prefix}else{args[0]=""+prefix+" "+args[0]}console.log(args);return this};Obiect.log=function(){var args;args=1<=arguments.length?__slice.call(arguments,0):[];if(typeof IS!=="undefined"&&IS!==null&&IS.isDev||typeof window!=="undefined"&&window!==null&&window.isDev||typeof root!=="undefined"&&root!==null&&root.isDev||isDev){args.unshift("");this.echo.apply(this,args)}return this};extended=function(){};included=function(){};Obiect.include({proxy:Obiect.proxy,log:Obiect.log,echo:Obiect.echo});return Obiect}();module.exports=Obiect}).call(this)},Promise:function(exports,require,module){(function(){var Promise,__slice=[].slice;Promise=function(){function Promise(promise){if(promise instanceof Promise){return promise}this.callbacks=[]}Promise.prototype.then=function(ok,err,progr){this.callbacks.push({ok:ok,error:err,progress:progr});return this};Promise.prototype.resolve=function(){var args,callback,time,_this=this;args=1<=arguments.length?__slice.call(arguments,0):[];callback=this.callbacks.shift();if(callback&&callback.ok){callback.ok.apply(this,args)}else{time=setTimeout(function(){clearTimeout(time);return _this.resolve.apply(_this,args)},50)}return this};Promise.prototype.reject=function(){var args,callback,time,_this=this;args=1<=arguments.length?__slice.call(arguments,0):[];callback=this.callbacks.shift();if(callback&&callback.error){callback.error.apply(this,args)}else{time=setTimeout(function(){clearTimeout(time);return _this.reject.apply(_this,args)},50)}return this};Promise.prototype.progress=function(){var args,callback;args=1<=arguments.length?__slice.call(arguments,0):[];callback=this.callbacks[0];if(callback&&callback.progress){callback.progress.apply(this,args)}return this};return Promise}();module.exports=Promise}).call(this)},Variable:function(exports,require,module){(function(){var Variable,_ref,__hasProp={}.hasOwnProperty,__extends=function(child,parent){for(var key in parent){if(__hasProp.call(parent,key))child[key]=parent[key]}function ctor(){this.constructor=child}ctor.prototype=parent.prototype;child.prototype=new ctor;child.__super__=parent.prototype;return child};Variable=function(_super){__extends(Variable,_super);function Variable(){_ref=Variable.__super__.constructor.apply(this,arguments);return _ref}Variable.spawn=function(){var x;x=new this;x._value=null;return x};Variable.prototype.get=function(){return this._value};Variable.prototype.set=function(value){return this._value=value};Variable.prototype.add=function(reccord){if(this._value==null||this._value.constructor!==Array){this._value=[]}return this._value.push(reccord)};return Variable}(require("Object"));if(typeof module!=="undefined"&&module!==null){module.exports=Variable}}).call(this)},async:function(exports,require,module){(function(){var async={};var root,previous_async;root=this;if(root!=null){previous_async=root.async}async.noConflict=function(){root.async=previous_async;return async};function only_once(fn){var called=false;return function(){if(called)throw new Error("Callback was already called.");called=true;fn.apply(root,arguments)}}var _each=function(arr,iterator){if(arr.forEach){return arr.forEach(iterator)}for(var i=0;i<arr.length;i+=1){iterator(arr[i],i,arr)}};var _map=function(arr,iterator){if(arr.map){return arr.map(iterator)}var results=[];_each(arr,function(x,i,a){results.push(iterator(x,i,a))});return results};var _reduce=function(arr,iterator,memo){if(arr.reduce){return arr.reduce(iterator,memo)}_each(arr,function(x,i,a){memo=iterator(memo,x,i,a)});return memo};var _keys=function(obj){if(Object.keys){return Object.keys(obj)}var keys=[];for(var k in obj){if(obj.hasOwnProperty(k)){keys.push(k)}}return keys};if(typeof process==="undefined"||!process.nextTick){if(typeof setImmediate==="function"){async.nextTick=function(fn){setImmediate(fn)};async.setImmediate=async.nextTick}else{async.nextTick=function(fn){setTimeout(fn,0)};async.setImmediate=async.nextTick}}else{async.nextTick=process.nextTick;if(typeof setImmediate!=="undefined"){async.setImmediate=setImmediate}else{async.setImmediate=async.nextTick}}async.each=function(arr,iterator,callback){callback=callback||function(){};if(!arr.length){return callback()}var completed=0;_each(arr,function(x){iterator(x,only_once(function(err){if(err){callback(err);callback=function(){}}else{completed+=1;if(completed>=arr.length){callback(null)}}}))})};async.forEach=async.each;async.eachSeries=function(arr,iterator,callback){callback=callback||function(){};if(!arr.length){return callback()}var completed=0;var iterate=function(){iterator(arr[completed],function(err){if(err){callback(err);callback=function(){}}else{completed+=1;if(completed>=arr.length){callback(null)}else{iterate()}}})};iterate()};async.forEachSeries=async.eachSeries;async.eachLimit=function(arr,limit,iterator,callback){var fn=_eachLimit(limit);fn.apply(null,[arr,iterator,callback])};async.forEachLimit=async.eachLimit;var _eachLimit=function(limit){return function(arr,iterator,callback){callback=callback||function(){};if(!arr.length||limit<=0){return callback()}var completed=0;var started=0;var running=0;(function replenish(){if(completed>=arr.length){return callback()}while(running<limit&&started<arr.length){started+=1;running+=1;iterator(arr[started-1],function(err){if(err){callback(err);callback=function(){}}else{completed+=1;running-=1;if(completed>=arr.length){callback()}else{replenish()}}})}})()}};var doParallel=function(fn){return function(){var args=Array.prototype.slice.call(arguments);return fn.apply(null,[async.each].concat(args))}};var doParallelLimit=function(limit,fn){return function(){var args=Array.prototype.slice.call(arguments);return fn.apply(null,[_eachLimit(limit)].concat(args))}};var doSeries=function(fn){return function(){var args=Array.prototype.slice.call(arguments);return fn.apply(null,[async.eachSeries].concat(args))}};var _asyncMap=function(eachfn,arr,iterator,callback){var results=[];arr=_map(arr,function(x,i){return{index:i,value:x}});eachfn(arr,function(x,callback){iterator(x.value,function(err,v){results[x.index]=v;callback(err)})},function(err){callback(err,results)})};async.map=doParallel(_asyncMap);async.mapSeries=doSeries(_asyncMap);async.mapLimit=function(arr,limit,iterator,callback){return _mapLimit(limit)(arr,iterator,callback)};var _mapLimit=function(limit){return doParallelLimit(limit,_asyncMap)};async.reduce=function(arr,memo,iterator,callback){async.eachSeries(arr,function(x,callback){iterator(memo,x,function(err,v){memo=v;callback(err)})},function(err){callback(err,memo)})};async.inject=async.reduce;async.foldl=async.reduce;async.reduceRight=function(arr,memo,iterator,callback){var reversed=_map(arr,function(x){return x}).reverse();async.reduce(reversed,memo,iterator,callback)};async.foldr=async.reduceRight;var _filter=function(eachfn,arr,iterator,callback){var results=[];arr=_map(arr,function(x,i){return{index:i,value:x}});eachfn(arr,function(x,callback){iterator(x.value,function(v){if(v){results.push(x)}callback()})},function(err){callback(_map(results.sort(function(a,b){return a.index-b.index}),function(x){return x.value}))})};async.filter=doParallel(_filter);async.filterSeries=doSeries(_filter);async.select=async.filter;async.selectSeries=async.filterSeries;var _reject=function(eachfn,arr,iterator,callback){var results=[];arr=_map(arr,function(x,i){return{index:i,value:x}});eachfn(arr,function(x,callback){iterator(x.value,function(v){if(!v){results.push(x)}callback()})},function(err){callback(_map(results.sort(function(a,b){return a.index-b.index}),function(x){return x.value}))})};async.reject=doParallel(_reject);async.rejectSeries=doSeries(_reject);var _detect=function(eachfn,arr,iterator,main_callback){eachfn(arr,function(x,callback){iterator(x,function(result){if(result){main_callback(x);main_callback=function(){}}else{callback()}})},function(err){main_callback()})};async.detect=doParallel(_detect);async.detectSeries=doSeries(_detect);async.some=function(arr,iterator,main_callback){async.each(arr,function(x,callback){iterator(x,function(v){if(v){main_callback(true);main_callback=function(){}}callback()})},function(err){main_callback(false)})};async.any=async.some;async.every=function(arr,iterator,main_callback){async.each(arr,function(x,callback){iterator(x,function(v){if(!v){main_callback(false);main_callback=function(){}}callback()})},function(err){main_callback(true)})};async.all=async.every;async.sortBy=function(arr,iterator,callback){async.map(arr,function(x,callback){iterator(x,function(err,criteria){if(err){callback(err)}else{callback(null,{value:x,criteria:criteria})}})},function(err,results){if(err){return callback(err)}else{var fn=function(left,right){var a=left.criteria,b=right.criteria;return a<b?-1:a>b?1:0};callback(null,_map(results.sort(fn),function(x){return x.value}))}})};async.auto=function(tasks,callback){callback=callback||function(){};var keys=_keys(tasks);if(!keys.length){return callback(null)}var results={};var listeners=[];var addListener=function(fn){listeners.unshift(fn)};var removeListener=function(fn){for(var i=0;i<listeners.length;i+=1){if(listeners[i]===fn){listeners.splice(i,1);return}}};var taskComplete=function(){_each(listeners.slice(0),function(fn){fn()})};addListener(function(){if(_keys(results).length===keys.length){callback(null,results);callback=function(){}}});_each(keys,function(k){var task=tasks[k]instanceof Function?[tasks[k]]:tasks[k];var taskCallback=function(err){var args=Array.prototype.slice.call(arguments,1);if(args.length<=1){args=args[0]}if(err){var safeResults={};_each(_keys(results),function(rkey){safeResults[rkey]=results[rkey]});safeResults[k]=args;callback(err,safeResults);callback=function(){}}else{results[k]=args;async.setImmediate(taskComplete)}};var requires=task.slice(0,Math.abs(task.length-1))||[];var ready=function(){return _reduce(requires,function(a,x){return a&&results.hasOwnProperty(x)},true)&&!results.hasOwnProperty(k)};if(ready()){task[task.length-1](taskCallback,results)}else{var listener=function(){if(ready()){removeListener(listener);task[task.length-1](taskCallback,results)}};addListener(listener)}})};async.waterfall=function(tasks,callback){callback=callback||function(){};if(tasks.constructor!==Array){var err=new Error("First argument to waterfall must be an array of functions");return callback(err)}if(!tasks.length){return callback()}var wrapIterator=function(iterator){return function(err){if(err){callback.apply(null,arguments);callback=function(){}}else{var args=Array.prototype.slice.call(arguments,1);var next=iterator.next();if(next){args.push(wrapIterator(next))}else{args.push(callback)}async.setImmediate(function(){iterator.apply(null,args)})}}};wrapIterator(async.iterator(tasks))()};var _parallel=function(eachfn,tasks,callback){callback=callback||function(){};if(tasks.constructor===Array){eachfn.map(tasks,function(fn,callback){if(fn){fn(function(err){var args=Array.prototype.slice.call(arguments,1);if(args.length<=1){args=args[0]}callback.call(null,err,args)})}},callback)}else{var results={};eachfn.each(_keys(tasks),function(k,callback){tasks[k](function(err){var args=Array.prototype.slice.call(arguments,1);if(args.length<=1){args=args[0]}results[k]=args;callback(err)})},function(err){callback(err,results)})}};async.parallel=function(tasks,callback){_parallel({map:async.map,each:async.each},tasks,callback)};async.parallelLimit=function(tasks,limit,callback){_parallel({map:_mapLimit(limit),each:_eachLimit(limit)},tasks,callback)};async.series=function(tasks,callback){callback=callback||function(){};if(tasks.constructor===Array){async.mapSeries(tasks,function(fn,callback){if(fn){fn(function(err){var args=Array.prototype.slice.call(arguments,1);if(args.length<=1){args=args[0]}callback.call(null,err,args)})}},callback)}else{var results={};async.eachSeries(_keys(tasks),function(k,callback){tasks[k](function(err){var args=Array.prototype.slice.call(arguments,1);if(args.length<=1){args=args[0]}results[k]=args;callback(err)})},function(err){callback(err,results)
})}};async.iterator=function(tasks){var makeCallback=function(index){var fn=function(){if(tasks.length){tasks[index].apply(null,arguments)}return fn.next()};fn.next=function(){return index<tasks.length-1?makeCallback(index+1):null};return fn};return makeCallback(0)};async.apply=function(fn){var args=Array.prototype.slice.call(arguments,1);return function(){return fn.apply(null,args.concat(Array.prototype.slice.call(arguments)))}};var _concat=function(eachfn,arr,fn,callback){var r=[];eachfn(arr,function(x,cb){fn(x,function(err,y){r=r.concat(y||[]);cb(err)})},function(err){callback(err,r)})};async.concat=doParallel(_concat);async.concatSeries=doSeries(_concat);async.whilst=function(test,iterator,callback){if(test()){iterator(function(err){if(err){return callback(err)}async.whilst(test,iterator,callback)})}else{callback()}};async.doWhilst=function(iterator,test,callback){iterator(function(err){if(err){return callback(err)}if(test()){async.doWhilst(iterator,test,callback)}else{callback()}})};async.until=function(test,iterator,callback){if(!test()){iterator(function(err){if(err){return callback(err)}async.until(test,iterator,callback)})}else{callback()}};async.doUntil=function(iterator,test,callback){iterator(function(err){if(err){return callback(err)}if(!test()){async.doUntil(iterator,test,callback)}else{callback()}})};async.queue=function(worker,concurrency){if(concurrency===undefined){concurrency=1}function _insert(q,data,pos,callback){if(data.constructor!==Array){data=[data]}_each(data,function(task){var item={data:task,callback:typeof callback==="function"?callback:null};if(pos){q.tasks.unshift(item)}else{q.tasks.push(item)}if(q.saturated&&q.tasks.length===concurrency){q.saturated()}async.setImmediate(q.process)})}var workers=0;var q={tasks:[],concurrency:concurrency,saturated:null,empty:null,drain:null,push:function(data,callback){_insert(q,data,false,callback)},unshift:function(data,callback){_insert(q,data,true,callback)},process:function(){if(workers<q.concurrency&&q.tasks.length){var task=q.tasks.shift();if(q.empty&&q.tasks.length===0){q.empty()}workers+=1;var next=function(){workers-=1;if(task.callback){task.callback.apply(task,arguments)}if(q.drain&&q.tasks.length+workers===0){q.drain()}q.process()};var cb=only_once(next);worker(task.data,cb)}},length:function(){return q.tasks.length},running:function(){return workers}};return q};async.cargo=function(worker,payload){var working=false,tasks=[];var cargo={tasks:tasks,payload:payload,saturated:null,empty:null,drain:null,push:function(data,callback){if(data.constructor!==Array){data=[data]}_each(data,function(task){tasks.push({data:task,callback:typeof callback==="function"?callback:null});if(cargo.saturated&&tasks.length===payload){cargo.saturated()}});async.setImmediate(cargo.process)},process:function process(){if(working)return;if(tasks.length===0){if(cargo.drain)cargo.drain();return}var ts=typeof payload==="number"?tasks.splice(0,payload):tasks.splice(0);var ds=_map(ts,function(task){return task.data});if(cargo.empty)cargo.empty();working=true;worker(ds,function(){working=false;var args=arguments;_each(ts,function(data){if(data.callback){data.callback.apply(null,args)}});process()})},length:function(){return tasks.length},running:function(){return working}};return cargo};var _console_fn=function(name){return function(fn){var args=Array.prototype.slice.call(arguments,1);fn.apply(null,args.concat([function(err){var args=Array.prototype.slice.call(arguments,1);if(typeof console!=="undefined"){if(err){if(console.error){console.error(err)}}else if(console[name]){_each(args,function(x){console[name](x)})}}}]))}};async.log=_console_fn("log");async.dir=_console_fn("dir");async.memoize=function(fn,hasher){var memo={};var queues={};hasher=hasher||function(x){return x};var memoized=function(){var args=Array.prototype.slice.call(arguments);var callback=args.pop();var key=hasher.apply(null,args);if(key in memo){callback.apply(null,memo[key])}else if(key in queues){queues[key].push(callback)}else{queues[key]=[callback];fn.apply(null,args.concat([function(){memo[key]=arguments;var q=queues[key];delete queues[key];for(var i=0,l=q.length;i<l;i++){q[i].apply(null,arguments)}}]))}};memoized.memo=memo;memoized.unmemoized=fn;return memoized};async.unmemoize=function(fn){return function(){return(fn.unmemoized||fn).apply(null,arguments)}};async.times=function(count,iterator,callback){var counter=[];for(var i=0;i<count;i++){counter.push(i)}return async.map(counter,iterator,callback)};async.timesSeries=function(count,iterator,callback){var counter=[];for(var i=0;i<count;i++){counter.push(i)}return async.mapSeries(counter,iterator,callback)};async.compose=function(){var fns=Array.prototype.reverse.call(arguments);return function(){var that=this;var args=Array.prototype.slice.call(arguments);var callback=args.pop();async.reduce(fns,args,function(newargs,fn,cb){fn.apply(that,newargs.concat([function(){var err=arguments[0];var nextargs=Array.prototype.slice.call(arguments,1);cb(err,nextargs)}]))},function(err,results){callback.apply(that,[err].concat(results))})}};var _applyEach=function(eachfn,fns){var go=function(){var that=this;var args=Array.prototype.slice.call(arguments);var callback=args.pop();return eachfn(fns,function(fn,cb){fn.apply(that,args.concat([cb]))},callback)};if(arguments.length>2){var args=Array.prototype.slice.call(arguments,2);return go.apply(this,args)}else{return go}};async.applyEach=doParallel(_applyEach);async.applyEachSeries=doSeries(_applyEach);async.forever=function(fn,callback){function next(err){if(err){if(callback){return callback(err)}throw err}fn(next)}next()};if(typeof define!=="undefined"&&define.amd){define([],function(){return async})}else if(typeof module!=="undefined"&&module.exports){module.exports=async}else{root.async=async}})()}});var require=this.require;(function(){var IS;require("Object");require("async");IS={Variable:require("Variable"),Promise:require("Promise"),Object:require("Object"),ErrorReporter:require("ErrorReporter"),Enum:require("Enum"),DefineProperty:require("DefineProperty"),Modules:{StateMachine:require("Modules/StateMachine"),Pythonize:require("Modules/Pythonize"),Overload:require("Modules/Overload"),Observer:require("Modules/Observer"),ORM:require("Modules/ORM"),Mediator:require("Modules/Mediator")}};if(typeof window!=="undefined"&&window!==null){window.IS=IS}if(typeof module!=="undefined"&&module!==null){module.exports=IS}if(typeof root!=="undefined"&&root!==null){root.IS=IS}}).call(this)}).call({},typeof module=="undefined"?typeof window=="undefined"?root:window:module);
(function(/*! Stitch !*/) {
	if (!this.require) {
		var modules = {}, cache = {}, require = function(name, root) {
			var path = expand(root, name), module = cache[path], fn;
			if (module) {
				return module.exports;
			} else if (fn = modules[path] || modules[path = expand(path, './index')]) {
				module = {id: path, exports: {}};
				try {
					cache[path] = module;
					fn(module.exports, function(name) {
						return require(name, dirname(path));
					}, module);
					return module.exports;
				} catch (err) {
					delete cache[path];
					throw err;
				}
			} else {
				throw 'module \'' + name + '\' not found';
			}
		}, expand = function(root, name) {
			var results = [], parts, part;
			if (/^\.\.?(\/|$)/.test(name)) {
				parts = [root, name].join('/').split('/');
			} else {
				parts = name.split('/');
			}
			for (var i = 0, length = parts.length; i < length; i++) {
				part = parts[i];
				if (part == '..') {
					results.pop();
				} else if (part != '.' && part != '') {
					results.push(part);
				}
			}
			return results.join('/');
		}, dirname = function(path) {
			return path.split('/').slice(0, -1).join('/');
		};
		this.require = function(name) {
			return require(name, '');
		}
		this.require.define = function(bundle) {
			for (var key in bundle)
				modules[key] = bundle[key];
		};
	}
	return this.require.define;
}).call(this)({"Application": function(exports, require, module) {(function(){
  var Application;
  Application = (function(superclass){
    var prototype = extend$((import$(Application, superclass).displayName = 'Application', Application), superclass).prototype, constructor = Application;
    function Application(getStylesFunc){
      var this$ = this instanceof ctor$ ? this : new ctor$;
      this$.getStylesFunc = getStylesFunc;
      this$.completeLoad = bind$(this$, 'completeLoad', prototype);
      this$.bootStrapAngular = bind$(this$, 'bootStrapAngular', prototype);
      this$.loadLibs = bind$(this$, 'loadLibs', prototype);
      this$.getStyles = bind$(this$, 'getStyles', prototype);
      this$.loadEssentials = bind$(this$, 'loadEssentials', prototype);
      this$.fixMobile = bind$(this$, 'fixMobile', prototype);
      this$.loadDepMan = bind$(this$, 'loadDepMan', prototype);
      this$.checkDevMode = bind$(this$, 'checkDevMode', prototype);
      document.title = AppInfo.displayname;
      this$.LifeCycle = new IS.Promise();
      this$.LifeCycle.then(this$.checkDevMode).then(this$.fixMobile).then(this$.loadDepMan).then(this$.getStyles).then(this$.loadLibs).then(this$.loadEssentials).then(this$.bootStrapAngular).then(this$.completeLoad);
      window.Tester = new (require("classes/helpers/Tester"))(function(){
        return this$.LifeCycle.resolve();
      });
      return this$;
    } function ctor$(){} ctor$.prototype = prototype;
    prototype.checkDevMode = function(){
      if (window.isDev != null) {
        document.title = "Testing " + window.AppInfo.displayname + "!";
        return this.LifeCycle.resolve();
      }
    };
    prototype.loadDepMan = function(){
      window.DepMan = new (require("classes/helpers/DepMan"));
      return this.LifeCycle.resolve();
    };
    prototype.fixMobile = function(){
      var meta;
      meta = document.createElement("meta");
      meta.setAttribute("name", "viewport");
      meta.setAttribute("content", "width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1");
      document.head.appendChild(meta);
      meta = document.createElement("link");
      meta.setAttribute("rel", "apple-touch-icon");
      meta.setAttribute("href", "icon.ico");
      document.head.appendChild(meta);
      meta = document.createElement("meta");
      meta.setAttribute("name", "apple-mobile-web-app-capable");
      meta.setAttribute("content", "yes");
      document.head.appendChild(meta);
      meta = document.createElement('link');
      meta.setAttribute('rel', 'icon');
      meta.setAttribute('href', 'icon.ico');
      document.head.appendChild(meta);
      return this.LifeCycle.resolve();
    };
    prototype.loadEssentials = function(){
      var this$ = this;
      window.Loading = new (DepMan.helper("Loading"));
      return window.DBStorage = new (DepMan.helper("Storage"))(function(){
        return this$.LifeCycle.resolve();
      });
    };
    prototype.getStyles = function(){
      document.head.appendChild(this.getStylesFunc());
      return this.LifeCycle.resolve();
    };
    prototype.loadLibs = function(){
      var this$ = this;
      DepMan.googleFont("Roboto", [100, 400]);
      DepMan.extScript("//ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular.min.js");
      DepMan.extScript("//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js");
      return DepMan.extScript("http://preludels.com/prelude-browser-min.js", function(){
        importAll$(window, window.require("prelude-ls"));
        return this$.LifeCycle.resolve();
      });
    };
    prototype.bootStrapAngular = function(){
      var ref$;
      angular.module(AppInfo.displayname, []);
      DepMan.helper("Runtime");
      DepMan.helper("Translate");
      ref$ = DepMan.helper("Notification"), window.Notifications = ref$[0], window.Toast = ref$[1];
      return this.LifeCycle.resolve();
    };
    prototype.completeLoad = function(){
      return document.body.innerHTML = DepMan.render("index");
    };
    return Application;
  }(IS.Object));
  module.exports = Application;
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
  function importAll$(obj, src){
    for (var key in src) obj[key] = src[key];
    return obj;
  }
}).call(this);
}, "classes/helpers/DepMan": function(exports, require, module) {(function(){
  var DepMan, join$ = [].join, slice$ = [].slice;
  DepMan = (function(superclass){
    var prototype = extend$((import$(DepMan, superclass).displayName = 'DepMan', DepMan), superclass).prototype, constructor = DepMan;
    function DepMan(basePrefix, deps){
      this.basePrefix = basePrefix != null ? basePrefix : "";
      this.deps = deps != null
        ? deps
        : [];
      this.googleFont = bind$(this, 'googleFont', prototype);
      this.extScript = bind$(this, 'extScript', prototype);
      this.renderer = bind$(this, 'renderer', prototype);
      this.gesture = bind$(this, 'gesture', prototype);
      this.angular = bind$(this, 'angular', prototype);
      this.lib = bind$(this, 'lib', prototype);
      this.model = bind$(this, 'model', prototype);
      this.model = bind$(this, 'model', prototype);
      this.controller = bind$(this, 'controller', prototype);
      this.helper = bind$(this, 'helper', prototype);
      this.language = bind$(this, 'language', prototype);
      this.font = bind$(this, 'font', prototype);
      this.image = bind$(this, 'image', prototype);
      this.stylesheet = bind$(this, 'stylesheet', prototype);
      this.doc = bind$(this, 'doc', prototype);
      this.render = bind$(this, 'render', prototype);
      this.classes = bind$(this, 'classes', prototype);
      this.data = bind$(this, 'data', prototype);
      this._require = bind$(this, '_require', prototype);
      this.echo("Activated DependenciesManager!");
    }
    prototype._require = function(module, prefix){
      var str;
      prefix == null && (prefix = "");
      if (module.substr == null) {
        module = join$.call(module, "/");
      }
      str = prefix + "" + module;
      if (this.deps[str]) {
        return this.deps[str];
      } else {
        this.deps[str] = require(this.basePrefix + "" + str);
        return this.deps[prefix + "" + module];
      }
    };
    prototype.data = function(module, suffix){
      suffix == null && (suffix = "");
      return this._require(module, "data/" + suffix);
    };
    prototype.classes = function(module, suffix){
      suffix == null && (suffix = "");
      return this._require(module, "classes/" + suffix);
    };
    prototype.render = function(module){
      var args;
      args = slice$.call(arguments, 1);
      return this.data(module, "views/").apply(this, args);
    };
    prototype.doc = function(module){
      return this.data("docs/");
    };
    prototype.stylesheet = function(module){
      return this.data(module, "stylesheets/");
    };
    prototype.image = function(module){
      return this.data(module, "images/");
    };
    prototype.font = function(module){
      return this.data(module, "fonts/");
    };
    prototype.language = function(module){
      return this.data(module, "languages/");
    };
    prototype.helper = function(module){
      return this.classes(module, "helpers/");
    };
    prototype.controller = function(module){
      return this.classes(module, "controllers/");
    };
    prototype.model = function(module){
      return this.classes(module, "models/");
    };
    prototype.model = function(module){
      return this.classes(module, "models/");
    };
    prototype.lib = function(module){
      return this.classes(module, "libs/");
    };
    prototype.angular = function(module){
      return this.classes(module, "angular/");
    };
    prototype.gesture = function(module){
      return this.classes(module, "gestures/");
    };
    prototype.renderer = function(module){
      return this.classes(module, "renderers/");
    };
    prototype.extScript = function(src, callback){
      var _name, _s, this$ = this;
      callback == null && (callback = null);
      if (this.deps[src]) {
        return this.deps[src];
      }
      _name = src.substr(src.lastIndexOf("/") + 1);
      _s = this.deps[src] = document.createElement("script");
      _s.src = src;
      _s.id = _name;
      _s.onload = function(){
        this$.log(_name + " has been loaded! (" + src + ")");
        _s.parentElement.removeChild(_s);
        if (callback != null) {
          return callback(_s);
        }
      };
      document.head.appendChild(_s);
      return _s;
    };
    prototype.googleFont = function(font, sizes, subsets){
      var names, _s, string;
      subsets == null && (subsets = null);
      if (this.deps[font]) {
        return this.deps[font];
      }
      names = font.split(" ");
      _s = this.deps[font + ""] = document.createElement("link");
      string = "http://fonts.googleapis.com/css?family=" + names.join("+") + ":" + sizes.join(",");
      if (subsets != null) {
        string += "&subset=" + subsets.join(",");
      }
      _s.setAttribute("href", string);
      _s.setAttribute("rel", "stylesheet");
      _s.setAttribute("type", "text/css");
      document.head.appendChild(_s);
      return _s;
    };
    return DepMan;
  }(IS.Object));
  module.exports = DepMan;
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
}, "classes/helpers/Loading": function(exports, require, module) {(function(){
  var LoadingHelper;
  LoadingHelper = (function(superclass){
    var prototype = extend$((import$(LoadingHelper, superclass).displayName = 'LoadingHelper', LoadingHelper), superclass).prototype, constructor = LoadingHelper;
    function LoadingHelper(){
      var f, ref$, this$ = this instanceof ctor$ ? this : new ctor$;
      this$.progress = bind$(this$, 'progress', prototype);
      this$.resize = bind$(this$, 'resize', prototype);
      this$.end = bind$(this$, 'end', prototype);
      this$.start = bind$(this$, 'start', prototype);
      f = document.createElement("div");
      f.innerHTML = DepMan.render(['loading', 'index']);
      document.body.appendChild(f);
      this$.loadingScreen = document.getElementById("loadingscreen");
      this$.asides = [(ref$ = $('#loadingscreen > aside'))[0], ref$[1]];
      this$.message = document.getElementById("loadingmessage");
      window.addEventListener('resize', this$.resize);
      this$.resize();
      this$.echo("Loading screen ready");
      return this$;
    } function ctor$(){} ctor$.prototype = prototype;
    prototype.start = function(){
      this.loadingScreen.className = 'active';
      return this;
    };
    prototype.end = function(){
      this.loadingScreen.className = "";
      return this;
    };
    prototype.resize = function(){
      return map(function(it){
        var angle, arg, transString;
        angle = Math.atan(window.innerWidth / window.innerHeight);
        arg = (function(){
          switch (it.dataset.location) {
          case 'left':
            return "-50%";
          case 'right':
            return "50%";
          }
        }());
        transString = "translateX(" + arg + ")  skew(" + angle + "rad)";
        console.log(transString);
        $(it).css('transform', transString);
        return this;
      })(
      this.asides);
    };
    prototype.progress = function(arg){
      this.message.innerHTML = (function(){
        switch (typeof arg) {
        case 'number':
          return "Loading: " + arg + "%";
        default:
          return arg;
        }
      }());
      return this;
    };
    return LoadingHelper;
  }(IS.Object));
  module.exports = LoadingHelper;
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
}, "classes/helpers/Notification": function(exports, require, module) {(function(){
  var DRIVERS, Drivers, NotificationHelper, Helper, Toast, slice$ = [].slice, join$ = [].join;
  DRIVERS = ['normal', 'webkit', 'moz'];
  Drivers = new IS.Enum(DRIVERS);
  NotificationHelper = (function(superclass){
    var prototype = extend$((import$(NotificationHelper, superclass).displayName = 'NotificationHelper', NotificationHelper), superclass).prototype, constructor = NotificationHelper;
    function NotificationHelper(){
      var this$ = this instanceof ctor$ ? this : new ctor$;
      this$.toastNormal = bind$(this$, 'toastNormal', prototype);
      this$.toastWebkit = bind$(this$, 'toastWebkit', prototype);
      this$.toastMoz = bind$(this$, 'toastMoz', prototype);
      this$.toast = bind$(this$, 'toast', prototype);
      Runtime.init('toast-driver', 'number');
      Runtime.init('toast-timeout', 'number');
      DBStorage.get("toast-timeout", function(timeout){
        var handler;
        timeout == null && (timeout = 5000);
        Runtime.set('toast-timeout', timeout);
        Runtime.set('toast-driver', Drivers['normal']);
        if (Tester['webkitNotifications']) {
          if (!Tester['chrome.storage']) {
            handler = function(){
              webkitNotifications.requestPermission();
              return window.removeEventListener("click");
            };
            window.addEventListener("click", handler);
          }
          Runtime.set('toast-driver', Drivers['webkit']);
        }
        if (Tester['mozNotifications']) {
          handler = function(){
            Notification.requestPermission();
            return window.removeEventListener("click");
          };
          window.addEventListener("click", handler);
          Runtime.set('toast-driver', Drivers['moz']);
        }
        return this$.echo("Notification Helper Online, with driver : ", this$.drive, " and timeout : ", Runtime.get('toast-timeout'));
      });
      return this$;
    } function ctor$(){} ctor$.prototype = prototype;
    prototype.toast = function(title){
      var body;
      title == null && (title = "Notification");
      body = slice$.call(arguments, 1);
      switch (Runtime.get('toast-driver')) {
      case Drivers.webkit:
        if (webkitNotifications.checkPermission() === 0) {
          return this.toastWebkit(title, body);
        } else {
          return this.toastNormal(title, body);
        }
        break;
      case Drivers.moz:
        if (Notification.permission === "granted") {
          return this.toastMoz(title, body);
        } else {
          return this.toastNormal(title, body);
        }
        break;
      default:
        return this.toastNormal(title, body);
      }
    };
    prototype.toastMoz = function(title, body){
      return new Notification(title + join$.call(body, '\n'));
    };
    prototype.toastWebkit = function(title, body){
      var b, i$, len$, item, notif;
      b = body.shift();
      for (i$ = 0, len$ = body.length; i$ < len$; ++i$) {
        item = body[i$];
        b += "\n" + item;
      }
      notif = webkitNotifications.createNotification('icon.ico', title, b);
      notif.ondisplay = function(ev){
        return setTimeout(function(){
          return ev.currentTarget.cancel();
        }, Runtime.get('toast-timeout'));
      };
      return notif.show();
    };
    prototype.toastNormal = function(title, body){
      var b, i$, len$, item;
      b = "";
      if (typeof Modal != 'undefined' && Modal !== null) {
        for (i$ = 0, len$ = body.length; i$ < len$; ++i$) {
          item = body[i$];
          b += "<p>" + item + "</p>";
        }
        return Modal.show({
          title: title,
          content: b
        }, Runtime.get('toast-timeout'));
      } else {
        b = join$.call([title].concat(body), "\n");
        return alert(b);
      }
    };
    return NotificationHelper;
  }(IS.Object));
  Helper = new NotificationHelper();
  Toast = Helper.toast;
  module.exports = [Helper, Toast];
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
}, "classes/helpers/Runtime": function(exports, require, module) {(function(){
  var Runtime, runtime;
  Runtime = (function(superclass){
    var prototype = extend$((import$(Runtime, superclass).displayName = 'Runtime', Runtime), superclass).prototype, constructor = Runtime;
    function Runtime(){
      var this$ = this instanceof ctor$ ? this : new ctor$;
      this$.init = bind$(this$, 'init', prototype);
      this$.set = bind$(this$, 'set', prototype);
      this$.get = bind$(this$, 'get', prototype);
      window.Runtime = this$;
      this$.props = {};
      this$.log("Runtime Activated!");
      return this$;
    } function ctor$(){} ctor$.prototype = prototype;
    prototype.get = function(prop){
      this.log("Got " + prop);
      return this.props[prop];
    };
    prototype.set = function(prop, value){
      this.props[prop] = value;
      this.publish("prop-" + prop + "-change", value);
      return this.log("Prop " + prop + " set to " + value + "! [prop-" + prop + "-change emitted]");
    };
    prototype.init = function(prop, type){
      if (this.props[prop] == null) {
        this.props[prop] = (function(){
          switch (type) {
          case 'array':
            return [];
          case 'object':
            return {};
          case 'number':
          case 'boolean':
            return 0;
          default:
            return "";
          }
        }());
      }
      this.publish("prop-" + prop + "-init");
      return this.log("Prop " + prop + " initialized! [prop-" + prop + "-init emitted]");
    };
    Runtime.include(IS.Modules.Observer);
    return Runtime;
  }(IS.Object));
  runtime = new Runtime();
  angular.module(AppInfo.displayname).value("Runtime", runtime);
  module.exports = runtime;
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
}, "classes/helpers/Storage": function(exports, require, module) {(function() {
  var Storage, StorageItem,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  StorageItem = (function() {
    function StorageItem(item, key, parent) {
      this.item = item;
      this.key = key;
      this.parent = parent;
      this.remove = __bind(this.remove, this);
      this.set = __bind(this.set, this);
      this.get = __bind(this.get, this);
      this.driver = this.parent.driver;
    }

    StorageItem.prototype.get = function(callback, parse) {
      var e;
      if (parse == null) {
        parse = false;
      }
      try {
        return this.driver.get(this.item, (function(_this) {
          return function(value) {
            _this.value = value;
            if (parse) {
              _this.value = JSON.parse(_this.value);
            }
            return callback(_this.value);
          };
        })(this));
      } catch (_error) {
        e = _error;
        return console.log(e.message);
      }
    };

    StorageItem.prototype.set = function(value, stringify) {
      if (stringify == null) {
        stringify = false;
      }
      if (stringify) {
        value = JSON.stringify(value);
      }
      return this.driver.set(this.item, value);
    };

    StorageItem.prototype.remove = function() {
      this.driver.remove(this.item);
      return this.parent._remove(this.item);
    };

    return StorageItem;

  })();

  Storage = (function() {
    function Storage(callback) {
      this._remove = __bind(this._remove, this);
      this.remove = __bind(this.remove, this);
      this.set = __bind(this.set, this);
      this.get = __bind(this.get, this);
      this.reuse = __bind(this.reuse, this);
      var drivers, _ref;
      _ref = [
        {}, 0, {
          "localstorage": "LocalStorage",
          "indexeddb": "IndexedDB"
        }, this
      ], this.items = _ref[0], this.lastKey = _ref[1], drivers = _ref[2], window.DBStorage = _ref[3];
      Loading.start().progress("Loading Database");
      console.log(Tester);
      if (Tester.indexeddb) {
        this.driver = new (DepMan.helper("storage/Drivers/" + drivers.indexeddb))((function(_this) {
          return function() {
            Loading.end();
            return callback();
          };
        })(this));
      } else if (Tester.localstorage) {
        this.driver = new (DepMan.helper("storage/Drivers/" + drivers.localstorage))((function(_this) {
          return function() {
            Loading.end();
            return callback();
          };
        })(this));
      }
      return this;
    }

    Storage.prototype.reuse = function(item) {
      return this.items[item] || (this.items[item] = new StorageItem(item, this.lastKey++, this));
    };

    Storage.prototype.get = function(item, callback, parse) {
      if (parse == null) {
        parse = false;
      }
      return (this.reuse(item)).get(callback, parse);
    };

    Storage.prototype.set = function(item, value, stringify) {
      if (stringify == null) {
        stringify = false;
      }
      return (this.reuse(item)).set(value, stringify);
    };

    Storage.prototype.remove = function(item) {
      return (this.reuse(item)).remove();
    };

    Storage.prototype._remove = function(item) {
      return this.items[item] = null;
    };

    return Storage;

  })();

  module.exports = Storage;

}).call(this);
}, "classes/helpers/Tester": function(exports, require, module) {(function() {
  var NORMIALIZES, PREFIXES, TESTS, Tester, win,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  win = (function() {
    if (window.getWindow != null) {
      return window.getWindow();
    } else {
      return window;
    }
  })();

  PREFIXES = ["moz", "webkit", "ms"];

  TESTS = {
    "indexeddb": function() {
      var prefix, _i, _len;
      if (win.indexedDB) {
        return true;
      }
      for (_i = 0, _len = PREFIXES.length; _i < _len; _i++) {
        prefix = PREFIXES[_i];
        if (win["" + prefix + "IndexedDB"] != null) {
          return true;
        }
      }
      return false;
    },
    "localstorage": function() {
      return ((typeof chrome !== "undefined" && chrome !== null ? chrome.storage : void 0) != null) || (win.localStorage != null);
    },
    "chrome.storage": function() {
      return (typeof chrome !== "undefined" && chrome !== null) && (chrome.storage != null);
    },
    "webkitNotifications": function() {
      return typeof webkitNotifications !== "undefined" && webkitNotifications !== null;
    },
    "mozNotifications": function() {
      return typeof Notification !== "undefined" && Notification !== null;
    },
    "mac": function() {
      return (navigator.userAgent.indexOf("Macintosh")) >= 0;
    },
    "requestAnimationFrame": function() {
      var prefix, _i, _len;
      if (win.requestAnimationFrame) {
        return true;
      }
      for (_i = 0, _len = PREFIXES.length; _i < _len; _i++) {
        prefix = PREFIXES[_i];
        if (win["" + prefix + "RequestAnimationFrame"]) {
          return true;
        }
      }
      return false;
    },
    "audioContext": function() {
      return (win.AudioContext != null) || (win.webkitAudioContext != null);
    },
    "getUserMedia": function() {
      return (navigator.getUserMedia != null) || (navigator.webkitGetUserMedia != null) || (navigator.mozGetUserMedia != null) || (navigator.oGetUserMedia != null) || (navigator.msGetUserMedia != null);
    }
  };

  NORMIALIZES = {
    "indexeddb": function() {
      var PROPS, prefix, prop, _i, _j, _k, _len, _len1, _len2, _results;
      if (!win.indexedDB) {
        PROPS = ["IDBCursor", "IDBCursorWithValue", "IDBTransaction", "IDBDatabase", "IDBIndex", "IDBKeyRange", "IDBFactory", "IDBObjectStore", "IDBOpenDBRequest", "IDBRequest", "IDBVersionChangeEvent"];
        for (_i = 0, _len = PROPS.length; _i < _len; _i++) {
          prop = PROPS[_i];
          for (_j = 0, _len1 = PREFIXES.length; _j < _len1; _j++) {
            prefix = PREFIXES[_j];
            if (win["" + prefix + "IndexedDB"] != null) {
              win[prop] = win["" + prefix + prop];
            }
          }
        }
        _results = [];
        for (_k = 0, _len2 = PREFIXES.length; _k < _len2; _k++) {
          prefix = PREFIXES[_k];
          if (win["" + prefix + "IndexedDB"] != null) {
            _results.push(win.indexedDB = win["" + prefix + "IndexedDB"]);
          }
        }
        return _results;
      }
    },
    "localstorage": function() {
      win.LocalStorage = {};
      if ((typeof chrome !== "undefined" && chrome !== null) && (chrome.storage != null)) {
        win.LocalStorage.set = function(key, value) {
          return chrome.storage.local.set({
            key: value
          });
        };
        win.LocalStorage.get = function() {
          var args;
          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          return chrome.storage.local.get.apply(chrome.storage.local, args);
        };
        return win.LocalStorage.remove = chrome.storage.local.remove;
      } else {
        win.LocalStorage.set = function(key, value) {
          return localStorage.setItem(key, value);
        };
        win.LocalStorage.get = function(item, callback) {
          var res;
          res = {};
          res[item] = win.localStorage.getItem(item);
          return callback(res);
        };
        return win.LocalStorage.remove = function(item) {
          return win.localStorage.removeItem(item);
        };
      }
    },
    "requestAnimationFrame": function() {
      var prefix, _i, _len;
      if (win.requestAnimationFrame == null) {
        for (_i = 0, _len = PREFIXES.length; _i < _len; _i++) {
          prefix = PREFIXES[_i];
          if (win["" + prefix + "RequestAnimationFrame"] != null) {
            return win.requestAnimationFrame = win["" + prefix + "RequestAnimationFrame"];
          }
        }
      }
    },
    "audioContext": function() {
      return win.audioContext = win.AudioContext || win.webkitAudioContext;
    },
    "getUserMedia": function() {
      if (navigator.getUserMedia == null) {
        return navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia;
      }
    }
  };

  Tester = (function(_super) {
    __extends(Tester, _super);

    function Tester(cb) {
      this.log("Tester Online");
      this.tests();
      this.normalize();
      if (cb != null) {
        cb();
      }
    }

    Tester.prototype.tests = function() {
      var name, test, _results;
      _results = [];
      for (name in TESTS) {
        test = TESTS[name];
        _results.push(this[name] = test());
      }
      return _results;
    };

    Tester.prototype.normalize = function() {
      var name, normalize, _results;
      _results = [];
      for (name in NORMIALIZES) {
        normalize = NORMIALIZES[name];
        _results.push(normalize());
      }
      return _results;
    };

    return Tester;

  })(window.IS.Object);

  module.exports = Tester;

}).call(this);
}, "classes/helpers/Translate": function(exports, require, module) {(function(){
  var LanguageHelper;
  LanguageHelper = (function(superclass){
    var prototype = extend$((import$(LanguageHelper, superclass).displayName = 'LanguageHelper', LanguageHelper), superclass).prototype, constructor = LanguageHelper;
    function LanguageHelper(Runtime){
      var this$ = this instanceof ctor$ ? this : new ctor$;
      this$.Runtime = Runtime;
      this$._translateAll = bind$(this$, '_translateAll', prototype);
      this$._hook = bind$(this$, '_hook', prototype);
      this$._translate = bind$(this$, '_translate', prototype);
      this$.switchLanguage = bind$(this$, 'switchLanguage', prototype);
      this$.echo("Initializing Language Controls");
      this$.Runtime.init("language", "string");
      this$.Runtime.subscribe("prop-language-change", function(){
        return this$.switchLanguage(this$.Runtime.get("language"));
      });
      this$._language = {};
      DBStorage.get("lang", function(lang){
        var language;
        language = lang || "en-US";
        this$.log(language);
        return this$.Runtime.set('language', language);
      });
      return this$;
    } function ctor$(){} ctor$.prototype = prototype;
    prototype.switchLanguage = function(language){
      var e;
      this.language = language;
      this.echo("Switching language to " + this.language);
      try {
        DepMan.language(this.language);
        this._language = JSONImport[this.language + ""];
        DBStorage.set("lang", this.language);
        return this._translateAll();
      } catch (e$) {
        e = e$;
        this._language = {};
        return this.log("Error Encountered", e);
      }
    };
    prototype._translate = function(text){
      var ref$;
      return ((ref$ = this._language) != null ? ref$[text] : void 8) || text;
    };
    prototype._hook = function(text, area){
      var string;
      area == null && (area = null);
      clearTimeout(this.timer);
      this.timer = setTimeout(this._translateAll, 0);
      string = "data-translate = '" + text + "'";
      if (area != null) {
        string += " data-target='" + area + "'";
      }
      return string;
    };
    prototype._translateAll = function(){
      var me;
      me = this;
      return jQuery("*[data-translate]").each(function(element){
        var target;
        if (this.tagName === "INPUT") {
          target = this.dataset["target"] || "value";
          return this[target] = me._translate(this.dataset["translate"]);
        } else {
          return this.innerHTML = me._translate(this.dataset["translate"]);
        }
      });
    };
    return LanguageHelper;
  }(IS.Object));
  window.LanguageHelper = new LanguageHelper(Runtime);
  window.T = window.LanguageHelper._translate;
  window._T = window.LanguageHelper._hook;
  window.__T = window.LanguageHelper._translateAll;
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
}, "classes/helpers/storage/Drivers/IndexedDB": function(exports, require, module) {(function(){
  var DB_NAME, DB_STORE, DB_VERSION, IndexedDBDriver;
  DB_NAME = "tadpole";
  DB_STORE = "storage";
  DB_VERSION = 3;
  IndexedDBDriver = (function(superclass){
    var prototype = extend$((import$(IndexedDBDriver, superclass).displayName = 'IndexedDBDriver', IndexedDBDriver), superclass).prototype, constructor = IndexedDBDriver;
    function IndexedDBDriver(loadedDatabase){
      var this$ = this instanceof ctor$ ? this : new ctor$;
      this$.loadedDatabase = loadedDatabase;
      this$.upgradeEvent = bind$(this$, 'upgradeEvent', prototype);
      this$.errorEvent = bind$(this$, 'errorEvent', prototype);
      this$.successEvent = bind$(this$, 'successEvent', prototype);
      this$.init = bind$(this$, 'init', prototype);
      this$.openDatabase = bind$(this$, 'openDatabase', prototype);
      this$.remove = bind$(this$, 'remove', prototype);
      this$.set = bind$(this$, 'set', prototype);
      this$.get = bind$(this$, 'get', prototype);
      this$.init().openDatabase();
      return this$;
    } function ctor$(){} ctor$.prototype = prototype;
    prototype.get = function(key, callback){
      var trans, store, req, this$ = this;
      if (!this.db) {
        return this.log("DB NOT READY");
      }
      trans = this.db.transaction([DB_STORE], 'readonly');
      store = trans.objectStore(DB_STORE);
      req = store.get(key);
      req.onsuccess = function(it){
        var rez;
        rez = null;
        if (it.target.result && it.target.result.value) {
          rez = it.target.result.value;
        }
        return callback(rez);
      };
      req.onerror = function(){
        throw new Error("Could not get item " + key);
      };
      return this;
    };
    prototype.set = function(key, value){
      var trans, store, req, this$ = this;
      if (!this.db) {
        return this.log("DB NOT READY");
      }
      trans = this.db.transaction([DB_STORE], 'readwrite');
      store = trans.objectStore(DB_STORE);
      req = store.put({
        value: value,
        key: key
      });
      req.onsuccess = function(){
        return this$.log("Successfuly saved " + key + " as " + value);
      };
      req.onerror = function(){
        throw new Error("Could not save " + key + " as " + value);
      };
      return this;
    };
    prototype.remove = function(key){
      var trans, store, req, this$ = this;
      if (!this.db) {
        return this.log("DB NOT READY");
      }
      trans = this.db.transaction([DB_STORE], 'readwrite');
      store = trans.objectStore(DB_STORE);
      req = store['delete'](key);
      req.onsuccess = function(){
        return this$.log("Successfuly deleted " + key);
      };
      req.onerror = function(){
        throw new Error("Could not delete item " + key);
      };
      return this;
    };
    prototype.openDatabase = function(){
      var req;
      req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onsuccess = this.successEvent;
      req.onerror = this.errorEvent;
      return req.onupgradeneeded = this.upgradeEvent;
    };
    prototype.init = function(){
      this.db = null;
      return this;
    };
    prototype.successEvent = function(it){
      this.db = it.target.result;
      return this.loadedDatabase();
    };
    prototype.errorEvent = function(it){
      return this.log("Database Error : ", it);
    };
    prototype.upgradeEvent = function(it){
      var db, store;
      db = it.target.result;
      it.target.transaction.error = this.errorEvent;
      if (db.objectStoreNames.contains(DB_STORE)) {
        db.deleteObjectStore(DB_STORE);
      }
      return store = db.createObjectStore(DB_STORE, {
        keyPath: 'key'
      });
    };
    return IndexedDBDriver;
  }(IS.Object));
  module.exports = IndexedDBDriver;
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
}, "classes/helpers/storage/Drivers/LocalStorage": function(exports, require, module) {(function(){
  var LocalStorageDriver;
  LocalStorageDriver = (function(superclass){
    var prototype = extend$((import$(LocalStorageDriver, superclass).displayName = 'LocalStorageDriver', LocalStorageDriver), superclass).prototype, constructor = LocalStorageDriver;
    function LocalStorageDriver(it){
      var this$ = this instanceof ctor$ ? this : new ctor$;
      this$.removeObject = bind$(this$, 'removeObject', prototype);
      this$.remove = bind$(this$, 'remove', prototype);
      this$.handleObject = bind$(this$, 'handleObject', prototype);
      this$.get = bind$(this$, 'get', prototype);
      this$.setObject = bind$(this$, 'setObject', prototype);
      this$.set = bind$(this$, 'set', prototype);
      if (typeof it === 'function') {
        it();
      }
      return this$;
    } function ctor$(){} ctor$.prototype = prototype;
    prototype.set = function(item, value){
      switch (typeof value) {
      case "object":
        return this.setObject(item, value);
      case "function":
        return this.set(item, value());
      default:
        return this.setString(item, value);
      }
    };
    prototype.setObject = function(item, object){
      var props, res$, key, value, i$, len$, prop, results$ = [];
      res$ = [];
      for (key in object) {
        value = object[key];
        res$.push(key);
      }
      props = res$;
      this.setString(item, "#>object" + item);
      this.setString("#>object" + item + "-props", JSON.stringify(props));
      for (i$ = 0, len$ = props.length; i$ < len$; ++i$) {
        prop = props[i$];
        results$.push(this.set("#>object" + item + "-prop-" + prop, object[prop]));
      }
      return results$;
    };
    prototype.get = function(item, callback){
      var this$ = this;
      return this.getString(item, function(set){
        var init;
        init = set[item];
        if (!init) {
          return callback(null);
        }
        if (init.substr(0, 2) === '#>') {
          return this$.getObject(init, callback);
        } else {
          return callback(init);
        }
      });
    };
    prototype.getObject = function(item, callback){
      var object, this$ = this;
      object = {};
      return this.handleObject(item, 'get', object, function(){
        return callback(object);
      });
    };
    prototype.handleObject = function(item, func, object, callback){
      var propsstring, this$ = this;
      propsstring = item + "-props";
      return this.getString(propsstring, function(set){
        var props, ref$, tick, length, i$, len$, prop, int;
        props = JSON.parse(set[propsstring]);
        ref$ = [0, props.length], tick = ref$[0], length = ref$[1];
        for (i$ = 0, len$ = props.length; i$ < len$; ++i$) {
          prop = props[i$];
          (fn$.call(this$, prop, prop));
        }
        return int = setInterval(function(){
          if (tick === length) {
            clearInterval(int);
            if (callback != null) {
              return callback();
            }
          }
        }, 5);
        function fn$(p, prop){
          var propstring, f, h, this$ = this;
          propstring = item + "-prop-" + prop;
          f = (function(){
            switch (func) {
            case 'get':
              return this.get;
            default:
              return this.remove;
            }
          }.call(this));
          h = (function(){
            switch (func) {
            case 'get':
              return function(it){
                return object[p] = it;
              };
            default:
              return function(){
                return this$.removeString(propstring);
              };
            }
          }());
          (function(){
            f(propstring, h);
            return tick++;
          })();
        }
      });
    };
    prototype.remove = function(item){
      var this$ = this;
      return this.getString(item, function(set){
        var init;
        init = set[item];
        if (init.substr(0, 2) === '#>') {
          this$.removeObject(init);
        }
        this$.removeString(item);
        return this$.removeString("#>object" + item + "-props");
      });
    };
    prototype.removeObject = function(item){
      var this$ = this;
      return this.handleObject(item, 'remove', function(){});
    };
    prototype.setString = LocalStorage.set;
    prototype.getString = LocalStorage.get;
    prototype.removeString = LocalStorage.remove;
    return LocalStorageDriver;
  }(IS.Object));
  module.exports = LocalStorageDriver;
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
}, "data/languages/en-US": function(exports, require, module) {if (!window.JSONImport) window.JSONImport = {}; 
var item = JSON.parse("null", function(key, value) { var v; try { v = eval(value) } catch(e) { v = value } return v;}); 
return window.JSONImport['en-US'] = module.exports = item;}, "data/languages/ro-RO": function(exports, require, module) {if (!window.JSONImport) window.JSONImport = {}; 
var item = JSON.parse("{\"Your eMail Address\":\"Adresa ta de eMail\",\"Sign Up\":\"Inregistrează\"}", function(key, value) { var v; try { v = eval(value) } catch(e) { v = value } return v;}); 
return window.JSONImport['ro-RO'] = module.exports = item;}, "data/views/index": function(exports, require, module) {module.exports = function(__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      __out.push(DepMan.render(["partials", "header"]));
    
      __out.push('\n');
    
      __out.push(DepMan.render(["partials", "signup"]));
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
}}, "data/views/loading/index": function(exports, require, module) {module.exports = function(__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      __out.push('<section id="loadingscreen">\n    <section></section>\n    <aside data-location=\'left\'></aside>\n    <aside data-location=\'right\'></aside>\n    <article>\n        <p><span id="loadingmessage"></span></p>\n    </article>\n</section>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
}}, "data/views/partials/header": function(exports, require, module) {module.exports = function(__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      __out.push('<header>\n    <h1>');
    
      __out.push(__sanitize(window.AppInfo.displayname));
    
      __out.push(' <small>&lt;TIME&gt;</small></h1>\n</header>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
}}, "data/views/partials/signup": function(exports, require, module) {module.exports = function(__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      __out.push('<aside>\n    <label for="mail"><h1 ');
    
      __out.push(__sanitize(_T("Get invited to test")));
    
      __out.push('></h1></label>\n    <section>\n        <div class="input"><input type="email" id="mail" ');
    
      __out.push(__sanitize(_T("Your eMail Address", "placeholder")));
    
      __out.push('></div>\n        <div class="submit"><input type="submit" ');
    
      __out.push(__sanitize(_T("Sign Up")));
    
      __out.push('></input></div>\n    </section>\n</aside>');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
}}});


	window.addEventListener('load', function(){ 
		new ( require("Application") )(getStylesheets); 
	});
})();