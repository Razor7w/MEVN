(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53d6163a"],{"1dde":function(t,n,e){var o=e("d039"),a=e("b622"),r=e("60ae"),s=a("species");t.exports=function(t){return r>=51||!o((function(){var n=[],e=n.constructor={};return e[s]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},"65f0":function(t,n,e){var o=e("861d"),a=e("e8b5"),r=e("b622"),s=r("species");t.exports=function(t,n){var e;return a(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)?o(e)&&(e=e[s],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},8418:function(t,n,e){"use strict";var o=e("c04e"),a=e("9bf2"),r=e("5c6c");t.exports=function(t,n,e){var s=o(n);s in t?a.f(t,s,r(0,e)):t[s]=e}},a434:function(t,n,e){"use strict";var o=e("23e7"),a=e("23cb"),r=e("a691"),s=e("50c4"),i=e("7b0b"),c=e("65f0"),u=e("8418"),d=e("1dde"),l=Math.max,m=Math.min,f=9007199254740991,p="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!d("splice")},{splice:function(t,n){var e,o,d,v,h,b,g=i(this),x=s(g.length),_=a(t,x),w=arguments.length;if(0===w?e=o=0:1===w?(e=0,o=x-_):(e=w-2,o=m(l(r(n),0),x-_)),x+e-o>f)throw TypeError(p);for(d=c(g,o),v=0;v<o;v++)h=_+v,h in g&&u(d,v,g[h]);if(d.length=o,e<o){for(v=_;v<x-o;v++)h=v+o,b=v+e,h in g?g[b]=g[h]:delete g[b];for(v=x;v>x-o+e;v--)delete g[v-1]}else if(e>o)for(v=x-o;v>_;v--)h=v+o-1,b=v+e-1,h in g?g[b]=g[h]:delete g[b];for(v=0;v<e;v++)g[v+_]=arguments[v+2];return g.length=x-o+e,d}})},b727:function(t,n,e){var o=e("f8c2"),a=e("44ad"),r=e("7b0b"),s=e("50c4"),i=e("65f0"),c=[].push,u=function(t){var n=1==t,e=2==t,u=3==t,d=4==t,l=6==t,m=5==t||l;return function(f,p,v,h){for(var b,g,x=r(f),_=a(x),w=o(p,v,3),y=s(_.length),E=0,C=h||i,N=n?C(f,y):e?C(f,0):void 0;y>E;E++)if((m||E in _)&&(b=_[E],g=w(b,E,x),t))if(n)N[E]=g;else if(g)switch(t){case 3:return!0;case 5:return b;case 6:return E;case 2:c.call(N,b)}else if(d)return!1;return l?-1:u||d?d:N}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},c740:function(t,n,e){"use strict";var o=e("23e7"),a=e("b727").findIndex,r=e("44d2"),s="findIndex",i=!0;s in[]&&Array(1)[s]((function(){i=!1})),o({target:"Array",proto:!0,forced:i},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),r(s)},c93e:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("h1",[t._v("Notas")]),e("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:t.mensaje.color},on:{dismissed:function(n){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.mensaje.texto)+" ")]),t.agregar?e("form",{on:{submit:function(n){return n.preventDefault(),t.agregarNota(t.nota)}}},[e("h3",{staticClass:"text-center"},[t._v("Agregar nueva Nota")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.nota.nombre,expression:"nota.nombre"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Ingrese un Nombre"},domProps:{value:t.nota.nombre},on:{input:function(n){n.target.composing||t.$set(t.nota,"nombre",n.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.nota.descripcion,expression:"nota.descripcion"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Ingrese una descripcion"},domProps:{value:t.nota.descripcion},on:{input:function(n){n.target.composing||t.$set(t.nota,"descripcion",n.target.value)}}}),e("b-button",{staticClass:"btn-sm btn-block btn-success",attrs:{type:"submit"}},[t._v("Agregar")])],1):e("form",{on:{submit:function(n){return n.preventDefault(),t.editarNota(t.notaEditar)}}},[e("h3",{staticClass:"text-center"},[t._v("Editar Nota")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.notaEditar.nombre,expression:"notaEditar.nombre"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Ingrese un Nombre"},domProps:{value:t.notaEditar.nombre},on:{input:function(n){n.target.composing||t.$set(t.notaEditar,"nombre",n.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.notaEditar.descripcion,expression:"notaEditar.descripcion"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Ingrese una descripcion"},domProps:{value:t.notaEditar.descripcion},on:{input:function(n){n.target.composing||t.$set(t.notaEditar,"descripcion",n.target.value)}}}),e("b-button",{staticClass:"btn-sm btn-block mb-1 btn-warning",attrs:{type:"submit"}},[t._v("Editar")]),e("b-button",{staticClass:"btn-sm btn-block",on:{click:function(n){t.agregar=!0}}},[t._v("Cancelar")])],1),e("table",{staticClass:"table"},[t._m(0),e("tbody",t._l(t.notas,(function(n,o){return e("tr",{key:o},[e("th",{attrs:{scope:"row"}},[t._v(t._s(n._id))]),e("td",[t._v(t._s(n.nombre))]),e("td",[t._v(t._s(n.descripcion))]),e("td",[t._v(t._s(n.date))]),e("td",[e("b-button",{staticClass:"btn-warning btn-sm mx-2",on:{click:function(e){return t.activarEdicion(n._id)}}},[t._v("Actualizar")]),e("b-button",{staticClass:"btn-danger btn-sm mx-2",on:{click:function(e){return t.eliminarNota(n._id)}}},[t._v("Eliminar")])],1)])})),0)])],1)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),e("th",{attrs:{scope:"col"}},[t._v("Nombre")]),e("th",{attrs:{scope:"col"}},[t._v("Descripción")]),e("th",{attrs:{scope:"col"}},[t._v("Fecha")]),e("th",{attrs:{scope:"col"}},[t._v("Acciones")])])])}],r=(e("c740"),e("a434"),{data:function(){return{notas:[],dismissSecs:5,dismissCountDown:0,mensaje:{color:"",texto:""},nota:{nombre:"",descripcion:""},agregar:!0,notaEditar:{nombre:"",descripcion:""}}},created:function(){this.listarNotas()},methods:{alerta:function(){this.mensaje.color="danger",this.mensaje.texto="Probando alerta",this.showAlert()},listarNotas:function(){var t=this;this.axios.get("/notas").then((function(n){console.log(n.data),t.notas=n.data})).catch((function(t){console.error(t.response)}))},agregarNota:function(){var t=this;this.axios.post("/nueva-nota",this.nota).then((function(n){t.notas.push(n.data),t.nota.nombre="",t.nota.descripcion="",t.mensaje.color="success",t.mensaje.texto="Nota agregada",t.showAlert()})).catch((function(n){console.error(n.response),n.response.data.error.errors.nombre.message?t.mensaje.texto=n.response.data.error.errors.nombre.message:t.mensaje.texto="Error del sistema",t.mensaje.color="danger",t.showAlert()}))},eliminarNota:function(t){var n=this;console.log(t),this.axios.delete("/nota/".concat(t)).then((function(t){var e=n.notas.findIndex((function(n){return n._id===t.data._id}));n.notas.splice(e,1),n.mensaje.color="success",n.mensaje.texto="Nota Eliminada",n.showAlert()})).catch((function(t){console.log(t.response)}))},activarEdicion:function(t){var n=this;this.agregar=!1,console.log(t),this.axios.get("/nota/".concat(t)).then((function(t){n.notaEditar=t.data})).catch((function(t){console.log(t.response)}))},editarNota:function(t){var n=this;this.axios.put("/nota/".concat(t._id),t).then((function(t){var e=n.notas.findIndex((function(n){return n._id===t.data._id}));n.notas[e].nombre=t.data.nombre,n.notas[e].descripcion=t.data.descripcion,n.mensaje.color="success",n.mensaje.texto="Nota Editada",n.showAlert(),n.agregar=!0})).catch((function(t){console.log(t.response)}))},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}}}),s=r,i=e("2877"),c=Object(i["a"])(s,o,a,!1,null,null,null);n["default"]=c.exports},e8b5:function(t,n,e){var o=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}}}]);
//# sourceMappingURL=chunk-53d6163a.aff92aee.js.map