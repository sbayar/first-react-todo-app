(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{39:function(t,e,n){},40:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n(1),c=n.n(a),s=n(32),i=n.n(s),d=(n(39),n(20)),r=n(17),l=n(8),u=n(9),b=n(11),j=n(10),p=(n(40),n(13)),h=n(2),m=void 0,f=function(t){var e=t.todo.id;return Object(o.jsxs)("span",{children:[Object(o.jsxs)("button",{type:"button",className:"btn btn-outline-info btn-sm me-2",onClick:t.enterEditMode.bind(m,e),children:["  ",Object(o.jsx)("i",{className:"far fa-edit"})]}),Object(o.jsxs)("button",{type:"button",className:"btn btn-outline-danger btn-sm",onClick:t.deleteTodo.bind(m,e),children:[" ",Object(o.jsx)("i",{className:"fas fa-times"})," "]})]})},O=void 0,v=function(t){var e=t.todo.id;return Object(o.jsxs)("span",{children:[Object(o.jsxs)("button",{type:"button",className:"btn btn-outline-success btn-sm me-2",onClick:t.saveChanges.bind(O,e),children:[" ",Object(o.jsx)("i",{className:"fas fa-check"})]}),Object(o.jsxs)("button",{type:"button",className:"btn btn-outline-info btn-sm me-2",onClick:t.exitEditMode.bind(O,e),children:[" ",Object(o.jsx)("i",{className:"far fa-times-circle"})]})]})},x=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).getStyle=function(){return{textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(u.a)(n,[{key:"render",value:function(){var t,e,n=this.props.todo,a=n.title,c=n.id;return n.isEditing?(e=Object(o.jsx)(v,{exitEditMode:this.props.exitEditMode,saveChanges:this.props.saveChanges,todo:this.props.todo}),t=Object(o.jsx)("div",{className:"w-75 d-inline-block",children:Object(o.jsx)("input",{type:"text",name:"title",className:"form-control",onChange:this.props.onTodoInputChange,value:a,"data-id":c})})):(e=Object(o.jsx)(f,{enterEditMode:this.props.enterEditMode,deleteTodo:this.props.deleteTodo,todo:this.props.todo}),t=Object(o.jsxs)("div",{className:"form-check form-check-inline",children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox1_"+c,onChange:this.props.toggleTodoCompleted.bind(this,c),checked:this.props.todo.completed}),Object(o.jsxs)("label",{className:"form-check-label",htmlFor:"inlineCheckbox1_"+c,children:[" ",Object(o.jsx)("span",{style:this.getStyle(),children:a})," "]})]})),Object(o.jsxs)("li",{className:"list-group-item",children:[t,Object(o.jsx)("div",{className:"float-end",children:e})]})}}]),n}(a.Component),g=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(o.jsx)("div",{className:"todo-list",children:Object(o.jsx)("ul",{className:"list-group",children:this.props.todos.map((function(e){return Object(o.jsx)(x,{todo:e,toggleTodoCompleted:t.props.toggleTodoCompleted,deleteTodo:t.props.deleteTodo,enterEditMode:t.props.enterEditMode,exitEditMode:t.props.exitEditMode,saveChanges:t.props.saveChanges,onTodoInputChange:t.props.onTodoInputChange},e.id)}))})})}}]),n}(a.Component),C=n(16),N=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.onChange=function(e){t.setState(Object(C.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("form",{onSubmit:this.onSubmit,className:"row",autoComplete:"off",children:[Object(o.jsx)("div",{className:"col-md-10",children:Object(o.jsx)("input",{type:"text",placeholder:"Add todo...",name:"title",className:"form-control input-add-todo",value:this.state.title,onChange:this.onChange})}),Object(o.jsx)("div",{className:"col-md-2 ps-0",children:Object(o.jsx)("button",{type:"submit",className:"submit-btn btn btn-outline-success",children:"Submit"})})]})}}]),n}(a.Component);function k(){return Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsx)("h1",{children:"About"}),Object(o.jsx)("p",{children:"This is about page"})]})}function y(){return Object(o.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)(p.b,{to:"/",className:"navbar-brand",children:"My todos"}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-md-0",children:[Object(o.jsx)("li",{className:"nav-item active",children:Object(o.jsx)(p.b,{to:"/",className:"nav-link active",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(p.b,{to:"/about",className:"nav-link",children:"About"})})]})})]})})}var T=n(15),S=n.n(T),E=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).onChange=function(e){t.props.search(e.target.value)},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsx)("form",{className:"row",autoComplete:"off",children:Object(o.jsx)("div",{className:"col-md-12",children:Object(o.jsx)("input",{type:"text",placeholder:"Search",className:"form-control input-add-todo",onChange:this.onChange})})})}}]),n}(a.Component),M=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).API_URL="/todos",t.todosBackup=[],t.state={todos:[]},t.getTodos=function(){S.a.get(t.API_URL).then((function(e){return t.setState({todos:e.data})}))},t.deleteTodo=function(e){S.a.delete("".concat(t.API_URL,"/").concat(e)).then((function(){t.setState({todos:Object(r.a)(t.state.todos.filter((function(t){return t.id!==e})))})}))},t.addTodo=function(e){S.a.post("".concat(t.API_URL),{title:e,completed:!1}).then((function(e){return t.setState({todos:[].concat(Object(r.a)(t.state.todos),[e.data])})}))},t.toggleTodoCompleted=function(e){t.setComponentState(e,(function(t){t.completed=!t.completed}))},t.enterEditMode=function(e){t.setComponentState(e,(function(t){t.isEditing=!0,t.backup=JSON.stringify(t)}))},t.exitEditMode=function(e){t.setComponentState(e,(function(t){var e=JSON.parse(t.backup);t.isEditing=!1,t.title=e.title}))},t.onTodoInputChange=function(e){var n=Number(e.target.dataset.id);t.setComponentState(n,(function(t){t.title=e.target.value}))},t.saveChanges=function(e){var n=t.state.todos.find((function(t){return t.id===e}));S.a.put("".concat(t.API_URL,"/").concat(e),n).then((function(){t.setComponentState(e,(function(t){t.backup=null,t.isEditing=!1}))}))},t.search=function(e){t.todosBackup.length||(t.todosBackup=Object(r.a)(t.state.todos)),e.trim()?t.setState((function(){return{todos:t.todosBackup.filter((function(t){return t.title.includes(e.trim())}))}})):(t.setState({todos:t.todosBackup}),t.todosBackup=[])},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getTodos()}},{key:"setComponentState",value:function(t,e){this.setState((function(n){return{todos:n.todos.map((function(n){return n.id===t&&e(n),Object(d.a)(Object(d.a)({},n),n)}))}}))}},{key:"render",value:function(){var t=this;return Object(o.jsx)(p.a,{children:Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"App-header",children:Object(o.jsx)(y,{})}),Object(o.jsx)(h.a,{exact:!0,path:"/",render:function(){return Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsxs)("div",{className:"row mb-2",children:[Object(o.jsx)("div",{className:"col-md-6",children:Object(o.jsx)(N,{addTodo:t.addTodo})}),Object(o.jsx)("div",{className:"col-md-6",children:Object(o.jsx)(E,{search:t.search})})]}),Object(o.jsx)(g,{todos:t.state.todos,toggleTodoCompleted:t.toggleTodoCompleted,deleteTodo:t.deleteTodo,enterEditMode:t.enterEditMode,exitEditMode:t.exitEditMode,saveChanges:t.saveChanges,onTodoInputChange:t.onTodoInputChange})]})}}),Object(o.jsx)(h.a,{path:"/about",component:k})]})})})}}]),n}(a.Component),A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(e){var n=e.getCLS,o=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),o(t),a(t),c(t),s(t)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(M,{})}),document.getElementById("root")),A()}},[[64,1,2]]]);
//# sourceMappingURL=main.d985d95c.chunk.js.map