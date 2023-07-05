(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3383],{7720:function(n,e,t){"use strict";t.d(e,{Z:function(){return _}});var r,o,i,s=t(30168),a=t(67294),c=t(24237),u=t(55657),l=t(96978),d=t(11404),f=t(45697),m=t(37815),p=t(82373),g={children:f.node,className:f.string,content:f.string.isRequired,context:(0,f.oneOf)(Object.values(m.Z)),icon:f.string,iconPrefix:f.string,shape:(0,f.oneOf)(["round","square"]),size:(0,f.oneOf)(Object.values(p.Z)),style:f.object,to:f.string},y=function(n){var e=n.children,t=n.className,r=n.content,o=n.context,i=n.icon,s=n.iconPrefix,c=n.shape,u=n.size,l=n.style,d=n.to;return a.createElement(b,{className:t,context:o,href:d,itemProp:"keywords",shape:c,size:u,style:l},i&&a.createElement(h,{icon:i,prefix:s}),r||e)};y.displayName="Badge";var b=c.ZP.a(r||(r=(0,s.Z)(["\n  ","\n  ","\n  border: ",";\n  border-radius: ",";\n  color: ",";\n  display: inline-block;\n  line-height: 1;\n  margin: 0 0.5em 0.5em 0;\n  padding: ",";\n  font-size: ",";\n  text-align: center;\n  vertical-align: baseline;\n  white-space: nowrap;\n  transition: all 0.1s ease-in-out;\n  text-decoration: none;\n  cursor: default;\n\n  ","\n\n  &:empty {\n    display: none;\n  }\n"])),(function(n){return(0,l.Z)(n)}),(function(n){return(0,d.Z)(n)}),(function(n){var e=n.context,t=n.theme;return"white"!==e?"none":"1px solid "+t.COLOUR.dark}),(function(n){var e=n.shape;return n.theme.BADGE.BORDER_RADIUS[e]}),(function(n){var e=n.theme;return"white"!==n.context?e.COLOUR.white:e.COLOUR.black}),(function(n){var e=n.size;return n.theme.BADGE.PADDING[e]}),(function(n){var e=n.size;return n.theme.BADGE.FONT_SIZE[e]}),(function(n){return n.href&&(0,c.iv)(o||(o=(0,s.Z)(["\n      &:hover {\n        opacity: 0.7;\n        cursor: pointer;\n      }\n    "])))})),h=(0,c.ZP)(u.Z)(i||(i=(0,s.Z)(["\n  margin-right: 5px;\n"])));y.propTypes=g,y.defaultProps={context:"primary",shape:"square",size:"md"};var _=y},80285:function(n,e){"use strict";e.Z=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GBP",t=new Intl.NumberFormat(["en-GB"],{currency:e,currencyDisplay:"symbol",style:"currency"});return t.format(n)}},11640:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});var r=t(83946),o=t(19013),i=t(13882);function s(n,e){(0,i.Z)(2,arguments);var t=(0,o.Z)(n),s=(0,r.Z)(e);if(isNaN(s))return new Date(NaN);if(!s)return t;var a=t.getDate(),c=new Date(t.getTime());c.setMonth(t.getMonth()+s+1,0);var u=c.getDate();return a>=u?c:(t.setFullYear(c.getFullYear(),c.getMonth(),a),t)}},96692:function(n,e,t){"use strict";t.d(e,{E:function(){return F}});var r=t(92809),o=t(67294),i=t(11163),s=t(93633),a=t(64930),c=t(80880),u=t(11570),l=t(18862),d=t(58448),f=t(14347),m=t(77417),p=t(80284),g=t(22796),y=t(83789),b=t(24237),h=t(78215),_=t(34610),j=t(18944),v=t(2356),O=t(85893),I=function(n){var e=n.onFilter,t=(0,o.useState)([]),r=t[0],i=t[1];return(0,O.jsx)(h.Z,{children:(0,O.jsxs)(x,{md:3,children:[(0,O.jsx)(_.Z,{onToggle:function(n){return function(n,t){var o;o=t?[].concat((0,y.Z)(r),[n]):r.filter((function(e){return e!==n})),e({bookable:o.includes("bookable")?"yes":null}),i(o)}("bookable",n)},size:"sm"}),(0,O.jsx)(g.Z,{marginLeft:"sm"}),(0,O.jsx)(j.Z,{size:"sm",children:"Show only bookable items"})]})})},x=(0,b.ZP)(v.Z).withConfig({displayName:"customFilters__StyledColumn",componentId:"sc-1wqxvby-0"})(["align-items:center;display:flex;"]),w=t(60683),Z=t(25610),$=t(53444),P=t(81185),A=t(76589),S=t(49705),k=t(42160),U=t(29444),C=t(91126),D=t(1323);function q(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function E(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?q(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var F=function(n){var e=n.filters,t=n.formData,r=n.customFilters,y=(n.showActionButton,n.rowDetailsInNewPage),b=n.sublocation,h=(0,D.x)().hasRole,_=h("admin")?a.tG:a.Al,j=(0,o.useContext)(c.Z),v=(0,o.useState)(null),x=v[0],q=v[1],F=(0,S.x)({filters:e}),N=F.initialData,L=F.ref,T=(0,s.a)(_,{skip:!e.categoryId&&b,variables:(0,k.Z)(N)}),B=T.data,z=(B=void 0===B?{assets:[],meta:{aggregate:{totalCount:0}}}:B).assets,R=B.meta,M=T.loading,G=T.refetch,J=j.close,V=function(n){n.stopPropagation(),b&&!e.categoryId?j.show({content:(0,O.jsx)(u.Z,{content:"You should create a sublocation of assetCategories ",context:"warning"}),title:"Add sublocation",submit:!1}):j.show({content:(0,O.jsx)(w.R,{data:t,disableSelects:!!t,onSuccess:J,sublocation:b,categoryIdSublocation:null===e||void 0===e?void 0:e.categoryId,initialData:N}),title:b?"Add sublocation":"Add asset"})},X=function(n){var e=n.handleBookingCanvas,t=n.handleEditCanvas,r=n.handleEditLocation,o=n.hasRole,i=n.locationId;return[{hidden:!0},{hidden:!0},{hidden:!0},{text:"Name"},{text:"Category"},{hidden:i,formatter:(0,U.Z)("/dashboard/properties/view","locationId","location"),text:"Location"},{hidden:i,formatter:(0,U.Z)("/dashboard/customers/view","customerId","customer"),text:"Customer"},{sortable:!0,sortName:"createdAt",text:"Created"},{formatter:C.Z,hidden:!o("admin"),formatterData:function(n){return[{context:"secondary",icon:["fas","edit"],onClick:t,tooltip:"Edit Asset"},{context:"secondary",disabled:"yes"!==n.data.bookable,icon:["fas","plus"],onClick:e,tooltip:"Make a booking"},{context:"primary",icon:["fas","map-marker-alt"],onClick:r,tooltip:"Edit Location",hidden:!0}]},text:"Actions"}]}({handleBookingCanvas:function(n,t){n.stopPropagation(),j.show({content:(0,O.jsx)(Z.D,{assetId:t.data.id,locationId:e.locationId,onSuccess:J}),title:"Make a Booking"})},handleEditCanvas:function(n,t){n.stopPropagation();var r=E(E({},t.data),{},{assetCategory:t.data.category});j.show({content:(0,O.jsx)(w.R,{categoryIdSublocation:null===e||void 0===e?void 0:e.categoryId,data:r,id:r.id,onSuccess:J,sublocation:b,initialData:N}),title:b?"Edit sublocation":"Edit asset"})},handleEditLocation:function(n,e){n.stopPropagation(),j.show({content:(0,O.jsx)($._,{data:e.data,id:e.data.id,locationId:e.locationId,onSuccess:J,name:e.name}),title:"Edit location"})},hasRole:h,locationId:e.locationId}),Y=function(){return(0,O.jsx)(d.Z,{children:(0,O.jsx)(f.Z,{context:"secondary",onClick:V,size:"sm",children:b?"Create sublocations ":"Create Asset"})})};return(0,O.jsx)(O.Fragment,{children:x&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(d.Z,{align:"flex-end",children:(0,O.jsx)(f.Z,{context:"secondary",content:"Back To Table",onClick:function(){q(null)},size:"sm"})}),(0,O.jsx)(m.Z,{size:"sm"}),(0,O.jsx)(A.K,{assetId:x})]})||(0,O.jsxs)(p.Z,{dataSet:{"data-cy":"assets"},open:!0,title:b?"Sublocations":"Assets",toolbar:h("admin")&&(0,O.jsx)(Y,{}),children:[r&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(I,{onFilter:function(n){G((0,k.Z)(E(E({},N),n)))}}),(0,O.jsx)(g.Z,{})]}),(0,O.jsx)(P.t,{columns:X,loading:M,meta:R,ref:L,refetch:G,rowClick:function(n){y?i.default.push("".concat("/dashboard/assets/","view?id=").concat(n.data.id)):q(n.data.id)},rows:z.map((function(n){var e,t,r;return{data:n,locationId:null===(e=n.location)||void 0===e?void 0:e.id,customerId:null===(t=n.customer)||void 0===t?void 0:t.id,name:n.name,cat:null===(r=n.category)||void 0===r?void 0:r.name,location:n.location.name,customer:n.customer.name,createdAt:(0,l.Z)(n.createdAt),actions:""}}))})]})})};F.defaultProps={rowDetailsInNewPage:!0,showActionButton:!0,sublocation:!1}},27834:function(n,e,t){"use strict";t.d(e,{I4:function(){return v},AX:function(){return O},fo:function(){return I},JA:function(){return x},WF:function(){return w},Px:function(){return Z},a8:function(){return $},r1:function(){return P},MT:function(){return A},nE:function(){return S},nh:function(){return k},$E:function(){return U},uz:function(){return C},ge:function(){return D},ZA:function(){return q},tW:function(){return E}});var r,o,i,s,a,c,u,l,d,f,m,p,g,y,b,h,_=t(52209),j=t(54397),v=(0,j.Ps)(r||(r=(0,_.Z)(["\n  mutation InsertAccountUser($objects: [Account_User_insert_input!]!) {\n    insert_Account_User(objects: $objects) {\n      returning {\n        id\n      }\n    }\n  }\n"]))),O=(0,j.Ps)(o||(o=(0,_.Z)(["\n  mutation UpdateUser(\n    $id: Int!\n    $accountUserId: Int!\n    $accountUserChanges: Account_User_set_input\n    $changes: User_set_input\n    $updateAccountUser: Boolean!\n  ) {\n    update_Account_User_by_pk(pk_columns: { id: $accountUserId }, _set: $accountUserChanges)\n      @include(if: $updateAccountUser) {\n      id\n    }\n    update_User_by_pk(pk_columns: { id: $id }, _set: $changes) {\n      id\n    }\n  }\n"]))),I=(0,j.Ps)(i||(i=(0,_.Z)(["\n  query GetUsers(\n    $accountId: Int\n    $accountType: String\n    $date: timestamptz\n    $limit: Int\n    $offset: Int\n    $q: String\n    $orderBy: User_order_by!\n    $status: String\n  ) {\n    users: User(\n      limit: $limit\n      offset: $offset\n      where: {\n        Account_Users: { Account: { id: { _eq: $accountId }, type: { _eq: $accountType } } }\n        createdAt: { _eq: $date }\n        _or: [\n          { email: { _ilike: $q } }\n          { nameFirst: { _ilike: $q } }\n          { nameLast: { _ilike: $q } }\n        ]\n        status: { _eq: $status }\n      }\n      order_by: [$orderBy]\n    ) {\n      id\n      name: nameFirst\n      nameFirst\n      nameLast\n      phone\n      status\n      email\n      createdAt\n      meta\n      accounts: Account_Users {\n        id\n        role\n        position\n        isContact\n        status\n        account: Account {\n          id\n          name\n          type\n        }\n        userLocations: User_Account_Locations {\n          accountLocationId\n        }\n      }\n    }\n    meta: User_aggregate(\n      where: {\n        Account_Users: { Account: { id: { _eq: $accountId }, type: { _eq: $accountType } } }\n        createdAt: { _eq: $date }\n        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]\n        status: { _eq: $status }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n"]))),x=(0,j.Ps)(s||(s=(0,_.Z)(["\n  query GetUser($id: Int!) {\n    user: User_by_pk(id: $id) {\n      id\n      fullName\n      name: nameFirst\n      nameFirst\n      nameLast\n      phone\n      status\n      email\n      createdAt\n      meta\n      media: Media {\n        id\n        medium: Medium {\n          id\n          category\n          filename\n          meta\n          type\n        }\n      }\n      accounts: Account_Users {\n        id\n        role\n        position\n        isContact\n        status\n        account: Account {\n          id\n          name\n          type\n        }\n      }\n    }\n  }\n"]))),w=(0,j.Ps)(a||(a=(0,_.Z)(["\n  query CheckDuplicateEmail($email: String!) {\n    users: User_public(where: { email: { _eq: $email } }) {\n      id\n      nameFirst\n      nameLast\n      email\n      phone\n    }\n  }\n"]))),Z=(0,j.Ps)(c||(c=(0,_.Z)(["\n  fragment UserFields on User {\n    id\n    email\n    nameFirst\n    nameLast\n    fullName\n    phone\n    status\n  }\n"]))),$=(0,j.Ps)(u||(u=(0,_.Z)(["\n  mutation SendGoogleAuthCode($code: String!, $id: Int!, $type: String!) {\n    createGoogleToken(code: $code, id: $id, type: $type) {\n      success\n      tokens\n      error\n    }\n  }\n"]))),P=(0,j.Ps)(l||(l=(0,_.Z)(["\n  mutation GenerateMSURL($type: String!, $id: Int!) {\n    genenrateMSURL(id: $id, type: $type) {\n      url\n    }\n  }\n"]))),A=(0,j.Ps)(d||(d=(0,_.Z)(["\n  mutation signoutMS($id: Int!, $type: String!, $email: String!) {\n    signoutMS(id: $id, type: $type, email: $email) {\n      error\n      msId\n      success\n    }\n  }\n"]))),S=(0,j.Ps)(f||(f=(0,_.Z)(["\n  query getAccountMeta($id: Int!) {\n    account: Account_by_pk(id: $id) {\n      meta\n    }\n  }\n"]))),k=(0,j.Ps)(m||(m=(0,_.Z)(["\n  query user($id: Int!) {\n    user: User_by_pk(id: $id) {\n      meta\n    }\n  }\n"]))),U=(0,j.Ps)(p||(p=(0,_.Z)(["\n  mutation updateAccount($accountId: Int!, $set: Account_set_input!) {\n    update_Account_by_pk(pk_columns: { id: $accountId }, _set: $set) {\n      id\n    }\n  }\n"]))),C=(0,j.Ps)(g||(g=(0,_.Z)(["\n  mutation updateUserMeta($userId: Int!, $meta: jsonb!) {\n    update_User_by_pk(pk_columns: { id: $userId }, _set: { meta: $meta }) {\n      id\n      meta\n    }\n  }\n"]))),D=(0,j.Ps)(y||(y=(0,_.Z)(['\n  query userDevices($accountId: Int!) {\n    users: User(\n      where: {\n        Account_Users: { accountId: { _eq: $accountId }, status: { _eq: "active" } }\n        UserDevices: { status: { _eq: "active" } }\n        status: { _eq: "active" }\n      }\n    ) {\n      id\n      fullName\n      devices: UserDevices(\n        order_by: { updatedAt: desc_nulls_last }\n        where: { status: { _eq: "active" } }\n        limit: 1\n      ) {\n        id\n        playerId\n      }\n    }\n  }\n']))),q=(0,j.Ps)(b||(b=(0,_.Z)(['\n  query GetAccountLocations($accountId: Int, $limit: Int, $offset: Int) {\n    location: Location(\n      offset: $offset\n      limit: $limit\n      where: {\n        Account_Locations: {\n          accountId: { _eq: $accountId }\n          Account: { type: { _eq: "customer" } }\n        }\n      }\n    ) {\n      id\n      name\n      accountLocations: Account_Locations {\n        id\n      }\n      addresses: Addresses(where: { entity: { _eq: "Location" }, registered: { _eq: true } }) {\n        id\n        status\n        address: Address {\n          id\n          name\n          addressLine1\n          postCode\n        }\n      }\n    }\n    meta: Location_aggregate(\n      where: {\n        Account_Locations: {\n          accountId: { _eq: $accountId }\n          Account: { type: { _eq: "customer" } }\n        }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n']))),E=(0,j.Ps)(h||(h=(0,_.Z)(["\n  mutation InsertUserAccountLocations(\n    $accountUserId: Int!\n    $objects: [User_Account_Location_insert_input!]!\n  ) {\n    delete_User_Account_Location(where: { accountUserId: { _eq: $accountUserId } }) {\n      affected_rows\n    }\n    insert_User_Account_Location(objects: $objects) {\n      affected_rows\n      returning {\n        id\n      }\n    }\n  }\n"])))},70316:function(n,e,t){"use strict";t.d(e,{J:function(){return P}});var r=t(92809),o=t(80318),i=t(10219),s=t(11163),a=t(67294),c=t(78215),u=t(2356),l=t(42283),d=t(97202),f=t(80284),m=t(65375),p=t(10973),g=t(14347),y=t(66805),b=t(69119),h=t(23855),_=t(83894);function j(n,e,t){var r=(0,a.useState)((function(){if(JSON.parse(window.sessionStorage.getItem(n))&&!Object.values(JSON.parse(window.sessionStorage[n])).includes(t))return e;try{var r=JSON.parse(window.sessionStorage.getItem(n));return r&&(r.startDate=r.startDate?(0,b.Z)((0,h.Z)(r.startDate)):null,r.endDate=r.endDate?(0,_.Z)((0,h.Z)(r.endDate)):null),r||e}catch(o){return console.log(o),e}})),o=r[0],i=r[1];return[o,function(e){try{var t=e instanceof Function?e(o):e;i(t),window.sessionStorage.setItem(n,JSON.stringify(t))}catch(r){console.log(r)}}]}var v=t(85893);function O(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function I(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?O(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var x=function(n){var e=n.initialValues,t=n.renderFilters,r=n.setFilters,i=n.lastQuery,s=n.filters,b=e.filterType,h=j("form_data",e,b),_=(0,o.Z)(h,2),O=_[0],x=_[1],w=(0,l.cI)({defaultValues:O||e}),Z=w.control,$=w.errors,P=w.handleSubmit,A=w.register,S=w.reset,k=w.watch,U=w.setValue,C=I(I({},k()),{},{filterType:b});(0,a.useEffect)((function(){S(C)}),[S]),(0,a.useEffect)((function(){x(C)}),[s]);var D=function(n){var t=n.query;if(t!==i){var o={q:"%".concat(t,"%")||0},s=/^\d+$/.test(t);"id"in e&&(o.id=s?Number(t):null),"meta"in e&&(o.meta=s?{invoiceNumbers:[t]}:null),"jobNumber"in e&&(o.jobNumber=s?String(t):null,o.invoiceNumber=s?Number(t):null),(o.id||o.meta||o.jobNumber)&&(o.q=null),r((function(n){return I(I({},n),o)}))}};return(0,v.jsx)(d.Z,{handleSubmit:P(D),children:(0,v.jsxs)(f.Z,{title:"Filters",children:[(0,v.jsxs)(c.Z,{children:[(0,v.jsx)(u.Z,{sm:12,lg:12,children:(0,v.jsx)(m.Z,{label:"",children:(0,v.jsx)(p.Z,{errors:$,label:"Search",name:"email",placeholder:"Search...",prependSearchIcon:!0,register:A,type:"search"})})}),(0,v.jsx)(u.Z,{sm:12,lg:12,children:t({control:Z,errors:$,initialValues:e,register:A,setFilters:r,watch:k,setValue:U,reset:S})})]}),(0,v.jsx)(y.H,{content:"Search",context:"secondary",handleClick:D,type:"submit",children:(0,v.jsx)(g.Z,{content:"Clear",context:"danger",onClick:function(n){Object.keys(e).map((function(n){return U(n,null)})),r(e),S(e),D("")},size:"sm"})})]})})},w=["FiltersComp","initialFilters","TableComp"];function Z(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function $(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var P=function(n){var e=n.FiltersComp,t=n.initialFilters,r=n.TableComp,l=(0,i.Z)(n,w),d=j("filters",t,t.filterType),f=(0,o.Z)(d,2),m=f[0],p=f[1],g=(0,a.useState)(m||t),y=g[0],b=g[1],h=(0,s.useRouter)().query.show;return(0,a.useEffect)((function(){p(y)}),[y]),(0,v.jsx)(c.Z,{children:(0,v.jsxs)(u.Z,{sm:12,lg:12,children:[(0,v.jsx)(x,{initialValues:t,renderFilters:function(n){return(0,v.jsx)(e,$($($({},n),l),{},{show:h}))},setFilters:b,filters:y}),(0,v.jsx)(r,$({filters:y,initialFilters:t},l))]})})}},30154:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return h}});var r=t(66918),o=t(70316),i=t(96692),s=t(92809),a=t(67294),c=t(95146),u=t(72197),l=t(78215),d=t(2356),f=t(85893);function m(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){(0,s.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var g=function(n){var e=n.control,t=n.errors,r=n.register,o=n.setFilters,i=n.watch,s={control:e,errors:t,register:r},m=i("accountId"),g=i("locationId"),y=i("categoryId");return(0,a.useEffect)((function(){o((function(n){return p(p({},n),{},{accountId:(null===m||void 0===m?void 0:m.value)||null})}))}),[m]),(0,a.useEffect)((function(){o((function(n){return p(p({},n),{},{locationId:(null===g||void 0===g?void 0:g.value)||null})}))}),[g]),(0,a.useEffect)((function(){o((function(n){return p(p({},n),{},{categoryId:(null===y||void 0===y?void 0:y.value)||null})}))}),[y]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(l.Z,{children:[(0,f.jsx)(d.Z,{md:6,children:(0,f.jsx)(c.P,p(p({},s),{},{errors:p({},t),label:"",name:"accountId",placeholder:"Select customer",type:"customer"}))}),(0,f.jsx)(d.Z,{md:6,children:(0,f.jsx)(c.P,p(p({},s),{},{errors:p({},t),label:"",name:"locationId",placeholder:"Select Location",type:"property"}))})]}),(0,f.jsx)(l.Z,{children:(0,f.jsx)(d.Z,{md:6,children:(0,f.jsx)(u.l,p(p({},s),{},{label:"",name:"categoryId",type:"assetCategory"}))})})]})},y={accountId:null,categoryId:null,excludeCategoryId:0,locationId:null,q:null,filterType:"assets_table"},b=function(){return(0,f.jsx)(o.J,{FiltersComp:g,initialFilters:y,TableComp:i.E})},h=function(){return(0,f.jsx)(r.Z,{pageHeading:{heading:"Assets"},View:(0,f.jsx)(b,{})})}},70809:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/assets",function(){return t(30154)}])}},function(n){n.O(0,[9774,367,6898,284,4195,5312,7287,2002,3086,7134,3486,9082,3515,4712,1265,6996,9666,4177,7431,5597,4829,2148,5536,786,899,3016,9547,6589,2888,179],(function(){return e=70809,n(n.s=e);var e}));var e=n.O();_N_E=e}]);