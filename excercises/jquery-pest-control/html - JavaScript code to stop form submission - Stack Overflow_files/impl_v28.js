(function(){var p=this,r=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};var u=function(a){u[" "](a);return a};u[" "]=function(){};var v=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{u(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},aa=function(a,b){for(var c=b||p,d=0;c&&40>d++&&(!v(c)||!a(c));)a:{try{var e=c.parent;if(e&&e!=c){c=e;break a}}catch(k){}c=null}},w=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},ba=/https?:\/\/[^\/]+/,ca=/^([0-9.]+)px$/,x=function(a){return(a=ca.exec(a))?+a[1]:null},y=function(a){try{for(var b=null;b!=a;b=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;
case "http:":case "file:":return!1}}catch(c){}return!0};var da=function(){this.b={};this.a={};for(var a=[],b=0,c=a.length;b<c;++b)this.a[a[b]]=""},z=!1,A=function(a,b,c){""!=b&&(c?a.a.hasOwnProperty(c)&&(a.a[c]=b):a.b[b]=!0)},ea=function(a){var b=[];w(a.b,function(a,d){b.push(d)});w(a.a,function(a){""!=a&&b.push(a)});return b};var B=function(a,b){var c=[];w(a,function(a,e){var k=null;if(r(a)&&2>b)k=B(a,b+1);else if(0===a||a)k=String(a);k&&c.push(e+"="+encodeURIComponent(k))});return c.join("&")};var C=function(a,b,c){this.l=a;this.j=b;this.a=c;this.c=this.b},D=function(a,b,c){this.c=a;this.a=b||"";this.b=c||-1},fa=function(a,b){var c=F,d;try{d=a()}catch(l){var e=c.a;try{var k=G(l),e=c.c.call(c,"dcm.renderAds",k,void 0,b)}catch(f){c.b("pAR",f)}if(!e)throw l;}finally{}return d};
C.prototype.b=function(a,b,c,d,e){var k={};k.context=a;b instanceof D||(b=G(b));k.msg=b.c.substring(0,512);b.a&&(k.file=b.a);0<b.b&&(k.line=b.b.toString());a=p.document;k.url=a.URL.substring(0,512);k.ref=(a.referrer||"").substring(0,512);if(d)try{d(k)}catch(m){}d=this.l;try{if(Math.random()<(c||d.b)){var l=d.a+(e||this.j)+("&"+B(k,1)),l=l.substring(0,2E3);p.google_image_requests||(p.google_image_requests=[]);var f=p.document.createElement("img");f.src=l;p.google_image_requests.push(f)}}catch(m){}return this.a};
var G=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){var c=a.stack,d=b;try{-1==c.indexOf(d)&&(c=d+"\n"+c);for(var e;c!=e;)e=c,c=c.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=c.replace(/\n */g,"\n")}catch(k){b=d}}return new D(b,a.fileName,a.lineNumber)};var F,ga=(y(p)?"https":"http")+"://pagead2.googlesyndication.com/pagead/gen_204?id=";F=new C(new function(){this.a=ga;this.b=.1},"dcmads-err",!0);var H=function(a){F.a=!1;throw Error(a);};var I={1:{B:"40004000",u:"40004001"},2:{B:"40004002",u:"40004003"}},J={H:1,G:2},ha={1:1,2:2};var K=function(a,b,c){var d=a.dcmads&&a.dcmads.expts&&a.dcmads.expts[c];if(d){var e=I[c];a=[];var k=0,l;for(l in e)a[k++]=e[l];if((c=ha[c])?b.a.hasOwnProperty(c)&&""==b.a[c]:1){var f,m;b:{try{var n=window.top.location.hash;if(n){var q=n.match(/\bdeid=([\d,]+)/);m=q&&q[1]||"";break b}}catch(h){}m=""}if(m=(m=m.match(new RegExp("\\b("+a.join("|")+")\\b")))&&m[0]||null)f=m;else if(z)f=null;else b:{if(!(1E-4>Math.random())&&(m=Math.random(),m<d)){d=window;try{f=new Uint32Array(1),d.crypto.getRandomValues(f),
m=f[0]/65536/65536}catch(h){m=Math.random()}f=a[Math.floor(m*a.length)];break b}f=null}f&&A(b,f,c)}}},L=function(a,b){if(b&&b.split)for(var c=b.split(","),d=0;d<c.length;++d){var e=c[d].split("|");1<e.length?A(a,e[1],e[0]):A(a,e[0])}};var ia=function(a,b){this.b=a;this.a=b},ja=function(a){this.url=a;this.v=!1;this.depth=null},N=function(a){a=a?a:M();for(var b=a.length-1,c=null,d=b;0<=d;--d){var e=a[d];if(e.url&&!e.v){c=e;break}}d=null;e=a.length&&a[b].url;c&&0==c.depth||!e||(d=a[b]);return new ia(c,d)},M=function(){var a=p,b=[],c=null,d=null;do{var e=a;v(e)?(c=e.location.href,d=e.document.referrer||null):(c=d,d=null);b.push(new ja(c));try{a=e.parent}catch(k){a=null}}while(a&&e!=a);a=0;for(e=b.length-1;a<=e;++a)b[a].depth=e-a;e=
p;if(e.location&&e.location.ancestorOrigins&&e.location.ancestorOrigins.length==b.length-1)for(a=1;a<b.length;++a)c=b[a],c.url||(c.url=e.location.ancestorOrigins[a-1],c.v=!0);return b};var ka=/iphone|ipad|ipod/;var la=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),k="string"==typeof a?a.split(""):a,l=0;l<d;l++)l in k&&(e[l]=b.call(c,k[l],l,a));return e};var ma=function(a){this.c=a||"&";this.b={};this.a=[]},O=function(a,b,c){a.a.push(b);a.b[b]=c},P=function(a,b,c,d,e){b=b+"//"+c+d;var k=na(a)-d.length-e.length;if(0>k)return"";a.a.sort(function(a,b){return a-b});d=null;c="";for(var l=0;l<a.a.length;l++)for(var f=a.a[l],m=a.b[f],n=0;n<m.length;n++){var q=c+oa(m[n],a.c);if(k>=q.length){k-=q.length;b+=q;c=a.c;break}null==d&&(d=f)}a="";null!=d&&(a=c+"trn="+d);return b+a+e},na=function(a){var b=1,c;for(c in a.b)b=c.length>b?c.length:b;return 2045-b-a.c.length-
1},oa=function(a,b){var c=[],d=b||"&",e;for(e in a)c.push(e+"="+Q(a[e],",$"));return c.join(d)},Q=function(a,b,c){b=b||",$";"string"==typeof b&&(b=b.split(""));c=c||0;if(!(a instanceof Array)||c>=b.length)return encodeURIComponent(""+a);for(var d=[],e=0;e<a.length;e++)d.push(Q(a[e],b,c+1));return d.join(b[c])};var pa=function(){var a=M(),b=a.length-1,c=N(a),a=c.b,d=c.a,c=[];d?(a&&c.push(R(b,[d.url,2],0,[a.url,0],a.depth)),c.push(R(b,[d.url,2],0))):a&&a.url&&(c.push(R(b,void 0,void 0,[a.url,0],a.depth)),(d=(d=ba.exec(a.url))&&d[0]||"")&&c.push(R(b,[d,1],a.depth)));c.push(R(b));return c},qa=function(){var a=pa();return la(a,function(a){var c={};c.dc_rfl=a;return c})},R=function(a,b,c,d,e){a=[a];if(void 0!==b&&void 0!==c){for(var k=0;k<c;k++)a.push("");a.push(b)}if(void 0!==d&&void 0!==e){b=e-a.length+1;for(k=
0;k<b;k++)a.push("");a.push(d)}return a};var ra=function(){this.o=this.l=null;this.j=[]},sa=/^data-d[bc]m-.+/,ta=/^https?%3A.+/i,ua=/N([0-9]+)\.[^\/]+\/B([0-9]+)\.([0-9]+)/,va=/(%|[\\/]\.\.[\\/])/,S=function(a){this.l=a;a=ua.exec(a);this.c=(this.a=!!a)?+a[1]:0;this.b=this.a?+a[2]:0;this.j=this.a?+a[3]:0};var T=function(a,b,c,d,e){try{for(var k=[],l,f=0;(l=c(a))&&a!=b&&100>++f;){for(var m=null,n=d(l),q=0,h=0;h<n.length;++h){if(n[h]==a){m=h-q;break}e(n[h])&&++q}if(null===m)return null;k.unshift(m);a=l}return k}catch(g){return null}},wa=function(a){return T(a,a.top,function(a){try{return a.parent}catch(c){return null}},function(a){return a.frames},function(){return!1})},xa=function(a){return T(a,document.documentElement,function(a){return a.parentElement},function(a){return a.children},function(a){return 8==
a.nodeType})};var ya=/^data-dcm-param-.+/,U=function(a,b){return"data-dcm-https-only"in b?"https:":"data-dcm-http-only"in b?"http:":"file:"==a.document.location.protocol?"http:":""},W=function(a,b,c){for(var d=0;d<c.length;d++){var e=c[d];O(a,e.i,V(b,e.f,e.g,e.s))}},V=function(a,b,c,d){a=a[b];if(null==a)return[];b={};b[c]=null!=d?d:a;return[b]},X=function(a,b,c){a=a[b];if(!a)return[];a=String(a).toLowerCase();b={};if("1"==a||"true"==a)b[c]="1";return b[c]?[b]:[]},za=function(a,b){var c,d=!1;aa(function(a){a.mraid&&
(d=!0);return a.sdkjs?(c=1,!0):a.trackImpressionHelper||a.webviewDidAppear||a.webviewDidClose?(c=2,!0):a.iAd&&a.iAP||a.resizeTextSizes&&a.parseQS&&a.addCommas&&a.reset?(c=3,!0):a.fireGetImageCall||a["interface"]&&a["interface"].shouldOverlay?(c=4,!0):!1},a);d&&O(b,29,[{mrd:"1"}]);c&&O(b,30,[{asdk:c}])};var Aa,Ba=/^(?:https?:)?\/\/ad\.doubleclick\.net(?:\/ddm)?\/ad[ij]\/(N[^;]+)/,Ca=/(^| )dcmads( |$)/,Ea=function(a){var b=a.document;z=!1;var c=new da,d;for(d in J)c.a[J[d]]="";try{L(c,a.dcmads&&a.dcmads.eids);var e=/.*#.*eids=([0-9,|]+)/.exec(a.location.href);e&&L(c,e[1])}catch(E){}K(a,c,1);d=new ra;d.A=c;d.D=!!a.dcmads.version.experiment;d.F=a.dcmads.startTime||0;d.version="28."+(a.dcmads.version.loader||"?");Aa=d;d.c=a.goog_ddm_ps;if(!Y(d.c)){d.c={};for(var e=[p.top],c=[],k=0,l;l=e[k++];){!v(l)||
c.push(l);try{if(l.frames)for(var f=l.frames.length,m=0;m<f&&1024>e.length;++m)e.push(l.frames[m])}catch(E){}}for(f=0;f<c.length;++f)if(e=c[f].goog_ddm_ps,Y(e)){d.c.corr=e.corr;break}if(!Y(d.c)){f="";for(c=0;10>c;++c)f+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_.!*'()"[Math.floor(70*Math.random())];d.c.corr=f}a.goog_ddm_ps=d.c}b.body||(b.write('<b style="display:none;">_</b>'),b.body||H("Body element does not exist"));for(var b=b.getElementsByClassName?b.getElementsByClassName("dcmads"):
b.getElementsByTagName("ins"),n,f=0;f<b.length;f++)c=e=b[f],(c.getAttribute("data-dcm-placement")||c.getAttribute("data-dbm-deal"))&&Ca.test(c.className)&&(e.getAttribute("data-dcm-processed")||n?(c=d,e=e.getAttribute("data-dcm-placement"),e=new S(e),e.a&&c.j.push(e)):(n=e,n.setAttribute("data-dcm-processed","y")));n||H("No ad slots found");Da(a.document.getElementsByTagName("script"),d);Da(a.document.getElementsByTagName("iframe"),d);b=n.attributes;d.a={};for(f=0;f<b.length;f++)c=b[f].name.toLowerCase(),
sa.test(c)&&(e=b[f].value,e=null!=e?""+e:"","data-dcm-click-tracker"==c&&(e=ta.test(e)?decodeURIComponent(e):e),d.a[c]=e);b=d.a["data-dcm-placement"];f=d.a["data-dbm-deal"];b||f||H("No placement or deal attribute");b&&f&&H("Only one of (data-dcm-placement, data-dbm-deal) should be set");c=d.a["data-dcm-rendering-mode"];b?(d.b=1,va.test(b)&&H("Invalid placement: "+b),d.l=new S(b),d.m="script"==c?"script":"iframe"):(d.b=2,d.o=f,d.m="iframe"==c?"iframe":"script");d.C=n;b=n.style;f={};try{f=(p.getComputedStyle?
p.getComputedStyle(n,null):n.currentStyle)||{}}catch(E){}if(c=x(b.width)||x(f.width))d.width=Math.round(c);if(b=x(b.height)||x(f.height))d.height=Math.round(b);b=a.navigator.userAgent.toLowerCase();if(ka.test(b)&&-1==b.indexOf("safari")&&-1==b.indexOf("/fbios")&&-1==b.indexOf("crios")&&-1==b.indexOf("fxios")||-1!=b.indexOf("android")&&-1!=b.indexOf("version/")&&-1==b.indexOf("/fb4a"))b=d.A,K(a,b,2),(b.a.hasOwnProperty(2)?b.a[2]:"")==I[2].u&&a.document.write('<script src="mraid.js">\x3c/script>');
var q,b=new ma(1==d.b?";":void 0);f=d.a;c=f["data-dcm-click-tracker"];null==c?f=[]:(e=f["data-dcm-landing-page-escapes"]||"",""!=e&&"0"!=e&&"1"!=e&&"2"!=e&&(e=""),k={},k["click"+e]=c,null!=f["data-dcm-reverse-click-tracker"]&&(k.dcopt="rcl"),f=[k]);O(b,23,f);O(b,31,[{crlt:d.c.corr}]);var h;f=d.a;c=[];for(h in f)ya.test(h)&&c.push(h);if(0==c.length)h=[];else{e=[];c.sort();for(k=0;k<c.length;k++){if(0<e.length){h=e[0];l={};m=void 0;for(m in h)l[m]=h[m];h=l}else h={};l=h;h=c[k];l[h.substring(15)]=f[h];
e.unshift(l)}h=e}O(b,17,h);var g;a:{h=p.context;try{if(h&&"pageViewId"in h&&"canonicalUrl"in h){g=h;break a}}catch(E){}g=null}g&&O(b,32,[{amp:"1"}]);g=v(a.top)?0:1;O(b,28,[{xdt:g}]);O(b,3,d.D?[{dc_rxp:"1"}]:[]);O(b,2,[{dc_ver:d.version}]);(g=d.F)?(g=(new Date).getTime()-g,99999<g&&(g="M"),g=[{sttr:g}]):g=[];O(b,33,g);za(a,b);h=d.C;g=wa(a)||["?"];h=xa(h)||["?"];g=g.join(",")+":"+h.join(",");h=g.length;if(0==h)g=0;else{f=305419896;for(c=0;c<h;c++)f^=(f<<5)+(f>>2)+g.charCodeAt(c)&4294967295;g=0<f?f:
4294967296+f}O(b,21,[{dc_adk:g}]);W(b,d.a,[{i:27,f:"data-dcm-app-id",g:"dc_msid"},{i:26,f:"data-dcm-publisher-url",g:"dc_ref"},{i:16,f:"data-dcm-keywords",g:"kw"},{i:20,f:"data-dcm-impression-exchange-id",g:"pc"}]);2==d.b?g=!0:(g=U(a,d.a),g=""==g?y(a):"https:"==g);g&&(O(b,12,X(d.a,"data-dcm-child-directed",1==d.b?"tfcd":"chd")),O(b,14,X(d.a,"data-dcm-limit-ad-tracking",1==d.b?"dc_lat":"lat")),O(b,13,V(d.a,"data-dcm-resettable-device-id","dc_rdid")));if(1==d.b){O(b,25,qa());g=d.a;h="";"data-dcm-http-only"in
g&&(h+="h");"data-dcm-https-only"in g&&(h+="s");""==h&&(h="n");O(b,35,[{prcl:h}]);g=ea(d.A);g.length&&O(b,4,[{dc_eid:g}]);O(b,22,[{ord:("00000"+Math.floor(Math.random()*Math.pow(36,6)).toString(36)).slice(-6)}]);if(0==d.j.length)g=null;else{g=d.l;h=[0,0,0,0];for(f=0;f<d.j.length;++f)c=d.j[f],c.a&&(c.c==g.c?c.b==g.b?c.j==g.j?++h[0]:++h[1]:++h[2]:++h[3]);g=[{plmts:h}]}g&&O(b,34,g);g=d.a;var t;"data-dcm-multi-bottom-float"in g?(q="mtfBottomFloat",t=g["data-dcm-multi-bottom-float"]):"data-dcm-multi-left-float"in
g?(q="mtfLeftFloat",t=g["data-dcm-multi-left-float"]):"data-dcm-multi-right-float"in g?(q="mtfRightFloat",t=g["data-dcm-multi-right-float"]):"data-dcm-multi-top-float"in g&&(q="mtfTopFloat",t=g["data-dcm-multi-top-float"]);q&&t&&(t=t.split?t.split(","):t,g={},g[q]=t,O(b,11,[g]));O(b,5,d.width&&d.height?[{sz:d.width+"x"+d.height}]:[]);W(b,d.a,[{i:18,f:"data-dcm-anonymous-inventory",g:"dcopt",s:"anid"},{i:8,f:"data-dcm-disable-iframe-breakout",g:"mtfIFrameRequest",s:"false"},{i:7,f:"data-dcm-dart-iframe-path",
g:"mtfIFPath"},{i:15,f:"data-dcm-external-id",g:"dc_xid"},{i:24,f:"data-dcm-in-app",g:"dcapp",s:"1"},{i:6,f:"data-dcm-interstitial",g:"dcopt",s:"1_ist"},{i:9,f:"data-dcm-left-float",g:"mtfLeft"},{i:10,f:"data-dcm-top-float",g:"mtfTop"},{i:19,f:"data-dcm-user-defined",g:"u"}])}else 2==d.b&&(O(b,0,[{deal_id:d.o}]),q=N(),O(b,25,[{url:q.a?q.a.url:q.b.url}]),O(b,1,[{output:"iframe"==d.m?"html":"js"}]),O(b,5,[{w:d.width,h:d.height}]));q=2==d.b?P(b,"https:","bid.g.doubleclick.net","/xbbe/bid/xpub?",""):
P(b,U(a,d.a),"ad.doubleclick.net","/ddm/"+("script"==d.m?"adj":"adi")+"/"+d.l.l+";","?");if(1==d.b&&!Ba.test(q))throw Error("Invalid tag URL: "+q);a=a.document;"script"==d.m?(1<n.children.length||1==n.children.length&&"b"==n.children[0].tagName.toLowerCase()||(n.style.display="none"),a.write('<script src="'+q+'">\x3c/script>')):(a=a.createElement("iframe"),a.src=q,d=a.style,d.width="100%",d.height="100%",d.border="0",d.margin="0",d.padding="0",a.marginWidth="0",a.marginHeight="0",a.scrolling="no",
a.frameBorder=0,n.appendChild(a));n.style.textDecoration="none"},Da=function(a,b){if(a)for(var c=0;c<a.length;++c){var d=a[c].src,e=Ba.exec(d);e&&d&&-1==d.indexOf("dc_ver=")&&(d=b,e=new S(e[1]),e.a&&d.j.push(e))}},Y=function(a){return r(a)&&!!a.corr};var Z=window;Z.dcmads=Z.dcmads||{};Z.dcmads.version=Z.dcmads.version||{};
(function(a){return function(){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];return fa(function(){return Ea.apply(void 0,b)},a)}})(function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}(function(a,b){var c=Aa;c?(b.ver=c.version,b.rm=c.m||"",b.mode=c.b?c.b+"":"0",c.l?b.plcmt=c.l.l||"":c.o&&(b.deal=c.o||"")):(b.ver="28."+(a.dcmads.version.loader||"?"),b.rm="",b.mode="0")},Z))(Z);})();
