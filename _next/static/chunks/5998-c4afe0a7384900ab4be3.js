"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5998],{26075:function(e,n,t){t.d(n,{x:function(){return i}});var r=t(67294),o=t(47591),a=t(24273);function i(){var e=r.useContext((0,a.K)()).client;return __DEV__?(0,o.kG)(e,"No Apollo Client instance can be found. Please ensure that you have called `ApolloProvider` higher up in your tree."):(0,o.kG)(e,36),e}},93633:function(e,n,t){t.d(n,{a:function(){return o}});var r=t(81322);function o(e,n){return(0,r.r)(e,n,!1)}},58448:function(e,n,t){var r,o,a=t(30168),i=t(67294),s=t(45697),l=t(24237),c=function(e){var n=e.align,t=e.children;return i.createElement(d,{align:n,"aria-label":"Toolbar with button groups",role:"toolbar"},i.createElement(u,{role:"group","aria-label":"First group"},t))};c.displayName="ButtonToolbar";var d=l.ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: ",";\n"])),(function(e){return e.align})),u=l.ZP.div(o||(o=(0,a.Z)(["\n  display: inline-flex;\n  position: relative;\n  vertical-align: middle;\n\n  a:hover {\n    color: white;\n  }\n\n  &:last-child > div:last-of-type button {\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n    border-right: 0;\n  }\n\n  a:not(:last-child),\n  button:not(:last-child) {\n    border-bottom-right-radius: 0;\n    border-right: 1px solid ",";\n    border-top-right-radius: 0;\n  }\n\n  a:not(:first-child),\n  button:not(:first-child),\n  a:not(:first-child) button,\n  div:not(:first-child) button {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    margin-left: 0;\n  }\n\n  a:not(:last-child) button,\n  div:not(:last-child) button {\n    border-bottom-right-radius: 0;\n    border-right: 1px solid ",";\n    border-top-right-radius: 0;\n  }\n"])),(function(e){return e.theme.COLOUR.light}),(function(e){return e.theme.COLOUR.light}));c.propTypes={align:s.string,children:s.node.isRequired},c.defaultProps={align:"center"},n.Z=c},84550:function(e,n,t){t.d(n,{Z:function(){return _}});var r,o=t(30168),a=t(87462),i=t(45987),s=t(67294),l=t(45697),c=t(24237),d=t(42778),u=["disabled"],p=(0,s.forwardRef)((function(e,n){var t=e.disabled,r=(0,i.Z)(e,u);return s.createElement(m,(0,a.Z)({disabled:t,ref:n,type:"checkbox"},r))})),m=c.ZP.input(r||(r=(0,o.Z)(["\n  cursor: pointer;\n  margin-right: 0.5rem;\n"])));p.propTypes={disabled:l.bool},p.defaultProps={stacked:!1};var b,y,f,g,h=p,v=t(88280),j=["data","errors","legend","stacked"],x=["disabled","label"],Z=function(e){var n=e.data,t=e.errors,r=e.legend,o=e.stacked,l=(0,i.Z)(e,j);return s.createElement(O,{error:t[l.name]},r&&s.createElement("legend",null,r),n.map((function(e){var n=e.disabled,r=e.label,c=(0,i.Z)(e,x);return s.createElement(P,{htmlFor:c.id,key:c.id,stacked:o},s.createElement(d.Z,(0,a.Z)({component:h,disabled:n,errors:t[l.name],showError:!1},c,l)),r)})))};Z.displayName="Checkbox";var O=c.ZP.fieldset(b||(b=(0,o.Z)(["\n  border-radius: 0.25rem;\n  color: ",";\n  ","\n"])),(function(e){return e.theme.COLOUR.dark}),(function(e){return e.error&&(0,c.iv)(y||(y=(0,o.Z)(["\n      ","\n      padding: 0.5rem;\n    "])),(function(e){return(0,v.Z)(e)}))})),P=c.ZP.label(f||(f=(0,o.Z)(["\n  cursor: pointer;\n  margin-right: 1.25rem;\n  position: relative;\n  ","\n"])),(function(e){return e.stacked&&(0,c.iv)(g||(g=(0,o.Z)(["\n      display: block;\n      margin: 0.5rem 0;\n    "])))}));Z.propTypes={data:l.array.isRequired,errors:l.object,legend:l.string,stacked:l.bool},Z.defaultProps={data:[],errors:{},stacked:!1};var _=Z},71247:function(e,n,t){var r=t(87462),o=t(70885),a=t(45987),i=t(67294),s=t(45697),l=t(42778),c=t(82373),d=t(49787),u=["disabled","errors","helperMessage","name","placeholder","readOnly","regExp","register","size","validate","withAddon"],p=function(e){var n=e.disabled,t=e.errors,s=e.helperMessage,c=e.name,p=e.placeholder,m=e.readOnly,b=(e.regExp,e.register),y=e.size,f=(e.validate,e.withAddon),g=(0,a.Z)(e,u),h=(0,i.useState)(!1),v=(0,o.Z)(h,2),j=v[0],x=v[1];return i.createElement(l.Z,(0,r.Z)({"aria-label":c,component:d.Z,disabled:n,helperMessage:s,onKeyDown:function(e){x(!0)},onBlur:function(){x(!1)},errors:t[c],isTyping:j,key:c,name:c,placeholder:p,readOnly:m,register:b,size:y,withAddon:f},g))};p.displayName="FormField",p.propTypes={accept:s.string,autoComplete:(0,s.oneOfType)([s.bool,s.string]),autoFocus:s.bool,disabled:s.bool,errors:s.object.isRequired,helperMessage:s.string,label:s.string,name:s.string.isRequired,placeholder:s.string,readOnly:s.bool,register:s.func.isRequired,size:(0,s.oneOf)([c.Z.SM,c.Z.MD,c.Z.LG]),style:s.object,textAlign:s.string,type:s.string,value:(0,s.oneOfType)([s.string,s.number,s.bool,(0,s.arrayOf)((0,s.oneOfType)([s.string,s.number,s.bool]))])},p.defaultProps={autoComplete:"off",autoFocus:!1,disabled:!1,errors:{},readOnly:!1,type:"text"},n.Z=p},69128:function(e,n,t){t.d(n,{Z:function(){return k}});var r,o=t(30168),a=t(87462),i=t(45987),s=t(67294),l=t(45697),c=t(24237),d=t(42778),u=["disabled"],p=(0,s.forwardRef)((function(e,n){var t=e.disabled,r=(0,i.Z)(e,u);return s.createElement(m,(0,a.Z)({disabled:t,type:"radio",ref:n},r))})),m=c.ZP.input(r||(r=(0,o.Z)(["\n  cursor: pointer;\n  margin-right: 0.5rem;\n"])));p.propTypes={disabled:l.bool},p.defaultProps={stacked:!1};var b,y,f,g,h,v,j=p,x=t(88280),Z=["data","errors","legend","stacked"],O=["disabled","label"],P=function(e){var n=e.data,t=e.errors,r=e.legend,o=e.stacked,l=(0,i.Z)(e,Z);return s.createElement(_,{error:t[l.name]},r&&s.createElement(w,{error:t[l.name]},r),n.map((function(e){var n=e.disabled,r=e.label,c=(0,i.Z)(e,O);return s.createElement($,{htmlFor:c.id,key:c.id,stacked:o},s.createElement(d.Z,(0,a.Z)({component:j,disabled:n,errors:t[l.name],showError:!1},c,l)),r)})))};P.displayName="RadioField";var _=c.ZP.fieldset(b||(b=(0,o.Z)(["\n  border-radius: 0.25rem;\n  color: ",";\n  ","\n"])),(function(e){return e.theme.COLOUR.dark}),(function(e){return e.error&&(0,c.iv)(y||(y=(0,o.Z)(["\n      ","\n      padding: 0.5rem;\n    "])),(function(e){return(0,x.Z)(e)}))})),w=c.ZP.legend(f||(f=(0,o.Z)(["\n  ","\n"])),(function(e){return e.error&&(0,c.iv)(g||(g=(0,o.Z)(["\n      padding: 0 0.5rem;\n    "])))})),$=c.ZP.label(h||(h=(0,o.Z)(["\n  cursor: pointer;\n  margin-right: 1.25rem;\n  position: relative;\n  ","\n"])),(function(e){return e.stacked&&(0,c.iv)(v||(v=(0,o.Z)(["\n      display: block;\n      margin: 0.5rem 0;\n    "])))}));P.propTypes={data:l.array.isRequired,legend:l.string,stacked:l.bool},P.defaultProps={data:[],stacked:!1};var k=P},94543:function(e,n,t){t.d(n,{P:function(){return q}});var r=t(92809),o=t(42283),a=t(79665),i=t(97202),s=t(80284),l=t(78215),c=t(2356),d=t(65375),u=t(71247),p=t(46482),m=t(93515),b=t(84550),y=t(66805),f=t(89143),g=t(95146),h=t(69128),v=t(18254),j=t(85893);function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var O=function(e){var n={errors:e.errors,register:e.register};return(0,j.jsxs)(l.Z,{children:[(0,j.jsx)(c.Z,{md:6,children:(0,j.jsx)(d.Z,{label:"Type Of organisation",children:(0,j.jsx)(p.Z,Z(Z({},n),{},{name:"typeOfOrganisation",options:v.E}))})}),(0,j.jsx)(c.Z,{md:6,children:(0,j.jsx)(d.Z,{label:"Quoting Email",children:(0,j.jsx)(u.Z,Z(Z({},n),{},{name:"quotingEmail",type:"email"}))})}),(0,j.jsx)(c.Z,{md:6,children:(0,j.jsx)(d.Z,{label:"UTR Number",children:(0,j.jsx)(u.Z,Z(Z({},n),{},{name:"utrNumber"}))})}),(0,j.jsx)(c.Z,{md:6,children:(0,j.jsx)(d.Z,{label:"CIS Registered",children:(0,j.jsx)(h.Z,Z(Z({},n),{},{data:[{id:"yes",label:"Yes",value:"yes"},{id:"no",label:"No",value:"no"}],name:"cisRegistered"}))})})]})},P=t(34003),_=t(11652),w=t(75838),$=t(1323),k=t(72197);function T(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?T(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var q=function(e){var n,t,r,h,v,x,Z,T,q,S,I,C,D=e.account,L=e.onSubmit,R=e.schema,U=e.type,A=(0,$.x)(),G=A.hasRole,F=A.user,N=E({},D)||{};"customer"!==U&&"admin"!==U||(N.contactUsernameFirst=null===D||void 0===D||null===(n=D.contactUsers[0])||void 0===n||null===(t=n.user)||void 0===t?void 0:t.nameFirst,N.contactUsernameLast=null===D||void 0===D||null===(r=D.contactUsers[0])||void 0===r||null===(h=r.user)||void 0===h?void 0:h.nameLast,N.contactUseremail=null===D||void 0===D||null===(v=D.contactUsers[0])||void 0===v||null===(x=v.user)||void 0===x?void 0:x.email,N.contactUserphone=null===D||void 0===D||null===(Z=D.contactUsers[0])||void 0===Z||null===(T=Z.user)||void 0===T?void 0:T.phone,N.contactUserstatus=null===D||void 0===D||null===(q=D.contactUsers[0])||void 0===q||null===(S=q.user)||void 0===S?void 0:S.status,N.contactUseruserId=null===D||void 0===D||null===(I=D.contactUsers[0])||void 0===I||null===(C=I.user)||void 0===C?void 0:C.id);if("admin"===U){var z,M,B=null===D||void 0===D||null===(z=D.meta)||void 0===z?void 0:z.timeZone;N.timeZone=B||{value:"Europe/London",label:"Europe/London +00:00"},N.modules=[],null!==D&&void 0!==D&&null!==(M=D.meta)&&void 0!==M&&M.modules&&Object.keys(D.meta.modules).forEach((function(e){!0===D.meta.modules[e]&&N.modules.push(e)}))}var W=(0,o.cI)({defaultValues:N,resolver:(0,a.S)(R())}),V=W.control,Q=W.errors,H=W.handleSubmit,J={control:V,errors:Q,register:W.register};return(0,j.jsxs)(i.Z,{handleSubmit:H(L),children:["superadmin"!==(null===D||void 0===D?void 0:D.type)&&(0,j.jsx)(s.Z,{open:!0,title:"Assign",children:(0,j.jsx)(l.Z,{children:(0,j.jsx)(c.Z,{md:6,children:(0,j.jsx)(g.P,E(E({},J),{},{accountId:F.accountId,errors:E({},Q),label:"Assigned to",name:"managerSelected",type:"user"}))})})}),(0,j.jsx)(s.Z,{open:!0,title:"Company",children:(0,j.jsxs)(l.Z,{children:[(0,j.jsx)(c.Z,{md:6,children:(0,j.jsx)(d.Z,{label:"Name",children:(0,j.jsx)(u.Z,E(E({},J),{},{name:"name"}))})}),(0,j.jsx)(c.Z,{md:6,children:(0,j.jsx)(d.Z,{label:"Website",children:(0,j.jsx)(u.Z,E(E({},J),{},{name:"website"}))})}),(0,j.jsx)(c.Z,{md:6,children:(0,j.jsx)(d.Z,{label:"Company Number",children:(0,j.jsx)(u.Z,E(E({},J),{},{name:"companyNumber"}))})}),(0,j.jsx)(c.Z,{md:6,children:(0,j.jsx)(d.Z,{label:"VAT ID",children:(0,j.jsx)(u.Z,E(E({},J),{},{name:"vatId"}))})}),(0,j.jsx)(c.Z,{md:6,children:(0,j.jsx)(d.Z,{label:"Status",children:(0,j.jsx)(p.Z,E(E({},J),{},{name:"status",options:w.bg}))})})]})}),"admin"===U&&(0,j.jsxs)(s.Z,{open:!0,title:"Admin Settings",children:[(0,j.jsx)(l.Z,{children:(0,j.jsx)(c.Z,{md:6,children:(0,j.jsx)(d.Z,{label:"Client Type",children:(0,j.jsx)(m.Z,E(E({options:(0,f.r)()},J),{},{name:"timeZone"}))})})}),G("superadmin")&&(0,j.jsx)(l.Z,{children:(0,j.jsx)(c.Z,{md:12,children:(0,j.jsx)(b.Z,E(E({},J),{},{data:_.o,legend:"Modules",name:"modules"}))})})]}),"customer"===U&&(0,j.jsx)(s.Z,{open:!0,title:"Customer",children:(0,j.jsx)(l.Z,{children:(0,j.jsx)(c.Z,{md:6,children:(0,j.jsx)(k.l,E(E({},J),{},{label:"Customer Type",name:"clientType",type:"clientType"}))})})}),"supplier"===U&&(0,j.jsx)(s.Z,{open:!0,title:"Supplier",children:(0,j.jsx)(O,E({},J))}),(!D||"customer"===U||"admin"===U)&&(0,j.jsxs)(s.Z,{open:!0,title:"Contact User",children:[(0,j.jsx)(P.q,E(E({},J),{},{prefix:"contactUser"})),(0,j.jsx)(u.Z,E(E({},J),{},{defaultValue:"true",name:"contactUser",type:"hidden"}))]}),(0,j.jsx)(y.H,{content:"Submit",type:"submit"})]})}},66805:function(e,n,t){t.d(n,{H:function(){return d}});var r=t(92809),o=t(77417),a=t(58448),i=t(14347),s=t(85893);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=function(e){var n=e.children,t=e.content,r=e.context,l=e.data,d=e.disabled,u=e.handleClick,p=e.size,m=e.type;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{size:"sm"}),(0,s.jsxs)(a.Z,{align:"flex-end",children:[n,(0,s.jsx)(i.Z,c({content:t,context:r,disabled:d,onClick:u,size:p,type:m},l))]})]})};d.defaultProps={content:"Add",context:"secondary",disabled:!1,size:"sm",type:"button"}},89143:function(e,n,t){t.d(n,{r:function(){return a}});var r=t(22091).ZP.getAllTimezones(),o=Object.keys(r).map((function(e){return r[e]})),a=function(){return o.map((function(e){return{label:"".concat(e.name," ").concat(e.utcOffsetStr),value:e.name}}))}},33462:function(e,n,t){t.d(n,{Im:function(){return p},RE:function(){return m},mW:function(){return b},ze:function(){return y},RQ:function(){return f},fC:function(){return g},uY:function(){return h}});var r,o,a,i,s,l,c,d=t(52209),u=t(54397),p=(0,u.Ps)(r||(r=(0,d.Z)(['\n  query GetTaxonomys(\n    $limit: Int\n    $offset: Int\n    $q: String\n    $orderBy: Taxonomy_order_by!\n    $status: String = "active"\n    $type: String\n    $typeGroup: String\n    $parentId: Int\n    $fetchGroup: Boolean! = true\n    $id: Int\n    $isGroup: Boolean = false\n  ) {\n    taxonomy: Taxonomy(\n      limit: $limit\n      offset: $offset\n      where: {\n        name: { _ilike: $q }\n        status: { _eq: $status }\n        type: { _eq: $type }\n        parentId: { _eq: $parentId }\n        id: { _eq: $id }\n        isGroup: { _eq: $isGroup }\n      }\n      order_by: [$orderBy]\n    ) {\n      options: Taxonomies(\n        where: {\n          type: { _eq: $type }\n          name: { _ilike: $q }\n          id: { _eq: $id }\n          status: { _eq: "active" }\n        }\n        order_by: { name: asc }\n      ) {\n        value: id\n        label: name\n\n        childs: Taxonomies(order_by: { id: asc }, where: { status: { _eq: "active" } }) {\n          taxonomyId: id\n          name\n          type\n          meta\n          status\n        }\n      }\n      id\n      name\n      type\n      status\n      parentId\n      createdAt\n      meta\n      parent: Parent {\n        id\n        name\n        type\n      }\n      childs: Taxonomies(order_by: { id: asc }, where: { status: { _eq: "active" } }) {\n        taxonomyId: id\n        name\n        type\n        meta\n        status\n      }\n      jobs: Taxonomy_Entities_aggregate(\n        where: { Taxonomy: { type: { _eq: "jobTags" } }, entity: { _eq: "Job" } }\n      ) {\n        aggregate {\n          count\n        }\n      }\n    }\n    meta: Taxonomy_aggregate(\n      where: {\n        name: { _ilike: $q }\n        status: { _eq: $status }\n        type: { _eq: $type }\n        parentId: { _eq: $parentId }\n        id: { _eq: $id }\n        isGroup: { _eq: $isGroup }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n    taxonomyGroup: Taxonomy(where: { isGroup: { _eq: true }, type: { _eq: $typeGroup } })\n      @include(if: $fetchGroup) {\n      value: id\n      text: name\n    }\n  }\n']))),m=(0,u.Ps)(o||(o=(0,d.Z)(["\n  query GetTaxonomy($id: Int!) {\n    taxonomy: Taxonomy_by_pk(id: $id) {\n      id\n      name\n      type\n      status\n      parentId\n      createdAt\n      meta\n    }\n  }\n"]))),b=(0,u.Ps)(a||(a=(0,d.Z)(["\n  mutation AddTaxonomy($objects: [Taxonomy_insert_input!]!) {\n    insert_Taxonomy(objects: $objects) {\n      returning {\n        id\n        type\n      }\n    }\n  }\n"]))),y=(0,u.Ps)(i||(i=(0,d.Z)(["\n  mutation UpdateTaxonomy($id: Int!, $changes: Taxonomy_set_input) {\n    update_Taxonomy_by_pk(pk_columns: { id: $id }, _set: $changes) {\n      id\n      type\n    }\n  }\n"]))),f=(0,u.Ps)(s||(s=(0,d.Z)(["\n  query GeTaxonomyWithEntities($type: String!, $entity: String!, $entityId: Int!) {\n    questions: Taxonomy(where: { type: { _eq: $type } }) {\n      id\n      meta\n      name\n      status\n      taxonomy_entity: Taxonomy_Entities(\n        where: { entityId: { _eq: $entityId }, entity: { _eq: $entity } }\n      ) {\n        comments\n      }\n    }\n  }\n"]))),g=(0,u.Ps)(l||(l=(0,d.Z)(["\n  mutation InsertTaxonomyEntity(\n    $entity: String!\n    $entityId: Int!\n    $questions: [Taxonomy_Entity_insert_input!]!\n    $objectStatusLog: [StatusLog_insert_input!]!\n    $hasStatusLog: Boolean!\n  ) {\n    delete_Taxonomy_Entity(where: { entityId: { _eq: $entityId }, entity: { _eq: $entity } }) {\n      returning {\n        id\n      }\n    }\n    insert_Taxonomy_Entity(objects: $questions) {\n      returning {\n        id\n      }\n    }\n\n    insert_StatusLog(objects: $objectStatusLog) @include(if: $hasStatusLog) {\n      returning {\n        id\n      }\n    }\n  }\n"]))),h=(0,u.Ps)(c||(c=(0,d.Z)(["\n  query GetSLAsForJobManage {\n    slas: SLA(order_by: { name: asc }) {\n      id\n      label: name\n      notes\n    }\n  }\n"])))},72197:function(e,n,t){t.d(n,{l:function(){return y}});var r=t(92809),o=t(10219),a=t(67294),i=t(93633),s=t(33462),l=t(65375),c=t(93515),d=t(85893),u=["control","errors","label","name","register","type","filters"];function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b=function(e,n){var t,r,o=!0;return(null===(t=e.errors[e.name])||void 0===t?void 0:t.message)!==(null===(r=n.errors[n.name])||void 0===r?void 0:r.message)&&(o=!1),["name","type"].forEach((function(t){e[t]!==n[t]&&(o=!1)})),o},y=(0,a.memo)((function(e){var n=e.control,t=e.errors,r=e.label,a=e.name,p=e.register,b=e.type,y=e.filters,f=(0,o.Z)(e,u),g={control:n,errors:t,register:p},h=function(e){var n=(0,i.a)(s.Im,{variables:m(m({isGroup:"assetCategory"===e},y),{},{orderBy:{name:"asc"},type:e})}).data,t=(n=void 0===n?{taxonomy:[]}:n).taxonomy;return"assetCategory"===e?t.map((function(e){return{label:e.name,options:e.options,childs:e.childs,meta:e.meta}})):t.map((function(e){return{label:e.name,value:e.id,childs:e.childs,meta:e.meta}}))}(b);return(0,d.jsx)(l.Z,{id:a,label:r,children:(0,d.jsx)(c.Z,m(m({},g),{},{cacheOptions:!0,isClearable:!0,options:h,name:a},f))})}),b);y.defaultProps={filters:{}}},34003:function(e,n,t){t.d(n,{q:function(){return g}});var r=t(83789),o=t(92809),a=t(78215),i=t(2356),s=t(65375),l=t(71247),c=t(50710),d=t(46482),u=t(75838),p=t(1323),m=t(56257),b=t(85893);function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=function(e){var n=e.errors,t=e.prefix,o=e.register,y=(0,p.x)().hasRole,g={errors:n,register:o};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(a.Z,{children:[(0,b.jsx)(i.Z,{md:6,children:(0,b.jsx)(s.Z,{label:"First name",children:(0,b.jsx)(l.Z,f(f({},g),{},{name:"".concat(t,"nameFirst")}))})}),(0,b.jsx)(i.Z,{md:6,children:(0,b.jsx)(s.Z,{label:"Last name",children:(0,b.jsx)(l.Z,f(f({},g),{},{name:"".concat(t,"nameLast")}))})}),(0,b.jsx)(i.Z,{md:6,children:(0,b.jsxs)(s.Z,{label:"Email",children:[(0,b.jsx)(l.Z,f(f({},g),{},{name:"".concat(t,"email"),type:"email"})),n["".concat(t,"email")]&&"duplicate"===n["".concat(t,"email")].type&&(0,b.jsx)(c.Z,{message:n["".concat(t,"email")].message})]})}),(0,b.jsx)(i.Z,{md:6,children:(0,b.jsx)(s.Z,{label:"Mobile",children:(0,b.jsx)(l.Z,f(f({},g),{},{name:"".concat(t,"phone")}))})})]}),y([].concat((0,r.Z)(m.td),(0,r.Z)(m.Sf),(0,r.Z)(m.n),(0,r.Z)(m.nx)))&&(0,b.jsx)(s.Z,{label:"Status",children:(0,b.jsx)(d.Z,f(f({},g),{},{name:"".concat(t,"status"),options:u.bg}))}),(0,b.jsx)(l.Z,f(f({},g),{},{name:"".concat(t,"userId"),type:"hidden"}))]})};g.defaultProps={prefix:""}},11652:function(e,n,t){t.d(n,{o:function(){return r}});var r=[{id:"quotes",label:"Quotes",value:"quotes"},{id:"cleverCalendar",label:"Planned Maintenance",value:"cleverCalendar"},{id:"assets",label:"Assets",value:"assets"},{id:"sensors",label:"IoT/Sensors",value:"sensors"},{id:"compliance",label:"Compliance",value:"compliance"},{id:"tasks",label:"Tasks",value:"tasks"},{id:"workflows",label:"Automated Workflows",value:"workflows"},{id:"sageIntegration",label:"Sage Integration",value:"sageIntegration"}]},18254:function(e,n,t){t.d(n,{E:function(){return r}});var r=[{text:"Select Type Of Organisation",value:""},{text:"Sole trader",value:"soleTrader"},{text:"Limited company",value:"limitedCompany"},{text:"Partnership",value:"partnership"},{text:"LLP",value:"llp"},{text:"PLC",value:"plc"}]},75838:function(e,n,t){t.d(n,{bg:function(){return r},WG:function(){return o}});var r=[{text:"Status",value:""},{text:"Active",value:"active"},{text:"Inactive",value:"inactive"}],o=[{text:"Status",value:""},{text:"Open",value:"open"},{text:"Resolved",value:"resolved"},{text:"Closed",value:"closed"}]}}]);