"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2623],{76800:function(n,e,t){t.d(e,{M:function(){return m}});var o=t(92809),r=t(10219),a=t(42426),s=t(19716),c=t(22796),i=t(85893),u=["control","errors","name","space"];function d(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var m=function(n){var e=n.control,t=n.errors,o=n.name,d=n.space,m=(0,r.Z)(n,u);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Z,l({control:e,errors:t,locale:a.Z,name:o},m)),d&&(0,i.jsx)(c.Z,{marginBottom:"sm"})]})};m.defaultProps={space:!0}},52623:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var o,r,a=t(92809),s=t(67294),c=t(93633),i=t(52209),u=t(54397),d=(0,u.Ps)(o||(o=(0,i.Z)(["\n  query GetDashboard(\n    $accountId: Int\n    $adminId: Int\n    $asAt: timestamptz\n    $monthStart: timestamptz\n    $dayStart: timestamptz\n    $userId: Int\n    $currentUserId: Int\n    $yearStart: timestamptz\n  ) {\n    dashboardTiles: getDashboard_HomeTiles(\n      args: {\n        adminId: $adminId\n        asAt: $asAt\n        accountId: $accountId\n        monthStart: $monthStart\n        dayStart: $dayStart\n        userId: $userId\n        yearStart: $yearStart\n      }\n    ) {\n      complianceJobToday\n      inprogressJobs\n      jobsInDispute\n      liveP1Jobs\n      numberOfOpenJobs\n      offeredJobs\n      onHold\n      overdueComplianceJobs\n      plannedJobsToday\n      quotesDueThisWeek\n      quotesNotSent\n      quotesOverdue\n      quotesToday\n      reactiveJobsToday\n      reportUnsent\n      worksValueMTD\n      worksValuePrvMTD\n      worksValuePrvYTD\n      worksValueYTD\n      upliftRequested\n      ppmOverdue\n      reactiveOverdue\n      waitingPPMInvoices\n      unValidated\n    }\n    customTile: getDashboard_HomeTile_Customs(args: { adminId: $adminId, userId: $currentUserId }) {\n      numberOfEmails\n      taxonomyID\n      taxonomyName\n    }\n  }\n"]))),l=t(11163),m=t(83894),p=t(23855),y=t(43703),f=t(69119),g=t(38148),b=t(5597),_=t(24237),v=t(80284),$=t(22796),I=t(78215),h=t(2356),j=t(76931),O=t(45697),q=t(80880),A=t(14347),P=t(30266),w=t(80318),x=t(64687),S=t.n(x),T=t(42283),Z=t(38460),U=t(75709),C=(0,u.Ps)(r||(r=(0,i.Z)(["\n  mutation UpdateUserSetting($userId: Int!, $changes: User_set_input) {\n    update_User_by_pk(pk_columns: { id: $userId }, _set: $changes) {\n      id\n    }\n  }\n"]))),k=t(27834),D=t(97202),M=t(72197),L=t(85893);function N(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function E(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?N(Object(t),!0).forEach((function(e){(0,a.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var J=function(n){var e=n.onSuccess,t=n.userId,o=(0,T.cI)(),r=o.control,a=o.errors,c=o.handleSubmit,i=o.register,u=o.setValue,d=(0,Z.t)(k.JA,{variables:{id:t},onCompleted:function(n){var e,t=null===(e=n.user.meta)||void 0===e?void 0:e.customTiles;t&&u("tags",null===t||void 0===t?void 0:t.map((function(n){return{value:n.taxonomyId,label:n.name}})))}}),l=(0,w.Z)(d,2),m=l[0],p=l[1].data,y=(p=void 0===p?{user:{}}:p).user;(0,s.useEffect)((function(){t&&m()}),[]);var f=(0,U.D)(C,{onCompleted:function(n){e(n)}}),g=(0,w.Z)(f,1)[0],b=function(){var n=(0,P.Z)(S().mark((function n(e){var t,o,r;return S().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=e.tags,o=t.map((function(n){return{taxonomyId:n.value,name:n.label}})),(r=E({},y.meta)||{}).customTiles=o,g({variables:{userId:y.id,changes:{meta:r}}});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),_={control:r,errors:a,register:i};return(0,L.jsx)(D.Z,{id:"offCanvasForm",handleSubmit:c(b),children:(0,L.jsx)(M.l,E(E({},_),{},{isMulti:!0,label:"Tags",name:"tags",type:"tags"}))})},G=function(n){var e=n.refetch,t=n.user,o=(0,s.useContext)(q.Z),r=function(n){o.close(),e()};return(0,L.jsx)(A.Z,{context:"secondary",content:"Add Tag",onClick:function(n){n.stopPropagation(),o.show({content:(0,L.jsx)(J,{userId:t.id,onSuccess:r}),title:"Add tag"})},size:"sm"})};G.proptypes={refetch:O.func.isRequired,user:O.object.isRequired};var F=t(89829),V="/dashboard",z=function(n){var e=n.asAt,t=n.customTile,o=n.dashboardTiles,r=n.userId,a=o[0]||{},s=a.complianceJobToday,c=a.inprogressJobs,i=a.jobsInDispute,u=a.liveP1Jobs,d=a.numberOfOpenJobs,l=a.offeredJobs,m=a.onHold,p=a.overdueComplianceJobs,y=a.plannedJobsToday,f=a.ppmOverdue,g=a.quotesDueThisWeek,_=a.quotesNotSent,v=a.quotesOverdue,$=a.quotesToday,I=a.reactiveJobsToday,h=a.reportUnsent,j=a.reactiveOverdue,O=a.upliftRequested,q=a.waitingPPMInvoices,A=a.worksValueMTD,P=a.worksValuePrvMTD,w=a.worksValuePrvYTD,x=a.worksValueYTD,S=void 0===x?0:x,T=a.unValidated,Z=e?(0,b.Z)(e,"yyyy-MM-dd"):"",U=(null===t||void 0===t?void 0:t.map((function(n){var e=n.numberOfEmails,t=n.taxonomyID,o=n.taxonomyName;return{colourConfig:{0:"success"},title:o,to:"/dashboard/conversations?tagId=".concat(t,"&tagName=").concat(o),value:e||0}})))||[];return[{colourConfig:{15:"success",30:"danger",31:"warning"},title:"Reactive jobs today",to:"".concat(V,"/issues?asAt=").concat(Z,"&tileName=reactiveJobsToday").concat(r?"&userId=".concat(r):""),value:I||0},{colourConfig:{0:"success",5:"danger",6:"warning"},title:"Overdue reactive",to:"".concat(V,"/issues?asAt=").concat(Z,"&tileName=reactiveOverdue").concat(r?"&userId=".concat(r):""),value:j||0},{colourConfig:{10:"success",20:"danger",21:"warning"},title:"PPM jobs today",to:"".concat(V,"/issues?type=ppm&&asAt=").concat(Z,"&tileName=plannedJobsToday").concat(r?"&userId=".concat(r):""),value:y||0},{colourConfig:{0:"success",5:"danger",6:"warning"},title:"Overdue PPM",to:"".concat(V,"/issues?type=ppm&&asAt=").concat(Z,"&tileName=ppmOverdue").concat(r?"&userId=".concat(r):""),value:f||0},{colourConfig:{10:"success",20:"danger",21:"warning"},title:"Compliance jobs today",to:"".concat(V,"/issues?asAt=").concat(Z,"&tileName=complianceJobToday").concat(r?"&userId=".concat(r):""),value:s||0},{colourConfig:{10:"success",20:"danger",21:"warning"},title:"Overdue compliance jobs",to:"".concat(V,"/issues?asAt=").concat(Z,"&tileName=overdueComplianceJobs").concat(r?"&userId=".concat(r):""),value:p||0},{colourConfig:{5:"success",10:"danger",11:"warning"},title:"Reports unsent",to:"".concat(V,"/issues?asAt=").concat(Z,"&tileName=reportUnsent").concat(r?"&userId=".concat(r):""),value:h||0},{colourConfig:{0:"success",5:"danger",6:"warning"},title:"Live P1 jobs",to:"".concat(V,"/issues?asAt=").concat(Z,"&tileName=liveP1Jobs").concat(r?"&userId=".concat(r):""),value:u||0},{colourConfig:{0:"success",5:"danger",6:"warning"},title:"Offered jobs",to:"".concat(V,"/issues?asAt=").concat(Z,"&tileName=offeredJobs").concat(r?"&userId=".concat(r):""),value:l||0},{colourConfig:{0:"success",5:"danger",6:"warning"},title:"On hold jobs",to:"".concat(V,"/issues?asAt=").concat(Z,"&tileName=onHold").concat(r?"&userId=".concat(r):""),value:m||0},{colourConfig:{5:"success",10:"danger",11:"warning"},title:"Quotes today",to:"".concat(V,"/quotes?asAt=").concat(Z,"&tileName=quotesToday").concat(r?"&userId=".concat(r):""),value:$||0},{colourConfig:{10:"success",20:"danger",21:"warning"},title:"Quotes not sent",to:"".concat(V,"/quotes?asAt=").concat(Z,"&tileName=quotesNotSent").concat(r?"&userId=".concat(r):""),value:_||0},{colourConfig:{10:"success",20:"danger",21:"warning"},title:"Quotes overdue",to:"".concat(V,"/quotes?asAt=").concat(Z,"&tileName=quotesOverdue").concat(r?"&userId=".concat(r):""),value:v||0},{colourConfig:{10:"success",20:"danger",21:"warning"},title:"Quotes due this week",to:"".concat(V,"/quotes?asAt=").concat(Z,"&tileName=quotesDueThisWeek").concat(r?"&userId=".concat(r):""),value:g||0},{colourConfig:{20:"success",40:"danger",41:"warning"},title:"Jobs in progress",to:"".concat(V,"/issues?asAt=").concat(Z,"&tileName=inprogressJobs").concat(r?"&userId=".concat(r):""),value:c||0},{colourConfig:{20:"success",40:"danger",41:"warning"},title:"Number of open jobs",to:"".concat(V,"/issues?asAt=").concat(Z,"&tileName=numberOfOpenJobs").concat(r?"&userId=".concat(r):""),value:d||0},{colourConfig:{5:"success",15:"danger",16:"warning"},title:"Jobs in dispute",to:"".concat(V,"/issues?asAt=").concat(Z,"&tileName=jobsInDispute").concat(r?"&userId=".concat(r):""),value:i||0},{colourConfig:{0:"success",5:"danger",6:"warning"},title:"Uplift requested",to:"".concat(V,"/issues?asAt=").concat(Z,"&tileName=upliftRequested").concat(r?"&userId=".concat(r):""),value:O||0},{colourConfig:{0:"success",5:"danger",6:"warning"},title:"Waiting PPM Invoices",to:"".concat(V,"/issues?type=ppm&&asAt=").concat(Z,"&tileName=waitingPPMInvoices").concat(r?"&userId=".concat(r):""),value:q||0},{colourConfig:{0:A>P?"success":"danger"},title:"Works value MTD",to:"".concat(V,"/issues?asAt=").concat(Z,"&tileName=worksValueMTD").concat(r?"&userId=".concat(r):""),value:"\xa3".concat(Math.floor(A||0).toLocaleString())},{colourConfig:{0:S>w?"success":"danger"},title:"Works value YTD",to:"".concat(V,"/issues?asAt=").concat(Z,"&tileName=worksValueYTD").concat(r?"&userId=".concat(r):""),value:"\xa3".concat(Math.floor(S||0).toLocaleString())},{colourConfig:{0:T>0?"danger":"success"},title:"Unvalidated jobs",to:"".concat(V,"/issues?asAt=").concat(Z,"&tileName=unvalidated").concat(r?"&userId=".concat(r):""),value:T||0}].concat(U)};function R(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function B(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?R(Object(t),!0).forEach((function(e){(0,a.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var W=[],Y=(0,m.Z)(new Date),H=(0,_.ZP)(j.Z).withConfig({displayName:"dashboard__StyledTile",componentId:"sc-syat77-0"})(["min-height:130px;div{font-size:32px;}"]),Q=function(n){var e,t,o=n.user,r=(0,l.useRouter)(),a=(0,s.useState)({dashboardTiles:{}}),i=a[0],u=a[1],_=(0,s.useState)(r.query.asAt?(0,m.Z)((0,p.Z)(r.query.asAt)):Y),j=_[0],O=_[1],q=(0,s.useState)({}),A=q[0],P=q[1],w=(0,s.useState)(r.query.userId?r.query.userId:null),x=w[0],S=w[1],T=(0,s.useState)(!(null===(e=r.query)||void 0===e||!e.asAt)||!(null===(t=r.query)||void 0===t||!t.userId))[0];(0,s.useEffect)((function(){P({monthStart:(0,y.Z)(j),todayEnd:(0,m.Z)(j),todayStart:(0,f.Z)(j),yearStart:(0,g.Z)(j)}),l.default.push({pathname:"/dashboard",query:{asAt:(0,b.Z)(j,"yyyy-MM-dd")}})}),[j]),(0,s.useEffect)((function(){x&&l.default.push({pathname:"/dashboard",query:B(B({},r.query),{},{userId:x})})}),[x]);var Z=(o.accountType,{query:d,variables:{accountId:null,adminId:o.adminId,asAt:j,currentUserId:o.id,dayStart:A.todayStart,monthStart:A.monthStart,userId:x,yearStart:A.yearStart}}),U=Z.query,C=Z.variables,k=(0,c.a)(U,{variables:B({},C),onCompleted:function(n){u(n)}}),D=k.loading,M=k.refetch;W=z(B(B({asAt:j},i),{},{userId:x}));return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(v.Z,{fitParentHeight:!0,open:!0,title:"Filters",toolbar:(0,L.jsx)(G,{refetch:M,user:o}),children:(0,L.jsx)(F.x,{defaultValues:{asAt:j,userId:x},open:T,reset:function(n){n({asAt:Y,userId:null}),O(Y),S(null),l.default.push({pathname:"/dashboard",query:{}})},submit:function(n){var e=n.userId,t=n.asAt;l.default.push({pathname:"/dashboard",query:{asAt:(0,b.Z)(t,"yyyy-MM-dd"),userId:e}})},setAsAt:O,setUserId:S,user:o})}),(0,L.jsx)($.Z,{}),(0,L.jsx)(I.Z,{children:W.map((function(n,e){return(0,L.jsx)(h.Z,{md:6,lg:3,sm:12,children:(0,L.jsx)(H,{body:n.value,colourConfig:n.colourConfig,loading:D,rounded:!0,size:"xs",title:n.title,to:n.to},n.title)},e)}))})]})}},89829:function(n,e,t){t.d(e,{x:function(){return _}});var o=t(92809),r=t(67294),a=t(42283),s=t(83894),c=t(97202),i=t(78215),u=t(2356),d=t(65375),l=t(58448),m=t(14347),p=t(95146),y=t(76800),f=t(85893);function g(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function b(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?g(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var _=function(n){var e=n.defaultValues,t=(n.open,n.reset),o=n.submit,g=n.setAsAt,_=n.setUserId,v=n.user,$=(0,a.cI)({defaultValues:e}),I=$.control,h=$.errors,j=$.handleSubmit,O=$.setValue,q=$.watch,A={control:I,errors:h},P=q("asAt",e.asAt),w=q("userId");(0,r.useEffect)((function(){g((0,s.Z)(P||new Date)),_&&_((null===w||void 0===w?void 0:w.value)||e.userId)}),[P,w]);return(0,f.jsxs)(c.Z,{id:"offCanvasFilterForm",handleSubmit:j((function(n){var e,t={userId:(null===(e=n.userId)||void 0===e?void 0:e.value)||null,asAt:(0,s.Z)(n.asAt)};o(t)})),children:[(0,f.jsxs)(i.Z,{children:[(0,f.jsx)(u.Z,{md:6,children:(0,f.jsx)(d.Z,{label:"As At",children:(0,f.jsx)(y.M,b(b({},A),{},{dateFormat:"d MMM yyyy",name:"asAt",todayButton:!1,placeholder:"As At",isClearable:!1,shouldCloseOnSelect:!0}))})}),"admin"===v.accountType&&(0,f.jsx)(u.Z,{md:6,children:(0,f.jsx)(p.P,b(b({},A),{},{accountId:v.accountId,label:"User",name:"userId",placeholder:"Select user",type:"user"}))})]}),(0,f.jsxs)(l.Z,{align:"flex-end",children:[(0,f.jsx)(m.Z,{content:"Clear",context:"danger",onClick:function(){t((function(n){var e=n.asAt,t=n.userId;O("asAt",e),O("userId",t)}))},size:"sm"}),(0,f.jsx)(m.Z,{content:"Search",context:"secondary",type:"submit",size:"sm"})]})]})};_.defaultProps={open:!1}},33462:function(n,e,t){t.d(e,{Im:function(){return m},RE:function(){return p},mW:function(){return y},ze:function(){return f},RQ:function(){return g},fC:function(){return b},uY:function(){return _}});var o,r,a,s,c,i,u,d=t(52209),l=t(54397),m=(0,l.Ps)(o||(o=(0,d.Z)(['\n  query GetTaxonomys(\n    $limit: Int\n    $offset: Int\n    $q: String\n    $orderBy: Taxonomy_order_by!\n    $status: String = "active"\n    $type: String\n    $typeGroup: String\n    $parentId: Int\n    $fetchGroup: Boolean! = true\n    $id: Int\n    $isGroup: Boolean = false\n  ) {\n    taxonomy: Taxonomy(\n      limit: $limit\n      offset: $offset\n      where: {\n        name: { _ilike: $q }\n        status: { _eq: $status }\n        type: { _eq: $type }\n        parentId: { _eq: $parentId }\n        id: { _eq: $id }\n        isGroup: { _eq: $isGroup }\n      }\n      order_by: [$orderBy]\n    ) {\n      options: Taxonomies(\n        where: {\n          type: { _eq: $type }\n          name: { _ilike: $q }\n          id: { _eq: $id }\n          status: { _eq: "active" }\n        }\n        order_by: { name: asc }\n      ) {\n        value: id\n        label: name\n\n        childs: Taxonomies(order_by: { id: asc }, where: { status: { _eq: "active" } }) {\n          taxonomyId: id\n          name\n          type\n          meta\n          status\n        }\n      }\n      id\n      name\n      type\n      status\n      parentId\n      createdAt\n      meta\n      parent: Parent {\n        id\n        name\n        type\n      }\n      childs: Taxonomies(order_by: { id: asc }, where: { status: { _eq: "active" } }) {\n        taxonomyId: id\n        name\n        type\n        meta\n        status\n      }\n      jobs: Taxonomy_Entities_aggregate(\n        where: { Taxonomy: { type: { _eq: "jobTags" } }, entity: { _eq: "Job" } }\n      ) {\n        aggregate {\n          count\n        }\n      }\n    }\n    meta: Taxonomy_aggregate(\n      where: {\n        name: { _ilike: $q }\n        status: { _eq: $status }\n        type: { _eq: $type }\n        parentId: { _eq: $parentId }\n        id: { _eq: $id }\n        isGroup: { _eq: $isGroup }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n    taxonomyGroup: Taxonomy(where: { isGroup: { _eq: true }, type: { _eq: $typeGroup } })\n      @include(if: $fetchGroup) {\n      value: id\n      text: name\n    }\n  }\n']))),p=(0,l.Ps)(r||(r=(0,d.Z)(["\n  query GetTaxonomy($id: Int!) {\n    taxonomy: Taxonomy_by_pk(id: $id) {\n      id\n      name\n      type\n      status\n      parentId\n      createdAt\n      meta\n    }\n  }\n"]))),y=(0,l.Ps)(a||(a=(0,d.Z)(["\n  mutation AddTaxonomy($objects: [Taxonomy_insert_input!]!) {\n    insert_Taxonomy(objects: $objects) {\n      returning {\n        id\n        type\n      }\n    }\n  }\n"]))),f=(0,l.Ps)(s||(s=(0,d.Z)(["\n  mutation UpdateTaxonomy($id: Int!, $changes: Taxonomy_set_input) {\n    update_Taxonomy_by_pk(pk_columns: { id: $id }, _set: $changes) {\n      id\n      type\n    }\n  }\n"]))),g=(0,l.Ps)(c||(c=(0,d.Z)(["\n  query GeTaxonomyWithEntities($type: String!, $entity: String!, $entityId: Int!) {\n    questions: Taxonomy(where: { type: { _eq: $type } }) {\n      id\n      meta\n      name\n      status\n      taxonomy_entity: Taxonomy_Entities(\n        where: { entityId: { _eq: $entityId }, entity: { _eq: $entity } }\n      ) {\n        comments\n      }\n    }\n  }\n"]))),b=(0,l.Ps)(i||(i=(0,d.Z)(["\n  mutation InsertTaxonomyEntity(\n    $entity: String!\n    $entityId: Int!\n    $questions: [Taxonomy_Entity_insert_input!]!\n    $objectStatusLog: [StatusLog_insert_input!]!\n    $hasStatusLog: Boolean!\n  ) {\n    delete_Taxonomy_Entity(where: { entityId: { _eq: $entityId }, entity: { _eq: $entity } }) {\n      returning {\n        id\n      }\n    }\n    insert_Taxonomy_Entity(objects: $questions) {\n      returning {\n        id\n      }\n    }\n\n    insert_StatusLog(objects: $objectStatusLog) @include(if: $hasStatusLog) {\n      returning {\n        id\n      }\n    }\n  }\n"]))),_=(0,l.Ps)(u||(u=(0,d.Z)(["\n  query GetSLAsForJobManage {\n    slas: SLA(order_by: { name: asc }) {\n      id\n      label: name\n      notes\n    }\n  }\n"])))},72197:function(n,e,t){t.d(e,{l:function(){return f}});var o=t(92809),r=t(10219),a=t(67294),s=t(93633),c=t(33462),i=t(65375),u=t(93515),d=t(85893),l=["control","errors","label","name","register","type","filters"];function m(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var y=function(n,e){var t,o,r=!0;return(null===(t=n.errors[n.name])||void 0===t?void 0:t.message)!==(null===(o=e.errors[e.name])||void 0===o?void 0:o.message)&&(r=!1),["name","type"].forEach((function(t){n[t]!==e[t]&&(r=!1)})),r},f=(0,a.memo)((function(n){var e=n.control,t=n.errors,o=n.label,a=n.name,m=n.register,y=n.type,f=n.filters,g=(0,r.Z)(n,l),b={control:e,errors:t,register:m},_=function(n){var e=(0,s.a)(c.Im,{variables:p(p({isGroup:"assetCategory"===n},f),{},{orderBy:{name:"asc"},type:n})}).data,t=(e=void 0===e?{taxonomy:[]}:e).taxonomy;return"assetCategory"===n?t.map((function(n){return{label:n.name,options:n.options,childs:n.childs,meta:n.meta}})):t.map((function(n){return{label:n.name,value:n.id,childs:n.childs,meta:n.meta}}))}(y);return(0,d.jsx)(i.Z,{id:a,label:o,children:(0,d.jsx)(u.Z,p(p({},b),{},{cacheOptions:!0,isClearable:!0,options:_,name:a},g))})}),y);f.defaultProps={filters:{}}},27834:function(n,e,t){t.d(e,{I4:function(){return I},AX:function(){return h},fo:function(){return j},JA:function(){return O},WF:function(){return q},Px:function(){return A},a8:function(){return P},r1:function(){return w},MT:function(){return x},nE:function(){return S},nh:function(){return T},$E:function(){return Z},uz:function(){return U},ge:function(){return C},ZA:function(){return k},tW:function(){return D}});var o,r,a,s,c,i,u,d,l,m,p,y,f,g,b,_,v=t(52209),$=t(54397),I=(0,$.Ps)(o||(o=(0,v.Z)(["\n  mutation InsertAccountUser($objects: [Account_User_insert_input!]!) {\n    insert_Account_User(objects: $objects) {\n      returning {\n        id\n      }\n    }\n  }\n"]))),h=(0,$.Ps)(r||(r=(0,v.Z)(["\n  mutation UpdateUser(\n    $id: Int!\n    $accountUserId: Int!\n    $accountUserChanges: Account_User_set_input\n    $changes: User_set_input\n    $updateAccountUser: Boolean!\n  ) {\n    update_Account_User_by_pk(pk_columns: { id: $accountUserId }, _set: $accountUserChanges)\n      @include(if: $updateAccountUser) {\n      id\n    }\n    update_User_by_pk(pk_columns: { id: $id }, _set: $changes) {\n      id\n    }\n  }\n"]))),j=(0,$.Ps)(a||(a=(0,v.Z)(["\n  query GetUsers(\n    $accountId: Int\n    $accountType: String\n    $date: timestamptz\n    $limit: Int\n    $offset: Int\n    $q: String\n    $orderBy: User_order_by!\n    $status: String\n  ) {\n    users: User(\n      limit: $limit\n      offset: $offset\n      where: {\n        Account_Users: { Account: { id: { _eq: $accountId }, type: { _eq: $accountType } } }\n        createdAt: { _eq: $date }\n        _or: [\n          { email: { _ilike: $q } }\n          { nameFirst: { _ilike: $q } }\n          { nameLast: { _ilike: $q } }\n        ]\n        status: { _eq: $status }\n      }\n      order_by: [$orderBy]\n    ) {\n      id\n      name: nameFirst\n      nameFirst\n      nameLast\n      phone\n      status\n      email\n      createdAt\n      meta\n      accounts: Account_Users {\n        id\n        role\n        position\n        isContact\n        status\n        account: Account {\n          id\n          name\n          type\n        }\n        userLocations: User_Account_Locations {\n          accountLocationId\n        }\n      }\n    }\n    meta: User_aggregate(\n      where: {\n        Account_Users: { Account: { id: { _eq: $accountId }, type: { _eq: $accountType } } }\n        createdAt: { _eq: $date }\n        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]\n        status: { _eq: $status }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n"]))),O=(0,$.Ps)(s||(s=(0,v.Z)(["\n  query GetUser($id: Int!) {\n    user: User_by_pk(id: $id) {\n      id\n      fullName\n      name: nameFirst\n      nameFirst\n      nameLast\n      phone\n      status\n      email\n      createdAt\n      meta\n      media: Media {\n        id\n        medium: Medium {\n          id\n          category\n          filename\n          meta\n          type\n        }\n      }\n      accounts: Account_Users {\n        id\n        role\n        position\n        isContact\n        status\n        account: Account {\n          id\n          name\n          type\n        }\n      }\n    }\n  }\n"]))),q=(0,$.Ps)(c||(c=(0,v.Z)(["\n  query CheckDuplicateEmail($email: String!) {\n    users: User_public(where: { email: { _eq: $email } }) {\n      id\n      nameFirst\n      nameLast\n      email\n      phone\n    }\n  }\n"]))),A=(0,$.Ps)(i||(i=(0,v.Z)(["\n  fragment UserFields on User {\n    id\n    email\n    nameFirst\n    nameLast\n    fullName\n    phone\n    status\n  }\n"]))),P=(0,$.Ps)(u||(u=(0,v.Z)(["\n  mutation SendGoogleAuthCode($code: String!, $id: Int!, $type: String!) {\n    createGoogleToken(code: $code, id: $id, type: $type) {\n      success\n      tokens\n      error\n    }\n  }\n"]))),w=(0,$.Ps)(d||(d=(0,v.Z)(["\n  mutation GenerateMSURL($type: String!, $id: Int!) {\n    genenrateMSURL(id: $id, type: $type) {\n      url\n    }\n  }\n"]))),x=(0,$.Ps)(l||(l=(0,v.Z)(["\n  mutation signoutMS($id: Int!, $type: String!, $email: String!) {\n    signoutMS(id: $id, type: $type, email: $email) {\n      error\n      msId\n      success\n    }\n  }\n"]))),S=(0,$.Ps)(m||(m=(0,v.Z)(["\n  query getAccountMeta($id: Int!) {\n    account: Account_by_pk(id: $id) {\n      meta\n    }\n  }\n"]))),T=(0,$.Ps)(p||(p=(0,v.Z)(["\n  query user($id: Int!) {\n    user: User_by_pk(id: $id) {\n      meta\n    }\n  }\n"]))),Z=(0,$.Ps)(y||(y=(0,v.Z)(["\n  mutation updateAccount($accountId: Int!, $set: Account_set_input!) {\n    update_Account_by_pk(pk_columns: { id: $accountId }, _set: $set) {\n      id\n    }\n  }\n"]))),U=(0,$.Ps)(f||(f=(0,v.Z)(["\n  mutation updateUserMeta($userId: Int!, $meta: jsonb!) {\n    update_User_by_pk(pk_columns: { id: $userId }, _set: { meta: $meta }) {\n      id\n      meta\n    }\n  }\n"]))),C=(0,$.Ps)(g||(g=(0,v.Z)(['\n  query userDevices($accountId: Int!) {\n    users: User(\n      where: {\n        Account_Users: { accountId: { _eq: $accountId }, status: { _eq: "active" } }\n        UserDevices: { status: { _eq: "active" } }\n        status: { _eq: "active" }\n      }\n    ) {\n      id\n      fullName\n      devices: UserDevices(\n        order_by: { updatedAt: desc_nulls_last }\n        where: { status: { _eq: "active" } }\n        limit: 1\n      ) {\n        id\n        playerId\n      }\n    }\n  }\n']))),k=(0,$.Ps)(b||(b=(0,v.Z)(['\n  query GetAccountLocations($accountId: Int, $limit: Int, $offset: Int) {\n    location: Location(\n      offset: $offset\n      limit: $limit\n      where: {\n        Account_Locations: {\n          accountId: { _eq: $accountId }\n          Account: { type: { _eq: "customer" } }\n        }\n      }\n    ) {\n      id\n      name\n      accountLocations: Account_Locations {\n        id\n      }\n      addresses: Addresses(where: { entity: { _eq: "Location" }, registered: { _eq: true } }) {\n        id\n        status\n        address: Address {\n          id\n          name\n          addressLine1\n          postCode\n        }\n      }\n    }\n    meta: Location_aggregate(\n      where: {\n        Account_Locations: {\n          accountId: { _eq: $accountId }\n          Account: { type: { _eq: "customer" } }\n        }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n']))),D=(0,$.Ps)(_||(_=(0,v.Z)(["\n  mutation InsertUserAccountLocations(\n    $accountUserId: Int!\n    $objects: [User_Account_Location_insert_input!]!\n  ) {\n    delete_User_Account_Location(where: { accountUserId: { _eq: $accountUserId } }) {\n      affected_rows\n    }\n    insert_User_Account_Location(objects: $objects) {\n      affected_rows\n      returning {\n        id\n      }\n    }\n  }\n"])))}}]);