(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(7),l=t.n(c),o=(t(14),t(1)),i=t(2),s=t(4),m=t(3),u=t(5),d=function(e){return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper light-blue darken-2"},r.a.createElement("a",{className:"brand-logo",href:"#top"},e.title))))},p=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).ciudadRef=r.a.createRef(),t.paisRef=r.a.createRef(),t.consultarClima=function(e){e.preventDefault();var a={ciudad:t.ciudadRef.current.value,pais:t.paisRef.current.value};t.props.consultarClima(a)},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"contenedor-form"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("form",{onSubmit:this.consultarClima},r.a.createElement("div",{className:"input-field col s12 m8 l4 offset-m2"},r.a.createElement("input",{ref:this.ciudadRef,id:"ciudad",type:"text"}),r.a.createElement("label",{htmlFor:"ciudad"},"Ciudad")),r.a.createElement("div",{className:"input-field col s12 m8 l4 offset-m2"},r.a.createElement("select",{ref:this.paisRef,id:"pais"},r.a.createElement("option",{value:"",defaultValue:!0},"Elige un pa\xeds"),r.a.createElement("option",{value:"AR"},"Argentina"),r.a.createElement("option",{value:"CO"},"Colombia"),r.a.createElement("option",{value:"CR"},"Costa Rica"),r.a.createElement("option",{value:"ES"},"Espa\xf1a"),r.a.createElement("option",{value:"US"},"Estados Unidos"),r.a.createElement("option",{value:"MX"},"M\xe9xico"),r.a.createElement("option",{value:"PE"},"Per\xfa")),r.a.createElement("label",{htmlFor:"pais"},"Pais:")),r.a.createElement("div",{className:"input-field col s12 m8 l4 offset-2 buscador"},r.a.createElement("input",{type:"submit",className:"waves-effect waves-light \r btn-large yellow accent-4",value:"Buscar.."}))))))}}]),a}(n.Component),f=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6 offset-m3"},r.a.createElement("div",{className:"card-panel red darken-4 error"},e.mensaje))))},v=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).mostrarResultado=function(){var e=t.props.clima,a=e.name,n=e.weather,c=e.main;if(!a||!n||!c)return null;var l="http://openweathermap.org/img/w/".concat(n[0].icon,".png"),o="clima de ".concat(a);return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"resultado col s12 m8 l6 offset-m2 offset-l3"},r.a.createElement("div",{className:"card-panel light-blue align center"},r.a.createElement("span",{className:"white-text"},r.a.createElement("h2",null,"Resultado Clima de: ",a," "),r.a.createElement("p",{className:"temperatura"},"Actual: ",(c.temp-273.15).toFixed(2)," \xb0C",r.a.createElement("img",{src:l,alt:o})),r.a.createElement("p",null,"Max: ",(c.temp_max-273.15).toFixed(2)," \xb0C"),r.a.createElement("p",null,"Min: ",(c.temp_min-273.15).toFixed(2)," \xb0C")))))},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},this.mostrarResultado())}}]),a}(n.Component),E=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={error:!1,request:{},resultado:{}},t.consultarApi=function(){var e=t.state.request,a=e.ciudad,n=e.pais;if(!a||!n)return null;var r="https://api.openweathermap.org/data/2.5/weather?q=".concat(a,",").concat(n,"&appid=").concat("c03366a5a9794f41cf22579096751676");fetch(r).then(function(e){return e.json()}).then(function(e){t.setState({resultado:e})}).catch(function(e){console.log(e)})},t.consultarClima=function(e){console.log(e),""===e.ciudad||""===e.pais?t.setState({error:!0}):t.setState({request:e,error:!1})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,a){a.request!==this.state.request&&this.consultarApi()}},{key:"render",value:function(){var e,a=this.state.error,t=this.state.resultado.cod;return a?e=r.a.createElement(f,{mensaje:"Ambos campos son obligatorios"}):"404"===t?(console.log(t),e=r.a.createElement(f,{mensaje:"Ciudad no encontrada"})):e=r.a.createElement(v,{clima:this.state.resultado}),r.a.createElement("div",{className:"app"},r.a.createElement(d,{title:"Aplicaci\xf3n del clima"}),r.a.createElement(p,{consultarClima:this.consultarClima}),e)}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.c357b780.chunk.js.map