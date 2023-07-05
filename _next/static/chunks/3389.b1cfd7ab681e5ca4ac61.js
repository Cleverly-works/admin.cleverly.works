"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3389],{15067:function(t,e,n){n.d(e,{K:function(){return w}});var i=n(67294),s=n(14347),r=n(80284),o=n(92809),a=n(93633),c=n(40682),u=n(80880),l=n(91126),d=n(18862),p=n(64509),f=n(58448),m=n(25610),y=n(75201),g=n(81185),x=n(49705),b=n(85893);function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){(0,o.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v={item:"bookingStart",order:"asc"},I=function(t){var e=t.assetId,n=t.locationId,r=t.userId,o=(0,x.x)({filters:{},initialSort:v}),j=o.initialData,I=o.ref,k=(0,i.useContext)(u.Z),w=(0,a.a)(c.M8,{variables:h(h({},j),{},{assetId:e,userId:r})}),_=w.loading,Z=w.data,O=(Z=void 0===Z?{asset:null}:Z).assetBookings,P=Z.meta,S=w.refetch,$=function(){k.close()},D=[{hidden:!0},{text:"Asset",hidden:e},{text:"Title"},{text:"Start"},{text:"End"},{text:"Description"},{text:"Name"},{text:"All Day"},{formatter:l.Z,formatterData:[{context:"secondary",icon:["fas","edit"],onClick:function(t,i){return function(t,i){t.stopPropagation(),k.show({content:(0,b.jsx)(m.D,{assetId:e,data:i.data,locationId:n,onSuccess:$}),title:"Edit Booking",width:"40%"})}(t,i)},tooltip:"Edit"}],text:"Actions"}];return(0,b.jsxs)(b.Fragment,{children:[O&&(0,b.jsx)(g.t,{columns:D,initialSort:v,loading:_,meta:P,ref:I,refetch:S,rowClick:function(t){k.show({content:(0,b.jsx)(y.e,{assetId:e,data:t.data,locationId:n}),submit:!1,title:"View Booking",width:"40%"})},rows:O.map((function(t){return{data:h(h({},t),{assetSelected:{label:t.asset.name,value:t.asset.id}}),asset:t.asset.name,title:t.title,bookingStart:"".concat((0,d.Z)(t.bookingStart)," - ").concat((0,p.Z)(t.bookingStart)),bookingEnd:"".concat((0,d.Z)(t.bookingEnd)," - ").concat((0,p.Z)(t.bookingEnd)),description:t.description,name:t.user.fullName,allDay:t.allDay,actions:""}}))}),(0,b.jsx)(f.Z,{align:"flex-end",children:(0,b.jsx)(s.Z,{content:"Make a booking",context:"secondary",onClick:function(){k.show({content:(0,b.jsx)(m.D,{assetId:e,locationId:n}),title:"Make a Booking",width:"40%"})},size:"sm"})})]})},k=n(56881),w=function(t){var e=t.assetId,n=t.locationId,o=(0,i.useState)(!0),a=o[0],c=o[1],u=function(){return(0,b.jsx)(s.Z,{context:"info",onClick:function(t){return function(t){t.stopPropagation(),c(!a)}(t)},size:"sm",startIcon:a?"table":"calendar-alt",startIconProps:{size:"lg"}})};return(0,b.jsx)(r.Z,{fitParentHeight:!0,open:!0,title:"Asset bookings",toolbar:(0,b.jsx)(u,{}),children:a?(0,b.jsx)(k.n,{assetId:e,locationId:n}):(0,b.jsx)(I,{assetId:e,locationId:n})})}},87160:function(t,e,n){n.d(e,{F:function(){return E}});var i,s=n(92809),r=n(83789),o=n(10219),a=n(30266),c=n(64687),u=n.n(c),l=n(67294),d=n(11163),p=n(26075),f=n(52209),m=(0,n(54397).Ps)(i||(i=(0,f.Z)(['\n  query GetEvents($where: Job_bool_exp) {\n    events: Job(where: $where) {\n      id\n      number\n      description\n      end: timingStart\n      scheduledAt\n      siteVisitStart\n      start: timingStart\n      status\n      title\n      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {\n        id\n        taxonomyId\n        comments\n        taxonomy: Taxonomy {\n          name\n        }\n      }\n      supplierQuotes: SupplierQuotes(\n        where: {\n          siteVisitAt: { _is_null: false }\n          status: { _neq: "cancelled" }\n          type: { _eq: "quote" }\n        }\n      ) {\n        siteVisitAt\n        quoteNumber\n      }\n    }\n  }\n']))),y=n(80880),g=n(80284),x=n(78215),b=n(2356),j=n(92700),h=n(90358),v=n(1323),I=n(78586),k=n(12517),w=n(55148),_=n(39129),Z=n(34610),O=n(22796),P=n(18944),S=n(84550),$=n(24237),D=n(85893),q=function(t){var e=t.setTypes,n=t.setSiteVisit,i=t.types,s=function(t,n){e(n?[].concat((0,r.Z)(i),[t]):i.filter((function(e){return e!==t})))};return(0,D.jsxs)(x.Z,{children:[(0,D.jsxs)(T,{md:3,children:[(0,D.jsx)(Z.Z,{onToggle:function(t){return s("reactive",t)},size:"sm",toggled:i.includes("reactive")}),(0,D.jsx)(O.Z,{marginLeft:"sm"}),(0,D.jsx)(P.Z,{size:"sm",children:"Reactive"})]}),(0,D.jsxs)(T,{md:3,children:[(0,D.jsx)(Z.Z,{onToggle:function(t){return s("ppm",t)},size:"sm",toggled:i.includes("ppm")}),(0,D.jsx)(O.Z,{marginLeft:"sm"}),(0,D.jsx)(P.Z,{size:"sm",children:"PPM"})]}),(0,D.jsxs)(T,{md:3,children:[(0,D.jsx)(Z.Z,{onToggle:function(t){return s("quote",t)},size:"sm",toggled:i.includes("quote")}),(0,D.jsx)(O.Z,{marginLeft:"sm"}),(0,D.jsx)(P.Z,{size:"sm",children:"Quote"})]}),(0,D.jsxs)(T,{md:3,children:[(0,D.jsx)(Z.Z,{onToggle:function(t){return s("cppm",t)},size:"sm",toggled:i.includes("cppm")}),(0,D.jsx)(O.Z,{marginLeft:"sm"}),(0,D.jsx)(P.Z,{size:"sm",children:"Compliance"})]}),(0,D.jsxs)(O.Z,{marginLeft:"sm",children:[(0,D.jsx)(S.Z,{data:[{label:"Only show site visits",id:"siteVisit",value:"yes"}],name:"siteVisit",onClick:function(t){n(t.target.checked)}}),(0,D.jsx)(O.Z,{})]})]})},T=(0,$.ZP)(b.Z).withConfig({displayName:"filters__StyledColumn",componentId:"sc-3gjja8-0"})(["align-items:center;display:flex;"]),C=["supplierQuotes"];function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function V(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){(0,s.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var E=function(t){var e,n,i=t.defaultFilters,s=t.defaultView,c=t.locationId,f=t.showCompliance,Z=t.showFilters,O=t.showSiteVisits,P=t.supplierId,S=(0,d.useRouter)().query,$=(0,l.useContext)(y.Z),T=(0,I.q)(),A=null===(e=T.admin.jobSetting)||void 0===e?void 0:e.jobNumberPrefix,E=null===(n=T.admin.jobSetting)||void 0===n?void 0:n.jobNumberSuffix,N=(0,v.x)().user,z=(0,p.x)(),B=!1,F=!1;switch(N.accountType){case"supplier":F=!0;break;case"customer":B=!0}var M=(0,l.useState)(S.type?["".concat(S.type)]:i),U=M[0],J=M[1],G=(0,l.useState)(O),L=G[0],Q=G[1],R="scheduled"===S.type?"PPM":"Bookings";(0,l.useEffect)((function(){return S.type?["".concat(S.type)]:J(F?["ppm"]:i)}),[i]);var H=function(){var t=(0,a.Z)(u().mark((function t(e,n){var i,s,a,l,d;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i={type:{_in:U},_or:[{_and:[{timingStart:{_gte:e.start}},{timingStart:{_lte:e.end}}]},{_and:[{scheduledAt:{_gte:e.start}},{scheduledAt:{_lte:e.end}}]},{_and:[{siteVisitStart:{_gte:e.start}},{siteVisitStart:{_lte:e.end}}]}]},F&&(i.supplierId={_eq:N.accountId}),P&&(i.supplierId={_eq:P}),B&&(i.customerId={_eq:N.accountId}),c&&(i.locationId={_eq:c}),(f||c)&&(i.Compliances={complianceId:{_is_null:!1}}),L&&(i.siteVisitStart={_is_null:!1}),t.next=9,z.query({query:m,variables:{where:i}});case 9:s=t.sent,a=s.data,l=(a=void 0===a?{events:[]}:a).events,d=[],l.map((function(t){var e,n=t.supplierQuotes,i=(0,o.Z)(t,C),s=(null===i||void 0===i||null===(e=i.shortJobDesc[0])||void 0===e?void 0:e.taxonomy.name)||i.title;return d=[].concat((0,r.Z)(d),[V(V({},t),{},{title:s})]),n.length>0&&n.map((function(t){return d=[].concat((0,r.Z)(d),[V(V({},i),{},{start:t.siteVisitAt,end:t.siteVisitAt,title:"".concat(s," ").concat(t.quoteNumber),siteVisit:!0})])})),d})),n(d.map((function(t){var e=V({},t);return e.start=e.scheduledAt||e.start,e.end=e.scheduledAt||e.end||e.start,e.color=e.siteVisit?"rgb(182, 79, 200)":(0,h.t)(e.status),e})));case 16:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return(0,D.jsxs)(g.Z,{fitParentHeight:!0,open:!0,title:R,children:[Z&&(0,D.jsx)(q,{setTypes:J,setSiteVisit:Q,types:U}),(0,D.jsx)(j.A,{eventClick:function(t){$.show({content:(0,D.jsx)(k.g,{jobId:parseInt(t.event.id),toggleShow:$.close,numberPrefix:A,numberSuffix:E}),title:"Job details",submit:!1,width:"50%"})},events:H,initialView:"day"===S.show?"timeGridDay":s}),(0,D.jsx)(x.Z,{children:(0,D.jsx)(b.Z,{md:12,children:(0,D.jsx)(_.D,{status:w.yW})})})]})};E.defaultProps={dateClick:!1,defaultFilters:["reactive","ppm","quote","cppm"],showFilters:!0,showSiteVisits:!1}},39129:function(t,e,n){n.d(e,{D:function(){return r}});var i=n(24237),s=n(85893),r=function(t){var e=t.status;return(0,s.jsx)(o,{children:(0,s.jsx)("ul",{children:e.map((function(t,e){return(0,s.jsxs)("li",{children:[(0,s.jsx)("span",{style:{backgroundColor:t.colour}}),t.text]},"legend".concat(e))}))})})},o=i.ZP.div.withConfig({displayName:"legend__StyledContainer",componentId:"sc-1gaw8i-0"})(["ul{list-style:none;float:left;padding-top:15px;}ul li{display:flex;flex-direction:row;align-items:center;float:left;width:120px;font-size:90%;list-style:none;}li span{display:block;float:left;height:12px;width:12px;margin-right:5px;}"])},13389:function(t,e,n){n.r(e);var i=n(78215),s=n(2356),r=n(15067),o=n(87160),a=n(19905),c=n(85893);e.default=function(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(i.Z,{children:[(0,c.jsxs)(s.Z,{sm:12,md:6,children:[(0,c.jsx)(o.F,{}),(0,c.jsx)(r.K,{})]}),(0,c.jsx)(s.Z,{sm:12,md:6,children:(0,c.jsx)(a.B,{showMyTaskButton:!0})})]})})}},19905:function(t,e,n){n.d(e,{B:function(){return et}});var i,s,r,o,a,c=n(92809),u=n(67294),l=n(93633),d=n(85088),p=n(52209),f=n(54397),m=(0,f.Ps)(i||(i=(0,p.Z)(["\n  fragment TaskFields on Task {\n    id\n    action\n    content\n    dueDate\n    priority\n    status\n    entity\n    entityId\n    assignedAccount: AssignedAccount {\n      id\n      type\n      name\n    }\n    assignedUser: AssignedUser {\n      id\n      fullName\n    }\n  }\n"]))),y=(0,f.Ps)(s||(s=(0,p.Z)(["\n  query GetTasks(\n    $accountId: Int\n    $action: String\n    $entity: String\n    $entityId: Int\n    $limit: Int\n    $offset: Int\n    $orderBy: Task_order_by!\n    $priority: Int\n    $q: String\n    $status: String\n    $userId: Int\n  ) {\n    tasks: Task(\n      limit: $limit\n      offset: $offset\n      order_by: [$orderBy]\n      where: {\n        accountId: { _eq: $accountId }\n        userId: { _eq: $userId }\n        action: { _eq: $action }\n        content: { _ilike: $q }\n        entity: { _eq: $entity }\n        entityId: { _eq: $entityId }\n        priority: { _eq: $priority }\n        status: { _eq: $status }\n      }\n    ) {\n      ...TaskFields\n    }\n    meta: Task_aggregate(\n      where: {\n        accountId: { _eq: $accountId }\n        userId: { _eq: $userId }\n        action: { _eq: $action }\n        content: { _ilike: $q }\n        entity: { _eq: $entity }\n        entityId: { _eq: $entityId }\n        priority: { _eq: $priority }\n        status: { _eq: $status }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n  ","\n"])),m),g=(0,f.Ps)(r||(r=(0,p.Z)(["\n  subscription GetTasks(\n    $accountId: Int\n    $action: String\n    $entity: String\n    $entityId: Int\n    $limit: Int\n    $offset: Int\n    $orderBy: Task_order_by!\n    $q: String\n    $status: String\n    $userId: Int\n  ) {\n    tasks: Task(\n      limit: $limit\n      offset: $offset\n      order_by: [$orderBy]\n      where: {\n        accountId: { _eq: $accountId }\n        userId: { _eq: $userId }\n        action: { _eq: $action }\n        content: { _ilike: $q }\n        entity: { _eq: $entity }\n        entityId: { _eq: $entityId }\n        status: { _eq: $status }\n      }\n    ) {\n      ...TaskFields\n    }\n  }\n  ","\n"])),m),x=(0,f.Ps)(o||(o=(0,p.Z)(["\n  mutation AddTask($objects: [Task_insert_input!]!) {\n    insert_Task(objects: $objects) {\n      returning {\n        id\n      }\n    }\n  }\n"]))),b=(0,f.Ps)(a||(a=(0,p.Z)(["\n  mutation UpdateTask($id: Int!, $changes: Task_set_input) {\n    update_Task_by_pk(pk_columns: { id: $id }, _set: $changes) {\n      id\n    }\n  }\n"]))),j=n(80880),h=n(91126),v=n(18862),I=n(58448),k=n(14347),w=n(80284),_=n(81185),Z=n(12517),O=n(20154),P=n(30266),S=n(80318),$=n(64687),D=n.n($),q=n(75709),T=n(42283),C=n(79665),A=n(97202),V=n(65375),E=n(83528),N=n(78215),z=n(2356),B=n(46482),F=n(76800),M=n(95146),U=n(75838),J=n(19501),G=(0,J.Ry)().shape({assignedUser:(0,J.Ry)().required(),content:(0,J.Z_)().required(),status:(0,J.Z_)().oneOf(["open","closed","resolved"]).required(),dueDate:(0,J.hT)().nullable()}),L=n(1323),Q=n(85893);function R(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?R(Object(n),!0).forEach((function(e){(0,c.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var W=function(t){var e=t.defaultValues,n=t.onSuccess,i=(0,L.x)().user,s=(0,T.cI)({defaultValues:e,resolver:(0,C.S)(G)}),r=s.control,o=s.errors,a=s.handleSubmit,c=s.register,u=(0,q.D)(x,{onCompleted:function(t){var e=t.insert_Task.returning[0].id;n&&n(e)}}),l=(0,S.Z)(u,1)[0],d=(0,q.D)(b,{onCompleted:function(t){var e=t.update_Task_by_pk.id;n&&n(e)}}),p=(0,S.Z)(d,1)[0],f=function(){var t=(0,P.Z)(D().mark((function t(n){var i;return D().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((i=n).userId=n.assignedUser.value,delete i.assignedUser,!e.id){t.next=8;break}return t.next=6,p({variables:{id:e.id,changes:i}});case 6:t.next=13;break;case 8:return i.accountId=e.accountId,i.entity=e.entity,i.entityId=e.entityId,t.next=13,l({variables:{objects:[i]}});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m={control:r,errors:o,register:c};return(0,Q.jsxs)(A.Z,{id:"offCanvasForm",handleSubmit:a(f),children:[(0,Q.jsx)(V.Z,{label:"Task",children:(0,Q.jsx)(E.Z,H(H({},m),{},{name:"content",rows:3}))}),(0,Q.jsxs)(N.Z,{children:[(0,Q.jsx)(z.Z,{md:4,children:(0,Q.jsx)(V.Z,{label:"Priority",children:(0,Q.jsx)(B.Z,H(H({},m),{},{name:"priority",options:O.t}))})}),(0,Q.jsxs)(z.Z,{md:8,children:[(0,Q.jsx)(V.Z,{label:"Due Date"}),(0,Q.jsx)(F.M,H(H({},m),{},{dateFormat:"d MMM yyyy HH:mm",name:"dueDate",showTimeSelect:!0}))]})]}),(0,Q.jsxs)(N.Z,{children:[(0,Q.jsx)(z.Z,{md:4,children:(0,Q.jsx)(V.Z,{label:"Status",children:(0,Q.jsx)(B.Z,H(H({},m),{},{name:"status",options:U.WG}))})}),(0,Q.jsx)(z.Z,{md:8,children:(0,Q.jsx)(M.P,H(H({},m),{},{accountId:i.accountId,errors:H({},o),label:"Assigned to",name:"assignedUser",type:"manager"}))})]})]})},K=n(49705);function X(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function Y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?X(Object(n),!0).forEach((function(e){(0,c.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var tt={item:"dueDate",order:"desc"},et=function(t){var e=t.filters,n=t.showMyTaskButton,i=t.view,s=t.onSuccess,r=(0,u.useState)(!1),o=r[0],a=r[1],c=(0,L.x)().user,p=Y({},Y({status:"open"},e)),f=(0,K.x)({filters:p,initialSort:tt}),m=f.initialData,x=f.ref,b=(0,u.useContext)(j.Z),P=Y(Y({accountId:c.accountId},m),{},{userId:o?c.id:m.userId}),S=(0,l.a)(y,{variables:Y({},P),skip:"compact"===i}),$=S.loading,D=S.data,q=(D=void 0===D?{tasks:[],meta:{aggregate:{totalCount:0}}}:D).tasks,T=D.meta,C=S.refetch,A=(0,d.m)(g,{variables:Y({},P),skip:"compact"!==i}),V=A.loading,E=A.data,N=(E=void 0===E?{tasks:[]}:E).tasks,z=function(t){b.close(),C(),s&&s()},B=function(t,n){t.preventDefault(),t.stopPropagation();var i,s,r,o={};null!==n&&void 0!==n&&n.item?((o=Y({},n.item)).dueDate=n.item.dueDate?new Date(n.item.dueDate):null,o.assignedUser=n.item.assignedUser?{value:n.item.assignedUser.id,label:n.item.assignedUser.fullName}:null):o={accountId:null!==(i=null===e||void 0===e?void 0:e.accountId)&&void 0!==i?i:c.accountId,entity:null!==(s=null===e||void 0===e?void 0:e.entity)&&void 0!==s?s:null,entityId:null!==(r=null===e||void 0===e?void 0:e.entityId)&&void 0!==r?r:null,priority:3,status:"open"};b.show({content:(0,Q.jsx)(W,{defaultValues:o,onSuccess:z}),title:null!==n&&void 0!==n&&n.id?"Edit Task":"Add Task"})},F=[{context:"secondary",icon:["fas","edit"],onClick:B,tooltip:"Edit"}],M=[{hidden:!0},{text:"Priority",formatter:function(t){var e,n=t.row;return(null===(e=O.t.find((function(t){return t.value===n.priority})))||void 0===e?void 0:e.text)||"-"}},{text:"Task"},{text:"Due date",sortable:!0,sortName:"dueDate"},{text:"Assigned To"},{hidden:!0},{formatter:h.Z,formatterData:F,text:"Actions"}],U=function(t){t.stopPropagation(),a(!o)},J=function(){return(0,Q.jsxs)(I.Z,{children:[(0,Q.jsx)(k.Z,{context:"secondary",content:"New Task",onClick:B,size:"sm"}),n&&(0,Q.jsx)(k.Z,{context:"secondary",content:o?"All Tasks":"My Tasks",onClick:U,size:"sm"})]})};return(0,Q.jsx)(w.Z,{open:!0,title:"Tasks",toolbar:(0,Q.jsx)(J,{}),children:(0,Q.jsx)(_.t,{columns:M,history:!1,initialSort:tt,loading:"compact"===i?V:$,meta:T,ref:x,refetch:C,rowClick:function(t){var e=t.item;"Job"===e.entity&&e.entityId&&b.show({content:(0,Q.jsx)(Z.g,{jobId:e.entityId,toggleShow:b.close}),submit:!1,title:"Job details",width:"50%"})},rows:("compact"===i?N:q).map((function(t){var e;return{id:t.id,priority:t.priority,content:t.content||"",date:t.dueDate?(0,v.Z)(t.dueDate,!0):"-",assignedUser:null===(e=t.assignedUser)||void 0===e?void 0:e.fullName,item:t,actions:""}}))})})};et.defaultProps={showMyTaskButton:!1}},20154:function(t,e,n){n.d(e,{t:function(){return i}});var i=[{text:"P1",value:1},{text:"P2",value:2},{text:"P3",value:3},{text:"P4",value:4},{text:"P5",value:5}]},75838:function(t,e,n){n.d(e,{bg:function(){return i},WG:function(){return s}});var i=[{text:"Status",value:""},{text:"Active",value:"active"},{text:"Inactive",value:"inactive"}],s=[{text:"Status",value:""},{text:"Open",value:"open"},{text:"Resolved",value:"resolved"},{text:"Closed",value:"closed"}]}}]);