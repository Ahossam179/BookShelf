(this["webpackJsonpmyreads-app"]=this["webpackJsonpmyreads-app"]||[]).push([[0],{17:function(e,t,a){e.exports=a(30)},22:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var o=a(0),s=a.n(o),n=a(15),r=a.n(n),c=(a(22),a(1)),l=a(4),i=a.n(l),h=a(7),p=a(6);const m="https://reactnd-books-api.udacity.com";let d=localStorage.token;d||(d=localStorage.token=Math.random().toString(36).substr(-8));const u={Accept:"application/json",Authorization:d},k=(e,t)=>fetch("".concat(m,"/books/").concat(e.id),{method:"PUT",headers:Object(p.a)(Object(p.a)({},u),{},{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(e=>e.json()),b=e=>fetch("".concat(m,"/search"),{method:"POST",headers:Object(p.a)(Object(p.a)({},u),{},{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(e=>e.json()).then(e=>e.books);class v extends o.Component{constructor(...e){var t;super(...e),t=this,this.handleChange=function(){var e=Object(h.a)(i.a.mark((function e(a){var o,s,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o=a.target.value,s=t.props,e.next=5,k(s,o);case 5:n=e.sent,t.props.moveBook(s,o,n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()}render(){return s.a.createElement("li",null,s.a.createElement("div",{className:"book"},s.a.createElement("div",{className:"book-top"},s.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(this.props.imageLinks?this.props.imageLinks.thumbnail:"",")")}}),s.a.createElement("div",null),s.a.createElement("div",{className:"book-shelf-changer"},s.a.createElement("select",{onChange:this.handleChange,value:this.props.shelf},s.a.createElement("option",{value:"move",disabled:!0},"Move to..."),s.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),s.a.createElement("option",{value:"wantToRead"},"Want to Read"),s.a.createElement("option",{value:"read"},"Read"),s.a.createElement("option",{value:"none"},"None")))),s.a.createElement("div",{className:"book-title"},this.props.title),s.a.createElement("div",{className:"book-authors"},this.props.authors?this.props.authors[0]:"No Author")))}}class E extends o.Component{render(){return s.a.createElement("div",{className:"bookshelf"},s.a.createElement("h2",{className:"bookshelf-title"},this.props.title),s.a.createElement("div",{className:"bookshelf-books"},s.a.createElement("ol",{className:"books-grid"},this.props.books&&this.props.books.map(e=>s.a.createElement(v,Object.assign({key:e.id},e,{moveBook:this.props.moveBook}))))))}}var f=a(5);class g extends o.Component{render(){return s.a.createElement("div",{className:"open-search"},s.a.createElement(f.b,{to:"/BookShelf/search"},"Add a book"))}}class y extends o.Component{componentDidMount(){var e=this;return Object(h.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(m,"/books"),{headers:u}).then(e=>e.json()).then(e=>e.books);case 3:a=t.sent,e.props.addBooks(a),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}render(){return s.a.createElement("div",{className:"list-books"},s.a.createElement("div",{className:"list-books-title"},s.a.createElement("h1",null,"MyReads")),s.a.createElement("div",{className:"list-books-content"},s.a.createElement(E,{title:"Currently Reading",books:this.props.currentlyReading,moveBook:this.props.moveBook}),s.a.createElement(E,{title:"Want To Read",books:this.props.wantToRead,moveBook:this.props.moveBook}),s.a.createElement(E,{title:"Read",books:this.props.read,moveBook:this.props.moveBook})),s.a.createElement(g,null))}}class N extends o.Component{constructor(e){var t;super(e),t=this,this.handleChange=function(){var e=Object(h.a)(i.a.mark((function e(a){var o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,o=a.target.value,t.setState({query:o}),!o.trim()){e.next=10;break}return e.next=6,b(o);case 6:(s=e.sent).error?t.setState({books:[]}):t.setState({books:s}),e.next=11;break;case 10:t.setState({books:[]});case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),this.state={query:"",books:[]}}render(){return s.a.createElement("div",{className:"search-books"},s.a.createElement("div",{className:"search-books-bar"},s.a.createElement(f.b,{className:"close-search",to:"/BookShelf"},"Close"),s.a.createElement("div",{className:"search-books-input-wrapper"},s.a.createElement("input",{type:"text",placeholder:"Search by title or author",onChange:this.handleChange,value:this.state.query}))),s.a.createElement("div",{className:"search-books-results"},s.a.createElement("ol",{className:"books-grid"},this.state.books.length>0&&this.state.books.map(e=>s.a.createElement(v,Object.assign({key:e.id},e,{moveBook:this.props.moveBook}))))))}}const x=s.a.createContext();class B extends o.Component{constructor(){super(),this.state={books:[],currentlyReading:[],wantToRead:[],read:[],addBooks:e=>{const t=e.filter(e=>"currentlyReading"===e.shelf),a=e.filter(e=>"read"===e.shelf),o=e.filter(e=>"wantToRead"===e.shelf);this.setState({books:e,currentlyReading:t,read:a,wantToRead:o})},moveBook:(e,t,a)=>{const o=this.state.books.map(e=>(a[t].find(t=>t===e.id)&&(e.shelf=t),e));this.state.addBooks(o)}}}render(){return s.a.createElement(x.Provider,{value:Object(p.a)({},this.state)},this.props.children)}}class C extends s.a.Component{constructor(...e){super(...e),this.state={showSearchPage:!1}}render(){return s.a.createElement("div",{className:"app"},s.a.createElement(B,null,s.a.createElement(c.c,null,s.a.createElement(c.a,{exact:!0,path:"/BookShelf",render:()=>s.a.createElement(x.Consumer,null,e=>s.a.createElement(y,e))}),s.a.createElement(c.a,{exact:!0,path:"/BookShelf/search",component:N}))))}}var R=C;a(29);r.a.render(s.a.createElement(f.a,null,s.a.createElement(R,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.9388c627.chunk.js.map