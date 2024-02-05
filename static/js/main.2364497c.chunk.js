(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(1),l=c.n(n),i=(c(13),c(14),c(3)),o=c.n(i),d=c(8),r=c(2);function j(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var u=c(0),b=l.a.createContext({allTodos:[],setAllTodos:function(){},filteredTodos:[],setFilteredTodos:function(){},isLoading:!1,setIsLoading:function(){},isLoadingModal:!1,setIsLoadingModal:function(){},query:"",setQuery:function(){},selectOption:"",setSelectOption:function(){},selectTodo:null,setSelectTodo:function(){},user:null,setUser:function(){}}),O=function(e){var t=e.children,c=Object(n.useState)([]),s=Object(r.a)(c,2),a=s[0],l=s[1],i=Object(n.useState)(""),o=Object(r.a)(i,2),O=o[0],h=o[1],m=Object(n.useState)(""),x=Object(r.a)(m,2),f=x[0],p=x[1],v=Object(n.useState)([]),N=Object(r.a)(v,2),y=N[0],g=N[1],T=Object(n.useState)(!1),S=Object(r.a)(T,2),C=S[0],L=S[1],k=Object(n.useState)(null),w=Object(r.a)(k,2),I=w[0],E=w[1],M=Object(n.useState)(null),_=Object(r.a)(M,2),A=_[0],q=_[1],B=Object(n.useState)(!1),F=Object(r.a)(B,2),P=F[0],Q=F[1];return Object(n.useEffect)((function(){L(!0),j("/todos").then(l).finally((function(){L(!1)}))}),[]),Object(n.useEffect)((function(){var e;I&&(Q(!0),(e=I.userId,j("/users/".concat(e))).then(q).finally((function(){Q(!1)})))}),[I]),Object(n.useEffect)((function(){!function(){var e=Object(d.a)(a);"active"===f?e=e.filter((function(e){return!e.completed})):"completed"===f&&(e=e.filter((function(e){return e.completed}))),e=e.filter((function(e){return e.title.toLowerCase().includes(O.toLowerCase())})),g(e)}()}),[a,O,f]),Object(u.jsx)(b.Provider,{value:{allTodos:a,setAllTodos:l,isLoading:C,setIsLoading:L,query:O,setQuery:h,filteredTodos:y,setFilteredTodos:g,selectOption:f,setSelectOption:p,selectTodo:I,setSelectTodo:E,user:A,setUser:q,isLoadingModal:P,setIsLoadingModal:Q},children:t})},h=l.a.memo((function(){var e=Object(n.useContext)(b),t=e.filteredTodos,c=e.setSelectTodo,s=e.selectTodo;return Object(u.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(u.jsx)("td",{className:"is-vcentered",children:e.id}),Object(u.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(u.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(u.jsx)("i",{className:"fas fa-check"})})}),Object(u.jsx)("td",{className:"is-vcentered is-expanded",children:Object(u.jsx)("p",{className:o()("has-text-success",{"has-text-danger":!e.completed}),children:e.title})}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(e)},children:Object(u.jsx)("span",{className:"icon",children:Object(u.jsx)("i",{className:o()({"far fa-eye-slash":e.id===(null===s||void 0===s?void 0:s.id),"far fa-eye":e.id!==(null===s||void 0===s?void 0:s.id)})})})})})]},e.id)}))})]})})),m=function(){var e=Object(n.useContext)(b),t=e.setQuery,c=e.query,s=e.setSelectOption;return Object(u.jsxs)("form",{className:"field has-addons",children:[Object(u.jsx)("p",{className:"control",children:Object(u.jsx)("span",{className:"select",children:Object(u.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return s(e.target.value)},children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"active",children:"Active"}),Object(u.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(u.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(u.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){return t(e.target.value.trim())}}),Object(u.jsx)("span",{className:"icon is-left",children:Object(u.jsx)("i",{className:"fas fa-magnifying-glass"})}),c&&Object(u.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(u.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return t("")}})})]})]})},x=(c(16),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(u.jsx)("div",{className:"Loader__content"})})}),f=l.a.memo((function(){var e=Object(n.useContext)(b),t=e.user,c=e.selectTodo,s=e.setUser,a=e.setSelectTodo,l=e.isLoadingModal;if(!c&&!t)return null;var i=c||{},d=i.title,r=i.id,j=i.completed,O=t||{},h=O.email,m=O.name;return Object(u.jsx)(u.Fragment,{children:l?Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),Object(u.jsx)(x,{})]}):Object(u.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(u.jsx)("div",{className:"modal-background"}),Object(u.jsxs)("div",{className:"modal-card",children:[Object(u.jsxs)("header",{className:"modal-card-head",children:[Object(u.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(r)}),Object(u.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){s(null),a(null)}})]}),Object(u.jsxs)("div",{className:"modal-card-body",children:[Object(u.jsx)("p",{className:"block","data-cy":"modal-title",children:d}),Object(u.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(u.jsx)("strong",{className:o()("has-text-success",{"has-text-danger":!j}),children:j?"Done":"Planned"})," by ",Object(u.jsx)("a",{href:"mailto:".concat(h),children:m})]})]})]})]})})})),p=function(){var e=Object(n.useContext)(b).isLoading;return Object(u.jsxs)(O,{children:[Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{className:"title",children:"Todos:"}),Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(m,{})}),Object(u.jsxs)("div",{className:"block",children:[e&&Object(u.jsx)(x,{}),Object(u.jsx)(h,{})]})]})})}),Object(u.jsx)(f,{})]})};a.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2364497c.chunk.js.map