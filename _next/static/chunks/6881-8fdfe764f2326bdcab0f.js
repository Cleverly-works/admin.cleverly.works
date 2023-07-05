"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6881],{56881:function(e,t,n){n.d(t,{n:function(){return k}});var i=n(30266),o=n(64687),s=n.n(o),a=n(67294),r=n(26075),d=n(40682),c=n(80880),l=n(92700),u=n(75201),g=n(25610),m=n(78416),f=n(85893),k=function(e){var t=e.assetId,n=e.assetName,o=e.dateClick,k=e.initialView,b=e.locationId,v=e.userId,h=(0,a.useContext)(c.Z),p=(0,r.x)(),x=function(){var e=(0,i.Z)(s().mark((function e(n,i){var o,a,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.query({query:d.M8,variables:{assetId:t,endDate:n.end,startDate:n.start,userId:v}});case 2:o=e.sent,a=o.data,r=(a=void 0===a?{assetBookings:[]}:a).assetBookings,i(r.map((function(e){return{allDay:e.allDay,backgroundColor:e.color,className:"eventClass",end:e.bookingEnd,extendedProps:{assetId:e.asset.id,assetName:e.asset.name,description:e.description,id:e.id,invitees:e.invitees},start:e.bookingStart,title:e.title}})));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),j=function(){h.close()};return(0,f.jsx)(l.A,{dateClick:o&&function(e){h.show({content:(0,f.jsx)(g.D,{assetId:t,assetName:n,date:e.date,locationId:b,onSuccess:j}),title:"Make a Booking",width:"40%"})},events:x,eventClick:function(e){h.show({content:(0,f.jsx)(u.e,{assetId:t,data:(0,m.lq)(e.event),locationId:b}),submit:!1,title:"View Booking",width:"40%"})},eventContent:function(e){var n=e.event;return(0,f.jsxs)(f.Fragment,{children:[!t&&(0,f.jsxs)(f.Fragment,{children:[n.extendedProps.assetName,(0,f.jsx)("br",{})]}),n.title]})},initialView:k})};k.defaultProps={dateClick:!0,initialView:"listWeek"}},75201:function(e,t,n){n.d(t,{e:function(){return x}});var i=n(80318),o=n(67294),s=n(75709),a=n(40682),r=n(24237),d=n(80880),c=n(7720),l=n(78215),u=n(2356),g=n(93443),m=n(18862),f=n(64509),k=n(58448),b=n(14347),v=n(11417),h=n(25610),p=n(85893),x=function(e){var t,n=e.assetId,r=e.data,v=e.locationId,x=(0,o.useContext)(d.Z),Z=(0,s.D)(a.W$,{onCompleted:function(){x.close()}}),D=(0,i.Z)(Z,1)[0],y=function(){x.close(),x.close()};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(l.Z,{children:[(0,p.jsx)(j,{tag:"h2",content:r.assetSelected.label}),(0,p.jsx)(u.Z,{md:12,children:(0,p.jsx)(g.Z,{content:"Title",text:r.title})}),(0,p.jsx)(u.Z,{md:6,children:(0,p.jsx)(g.Z,{content:"Start",text:"".concat((0,m.Z)(r.bookingStart)," - ").concat((0,f.Z)(r.bookingStart))})}),(0,p.jsx)(u.Z,{md:6,children:(0,p.jsx)(g.Z,{content:"End",text:"".concat((0,m.Z)(r.bookingEnd)," - ").concat((0,f.Z)(r.bookingEnd))})}),(0,p.jsx)(u.Z,{md:12,children:(0,p.jsx)(g.Z,{content:"Invitees",text:(t=r.invitees,t&&t.split(",").map((function(e){return(0,p.jsx)(c.Z,{content:e,context:"dark",size:"sm"})})))})}),(0,p.jsx)(u.Z,{md:12,children:(0,p.jsx)(g.Z,{content:"Description",text:r.description})})]}),(0,p.jsxs)(k.Z,{align:"flex-end",children:[(0,p.jsx)(b.Z,{content:"Cancel booking",context:"danger",onClick:function(){D({variables:{id:r.id,changes:{status:"canceled"}}})},size:"sm"}),(0,p.jsx)(b.Z,{content:"Edit booking",context:"secondary",onClick:function(){x.show({content:(0,p.jsx)(h.D,{assetId:n,data:r,locationId:v,onSuccess:y}),title:"Edit Booking",width:"40%"})},size:"sm"})]})]})},j=(0,r.ZP)(v.Z).withConfig({displayName:"details__StyledHeading",componentId:"sc-svygug-0"})(["padding-left:1rem;"])},25610:function(e,t,n){n.d(t,{D:function(){return _}});var i=n(80318),o=n(92809),s=n(67294),a=n(38460),r=n(75709),d=n(40682),c=n(42283),l=n(79665),u=n(43566),g=n(18862),m=n(97202),f=n(78215),k=n(2356),b=n(93443),v=n(26398),h=n(65375),p=n(71247),x=n(83528),j=n(76800),Z=n(95146),D=n(78416),y=n(19501),I=(0,y.Ry)().shape({title:(0,y.Z_)().required(),description:(0,y.Z_)(),bookingStart:(0,y.hT)().required(),bookingEnd:(0,y.hT)().required(),invitees:(0,y.Z_)()}),w=n(85893);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){var t,n=e.assetId,o=e.assetName,y=e.data,S=e.date,_=e.locationId,B=e.onSuccess,$=(0,s.useContext)(u.Z).user,E=(0,c.cI)({defaultValues:C(C({},y),{},{bookingStart:y.bookingStart?new Date(y.bookingStart):(0,D.ry)(S),bookingEnd:y.bookingEnd?new Date(y.bookingEnd):""}),resolver:(0,l.S)(I)}),P=E.control,T=E.errors,O=E.handleSubmit,A=E.register,q=E.watch,M=E.setValue,N=q("bookingStart"),V=(null===(t=q("assetSelected"))||void 0===t?void 0:t.value)||n,W=(0,a.t)(d.M8,{variables:{assetId:V,startDate:(0,g.Z)(new Date)}}),F=(0,i.Z)(W,2),H=F[0],z=F[1].data,G=(z=void 0===z?{assetBookings:[]}:z).assetBookings;(0,s.useEffect)((function(){H(),K()}),[V]);var L=(0,r.D)(d.ev,{onCompleted:function(e){B&&B()}}),U=(0,i.Z)(L,1)[0],R=(0,r.D)(d.W$,{onCompleted:function(e){B&&B()}}),J=(0,i.Z)(R,1)[0],K=function(){M("bookingStart",y.bookingStart?new Date(y.bookingStart):(0,D.ry)(S)),M("bookingEnd",y.bookingEnd?new Date(y.bookingEnd):"")},Q=function(e){var t=e.time,n=e.endTime,i=void 0!==n&&n,o=i?new Date(N):new Date,s=new Date(t),a=G.filter((function(e){return e.id!==y.id})),r=a.map((function(e){return new Date(e.bookingStart).getTime()})),d=a.map((function(e){return new Date(e.bookingEnd).getTime()}));return s.getTime()>o.getTime()&&(0,D.CP)({selectedDate:s,assetBookingDateStarts:r,assetBookingDateEnds:d,endTime:i,minDate:i&&new Date(N)})},X={control:P,isClearable:!1,errors:T,register:A};return(0,w.jsxs)(m.Z,{id:"offCanvasForm",handleSubmit:O((function(e){(0,D.iW)({assetId:n,form:e,user:$}),null!==y&&void 0!==y&&y.id?J({variables:{id:y.id,changes:e}}):U({variables:{objects:[e]}})})),children:[n?(0,w.jsx)(f.Z,{children:(0,w.jsx)(k.Z,{md:12,children:(0,w.jsx)(b.Z,{content:"Asset",text:(0,w.jsx)(v.Z,{border:!1,passHref:!0,to:"/dashboard/assets/view?id=".concat(n),children:o})})})}):(0,w.jsx)(f.Z,{children:(0,w.jsx)(k.Z,{md:12,children:(0,w.jsx)(Z.P,C(C({},X),{},{label:"Asset",locationId:_,name:"assetSelected",type:"assetBookable"}))})}),(0,w.jsx)(f.Z,{children:(0,w.jsx)(k.Z,{md:12,children:(0,w.jsx)(h.Z,{label:"Title",children:(0,w.jsx)(p.Z,C(C({},X),{},{name:"title",placeholder:"Booking Title"}))})})}),(0,w.jsx)(h.Z,{label:"Start time"}),(0,w.jsx)(j.M,C(C({},X),{},{onChange:function(e){M("bookingStart",new Date(e)),M("bookingEnd",null)},dateFormat:"d MMM yyyy HH:mm",filterTime:function(e){return Q({time:e})},name:"bookingStart",showTimeSelect:!0,todayButton:!1})),(0,w.jsx)(h.Z,{label:"End time"}),(0,w.jsx)(j.M,C(C({},X),{},{dateFormat:"d MMM yyyy HH:mm",filterTime:function(e){return Q({time:e,endTime:!0})},minDate:new Date(N),name:"bookingEnd",showTimeSelect:!0,todayButton:!1})),(0,w.jsx)(f.Z,{children:(0,w.jsx)(k.Z,{md:12,children:(0,w.jsx)(h.Z,{label:"Invitees",children:(0,w.jsx)(p.Z,C(C({},X),{},{multiple:!0,name:"invitees",type:"email",placeholder:"List of invitees separated by comma"}))})})}),(0,w.jsx)(f.Z,{children:(0,w.jsx)(k.Z,{md:12,children:(0,w.jsx)(h.Z,{label:"Description",children:(0,w.jsx)(x.Z,C(C({},X),{},{name:"description",placeholder:"Booking Description",rows:2}))})})})]})};_.defaultProps={data:{},assetName:""}},78416:function(e,t,n){n.d(t,{ry:function(){return s},lq:function(){return a},iW:function(){return r},CP:function(){return d}});var i=n(85817),o=n(92311),s=function(e){var t=(0,i.Z)(e),n=(0,i.Z)(new Date),s=t||n+1;return(0,o.Z)(e||new Date,{hours:s,minutes:0,seconds:0})},a=function(e){var t,n,i,o,s;return{allDay:e.allDay,assetSelected:{label:null===(t=e.extendedProps)||void 0===t?void 0:t.assetName,value:null===(n=e.extendedProps)||void 0===n?void 0:n.assetId},bookingEnd:e.end,bookingStart:e.start,color:e.backgroundColor,description:null===(i=e.extendedProps)||void 0===i?void 0:i.description,id:null===(o=e.extendedProps)||void 0===o?void 0:o.id,invitees:null===(s=e.extendedProps)||void 0===s?void 0:s.invitees,title:e.title}},r=function(e){var t=e.assetId,n=e.form,i=e.user;n.assetId=t,n.userId=i.id,n.color="green",n.status="active",t||(n.assetId=n.assetSelected.value,delete n.assetSelected),delete n.timing},d=function(){var e="",t="";return function(n){var i=n.selectedDate,o=n.assetBookingDateStarts,s=n.assetBookingDateEnds,a=n.endTime,r=n.minDate,d=o.find((function(e){return e===i.getTime()}));d&&(e=d);var c=s.find((function(e){return e===i.getTime()}));return c&&(t=c),!(i.getTime()>=e&&i.getTime()<=t)&&!(i.getTime()>=e&&i.getTime()<=e)&&!(a&&r<e&&i.getTime()>=e)}}()},40682:function(e,t,n){n.d(t,{M8:function(){return d},ev:function(){return c},W$:function(){return l}});var i,o,s,a=n(52209),r=n(54397),d=(0,r.Ps)(i||(i=(0,a.Z)(['\n  query GetAssetBookings(\n    $assetId: Int\n    $startDate: timestamptz\n    $endDate: timestamptz\n    $userId: Int\n    $limit: Int\n    $offset: Int\n    $orderBy: [AssetBooking_order_by!]\n  ) {\n    assetBookings: AssetBooking(\n      where: {\n        assetId: { _eq: $assetId }\n        userId: { _eq: $userId }\n        status: { _eq: "active" }\n        _and: [{ bookingStart: { _gte: $startDate } }, { bookingStart: { _lte: $endDate } }]\n      }\n      limit: $limit\n      offset: $offset\n      order_by: $orderBy\n    ) {\n      allDay\n      bookingEnd\n      bookingStart\n      color\n      description\n      id\n      invitees\n      meta\n      title\n      asset: Asset {\n        id\n        name\n      }\n      user: User {\n        email\n        fullName\n      }\n    }\n    meta: AssetBooking_aggregate(\n      where: {\n        assetId: { _eq: $assetId }\n        userId: { _eq: $userId }\n        status: { _eq: "active" }\n        _and: [{ bookingStart: { _gte: $startDate } }, { bookingStart: { _lte: $endDate } }]\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n']))),c=(0,r.Ps)(o||(o=(0,a.Z)(["\n  mutation AddAssetBooking($adminId: Int, $objects: [AssetBookingInput!]!) {\n    createAssetBookings(adminId: $adminId, bookings: $objects) {\n      data\n      success\n    }\n  }\n"]))),l=(0,r.Ps)(s||(s=(0,a.Z)(["\n  mutation UpdateAssetBooking($id: Int!, $changes: AssetBooking_set_input) {\n    update_AssetBooking_by_pk(pk_columns: { id: $id }, _set: $changes) {\n      id\n    }\n  }\n"])))},92700:function(e,t,n){n.d(t,{A:function(){return s}});var i=n(68794),o=n(85893),s=function(e){var t=e.dateClick,n=e.events,s=e.eventClick,a=e.eventContent,r=(e.hasLoading,e.height),d=e.initialView;return(0,o.jsx)(i.Z,{dateClick:t,eventClick:s,eventContent:a,events:n,hasLoading:!0,height:r,headerToolbar:{start:"prev,next today",center:"title",end:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"},initialView:d})};s.defaultProps={initialView:"listWeek",hasLoading:!0,height:550}}}]);