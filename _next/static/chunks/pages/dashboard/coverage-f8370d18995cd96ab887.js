(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7528],{93633:function(e,t,n){"use strict";n.d(t,{a:function(){return o}});var r=n(81322);function o(e,t){return(0,r.r)(e,t,!1)}},58448:function(e,t,n){"use strict";var r,o,i=n(30168),a=n(67294),s=n(45697),c=n(24237),u=function(e){var t=e.align,n=e.children;return a.createElement(l,{align:t,"aria-label":"Toolbar with button groups",role:"toolbar"},a.createElement(d,{role:"group","aria-label":"First group"},n))};u.displayName="ButtonToolbar";var l=c.ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: ",";\n"])),(function(e){return e.align})),d=c.ZP.div(o||(o=(0,i.Z)(["\n  display: inline-flex;\n  position: relative;\n  vertical-align: middle;\n\n  a:hover {\n    color: white;\n  }\n\n  &:last-child > div:last-of-type button {\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n    border-right: 0;\n  }\n\n  a:not(:last-child),\n  button:not(:last-child) {\n    border-bottom-right-radius: 0;\n    border-right: 1px solid ",";\n    border-top-right-radius: 0;\n  }\n\n  a:not(:first-child),\n  button:not(:first-child),\n  a:not(:first-child) button,\n  div:not(:first-child) button {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    margin-left: 0;\n  }\n\n  a:not(:last-child) button,\n  div:not(:last-child) button {\n    border-bottom-right-radius: 0;\n    border-right: 1px solid ",";\n    border-top-right-radius: 0;\n  }\n"])),(function(e){return e.theme.COLOUR.light}),(function(e){return e.theme.COLOUR.light}));u.propTypes={align:s.string,children:s.node.isRequired},u.defaultProps={align:"center"},t.Z=u},71247:function(e,t,n){"use strict";var r=n(87462),o=n(70885),i=n(45987),a=n(67294),s=n(45697),c=n(42778),u=n(82373),l=n(49787),d=["disabled","errors","helperMessage","name","placeholder","readOnly","regExp","register","size","validate","withAddon"],p=function(e){var t=e.disabled,n=e.errors,s=e.helperMessage,u=e.name,p=e.placeholder,f=e.readOnly,g=(e.regExp,e.register),b=e.size,h=(e.validate,e.withAddon),m=(0,i.Z)(e,d),v=(0,a.useState)(!1),y=(0,o.Z)(v,2),O=y[0],j=y[1];return a.createElement(c.Z,(0,r.Z)({"aria-label":u,component:l.Z,disabled:t,helperMessage:s,onKeyDown:function(e){j(!0)},onBlur:function(){j(!1)},errors:n[u],isTyping:O,key:u,name:u,placeholder:p,readOnly:f,register:g,size:b,withAddon:h},m))};p.displayName="FormField",p.propTypes={accept:s.string,autoComplete:(0,s.oneOfType)([s.bool,s.string]),autoFocus:s.bool,disabled:s.bool,errors:s.object.isRequired,helperMessage:s.string,label:s.string,name:s.string.isRequired,placeholder:s.string,readOnly:s.bool,register:s.func.isRequired,size:(0,s.oneOf)([u.Z.SM,u.Z.MD,u.Z.LG]),style:s.object,textAlign:s.string,type:s.string,value:(0,s.oneOfType)([s.string,s.number,s.bool,(0,s.arrayOf)((0,s.oneOfType)([s.string,s.number,s.bool]))])},p.defaultProps={autoComplete:"off",autoFocus:!1,disabled:!1,errors:{},readOnly:!1,type:"text"},t.Z=p},49787:function(e,t,n){"use strict";var r,o,i,a,s,c,u=n(30168),l=n(24237),d=n(38425),p=n(88280),f=n(82373),g=l.ZP.input.attrs((function(e){return{autoComplete:"off",autoFocus:!1}}))(r||(r=(0,u.Z)(["\n  ","\n\n  ","\n\n    ","\n"])),(function(e){return(0,d.Z)(e)}),(function(e){return e.errors&&(0,l.iv)(o||(o=(0,u.Z)(["\n      ","\n    "])),(function(e){return(0,p.Z)(e)}))}),(function(e){switch(e.size){case f.Z.SM:return(0,l.iv)(i||(i=(0,u.Z)(["\n          height: 1.5rem;\n        "])));case f.Z.MD:return(0,l.iv)(a||(a=(0,u.Z)(["\n          height: 1.875rem;\n        "])));case f.Z.LG:return(0,l.iv)(s||(s=(0,u.Z)(["\n          height: 2.25rem;\n        "])));default:return(0,l.iv)(c||(c=(0,u.Z)(["\n          height: 2.25rem;\n        "])))}}));t.Z=g},21269:function(e,t,n){"use strict";var r,o,i,a,s,c=n(30168),u=n(67294),l=n(45697),d=n(24237),p=n(37815),f=n(82373),g=function(e){var t=e.addonType,n=(e.className,e.children),r=e.context,o=e.error,i=e.size,a=e.text,s=e.theme;return u.createElement(b,{addonType:t,className:t,children:n,context:r,error:o,size:i,text:a,theme:s})};g.displayName="InputGroupAddon";var b=d.ZP.div(r||(r=(0,c.Z)(["\n  align-items: center;\n  display: flex;\n\n  & > * {\n    height: 100%;\n  }\n\n  ","\n  ","\n\n  &,\n  button {\n    ","\n\n    ","\n  }\n"])),(function(e){var t=e.theme,n=t.COLOUR,r=t.FORM_ELEMENTS_STYLES,i=e.error;return e.text&&(0,d.iv)(o||(o=(0,c.Z)(["\n      background-color: ",";\n      border: 1px solid ",";\n      border-radius: ",";\n      color: ",";\n      display: flex;\n      font-size: 0.75rem;\n      font-weight: 400;\n      line-height: 1;\n      margin-bottom: 0;\n      padding: 0.375rem 1rem;\n      text-align: center;\n      transition: background-color 0.15s linear;\n      white-space: nowrap;\n    "])),i?n.danger:n.light,i?n.danger:n.dark,r.inputBorderRadius,i?n.light:n.dark)}),(function(e){return e.size===f.Z.SM&&(0,d.iv)(i||(i=(0,c.Z)(["\n      font-size: 0.625rem;\n      padding: 0 0.75rem;\n    "])))}),(function(e){return"prepend"===e.addonType&&(0,d.iv)(a||(a=(0,c.Z)(["\n        border-top-right-radius: 0;\n        border-bottom-right-radius: 0;\n        margin-right: -1px;\n      "])))}),(function(e){return"append"===e.addonType&&(0,d.iv)(s||(s=(0,c.Z)(["\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n        margin-left: -1px;\n      "])))}));g.propTypes={addonType:(0,l.oneOf)(["prepend","append"]),className:l.any,children:l.node,context:(0,l.oneOf)(Object.values(p.Z)),text:l.bool},g.defaultProps={addonType:"append",context:"light"},t.Z=g},44442:function(e,t,n){"use strict";var r,o,i=n(30168),a=n(67294),s=n(45697),c=n(24237),u=function(e){var t=e.children,n=e.error,r=e.fullWidth,o=e.size,i=e.theme;return a.createElement(l,{children:t,error:n,fullWidth:r,size:o,theme:i})};u.displayName="InputGroup";var l=c.ZP.div(r||(r=(0,i.Z)(["\n  align-items: stretch;\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n  width: 100%;\n\n  input {\n    ","\n    min-width: 0;\n    margin-bottom: 0;\n    position: relative;\n\n    :not(:first-child) {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0;\n    }\n\n    :first-child {\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n\n    :not(:last-child) {\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n  }\n  ","\n"])),(function(e){return e.fullWidth?"flex: 1 1 0%;":"width: auto;"}),(function(e){var t=e.error,n=e.theme;return t&&n&&(0,c.iv)(o||(o=(0,i.Z)(["\n      &:hover {\n        .prepend,\n        .append {\n          background: ",";\n          border-color: ",";\n        }\n      }\n    "])),n.COLOUR.danger,n.COLOUR.danger)}));u.propTypes={fullWidth:s.bool,size:s.string},u.defaultProps={fullWidth:!0,size:"md"},t.Z=u},65375:function(e,t,n){"use strict";var r,o=n(30168),i=n(67294),a=n(45697),s=n(24237),c=n(22796),u=n(18944),l=function(e){var t=e.children,n=e.id,r=e.label,o=e.show,a=e.size;return i.createElement(d,{hasChild:t,htmlFor:n,show:o},i.createElement(c.Z,{marginBottom:"xs"},i.createElement(u.Z,{size:null!==a&&void 0!==a?a:"md",colour:"darkText",content:r})),t)};l.displayName="FormLabel";var d=s.ZP.label(r||(r=(0,o.Z)(["\n  display: ",";\n  margin-bottom: ",";\n  .react-datepicker-wrapper {\n    width: 100%;\n  }\n"])),(function(e){return e.show?"block":"none"}),(function(e){return e.hasChild?"1rem":"0"}));l.propTypes={children:a.node,id:a.string,label:a.string,show:a.bool},l.defaultProps={show:!0},t.Z=l},73165:function(e,t){"use strict";t.Z=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},63867:function(e,t){"use strict";t.Z=function(e){var t=window.location,n=t.protocol,r=t.host,o=t.pathname,i="".concat(n,"//").concat(r).concat(o).concat(e);window.history.pushState({path:i},"",i)}},66805:function(e,t,n){"use strict";n.d(t,{H:function(){return l}});var r=n(92809),o=n(77417),i=n(58448),a=n(14347),s=n(85893);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function(e){var t=e.children,n=e.content,r=e.context,c=e.data,l=e.disabled,d=e.handleClick,p=e.size,f=e.type;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{size:"sm"}),(0,s.jsxs)(i.Z,{align:"flex-end",children:[t,(0,s.jsx)(a.Z,u({content:n,context:r,disabled:l,onClick:d,size:p,type:f},c))]})]})};l.defaultProps={content:"Add",context:"secondary",disabled:!1,size:"sm",type:"button"}},46958:function(e,t,n){"use strict";n.d(t,{sM:function(){return l},NK:function(){return d},NG:function(){return p},OW:function(){return f}});var r,o,i,a,s,c=n(52209),u=n(54397),l=(0,u.Ps)(r||(r=(0,c.Z)(["\n  query GetPostcodeAreas(\n    $countryId: Int\n    $limit: Int\n    $offset: Int\n    $q: String\n    $orderBy: PostcodeArea_order_by!\n  ) {\n    postcodeAreas: PostcodeArea(\n      limit: $limit\n      offset: $offset\n      where: { countryId: { _eq: $countryId }, name: { _ilike: $q } }\n      order_by: [$orderBy]\n    ) {\n      id\n      area\n      name\n      status\n      country: Country {\n        id\n        name\n        code\n      }\n    }\n    meta: PostcodeArea_aggregate(where: { countryId: { _eq: $countryId }, name: { _ilike: $q } }) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n"]))),d=(0,u.Ps)(o||(o=(0,c.Z)(["\n  query GetPostcodeArea($id: Int!) {\n    postcodeArea: PostcodeArea_by_pk(id: $id) {\n      id\n      area\n      name\n      status\n      country: Country {\n        id\n        name\n        code\n      }\n    }\n  }\n"]))),p=((0,u.Ps)(i||(i=(0,c.Z)(["\n  mutation AddPostcodeArea($areas: [PostcodeArea_insert_input!]!) {\n    insert_PostcodeArea(objects: $areas) {\n      returning {\n        id\n      }\n    }\n  }\n"]))),(0,u.Ps)(a||(a=(0,c.Z)(["\n  mutation InsertPostCodeArea($objects: [PostcodeArea_Entity_insert_input!]!) {\n    insert_PostcodeArea_Entity(\n      objects: $objects\n      on_conflict: {\n        constraint: PostcodeArea_Entity_postcodeAreaId_entityId_key\n        update_columns: status\n      }\n    ) {\n      returning {\n        id\n        status\n      }\n    }\n  }\n"])))),f=(0,u.Ps)(s||(s=(0,c.Z)(["\n  mutation UpdateEntityAssign($id: Int!, $changes: PostcodeArea_Entity_set_input) {\n    update_PostcodeArea_Entity_by_pk(pk_columns: { id: $id }, _set: $changes) {\n      id\n      status\n    }\n  }\n"])))},81185:function(e,t,n){"use strict";n.d(t,{t:function(){return c}});var r=n(67294),o=n(11163),i=n(30493),a=n(52002),s=n(85893),c=(0,r.forwardRef)((function(e,t){var n=e.columns,c=e.history,u=e.initialSort,l=e.isResetTable,d=e.loading,p=e.meta,f=e.paginationSize,g=e.refetch,b=e.rowClick,h=e.rows,m=(0,o.useRouter)(),v=m.query,y=void 0===v?{}:v,O=(0,r.useState)(parseInt(null===y||void 0===y?void 0:y.page,10)||1),j=O[0],w=O[1],P=(0,r.useState)(i.C1.paginationSize),Z=P[0],x=P[1];u||(u={item:"createdAt",order:"desc"}),(0,r.useEffect)((function(){w(1)}),[l]);var S=(0,r.useState)({item:u.item,order:u.order}),_=S[0],C=S[1],E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=m.query,n=void 0===t?{}:t;e>1?n.page=e:delete n.page;var r=Object.keys(n).length>0;if(r){var o=Object.keys(n).map((function(t){return"page"===t?"".concat(t,"=").concat(e):"".concat(t,"=").concat(n[t])})).join("&&");return"?".concat(o)}return{}};(0,r.useImperativeHandle)(t,(function(){return{currentPage:j,pageSize:Z,sort:_,resetPagination:function(){!function(){C({item:u.item,order:u.order}),w(1);var e=E();m.push(e),x(i.C1.paginationSize)}()}}}));return(0,s.jsx)(a.Z,{columns:n,loading:d,paginationSize:f,pagination:p&&!0,paginationProps:p&&{currentPage:j,onPageChange:function(e){var t=E(e);c&&m.push(t),w(e),g&&g()},onPageSizeChange:function(e){e!==i.C1.paginationSize&&(x(e),g&&g())},pageCount:Math.ceil(p.aggregate.totalCount/Z),perPage:Z},rowClick:b,rows:h,sort:_,setSort:function(e){var t=e.item,n=e.order;C({item:t,order:n}),g&&g()}})}));c.defaultProps={history:!0,loading:!0,paginationSize:!1}},49705:function(e,t,n){"use strict";n.d(t,{x:function(){return l}});var r=n(92809),o=n(67294),i=n(63867),a=n(30493),s=n(34770);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function(e){var t,n,c,l,d,p,f,g,b,h,m,v=e.filters,y=e.initialSort,O=(0,o.useRef)();(0,o.useEffect)((function(){var e;(null===O||void 0===O||null===(e=O.current)||void 0===e?void 0:e.currentPage)>1&&(null===O||void 0===O||O.current.resetPagination(),(0,i.Z)("?page=1"))}),[v]);var j=y||{item:"createdAt",order:"desc"},w=(0,r.Z)({},(null===(t=O.current)||void 0===t?void 0:t.sort.item)||j.item,j.inneritem?(0,r.Z)({},j.inneritem,(null===(n=O.current)||void 0===n?void 0:n.sort.order)||j.order):(null===(c=O.current)||void 0===c?void 0:c.sort.order)||j.order);return{initialData:u(u({},v),{},{limit:"Infinity"===(null===(l=O.current)||void 0===l?void 0:l.pageSize)?null:parseInt(null===(d=O.current)||void 0===d?void 0:d.pageSize,10)||a.C1.paginationSize,offset:((null===(p=O.current)||void 0===p?void 0:p.currentPage)-1||0)*((null===(f=O.current)||void 0===f?void 0:f.pageSize)||a.C1.paginationSize),orderBy:(0,s.c)(null===(g=O.current)||void 0===g||null===(b=g.sort)||void 0===b||null===(h=b.item)||void 0===h?void 0:h.replace(/ORDER/i,null===(m=O.current)||void 0===m?void 0:m.sort.order))||w}),initialSort:y,ref:O}}},34770:function(e,t,n){"use strict";n.d(t,{s:function(){return r},c:function(){return o}});var r=function(e){try{JSON.parse(e)}catch(t){return!1}return!0},o=function(e){try{return JSON.parse(e)}catch(t){return!1}}},17044:function(e,t,n){"use strict";n.d(t,{O:function(){return r}});var r=[{text:"Country",value:""},{text:"United Kingdom",value:1},{text:"Ireland",value:4}]},70316:function(e,t,n){"use strict";n.d(t,{J:function(){return C}});var r=n(92809),o=n(80318),i=n(10219),a=n(11163),s=n(67294),c=n(78215),u=n(2356),l=n(42283),d=n(97202),p=n(80284),f=n(65375),g=n(10973),b=n(14347),h=n(66805),m=n(69119),v=n(23855),y=n(83894);function O(e,t,n){var r=(0,s.useState)((function(){if(JSON.parse(window.sessionStorage.getItem(e))&&!Object.values(JSON.parse(window.sessionStorage[e])).includes(n))return t;try{var r=JSON.parse(window.sessionStorage.getItem(e));return r&&(r.startDate=r.startDate?(0,m.Z)((0,v.Z)(r.startDate)):null,r.endDate=r.endDate?(0,y.Z)((0,v.Z)(r.endDate)):null),r||t}catch(o){return console.log(o),t}})),o=r[0],i=r[1];return[o,function(t){try{var n=t instanceof Function?t(o):t;i(n),window.sessionStorage.setItem(e,JSON.stringify(n))}catch(r){console.log(r)}}]}var j=n(85893);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=function(e){var t=e.initialValues,n=e.renderFilters,r=e.setFilters,i=e.lastQuery,a=e.filters,m=t.filterType,v=O("form_data",t,m),y=(0,o.Z)(v,2),w=y[0],Z=y[1],x=(0,l.cI)({defaultValues:w||t}),S=x.control,_=x.errors,C=x.handleSubmit,E=x.register,k=x.reset,z=x.watch,A=x.setValue,D=P(P({},z()),{},{filterType:m});(0,s.useEffect)((function(){k(D)}),[k]),(0,s.useEffect)((function(){Z(D)}),[a]);var N=function(e){var n=e.query;if(n!==i){var o={q:"%".concat(n,"%")||0},a=/^\d+$/.test(n);"id"in t&&(o.id=a?Number(n):null),"meta"in t&&(o.meta=a?{invoiceNumbers:[n]}:null),"jobNumber"in t&&(o.jobNumber=a?String(n):null,o.invoiceNumber=a?Number(n):null),(o.id||o.meta||o.jobNumber)&&(o.q=null),r((function(e){return P(P({},e),o)}))}};return(0,j.jsx)(d.Z,{handleSubmit:C(N),children:(0,j.jsxs)(p.Z,{title:"Filters",children:[(0,j.jsxs)(c.Z,{children:[(0,j.jsx)(u.Z,{sm:12,lg:12,children:(0,j.jsx)(f.Z,{label:"",children:(0,j.jsx)(g.Z,{errors:_,label:"Search",name:"email",placeholder:"Search...",prependSearchIcon:!0,register:E,type:"search"})})}),(0,j.jsx)(u.Z,{sm:12,lg:12,children:n({control:S,errors:_,initialValues:t,register:E,setFilters:r,watch:z,setValue:A,reset:k})})]}),(0,j.jsx)(h.H,{content:"Search",context:"secondary",handleClick:N,type:"submit",children:(0,j.jsx)(b.Z,{content:"Clear",context:"danger",onClick:function(e){Object.keys(t).map((function(e){return A(e,null)})),r(t),k(t),N("")},size:"sm"})})]})})},x=["FiltersComp","initialFilters","TableComp"];function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(e){var t=e.FiltersComp,n=e.initialFilters,r=e.TableComp,l=(0,i.Z)(e,x),d=O("filters",n,n.filterType),p=(0,o.Z)(d,2),f=p[0],g=p[1],b=(0,s.useState)(f||n),h=b[0],m=b[1],v=(0,a.useRouter)().query.show;return(0,s.useEffect)((function(){g(h)}),[h]),(0,j.jsx)(c.Z,{children:(0,j.jsxs)(u.Z,{sm:12,lg:12,children:[(0,j.jsx)(Z,{initialValues:n,renderFilters:function(e){return(0,j.jsx)(t,_(_(_({},e),l),{},{show:v}))},setFilters:m,filters:h}),(0,j.jsx)(r,_({filters:h,initialFilters:n},l))]})})}},20355:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(66918),o=n(70316),i=n(11163),a=n(93633),s=n(46958),c=n(73165),u=n(80284),l=n(81185),d=n(49705),p=n(85893),f={item:"area",order:"asc"},g=function(e){var t=e.filters,n=(0,d.x)({filters:t,initialSort:f}),r=n.initialData,o=n.ref,g=(0,a.a)(s.sM,{variables:r}),b=g.data,h=(b=void 0===b?{areas:[],meta:{aggregate:{totalCount:0}}}:b).postcodeAreas,m=b.meta,v=g.loading,y=g.refetch;return(0,p.jsx)(u.Z,{open:!0,title:"Coverage Areas",children:(0,p.jsx)(l.t,{columns:[{hidden:!0},{text:"Postcode"},{sortable:!0,sortName:"area",text:"Area"},{text:"Country"},{text:"# Services"},{text:"# Suppliers"},{text:"Status"}],initialSort:f,loading:v,meta:m,ref:o,refetch:y,rowClick:function(e){i.default.push("".concat("/dashboard/coverage/","view?id=").concat(e.id))},rows:h?h.map((function(e){var t,n,r;return{id:e.id,postcode:e.area,area:e.name,country:null===(t=e.country)||void 0===t?void 0:t.name,servicesCount:(null===(n=e.services)||void 0===n?void 0:n.length)||0,suppliersCount:(null===(r=e.suppliers)||void 0===r?void 0:r.length)||0,status:(0,c.Z)(e.status)}})):[]})})},b=n(92809),h=n(78215),m=n(2356),v=n(46482),y=n(17044);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,b.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(e){var t=e.errors,n=e.register,r=e.setFilters;return(0,p.jsx)(h.Z,{children:(0,p.jsx)(m.Z,{md:6,children:(0,p.jsx)(v.Z,{errors:t,name:"countryId",onChange:function(e){return r((function(t){return j(j({},t),{},{countryId:e.target.value||null})}))},options:y.O,register:n})})})},P={countryId:null,q:null,filterType:"coverage_table"},Z=function(){return(0,p.jsx)(o.J,{FiltersComp:w,initialFilters:P,TableComp:g})},x=function(){return(0,p.jsx)(r.Z,{pageHeading:{heading:"Coverage"},View:(0,p.jsx)(Z,{})})}},81587:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/coverage",function(){return n(20355)}])},10219:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[284,4195,5312,2002,7431,9774,2888,179],(function(){return t=81587,e(e.s=t);var t}));var t=e.O();_N_E=t}]);