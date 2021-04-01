(this.webpackJsonpresto=this.webpackJsonpresto||[]).push([[0],{34:function(e,t,r){},41:function(e,t,r){},42:function(e,t,r){},43:function(e,t,r){},44:function(e,t,r){},46:function(e,t,r){},47:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(20),i=r.n(a),s=r(11),o=r(12),u=r(16),d=r(15),l=r(13),j=(r(34),r(1)),m=function(e){var t=e.menuItem,r=e.onAddToCart,n=t.title,c=t.price,a=t.url,i=t.category;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("li",{className:"menu__item",children:Object(j.jsxs)(l.b,{to:"/".concat(t.id),children:[Object(j.jsx)("div",{className:"menu__title",children:n}),Object(j.jsx)("img",{className:"menu__img",src:a,alt:n}),Object(j.jsxs)("div",{className:"menu__category",children:["Category: ",Object(j.jsx)("span",{children:i})]}),Object(j.jsxs)("div",{className:"menu__price",children:["Price: ",Object(j.jsxs)("span",{children:[c,"$"]})]}),Object(j.jsx)("button",{onClick:function(e){e.preventDefault(),r()},className:"menu__btn",children:"Add to cart"}),Object(j.jsx)("span",{className:"menu__category_Img ".concat(i)})]})})})},b=r(10),p=r(4),O=c.a.createContext(),h=function(){return function(e){return function(t){return Object(j.jsx)(O.Consumer,{children:function(r){return Object(j.jsx)(e,Object(p.a)(Object(p.a)({},t),{},{RestoService:r}))}})}}},f=function(e){return{type:"MENU_LOADED",payload:e}},x=function(){return{type:"MENU_REQUESTED"}},v=function(){return{type:"MENU_ERROR"}},_=function(e){return{type:"ITEM_ADD_TO_CART",payload:e}},g=function(){return Object(j.jsx)("div",{className:"spinner",children:"loading..."})},y=function(){return Object(j.jsx)("div",{className:"error",children:"Error"})},N=(r(41),function(e){Object(u.a)(r,e);var t=Object(d.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.props.menuRequested(),this.props.RestoService.getMenuItems().then((function(t){return e.props.menuLoaded(t)})).catch((function(){return e.props.menuError()}))}},{key:"render",value:function(){var e=this.props,t=e.menuItems,r=e.loading,n=e.error,c=e.addedToCart;if(n)return Object(j.jsx)(y,{});if(r)return Object(j.jsx)(g,{});var a=t.map((function(e){return Object(j.jsx)(m,{menuItem:e,onAddToCart:function(){return c(e.id)}},e.id)}));return Object(j.jsx)(k,{items:a})}}]),r}(n.Component)),E={menuLoaded:f,menuRequested:x,menuError:v,addedToCart:_},k=function(e){var t=e.items;return Object(j.jsx)("ul",{className:"menu__list",children:t})},R=h()(Object(b.b)((function(e){return{menuItems:e.menu,loading:e.loading,error:e.error}}),E)(N)),C=function(){return Object(j.jsx)(R,{})},T=(r(42),function(e){return e.map((function(e){return{id:e.id,qtty:e.qtty}}))}),I={deleteFromCart:function(e){return{type:"ITEM_REMOVE_FROM_CART",payload:e}}},M=h()(Object(b.b)((function(e){return{items:e.items}}),I)((function(e){var t=e.items,r=e.deleteFromCart,n=e.RestoService;return 0===t.length?Object(j.jsx)("div",{className:"cart__title",children:" \u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430 :( "}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"cart__title",children:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437:"}),Object(j.jsx)("div",{className:"cart__list",children:t.map((function(e){var t=e.price,n=e.title,c=e.url,a=e.id,i=e.qtty;return Object(j.jsxs)("div",{className:"cart__item",children:[Object(j.jsx)("img",{src:c,className:"cart__item-img",alt:n}),Object(j.jsx)("div",{className:"cart__item-title",children:n}),Object(j.jsxs)("div",{className:"cart__item-price",children:[t,"$ * ",i]}),Object(j.jsx)("div",{onClick:function(){return r(a)},className:"cart__close",children:"\xd7"})]},a)}))}),Object(j.jsx)("button",{onClick:function(){n.setOrder(T(t))},className:"order",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]})}))),w=function(){return Object(j.jsx)("div",{className:"cart",children:Object(j.jsx)(M,{})})},D=(r(43),function(e){Object(u.a)(r,e);var t=Object(d.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var e=this;0===this.props.menuItems.length&&(this.props.menuRequested(),this.props.RestoService.getMenuItems().then((function(t){return e.props.menuLoaded(t)})).catch((function(t){return e.props.menuError()})))}},{key:"render",value:function(){var e=this,t=this.props,r=t.loading,n=t.error,c=t.menuItems;if(n)return Object(j.jsx)("div",{className:"item_page",children:Object(j.jsx)(y,{})});if(r)return Object(j.jsx)("div",{className:"item_page",children:Object(j.jsx)(g,{})});var a=c.find((function(t){return+t.id===+e.props.match.params.id})),i=a.title,s=a.url,o=a.category,u=a.price,d=a.id;return Object(j.jsx)("div",{className:"item_page",children:Object(j.jsxs)("div",{className:"menu__item item_block",children:[Object(j.jsx)("div",{className:"menu__title",children:i}),Object(j.jsx)("img",{className:"menu__img",src:s,alt:i}),Object(j.jsxs)("div",{className:"menu__category",children:["Category: ",Object(j.jsx)("span",{children:o})]}),Object(j.jsxs)("div",{className:"menu__price",children:["Price: ",Object(j.jsxs)("span",{children:[u,"$"]})]}),Object(j.jsx)("button",{onClick:function(){return e.props.addedToCart(d)},className:"menu__btn",children:"Add to cart"}),Object(j.jsx)("span",{className:"menu__category_Img ".concat(o)})]})})}}]),r}(n.Component)),P={menuLoaded:f,menuRequested:x,menuError:v,addedToCart:_},A=h()(Object(b.b)((function(e){return{menuItems:e.menu,loading:e.loading,error:e.error}}),P)(D)),q=r.p+"static/media/shopping-cart-solid.f0d47d21.svg",S=(r(44),Object(b.b)((function(e){return{totalPrice:e.totalPrice}}))((function(e){var t=e.totalPrice;return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)(l.b,{to:"/",className:"header__link",children:"Menu"}),Object(j.jsxs)(l.b,{to:"/cart",className:"header__link",children:[Object(j.jsx)("img",{className:"header__cart",src:q,alt:"cart"}),"Total: ",t," $"]})]})}))),U=r.p+"static/media/food-bg.fd26761e.jpg",F=r(3),L=function(){return Object(j.jsxs)("div",{style:{background:"url(".concat(U,") center center/cover no-repeat")},className:"app",children:[Object(j.jsx)(S,{}),Object(j.jsxs)(F.c,{children:[Object(j.jsx)(F.a,{path:"/",exact:!0,component:C}),Object(j.jsx)(F.a,{path:"/cart",exact:!0,component:w}),Object(j.jsx)(F.a,{path:"/:id",component:A})]})]})},B=function(e){Object(u.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(s.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={error:!1},e}return Object(o.a)(r,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(j.jsx)(y,{}):this.props.children}}]),r}(n.Component),$=r(9),J=r.n($),Q=r(17),V=function(){function e(){Object(s.a)(this,e),this._apiBase="http://localhost:3000"}return Object(o.a)(e,[{key:"getResource",value:function(){var e=Object(Q.a)(J.a.mark((function e(t){var r;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase).concat(t));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t)+", received ".concat(r.status));case 5:return e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMenuItems",value:function(){var e=Object(Q.a)(J.a.mark((function e(){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/menu/");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getItem",value:function(){var e=Object(Q.a)(J.a.mark((function e(t){var r,n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/menu/");case 2:return r=e.sent,console.log(r),n=r.find((function(e){return console.log("el.id: ".concat(e.id,", id: ").concat(t)),e.id===+t})),console.log(n),e.abrupt("return",n);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setOrder",value:function(){var e=Object(Q.a)(J.a.mark((function e(t){var r,n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getOrderNumber();case 2:return r=e.sent,n={id:r,order:t},e.next=6,fetch("".concat(this._apiBase,"/orders"),{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(n)});case 6:if(e.sent.ok){e.next=9;break}throw new Error("json error");case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getOrderNumber",value:function(){var e=Object(Q.a)(J.a.mark((function e(){var t,r;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/orders/");case 2:return t=e.sent,r=t.length+1,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),z=r(22),G=r(18),H={menu:[],loading:!0,error:!1,items:[],totalPrice:0},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MENU_LOADED":return Object(p.a)(Object(p.a)({},e),{},{menu:t.payload,loading:!1,error:!1});case"MENU_REQUESTED":return Object(p.a)(Object(p.a)({},e),{},{menu:e.menu,loading:!0,error:!1});case"MENU_ERROR":return Object(p.a)(Object(p.a)({},e),{},{menu:e.menu,error:!0});case"ITEM_ADD_TO_CART":var r=t.payload,n=e.items.findIndex((function(e){return e.id===r}));if(n>=0){var c=e.items.find((function(e){return e.id===r})),a=Object(p.a)(Object(p.a)({},c),{},{qtty:++c.qtty});return Object(p.a)(Object(p.a)({},e),{},{items:[].concat(Object(G.a)(e.items.slice(0,n)),[a],Object(G.a)(e.items.slice(n+1))),totalPrice:e.totalPrice+a.price})}var i=e.menu.find((function(e){return e.id===r})),s={title:i.title,price:i.price,url:i.url,id:i.id,qtty:1};return Object(p.a)(Object(p.a)({},e),{},{items:[].concat(Object(G.a)(e.items),[s]),totalPrice:e.totalPrice+s.price});case"ITEM_REMOVE_FROM_CART":var o=t.payload,u=e.items.findIndex((function(e){return e.id===o})),d=e.items[u].price*e.items[u].qtty;return Object(p.a)(Object(p.a)({},e),{},{items:[].concat(Object(G.a)(e.items.slice(0,u)),Object(G.a)(e.items.slice(u+1))),totalPrice:e.totalPrice-d});default:return e}},W=Object(z.b)(K),X=(r(46),new V);i.a.render(Object(j.jsx)(b.a,{store:W,children:Object(j.jsx)(B,{children:Object(j.jsx)(O.Provider,{value:X,children:Object(j.jsx)(l.a,{children:Object(j.jsx)(L,{})})})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.55a2062d.chunk.js.map