(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7945],{34112:function(e,n,t){"use strict";t.d(n,{E:function(){return o}});var o=function(e,n){var t;if(Array.isArray(n)){var o=null;return n.forEach((function(n){var t,r=null===e||void 0===e||null===(t=e.timings)||void 0===t?void 0:t.find((function(e){return e.status===n}));o=(null===r||void 0===r?void 0:r.createdAt)||o})),o}var r=null===e||void 0===e||null===(t=e.timings)||void 0===t?void 0:t.find((function(e){return e.status===n}));return(null===r||void 0===r?void 0:r.createdAt)||null}},38099:function(e,n,t){"use strict";t.d(n,{U$:function(){return m},BH:function(){return p},tf:function(){return f},k3:function(){return h},CH:function(){return v},WJ:function(){return b}});var o=t(30266),r=t(64687),i=t.n(r),a=t(7151),s=t(42699),c=t(313),u=t(10928),l=t.n(u),d=t(34112),m=function(){var e=(0,o.Z)(i().mark((function e(n){var t,o,r,s,c,u,l,d,m,p,f,h;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=n.addJobFunc,r=n.location,s=n.row,c=n.adminId,u=a.Ci.fromString(s.frequency),l=u.all(),d=s.costCustomer,m=s.costSupplier,p=(null===r||void 0===r||null===(t=r.user)||void 0===t?void 0:t.id)||null,f=s.supplier.value,h=[],l.forEach((function(e){var n,t={adminId:c,amount:d,assetId:null===(n=s.asset)||void 0===n?void 0:n.value,costCategoryId:s.costCategory.value,customerId:r.customer[0].account.id,customerUserId:p,description:s.description,jobScheduleId:s.id,locationId:r.id,managerId:r.customer[0].account.managerId,pricing:"fixed",serviceId:s.service.value,source:"other",status:"offered",paymentMethod:"invoice",supplierLabourAmount:m,timing:"at",timingStart:e,title:s.title,type:"ppm",JobTimings:{data:[{status:"raised"},{status:"offered"}]},SupplierOffers:{data:[{status:"offered",accountId:f}]},Taxonomy:{data:[{entity:"Job",taxonomyId:s.shortDescription.value}]}};s.complianceSelect.value&&(t.Compliances={data:{complianceId:s.complianceSelect.value,entity:"Job",status:"active"}}),h.push(t)})),e.t0=(null===h||void 0===h?void 0:h.length)>0,!e.t0){e.next=13;break}return e.next=13,o({variables:{adminId:c,objects:h}});case 13:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(e){var n=e.scheduledJobs,t={},o={};return n.forEach((function(e){if(e.jobs&&e.jobs.length>0){var n,r,i=e.jobs.find((function(e){return new Date(e.timingStart)>new Date}));((null===i||void 0===i?void 0:i.timingStart)<(null===(n=t)||void 0===n?void 0:n.timingStart)||null===(r=t)||void 0===r||!r.timingStart)&&(t=i)}var s=a.Ci.fromString(e.frequency).all(),c=l()(s);(c<o||!o.date)&&(o.date=c,o.name=e.meta.serviceName)})),{nextExpire:o,nextJob:t}},f=function(e){var n=e.frequency,t=e.cost;return a.Ci.fromString(n).all().length*t},h=function(e){var n,t=e.jobScheduleId,o=e.jobs;return o&&(n=o.filter((function(e){return e.jobScheduleId===t&&(0,d.E)(e,"reportSent")})).length),n||0},v=function(e,n){var t=new Date(e.timingStart);return(0,s.Z)(t,n.startDate)&&(0,c.Z)(t,n.endDate)},b=function(e){var n=e.assetSelected,t=void 0===n?[]:n,o=e.compliance,r=e.service,i=void 0===r?[]:r,a=e.assetCategory,s=e.dateFilter,c={status:{_neq:"canceled"}};return null!==s&&void 0!==s&&s.startDate&&null!==s&&void 0!==s&&s.endDate&&(c.timingStart={_gte:s.startDate,_lte:s.endDate}),(null===t||void 0===t?void 0:t.length)>0&&(c.Assets={id:{_in:t.map((function(e){return e.value}))}}),(null===i||void 0===i?void 0:i.length)>0&&(c.Service={id:{_in:i.map((function(e){return null===e||void 0===e?void 0:e.value}))}}),null!==a&&void 0!==a&&a.value&&(c.AssetCategory={id:{_eq:null===a||void 0===a?void 0:a.value}}),"true"===o&&(c.type={_eq:"cppm"}),c}},7802:function(e,n,t){"use strict";t.d(n,{Ms:function(){return f},RV:function(){return h},EW:function(){return v},YW:function(){return b},B6:function(){return y},mJ:function(){return g}});var o,r,i,a,s,c,u,l,d,m=t(52209),p=t(54397),f=((0,p.Ps)(o||(o=(0,m.Z)(["\n  query GetAssetParents($ids: [Int!]!) {\n    asset: Asset(where: { id: { _in: $ids } }) {\n      id\n      name\n      parent: ParentAsset {\n        id\n        name\n        parent: ParentAsset {\n          id\n          name\n        }\n      }\n    }\n  }\n"]))),(0,p.Ps)(r||(r=(0,m.Z)(["\n  mutation DeleteJobSchedule($id: Int!) {\n    delete_JobSchedule(where: { id: { _eq: $id } }) {\n      returning {\n        id\n      }\n    }\n  }\n"])))),h=(0,p.Ps)(i||(i=(0,m.Z)(['\n  query GetJobSchedule($orderBy: JobSchedule_order_by!, $locationId: Int) {\n    JobSchedule(where: { locationId: { _eq: $locationId } }, order_by: [$orderBy]) {\n      contractId\n      frequency\n      frequencyDescription\n      id\n      meta\n      paymentMethod\n      assets: Assets {\n        id\n        status\n        entity\n        entityId\n        Asset {\n          name\n          serialNumber\n          id\n        }\n      }\n      media: Media(where: { entity: { _eq: "JobSchedule" } }) {\n        id\n      }\n      contract: JobScheduleContract {\n        name\n        invoiceDate\n        startDate\n        contractLength\n        contractValue\n        status\n      }\n      expenses: Expenses {\n        id\n        paid\n        description\n        amount\n        markup\n        unit\n        vat\n      }\n      jobs: Jobs(where: { status: { _neq: "canceled" } }) {\n        id\n        rag\n        title\n        timingStart\n        shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {\n          id\n          taxonomyId\n          comments\n          taxonomy: Taxonomy {\n            name\n          }\n        }\n      }\n    }\n    meta: JobSchedule_aggregate(where: { locationId: { _eq: $locationId } }) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n']))),v=(0,p.Ps)(a||(a=(0,m.Z)(['\n  query GetJobSchedule($id: Int!) {\n    jobSchedule: JobSchedule_by_pk(id: $id) {\n      contractId\n      frequency\n      frequencyDescription\n      id\n      meta\n      paymentMethod\n      jobs: Jobs(where: { status: { _neq: "canceled" } }) {\n        id\n        rag\n        title\n        timingStart\n        timings: JobTimings {\n          id\n          status\n          createdAt\n        }\n        shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {\n          id\n          taxonomyId\n          comments\n          taxonomy: Taxonomy {\n            name\n          }\n        }\n      }\n    }\n  }\n']))),b=(0,p.Ps)(s||(s=(0,m.Z)(['\n  query GetJobCompliance($locationId: Int!, $where: Job_bool_exp!) {\n    jobSchedule: JobSchedule(where: { locationId: { _eq: $locationId } }, order_by: { id: asc }) {\n      id\n      shortDescriptionName: meta(path: "$.shortDescriptionName")\n      serviceName: meta(path: "$.serviceName")\n      costCustomer: meta(path: "$.costCustomer")\n      costSupplier: meta(path: "$.costSupplier")\n      frequency\n      jobs: Jobs(where: $where) {\n        id\n        rag\n        timingStart\n      }\n      totalJobs: Jobs_aggregate {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n']))),y=(0,p.Ps)(c||(c=(0,m.Z)(['\n  query GetCalendarJobs($locationId: Int!) {\n    jobs: Job(\n      order_by: { timingStart: asc }\n      where: {\n        Location: { id: { _eq: $locationId } }\n        jobScheduleId: { _is_null: false }\n        status: { _neq: "canceled" }\n      }\n    ) {\n      id\n      number\n      title\n      description\n      quoted\n      reference\n      timingStart\n      timingEnd\n      createdAt\n      status\n      jobScheduleId\n      supplierNotes\n      amount\n      supplierLabourAmount\n      rag\n      type\n      timings: JobTimings {\n        id\n        status\n        createdAt\n      }\n      supplier: Supplier {\n        id\n        name\n      }\n      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {\n        id\n        taxonomyId\n        comments\n        taxonomy: Taxonomy {\n          name\n        }\n      }\n    }\n  }\n']))),g=((0,p.Ps)(u||(u=(0,m.Z)(["\n  query GetStatusLog($entity: String!, $entityId: Int!) {\n    statusLog: StatusLog(where: { entityId: { _eq: $entityId }, entity: { _eq: $entity } }) {\n      id\n      createdAt\n      notes\n      status\n    }\n  }\n"]))),(0,p.Ps)(l||(l=(0,m.Z)(["\n  mutation AddJob($objects: [Job_insert_input!]!) {\n    insert_Job(objects: $objects) {\n      returning {\n        id\n      }\n    }\n  }\n"]))),(0,p.Ps)(d||(d=(0,m.Z)(["\n  mutation MyMutation($objects: [CreateJobInput]!, $adminId: Int!) {\n    createJob(adminId: $adminId, objects: $objects) {\n      data\n    }\n  }\n"]))))},56188:function(e,n,t){"use strict";t.d(n,{K:function(){return q}});var o=t(92809),r=t(30266),i=t(80318),a=t(64687),s=t.n(a),c=t(67294),u=t(18218),l=t(38460),d=t(7802),m=t(80880),p=t(42593),f=t(58448),h=t(26398),v=t(14347),b=t(80284),y=t(5360),g=t(18944),j=t(55657),x=t(80285),S=t(42283),w=t(97202),I=t(69128),D=t(95146),_=t(85893);function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P=function(e){var n=e.defaultValues,t=e.setScheduleFilters,o=e.toggleShow,r=(0,S.cI)({defaultValues:n}),i=r.control,a=r.errors,s=r.handleSubmit,c=r.register,u=(0,r.watch)("assetCategory",null===n||void 0===n?void 0:n.assetCategory),l={control:i,errors:a,register:c};return(0,_.jsxs)(w.Z,{id:"offCanvasForm",handleSubmit:s((function(e){t((function(){return C({},e)})),o()})),children:[(0,_.jsx)(I.Z,C(C({},l),{},{name:"compliance",data:[{id:"yes",label:"Yes",value:!0},{id:"no",label:"No",value:!1}],legend:"Compliance"})),(0,_.jsx)(D.P,C(C({},l),{},{label:"Asset category",locationId:location.id,name:"assetCategory",type:"assetCategory"})),u&&(0,_.jsx)(D.P,C(C({},l),{},{label:"Assets",locationId:location.id,name:"assetSelected",type:"asset",isMulti:!0,assetCategoryId:(null===u||void 0===u?void 0:u.value)||null})),(0,_.jsx)(D.P,C(C({},l),{},{errors:C({},a),isMulti:!0,label:"Service",name:"service",type:"service"}))]})},J=t(38099);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var q=function(e){var n=e.clickable,t=e.handleHistory,o=e.locationId,a=(e.showDetails,e.refetchSchedule),S=e.setRefetchSchedule,w=(e.setR,e.customerDetails),I=e.supplierDetails,D=(0,u.useMainContext)(),Z=D.setJobScheduleForToolbar,C=D.scheduleFilters,O=D.setScheduleFilters,q=(0,c.useContext)(m.Z),$=(0,c.useContext)(p.Z).hasRole,T=(0,l.t)(d.YW),A=(0,i.Z)(T,2),E=A[0],F=A[1],N=F.data,M=(N=void 0===N?{jobSchedule:[]}:N).jobSchedule,L=void 0===M?[]:M,z=F.refetch;(0,c.useEffect)((0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E({variables:{locationId:o,where:(0,J.WJ)(k({},C))}});case 2:case"end":return e.stop()}}),e)}))),[C]),(0,c.useEffect)((function(){a&&(O(!1),S(!1),z())}),[a]);var B=function(e){e.stopPropagation(),q.show({content:(0,_.jsx)(P,{defaultValues:C,toggleShow:q.close,setScheduleFilters:O}),title:"Filter"})},G=function(){var e={context:"secondary",size:"sm",startIconProps:{size:"lg"}};return(0,_.jsxs)(f.Z,{children:[(0,_.jsx)(h.Z,{border:!1,passHref:!0,to:"/reports/ppm/schedule?locationId=".concat(o),children:(0,_.jsx)(v.Z,k(k({},e),{},{startIcon:"file-pdf"}))}),(0,_.jsx)(v.Z,k(k({},e),{},{onClick:B,startIcon:"filter"}))]})};return(0,_.jsx)(b.Z,{fitParentHeight:!0,open:!0,title:"Schedule",toolbar:(0,_.jsx)(G,{}),children:(0,_.jsx)(y.Z,{dataSource:L.length>0?(Z(L),L):[],events:"jobs",eventTimeSplitting:"timingStart",flag:"rag",handleClick:n?function(e,n,o){var r=e.e,i=e.row;r.stopPropagation();var a=C.mode;"string"!==typeof(null===i||void 0===i?void 0:i.id)&&t(i,a,o)}:null,handleFetchData:function(){var e=(0,r.Z)(s().mark((function e(n,t){var o,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.startDate,r=n.endDate,e.next=3,O((function(e){return k(k({},e),{},{dateFilter:{startDate:o,endDate:r},mode:t})}));case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),hiddenColumn:["id","costCustomer","costSupplier","serviceName","jobs"],initialMode:"year",onTitleFormatter:function(e){var n=e.row;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(g.Z,{size:"sm",children:[n.compliance&&(0,_.jsx)(j.Z,{context:"info",icon:"clipboard-check"}),n.serviceName]}),n.costCustomer&&$("customer")&&(0,_.jsx)(g.Z,{size:"xs",children:(0,x.Z)(n.costCustomer)}),n.costSupplier&&$("supplier")&&(0,_.jsx)(g.Z,{size:"xs",children:(0,x.Z)(n.costSupplier)}),n.costCustomer&&$("admin")&&n.costCustomer&&w&&(0,_.jsxs)(g.Z,{size:"xs",children:["Customer: ",(0,x.Z)(n.costCustomer)]}),n.costSupplier&&$("admin")&&I&&n.costSupplier&&(0,_.jsxs)(g.Z,{size:"xs",children:["Supplier: ",(0,x.Z)(n.costSupplier)]})]})},title:"serviceName"})})};q.defaultProps={clickable:!0,showDetails:!0}},77158:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return T}});var o,r,i=t(24237),a=t(85893),s=function(e){var n=e.children;return(0,a.jsx)(c,{id:"printContainer",children:n})},c=i.ZP.div.withConfig({displayName:"page__StyledContainer",componentId:"sc-cvoy6e-0"})(["background:white;width:21cm;min-height:29.7cm;display:block;margin:0 auto;margin-bottom:0.5cm;padding:0.5cm;box-shadow:0 0 0.5cm rgba(0,0,0,0.5);font-family:'lato';font-size:10pt;color:black;"]),u=t(30266),l=t(64687),d=t.n(l),m=t(67294),p=t(55863),f=t(58448),h=t(14347),v=t(1323),b=function(e){var n=e.location,t=e.jobScheduleForToolBar,o=e.customerDetails,r=e.supplierDetails,i=e.endDate,s=(0,v.x)().user,c=(0,m.useState)(!1),l=c[0],b=c[1],y=function(){var e=(0,u.Z)(d().mark((function e(){var a;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),a={location:n.name,ppmDate:new Date,jobSchedule:t,customerDetails:o,supplierDetails:r,adminId:s.accountId,year:i},e.next=4,window.fetch("".concat("https://aws-staging.cleverly.works","/pdf/create"),{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){var n=window.open("/download","_blank");b(!1),n.location.assign("".concat("https://d1hk88326p7ilp.cloudfront.net","/").concat(e.key))})).catch((function(e){console.error("Error:",e),(0,p.Tb)({message:e,section:"fetch"})}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,a.jsxs)(f.Z,{align:"center",children:[(0,a.jsx)(h.Z,{context:"secondary",content:"".concat(l?"Generating PDF":"Download"),disabled:l,"data-cy":"downloadPDF",onClick:y}),(0,a.jsx)(h.Z,{context:"secondary",content:"Back","data-cy":"backButton",onClick:function(){window.history.back()}})]})},y=t(78215),g=t(2356),j=t(18944),x=t(93633),S=t(52209),w=t(54397),I=(0,w.Ps)(o||(o=(0,S.Z)(['\n  query GetLogo($adminId: Int!) {\n    account: Account_by_pk(id: $adminId) {\n      id\n      media: Media(\n        where: { entity: { _eq: "Account" }, Medium: { category: { _eq: "invoiceLogo" } } }\n        limit: 1\n        order_by: { createdAt: desc }\n      ) {\n        id\n        item: Medium {\n          id\n          filename\n        }\n      }\n    }\n  }\n']))),D=t(47357),_=function(){var e,n,t,o=(0,v.x)(),r=o.hasRole,i=o.user,s=(0,x.a)(I,{variables:{adminId:r("admin")?i.adminId:i.accountId}}),c=s.data,u=(c=void 0===c?{account:[]}:c).account,l=s.error;return l&&console.error(l),null!==u&&void 0!==u&&u.media&&0!==(null===u||void 0===u||null===(e=u.media)||void 0===e?void 0:e.length)?(0,a.jsx)(D.Z,{alt:"logo",src:"".concat("https://d1hk88326p7ilp.cloudfront.net","/").concat(null===u||void 0===u||null===(n=u.media[0])||void 0===n||null===(t=n.item)||void 0===t?void 0:t.filename),width:100}):null},Z=function(e){var n=e.lines,t=e.reportName,o=(e.showDivider,e.supplier);return(0,a.jsxs)(y.Z,{className:"reportHeader",children:[(0,a.jsx)(g.Z,{md:9,children:(0,a.jsx)(_,{})}),(0,a.jsxs)(g.Z,{md:3,children:[(0,a.jsx)(j.Z,{context:"black",weight:"bold",children:t}),o&&(0,a.jsx)(j.Z,{context:"black",weight:"bold",children:"Supplier: ".concat(o)}),null===n||void 0===n?void 0:n.map((function(e,n){return(0,a.jsx)(j.Z,{context:"black",size:"sm",children:e})}))]})]})},C=(0,w.Ps)(r||(r=(0,S.Z)(["\n  query GetLocationDetails($id: Int!) {\n    location: Location_by_pk(id: $id) {\n      name\n    }\n  }\n"]))),P=t(11163),J=t(18218),O=t(56188),k=t(18862),q=function(e){var n=e.location,t=[];return t.push("Location: ".concat(null===n||void 0===n?void 0:n.name)),t.push("Date:  ".concat((0,k.Z)(new Date))),t},$=function(){var e=(0,P.useRouter)().query,n=(0,J.useMainContext)(),t=n.customerDetails,o=n.supplierDetails,r=n.jobScheduleForToolBar,i=n.scheduleFilters,c=(0,x.a)(C,{variables:{id:e.locationId}}).data,u=(c=void 0===c?{}:c).location;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b,{location:u,jobScheduleForToolBar:r,customerDetails:t,supplierDetails:o,endDate:i.dateFilter.endDate}),(0,a.jsxs)(s,{children:[(0,a.jsx)(Z,{lines:q({location:u}),reportName:"PPM Schedule",showDivider:!0}),(0,a.jsx)("div",{style:{zoom:"75%"},children:(0,a.jsx)(O.K,{clickable:!1,locationId:e.locationId,showDetails:!1,customerDetails:t,supplierDetails:o})})]})]})},T=function(){return(0,a.jsx)($,{})}},62531:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reports/ppm/schedule",function(){return t(77158)}])}},function(e){e.O(0,[3662,9809,284,4195,5312,7287,2002,3086,9082,3515,4712,5597,7622,2229,5146,9774,2888,179],(function(){return n=62531,e(e.s=n);var n}));var n=e.O();_N_E=n}]);