//>>built
require({cache:{"JBrowse/Plugin":function(){define("JBrowse/Plugin",["dojo/_base/declare","JBrowse/Component"],function(g,h){return g(h,{constructor:function(e){this.name=e.name;this.cssLoaded=e.cssLoaded;this._finalizeConfig(e.config)},_defaultConfig:function(){return{baseUrl:"/plugins/"+this.name}}})})},"JBrowse/View/FeatureGlyph/ProcessedTranscript":function(){define("JBrowse/View/FeatureGlyph/ProcessedTranscript",["dojo/_base/declare","dojo/_base/array","dojox/color/Palette","JBrowse/Model/SimpleFeature",
"JBrowse/View/FeatureGlyph/Segments"],function(g,h,e,l,b){return g(b,{_defaultConfig:function(){return this._mergeConfigs(this.inherited(arguments),{style:{utrColor:function(b,a,f){return f._utrColor(f.getStyle(b.parent(),"color")).toString()}},subParts:"CDS, UTR, five_prime_UTR, three_prime_UTR",impliedUTRs:!1})},_getSubparts:function(b){var a=b.children();if(!a)return[];a&&this.config.impliedUTRs&&(a=this._makeUTRs(b,a));for(var b=[],f=0;f<a.length;f++)this._filterSubpart(a[f])&&b.push(a[f]);return b},
_makeUTRs:function(b,a){var f=Infinity,i=-Infinity,c,j,q,o,e=[];for(c=0;c<a.length;c++)o=a[c].get("type"),/^cds/i.test(o)?(f>a[c].get("start")&&(f=a[c].get("start")),i<a[c].get("end")&&(i=a[c].get("end"))):/exon/i.test(o)?e.push(a[c]):this._isUTR(a[c])&&(j=a[c].get("start")==b.get("start"),q=a[c].get("end")==b.get("end"));if(!e.length||!(Infinity>f&&-Infinity<i))return a;e.sort(function(c,a){return c.get("start")-a.get("start")});o=b.get("strand");var g;if(!j)for(c=0;c<e.length;c++){j=e[c].get("start");
if(j>=f)break;g=f>e[c].get("end")?e[c].get("end"):f;a.unshift(new l({parent:b,data:{start:j,end:g,strand:o,type:0<=o?"five_prime_UTR":"three_prime_UTR"}}))}if(!q)for(c=e.length-1;0<=c;c--){g=e[c].get("end");if(g<=i)break;j=i<e[c].get("start")?e[c].get("start"):i;a.push(new l({parent:b,data:{start:j,end:g,strand:o,type:0<=o?"three_prime_UTR":"five_prime_UTR"}}))}return a},_utrColor:function(b){return(this._palette||(this._palette=e.generate(b,"splitComplementary"))).colors[1]},_isUTR:function(b){return/(\bUTR|_UTR|untranslated[_\s]region)\b/.test(b.get("type")||
"")},getStyle:function(b,a){return"color"==a&&this._isUTR(b)?this.getStyle(b,"utrColor"):this.inherited(arguments)},_getFeatureHeight:function(b,a){var f=this.inherited(arguments);return this._isUTR(a)?0.65*f:f}})})},"dojox/color/Palette":function(){define("dojox/color/Palette",["dojo/_base/lang","dojo/_base/array","./_base"],function(g,h,e){function l(a,c,f){var b=new e.Palette;b.colors=[];h.forEach(a.colors,function(a){var i="dg"==c?a.g+f:a.g,d="db"==c?a.b+f:a.b,g="da"==c?a.a+f:a.a;b.colors.push(new e.Color({r:Math.min(255,
Math.max(0,"dr"==c?a.r+f:a.r)),g:Math.min(255,Math.max(0,i)),b:Math.min(255,Math.max(0,d)),a:Math.min(1,Math.max(0,g))}))});return b}function b(a,c,f){var b=new e.Palette;b.colors=[];h.forEach(a.colors,function(a){var a=a.toCmy(),i="dm"==c?a.m+f:a.m,d="dy"==c?a.y+f:a.y;b.colors.push(e.fromCmy(Math.min(100,Math.max(0,"dc"==c?a.c+f:a.c)),Math.min(100,Math.max(0,i)),Math.min(100,Math.max(0,d))))});return b}function d(a,c,f){var b=new e.Palette;b.colors=[];h.forEach(a.colors,function(a){var a=a.toCmyk(),
i="dm"==c?a.m+f:a.m,d="dy"==c?a.y+f:a.y,g="dk"==c?a.b+f:a.b;b.colors.push(e.fromCmyk(Math.min(100,Math.max(0,"dc"==c?a.c+f:a.c)),Math.min(100,Math.max(0,i)),Math.min(100,Math.max(0,d)),Math.min(100,Math.max(0,g))))});return b}function a(a,c,f){var b=new e.Palette;b.colors=[];h.forEach(a.colors,function(a){var a=a.toHsl(),i="dl"==c?a.l+f:a.l;b.colors.push(e.fromHsl(("dh"==c?a.h+f:a.h)%360,Math.min(100,Math.max(0,"ds"==c?a.s+f:a.s)),Math.min(100,Math.max(0,i))))});return b}function f(a,c,f){var b=new e.Palette;
b.colors=[];h.forEach(a.colors,function(a){var a=a.toHsv(),i="dv"==c?a.v+f:a.v;b.colors.push(e.fromHsv(("dh"==c?a.h+f:a.h)%360,Math.min(100,Math.max(0,"ds"==c?a.s+f:a.s)),Math.min(100,Math.max(0,i))))});return b}e.Palette=function(a){this.colors=[];if(a instanceof e.Palette)this.colors=a.colors.slice(0);else if(a instanceof e.Color)this.colors=[null,null,a,null,null];else if(g.isArray(a))this.colors=h.map(a.slice(0),function(a){return g.isString(a)?new e.Color(a):a});else if(g.isString(a))this.colors=
[null,null,new e.Color(a),null,null]};g.extend(e.Palette,{transform:function(i){var c=l;if(i.use){var j=i.use.toLowerCase();0==j.indexOf("hs")?c="l"==j.charAt(2)?a:f:0==j.indexOf("cmy")&&(c="k"==j.charAt(3)?d:b)}else if("dc"in i||"dm"in i||"dy"in i)c="dk"in i?d:b;else if("dh"in i||"ds"in i)c="dv"in i?f:a;var j=this,e;for(e in i)"use"!=e&&(j=c(j,e,i[e]));return j},clone:function(){return new e.Palette(this)}});g.mixin(e.Palette,{generators:{analogous:function(a){var c=a.high||60,f=a.low||18,a=(g.isString(a.base)?
new e.Color(a.base):a.base).toHsv(),c=[(a.h+f+360)%360,(a.h+Math.round(f/2)+360)%360,a.h,(a.h-Math.round(c/2)+360)%360,(a.h-c+360)%360],f=Math.max(10,95>=a.s?a.s+5:100-(a.s-95)),b=1<a.s?a.s-1:21-a.s,d=92<=a.v?a.v-9:Math.max(a.v+9,20),k=90>=a.v?Math.max(a.v+5,20):95+Math.ceil((a.v-90)/2),m=[f,b,a.s,f,f],p=[d,k,a.v,d,k];return new e.Palette(h.map(c,function(a,c){return e.fromHsv(a,m[c],p[c])}))},monochromatic:function(a){var a=g.isString(a.base)?new e.Color(a.base):a.base,c=a.toHsv(),f=9<c.s-30?c.s-
30:c.s+30,b=c.s,d=20<c.v-20?c.v-20:c.v+60,h=20<c.v-50?c.v-50:c.v+30;return new e.Palette([e.fromHsv(c.h,f,100-0.8*(100-c.v)),e.fromHsv(c.h,b,h),a,e.fromHsv(c.h,f,h),e.fromHsv(c.h,b,d)])},triadic:function(a){var a=g.isString(a.base)?new e.Color(a.base):a.base,c=a.toHsv(),f=(c.h-157+360)%360,b=90<c.s?c.s-10:c.s+10,d=95<c.s?c.s-5:c.s+5,h=20<c.v-20?c.v-20:c.v+20,m=20<c.v-30?c.v-30:c.v+30,p=70<c.v-30?c.v-30:c.v+30;return new e.Palette([e.fromHsv((c.h+57+360)%360,20<c.s?c.s-10:c.s+10,c.v),e.fromHsv(c.h,
b,m),a,e.fromHsv(f,b,h),e.fromHsv(f,d,p)])},complementary:function(a){var a=g.isString(a.base)?new e.Color(a.base):a.base,c=a.toHsv(),f=360>2*c.h+137?2*c.h+137:Math.floor(c.h/2)-137,b=Math.max(c.s-10,0),d=100-0.9*(100-c.s),h=Math.min(100,c.s+20),m=Math.min(100,c.v+30),p=20<c.v?c.v-30:c.v+30;return new e.Palette([e.fromHsv(c.h,b,m),e.fromHsv(c.h,d,p),a,e.fromHsv(f,h,p),e.fromHsv(f,c.s,c.v)])},splitComplementary:function(a){var c=g.isString(a.base)?new e.Color(a.base):a.base,f=a.da||30,a=c.toHsv(),
b=360>2*a.h+137?2*a.h+137:Math.floor(a.h/2)-137,d=(b-f+360)%360,f=(b+f)%360,b=Math.max(a.s-10,0),h=100-0.9*(100-a.s),m=Math.min(100,a.s+20),p=Math.min(100,a.v+30),n=20<a.v?a.v-30:a.v+30;return new e.Palette([e.fromHsv(d,b,p),e.fromHsv(d,h,n),c,e.fromHsv(f,m,n),e.fromHsv(f,a.s,a.v)])},compound:function(a){var a=g.isString(a.base)?new e.Color(a.base):a.base,c=a.toHsv(),f=360>2*c.h+18?2*c.h+18:Math.floor(c.h/2)-18,b=360>2*c.h+120?2*c.h+120:Math.floor(c.h/2)-120,d=360>2*c.h+99?2*c.h+99:Math.floor(c.h/
2)-99,h=10<c.s-40?c.s-40:c.s+40,m=80<c.s-10?c.s-10:c.s+10,p=10<c.s-25?c.s-25:c.s+25,n=10<c.v-40?c.v-40:c.v+40,l=80<c.v-20?c.v-20:c.v+20,c=Math.max(c.v,20);return new e.Palette([e.fromHsv(f,h,n),e.fromHsv(f,m,l),a,e.fromHsv(b,p,c),e.fromHsv(d,m,l)])},shades:function(a){var a=g.isString(a.base)?new e.Color(a.base):a.base,c=a.toHsv(),f=100==c.s&&0==c.v?0:c.s,b=20<c.v-50?c.v-50:c.v+30,d=20<=c.v-25?c.v-25:c.v+55,h=20<=c.v-75?c.v-75:c.v+5,m=Math.max(c.v-10,20);return new e.Palette([new e.fromHsv(c.h,f,
b),new e.fromHsv(c.h,f,d),a,new e.fromHsv(c.h,f,h),new e.fromHsv(c.h,f,m)])}},generate:function(a,c){if(g.isFunction(c))return c({base:a});if(e.Palette.generators[c])return e.Palette.generators[c]({base:a});throw Error("dojox.color.Palette.generate: the specified generator ('"+c+"') does not exist.");}});return e.Palette})},"dojox/color/_base":function(){define("dojox/color/_base",["../main","dojo/_base/lang","dojo/_base/Color","dojo/colors"],function(g,h,e,l){g=h.getObject("color",!0,g);g.Color=
e;g.blend=e.blendColors;g.fromRgb=e.fromRgb;g.fromHex=e.fromHex;g.fromArray=e.fromArray;g.fromString=e.fromString;g.greyscale=l.makeGrey;h.mixin(g,{fromCmy:function(b,d,a){if(h.isArray(b))d=b[1],a=b[2],b=b[0];else if(h.isObject(b))d=b.m,a=b.y,b=b.c;b/=100;d/=100;a/=100;d=1-d;a=1-a;return new e({r:Math.round(255*(1-b)),g:Math.round(255*d),b:Math.round(255*a)})},fromCmyk:function(b,d,a,f){if(h.isArray(b))d=b[1],a=b[2],f=b[3],b=b[0];else if(h.isObject(b))d=b.m,a=b.y,f=b.b,b=b.c;b/=100;d/=100;a/=100;
f/=100;b=1-Math.min(1,b*(1-f)+f);d=1-Math.min(1,d*(1-f)+f);a=1-Math.min(1,a*(1-f)+f);return new e({r:Math.round(255*b),g:Math.round(255*d),b:Math.round(255*a)})},fromHsl:function(b,d,a){if(h.isArray(b))d=b[1],a=b[2],b=b[0];else if(h.isObject(b))d=b.s,a=b.l,b=b.h;d/=100;for(a/=100;0>b;)b+=360;for(;360<=b;)b-=360;var f,i,c;120>b?(f=(120-b)/60,i=b/60,c=0):240>b?(f=0,i=(240-b)/60,c=(b-120)/60):(f=(b-240)/60,i=0,c=(360-b)/60);f=2*d*Math.min(f,1)+(1-d);i=2*d*Math.min(i,1)+(1-d);c=2*d*Math.min(c,1)+(1-d);
0.5>a?(f*=a,i*=a,c*=a):(f=(1-a)*f+2*a-1,i=(1-a)*i+2*a-1,c=(1-a)*c+2*a-1);return new e({r:Math.round(255*f),g:Math.round(255*i),b:Math.round(255*c)})}});g.fromHsv=function(b,d,a){if(h.isArray(b))d=b[1],a=b[2],b=b[0];else if(h.isObject(b))d=b.s,a=b.v,b=b.h;360==b&&(b=0);var d=d/100,a=a/100,f,i,c;if(0==d)f=a,c=a,i=a;else{var j=b/60,b=Math.floor(j),g=j-b,j=a*(1-d),o=a*(1-d*g),d=a*(1-d*(1-g));switch(b){case 0:f=a;i=d;c=j;break;case 1:f=o;i=a;c=j;break;case 2:f=j;i=a;c=d;break;case 3:f=j;i=o;c=a;break;
case 4:f=d;i=j;c=a;break;case 5:f=a,i=j,c=o}}return new e({r:Math.round(255*f),g:Math.round(255*i),b:Math.round(255*c)})};h.extend(e,{toCmy:function(){var b=1-this.g/255,d=1-this.b/255;return{c:Math.round(100*(1-this.r/255)),m:Math.round(100*b),y:Math.round(100*d)}},toCmyk:function(){var b,d,a,f=this.r/255;d=this.g/255;a=this.b/255;b=Math.min(1-f,1-d,1-a);d=(1-d-b)/(1-b);a=(1-a-b)/(1-b);return{c:Math.round(100*((1-f-b)/(1-b))),m:Math.round(100*d),y:Math.round(100*a),b:Math.round(100*b)}},toHsl:function(){var b=
this.r/255,d=this.g/255,a=this.b/255,f=Math.min(b,a,d),i=Math.max(b,d,a),c=i-f,e=0,g=0,f=(f+i)/2;0<f&&1>f&&(g=c/(0.5>f?2*f:2-2*f));0<c&&(i==b&&i!=d&&(e+=(d-a)/c),i==d&&i!=a&&(e+=2+(a-b)/c),i==a&&i!=b&&(e+=4+(b-d)/c),e*=60);return{h:e,s:Math.round(100*g),l:Math.round(100*f)}},toHsv:function(){var b=this.r/255,d=this.g/255,a=this.b/255,f=Math.min(b,a,d),i=Math.max(b,d,a),f=i-f,c=null,e=0==i?0:f/i;0==e?c=0:(c=b==i?60*(d-a)/f:d==i?120+60*(a-b)/f:240+60*(b-d)/f,0>c&&(c+=360));return{h:c,s:Math.round(100*
e),v:Math.round(100*i)}}});return g})},"dojo/colors":function(){define("dojo/colors",["./_base/kernel","./_base/lang","./_base/Color","./_base/array"],function(g,h,e,l){var b={};h.setObject("dojo.colors",b);var d=function(a,b,c){0>c&&++c;1<c&&--c;var d=6*c;return 1>d?a+(b-a)*d:1>2*c?b:2>3*c?a+6*(b-a)*(2/3-c):a};g.colorFromRgb=e.fromRgb=function(a,b){var c=a.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/);if(c){var j=c[2].split(/\s*,\s*/),g=j.length,c=c[1];if("rgb"==c&&3==g||"rgba"==c&&4==
g){c=j[0];return"%"==c.charAt(c.length-1)?(c=l.map(j,function(a){return 2.56*parseFloat(a)}),4==g&&(c[3]=j[3]),e.fromArray(c,b)):e.fromArray(j,b)}if("hsl"==c&&3==g||"hsla"==c&&4==g){var c=(parseFloat(j[0])%360+360)%360/360,h=parseFloat(j[1])/100,k=parseFloat(j[2])/100,h=0.5>=k?k*(h+1):k+h-k*h,k=2*k-h,c=[256*d(k,h,c+1/3),256*d(k,h,c),256*d(k,h,c-1/3),1];4==g&&(c[3]=j[3]);return e.fromArray(c,b)}}return null};var a=function(a,b,c){a=Number(a);return isNaN(a)?c:a<b?b:a>c?c:a};e.prototype.sanitize=function(){this.r=
Math.round(a(this.r,0,255));this.g=Math.round(a(this.g,0,255));this.b=Math.round(a(this.b,0,255));this.a=a(this.a,0,1);return this};b.makeGrey=e.makeGrey=function(a,b){return e.fromArray([a,a,a,b])};h.mixin(e.named,{aliceblue:[240,248,255],antiquewhite:[250,235,215],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],blanchedalmond:[255,235,205],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,
105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,
79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,
230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],limegreen:[50,205,
50],linen:[250,240,230],magenta:[255,0,255],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],oldlace:[253,245,230],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],
orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,
144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],whitesmoke:[245,245,245],yellowgreen:[154,205,50]});return e})},"JBrowse/View/FeatureGlyph/Segments":function(){define("JBrowse/View/FeatureGlyph/Segments",["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","JBrowse/View/FeatureGlyph/Box"],function(g,h,e,l){return g(l,{_defaultConfig:function(){return this._mergeConfigs(this.inherited(arguments),
{style:{connectorColor:"#333",connectorThickness:1,borderColor:"rgba( 0, 0, 0, 0.3 )"},subParts:function(){return!0}})},renderFeature:function(b,d){"collapsed"!=this.track.displayMode&&b.clearRect(Math.floor(d.l),d.t,Math.ceil(d.w),d.h);this.renderConnector(b,d);this.renderSegments(b,d);this.renderLabel(b,d);this.renderDescription(b,d);this.renderArrowhead(b,d)},renderConnector:function(b,d){var a=this.getStyle(d.f,"connectorColor");if(a)b.fillStyle=a,a=this.getStyle(d.f,"connectorThickness"),b.fillRect(d.rect.l,
Math.round(d.rect.t+(d.rect.h-a)/2),d.rect.w,a)},renderSegments:function(b,d){function a(a,f){return"height"==f?i._getFeatureHeight(d.viewInfo,a):i.getStyle(a,f)||i.getStyle(c,f)}var f=this._getSubparts(d.f);if(f.length)for(var i=this,c=d.f,e=0;e<f.length;++e)this.renderBox(b,d.viewInfo,f[e],d.t,d.rect.h,d.f,a)},_getSubparts:function(b){b=b.children();if(!b)return[];for(var d=[],a=0;a<b.length;a++)this._filterSubpart(b[a])&&d.push(b[a]);return d},_filterSubpart:function(b){return(this._subpartsFilter||
(this._subpartsFilter=this._makeSubpartsFilter()))(b)},_makeSubpartsFilter:function(){var b=this.getConf("subParts");"string"==typeof b&&(b=b.split(/\s*,\s*/));return"object"==typeof b?(b=h.isArray(b)?function(){var d={};e.forEach(b,function(a){d[a.toLowerCase()]=!0});return d}.call(this):function(){var d={},a;for(a in b)d[a.toLowerCase()]=b[a];return d}.call(this),function(d){return b[(d.get("type")||"").toLowerCase()]}):b=function(){return!0}}})})},"JBrowse/View/FeatureGlyph/Box":function(){define("JBrowse/View/FeatureGlyph/Box",
"dojo/_base/declare,dojo/_base/array,dojo/_base/lang,JBrowse/Util/FastPromise,JBrowse/View/FeatureGlyph,./_FeatureLabelMixin".split(","),function(g,h,e,l,b,d){return g([b,d],{constructor:function(){this._embeddedImagePromises={}},_defaultConfig:function(){return this._mergeConfigs(this.inherited(arguments),{style:{maxDescriptionLength:70,color:"goldenrod",mouseovercolor:"rgba(0,0,0,0.3)",borderColor:null,borderWidth:0.5,height:11,marginBottom:2,strandArrow:!0,label:"name, id",textFont:"normal 12px Univers,Helvetica,Arial,sans-serif",
textColor:"black",text2Color:"blue",text2Font:"normal 12px Univers,Helvetica,Arial,sans-serif",description:"note, description"}})},_getFeatureHeight:function(a,f){var b=this.getStyle(f,"height");"compact"==a.displayMode&&(b=Math.round(0.45*b));if(this.getStyle(f,"strandArrow")){var c=f.get("strand");1==c?b=Math.max(this._embeddedImages.plusArrow.height,b):-1==c&&(b=Math.max(this._embeddedImages.minusArrow.height,b))}return b},_getFeatureRectangle:function(a,f){var b=a.block,c={l:b.bpToX(f.get("start")),
h:this._getFeatureHeight(a,f),viewInfo:a,f:f,glyph:this};c.w=b.bpToX(f.get("end"))-c.l;c.rect={l:c.l,h:c.h,w:Math.max(c.w,2),t:0};c.w=c.rect.w;"compact"!=a.displayMode&&(c.h+=this.getStyle(f,"marginBottom")||0);if(this.getStyle(f,"strandArrow"))-1==(c.strandArrow=f.get("strand"))?(b=this._embeddedImages.minusArrow,c.w+=b.width,c.l-=b.width):(b=this._embeddedImages.plusArrow,c.w+=b.width);if("collapsed"==a.displayMode)return c;this._expandRectangleWithLabels(a,f,c);this._addMasksToRect(a,f,c);return c},
layoutFeature:function(a,f,b){var c=this.inherited(arguments);if(!c)return c;c.rect.t=c.t;return c},_expandRectangleWithLabels:function(a,f,b){if(a.showLabels){var c=this.makeFeatureLabel(f,b);if(c)b.h+=c.h,b.w=Math.max(c.w,b.w),b.label=c,c.yOffset=b.rect.h+c.h}if(a.showDescriptions&&(a=this.makeFeatureDescriptionLabel(f,b)))b.description=a,b.h+=a.h,b.w=Math.max(a.w,b.w),a.yOffset=b.h-(this.getStyle(f,"marginBottom")||0)},_embeddedImages:{plusArrow:{data:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAYAAACXU8ZrAAAATUlEQVQIW2NkwATGQKFYIG4A4g8gacb///+7AWlBmNq+vj6V4uLiJiD/FRBXA/F8xu7u7kcVFRWyMEVATQz//v0Dcf9CxaYRZxIxbgIARiAhmifVe8UAAAAASUVORK5CYII=",
width:9,height:5},minusArrow:{data:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAYAAACXU8ZrAAAASklEQVQIW2NkQAABILMBiBcD8VkkcQZGIAeEE4G4FYjFent764qKiu4gKXoPUjAJiLOggsxMTEwMjIwgYQjo6Oh4TLRJME043QQA+W8UD/sdk9IAAAAASUVORK5CYII=",width:9,height:5}},getEmbeddedImage:function(a){return this._embeddedImagePromises[a]||function(){var b=new l,d=this._embeddedImages[a];if(d){var c=new Image;c.onload=function(){b.resolve(this)};c.src=d.data}else b.resolve(null);return this._embeddedImagePromises[a]=
b}.call(this)},renderFeature:function(a,b){"collapsed"!=this.track.displayMode&&a.clearRect(Math.floor(b.l),b.t,Math.ceil(b.w-Math.floor(b.l)+b.l),b.h);this.renderBox(a,b.viewInfo,b.f,b.t,b.rect.h,b.f);this.renderLabel(a,b);this.renderDescription(a,b);this.renderArrowhead(a,b)},renderBox:function(a,b,d,c,g,h,o){var h=b.block.bpToX(d.get("start")),k=b.block.bpToX(d.get("end"))-h,o=o||e.hitch(this,"getStyle");if(b=this._getFeatureHeight(b,d)){b!=g&&(c+=Math.round((g-b)/2));(g=o(d,"color"))?(a.fillStyle=
g,a.fillRect(h,c,Math.max(1,k),b)):a.clearRect(h,c,Math.max(1,k),b);var m;if((g=o(d,"borderColor"))&&(m=o(d,"borderWidth")))3<k?(a.lineWidth=m,a.strokeStyle=g,a.strokeRect(h+m/2,c+m/2,k-m,b-m)):(a.globalAlpha=2*m/k,a.fillStyle=g,a.fillRect(h,c,Math.max(1,k),b),a.globalAlpha=1)}},renderLabel:function(a,b){if(b.label)a.font=b.label.font,a.fillStyle=b.label.fill,a.textBaseline=b.label.baseline,a.fillText(b.label.text,b.l+(b.label.xOffset||0),b.t+(b.label.yOffset||0))},renderDescription:function(a,b){if(b.description)a.font=
b.description.font,a.fillStyle=b.description.fill,a.textBaseline=b.description.baseline,a.fillText(b.description.text,b.l+(b.description.xOffset||0),b.t+(b.description.yOffset||0))},renderArrowhead:function(a,b){b.strandArrow&&(1==b.strandArrow&&b.rect.l+b.rect.w<=a.canvas.width?this.getEmbeddedImage("plusArrow").then(function(d){a.imageSmoothingEnabled=!1;a.drawImage(d,b.rect.l+b.rect.w,b.t+(b.rect.h-d.height)/2)}):-1==b.strandArrow&&0<=b.rect.l&&this.getEmbeddedImage("minusArrow").then(function(d){a.imageSmoothingEnabled=
!1;a.drawImage(d,b.rect.l-9,b.t+(b.rect.h-d.height)/2)}))},updateStaticElements:function(a,b,d){var c=d.minVisible,e=d.maxVisible,g=b.viewInfo.block;if(g.containsBp(c)||g.containsBp(e)){var h=d.bpToPx,g=b.f,d=g.get("start"),g=g.get("end");b.strandArrow&&(1==b.strandArrow&&g>=e&&d<=e?this.getEmbeddedImage("plusArrow").then(function(d){a.imageSmoothingEnabled=!1;a.drawImage(d,h(e)-h(c)-9,b.t+(b.rect.h-d.height)/2)}):-1==b.strandArrow&&d<=c&&g>=c&&this.getEmbeddedImage("minusArrow").then(function(c){a.imageSmoothingEnabled=
!1;a.drawImage(c,0,b.t+(b.rect.h-c.height)/2)}));var k=b.label?b.label.w:0,m=b.description?b.description.w:0;h(g);Math.max(k,m);h(c);h(d);h(c)}}})})},"JBrowse/Util/FastPromise":function(){define("JBrowse/Util/FastPromise",[],function(){var g=function(){this.callbacks=[]};g.prototype.then=function(g){"value"in this?g(this.value):this.callbacks.push(g)};g.prototype.resolve=function(g){this.value=g;g=this.callbacks;delete this.callbacks;for(var e=0;e<g.length;e++)g[e](this.value)};return g})},"JBrowse/View/FeatureGlyph":function(){define("JBrowse/View/FeatureGlyph",
["dojo/_base/declare","dojo/_base/array","dojo/aspect","JBrowse/Component"],function(g,h,e,l){return g(l,{constructor:function(b){this.track=b.track;this.booleanAlpha=0.17;e.before(this,"renderFeature",function(b,a){if(a.m){var f=Math.floor(a.l),e=Math.ceil(a.w+a.l)-f;a.m.sort(function(a,b){return a.l-b.l});var c=a.m[0];if(c.l<=f){var g=a.m[0].l,h;for(h in a.m){c=a.m[h];if(c.l>g)break;g=c.l+c.w}if(g>=f+e)b.globalAlpha=this.booleanAlpha,a.noMask=!0}}},!0);e.after(this,"renderFeature",function(b,a){if(a.m&&
!a.noMask)this.maskBySpans(b,a);else if(a.noMask)delete a.noMask,b.globalAlpha=1},!0)},getStyle:function(b,d){return this.getConfForFeature("style."+d,b)},getConfForFeature:function(b,d){return this.getConf(b,[d,b,this,this.track])},mouseoverFeature:function(b,d){this.renderFeature(b,d);b.fillStyle=this.getStyle(d.f,"mouseovercolor");b.fillRect(d.rect.l,d.t,d.rect.w,d.rect.h)},_getFeatureRectangle:function(b,d){var a=b.block,f={l:a.bpToX(d.get("start")),h:this._getFeatureHeight(b,d),viewInfo:b,f:d,
glyph:this};f.w=a.bpToX(d.get("end"))-f.l;this._addMasksToRect(b,d,f)},_addMasksToRect:function(b,d,a){var f=b.block;if(d.masks)a.m=[],h.forEach(d.masks,function(b){var c={l:f.bpToX(b.start)};c.w=f.bpToX(b.end)-c.l;a.m.push(c)});return a},layoutFeature:function(b,d,a){var f=this._getFeatureRectangle(b,a),e=b.scale,c=b.leftBase,b=f.l/e+c,e=(f.l+f.w)/e+c;f.t=d.addRect(a.id(),b,e,f.h,a);if(null===f.t)return null;f.f=a;return f},renderFeature:function(){},maskBySpans:function(b,d){var a=this,f=dojo.create("canvas",
{height:b.canvas.height,width:b.canvas.width}),e=f.getContext("2d"),c=Math.floor(d.l),g=Math.ceil(d.w+d.l)-c;h.forEach(d.m,function(h){try{if(h.l<c)h.w+=h.l-c,h.l=c;if(h.w>g)h.w=g;if(0>h.l)h.w+=h.l,h.l=0;if(h.l+h.w>c+g)h.w=g+c-h.l;if(h.l+h.w>b.canvas.width)h.w=b.canvas.width-h.l;e.drawImage(b.canvas,h.l,d.t,h.w,d.h,h.l,d.t,h.w,d.h);b.globalAlpha=a.booleanAlpha;b.clearRect(h.l,d.t,h.w,d.h);b.drawImage(f,h.l,d.t,h.w,d.h,h.l,d.t,h.w,d.h);b.globalAlpha=1}catch(o){}})},_getFeatureHeight:function(b,d){return this.getStyle(d,
"height")},updateStaticElements:function(){}})})},"JBrowse/View/FeatureGlyph/_FeatureLabelMixin":function(){define("JBrowse/View/FeatureGlyph/_FeatureLabelMixin",["dojo/_base/declare","dojo/_base/lang","JBrowse/View/_FeatureDescriptionMixin"],function(g,h,e){var l={};return g(e,{makeFeatureLabel:function(b,d){var a=this.getFeatureLabel(b);if(!a)return null;var f=this.getStyle(b,"textFont"),a=d?this.makeBottomOrTopLabel(a,f,d):this.makePopupLabel(a,f);a.fill=this.getStyle(b,"textColor");return a},
makeFeatureDescriptionLabel:function(b,d){var a=this.getFeatureDescription(b);if(!a)return null;var f=this.getStyle(b,"text2Font"),a=d?this.makeBottomOrTopLabel(a,f,d):this.makePopupLabel(a,f);a.fill=this.getStyle(b,"text2Color");return a},makeSideLabel:function(b,d){if(!b)return null;var a=this.measureFont(d),f=Math.round((b.length*a.w-this.track.getConf("maxFeatureGlyphExpansion"))/a.w);0<f&&(b=b.slice(0,b.length-f-1)+"\u2026");return{text:b,font:d,baseline:"middle",w:a.w*b.length,h:a.h}},makeBottomOrTopLabel:function(b,
d,a){if(!b)return null;var f=this.measureFont(d),a=Math.round((b.length*f.w-a.w-this.track.getConf("maxFeatureGlyphExpansion"))/f.w);0<a&&(b=b.slice(0,b.length-a-1)+"\u2026");return{text:b,font:d,baseline:"bottom",w:f.w*b.length,h:f.h}},makePopupLabel:function(b,d){if(!b)return null;var a=this.measureFont(d);return{text:b,font:d,w:a.w*b.length,h:a.h}},measureFont:function(b){var d;if(!(d=l[b]))d=document.createElement("canvas").getContext("2d"),d.font=b,d=d.measureText("MMMMMMMMMMMMXXXXXXXXXX1234567890-.CGCC12345"),
d={h:d.height||parseInt(b.match(/(\d+)px/)[1]),w:d.width/43},d=l[b]=d;return d}})})}}});
define("NeatCanvasFeatures/main","dojo/_base/declare,dojo/_base/lang,dojo/Deferred,dojo/dom-construct,dojo/query,JBrowse/Plugin".split(","),function(g,h,e,l,b,d){return g(d,{constructor:function(a){var b=this,d=this.browser;this.gradient=1;if("undefined"!=typeof a.gradientFeatures&&0==a.gradientFeatures)this.gradient=0;d.afterMilestone("loadConfig",function(){if("undefined"===typeof d.config.classInterceptList)d.config.classInterceptList={};require(["dojo/_base/lang","JBrowse/View/FeatureGlyph/ProcessedTranscript"],
function(a,b){a.extend(b,{_getFeatureHeight:function(){return 11}})});require(["dojo/_base/lang","JBrowse/View/FeatureGlyph/Segments"],function(a,d){a.extend(d,{renderFeature:b.segments_renderFeature,renderIntrons:b.segments_renderIntrons})});require(["dojo/_base/lang","JBrowse/View/FeatureGlyph/Box"],function(a,d){a.extend(d,{renderBox:b.box_renderBox,colorShift:b.box_colorShift,zeroPad:b.box_zeroPad})})})},segments_renderFeature:function(a,b){"collapsed"!=this.track.displayMode&&a.clearRect(Math.floor(b.l),
b.t,Math.ceil(b.w),b.h);this.renderSegments(a,b);this.renderIntrons(a,b);this.renderLabel(a,b);this.renderDescription(a,b);this.renderArrowhead(a,b)},segments_renderIntrons:function(a,b){var d=this._getSubparts(b.f);if(!(1>=d.length)){d.sort(function(a,b){return a.get("start")-b.get("start")});for(var c=b.viewInfo,e=0;e<d.length-1;++e)if(2<d[e+1].get("start")-d[e].get("end")){var g=c.block.bpToX(d[e].get("start")),h=c.block.bpToX(d[e].get("end"))-g,k=c.block.bpToX(d[e+1].get("start"));c.block.bpToX(d[e+
1].get("end"));var m=b.t,l=b.rect.h,n=this._getFeatureHeight(c,d[e]);if(!n)break;n!=l&&(m+=Math.round((l-n)/2));l=n/2;g+=h;k-=g;h=k/2;a.beginPath();a.moveTo(g,m+l);a.lineTo(g+h,m+1);a.lineTo(g+k,m+l);a.lineWidth=1;a.strokeStyle="#202020";a.lineCap="square";a.stroke()}}},box_renderBox:function(a,b,d,c,e,g,l){var g=b.block.bpToX(d.get("start")),k=b.block.bpToX(d.get("end"))-g,l=l||h.hitch(this,"getStyle");if(b=this._getFeatureHeight(b,d)){b!=e&&(c+=Math.round((e-b)/2));var e=l(d,"color"),e=getColorHex(e),
m=d.get("type");if(-1<m.indexOf("UTR"))a.fillStyle="#fdfdfd";else{var p=a.createLinearGradient(g,c,g,c+b);p.addColorStop(0,e);p.addColorStop(0.5,this.colorShift(e,2.5));p.addColorStop(0.999,e);a.fillStyle=p}e?a.fillRect(g,c,Math.max(1,k),b):a.clearRect(g,c,Math.max(1,k),b);var n;if(-1<m.indexOf("UTR")){if(n=1,3<k)a.lineWidth=n,a.strokeStyle=e,a.strokeRect(g+n/2,c+n/2,k-n,b-n)}else if((e=l(d,"borderColor"))&&(n=l(d,"borderWidth")))3<k?(a.lineWidth=n,a.strokeStyle=e,a.strokeRect(g+n/2,c+n/2,k-n,b-n)):
(a.globalAlpha=2*n/k,a.fillStyle=e,a.fillRect(g,c,Math.max(1,k),b),a.globalAlpha=1)}},box_colorShift:function(a,b){if("#"!==a.substring(0,1)||7!==a.length)return a;var d=a.substring(1,3),c=a.substring(3,5),e=a.substring(5,7),d=parseInt(d,16),c=parseInt(c,16),e=parseInt(e,16),d=d+Math.round(d*b),c=c+Math.round(c*b),e=e+Math.round(e*b),d=Math.min(255,d),c=Math.min(255,c),e=Math.min(255,e),d=this.zeroPad(d),c=this.zeroPad(c),e=this.zeroPad(e);return"#"+d+c+e},box_zeroPad:function(a){a="00"+a.toString(16);
return a.substr(a.length-2)}})});function componentFromStr(g,h){var e=Math.max(0,parseInt(g,10));return h?Math.floor(255*Math.min(100,e)/100):Math.min(255,e)}function getColorHex(g){return-1<g.indexOf("#")?g:-1<g.indexOf("rgba")?rgbToHex(g):-1<g.indexOf("rgb")?rgbaToHex(g):colourNameToHex(g)}
function rgbToHex(g){if(-1<g.indexOf("rgba"))return rgbaToHex(g);var h,e;h="";if(g=/^rgb\(\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*\)$/.exec(g))h=componentFromStr(g[1],g[2]),e=componentFromStr(g[3],g[4]),g=componentFromStr(g[5],g[6]),h="#"+(16777216+(h<<16)+(e<<8)+g).toString(16).slice(1);return h}
function rgbaToHex(g){var h,e;h="";if(g=/^rgba\(\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*\)$/.exec(g))h=componentFromStr(g[1],g[2]),e=componentFromStr(g[3],g[4]),g=componentFromStr(g[5],g[6]),h="#"+(16777216+(h<<16)+(e<<8)+g).toString(16).slice(1);return h}
function colourNameToHex(g){var h={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",
darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",
goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",
lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",
olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",
slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};return"undefined"!=typeof h[g.toLowerCase()]?h[g.toLowerCase()]:"#000000"};