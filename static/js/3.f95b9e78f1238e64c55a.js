webpackJsonp([3],{Ezi9:function(t,n){},gXOW:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Au9i"),r=e("msXN"),s={mixins:[r.PLAY_AUDIO],data:function(){return{banners:[],songList:[]}},created:function(){this.getSongs()},methods:{getSongs:function(){var t=this;i.Indicator.open({text:"加载中...",spinnerType:"snake"}),this.$http.get("/proxy/?json=true").then(function(n){var e=n.data;t.banners=e.banner,t.songList=e.data}).then(function(){i.Indicator.close()})}}},a={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("mt-swipe",{attrs:{auto:5e3}},t._l(t.banners,function(t,n){return i("mt-swipe-item",{key:n},[i("a",{attrs:{href:t.extra.tourl}},[i("img",{attrs:{src:t.imgurl,title:t.title}})])])})),t._v(" "),t._l(t.songList,function(n,r){return i("mt-cell",{key:r,attrs:{title:n.filename},nativeOn:{click:function(n){t.playAudio(r)}}},[i("img",{attrs:{src:e("8ToT"),width:"20",height:"20"}})])})],2)},staticRenderFns:[]},o=e("VU/8")(s,a,!1,function(t){e("Ezi9")},null,null);n.default=o.exports}});
//# sourceMappingURL=3.f95b9e78f1238e64c55a.js.map