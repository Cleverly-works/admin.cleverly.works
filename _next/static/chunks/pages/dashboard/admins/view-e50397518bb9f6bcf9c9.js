(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6889],{27834:function(n,e,t){"use strict";t.d(e,{I4:function(){return g},AX:function(){return q},fo:function(){return h},JA:function(){return k},WF:function(){return L},Px:function(){return b},a8:function(){return Z},r1:function(){return P},MT:function(){return w},nE:function(){return v},nh:function(){return j},$E:function(){return S},uz:function(){return C},ge:function(){return M},ZA:function(){return x},tW:function(){return F}});var s,i,c,a,u,r,o,d,_,m,$,l,p,f,y,I,A=t(52209),U=t(54397),g=(0,U.Ps)(s||(s=(0,A.Z)(["\n  mutation InsertAccountUser($objects: [Account_User_insert_input!]!) {\n    insert_Account_User(objects: $objects) {\n      returning {\n        id\n      }\n    }\n  }\n"]))),q=(0,U.Ps)(i||(i=(0,A.Z)(["\n  mutation UpdateUser(\n    $id: Int!\n    $accountUserId: Int!\n    $accountUserChanges: Account_User_set_input\n    $changes: User_set_input\n    $updateAccountUser: Boolean!\n  ) {\n    update_Account_User_by_pk(pk_columns: { id: $accountUserId }, _set: $accountUserChanges)\n      @include(if: $updateAccountUser) {\n      id\n    }\n    update_User_by_pk(pk_columns: { id: $id }, _set: $changes) {\n      id\n    }\n  }\n"]))),h=(0,U.Ps)(c||(c=(0,A.Z)(["\n  query GetUsers(\n    $accountId: Int\n    $accountType: String\n    $date: timestamptz\n    $limit: Int\n    $offset: Int\n    $q: String\n    $orderBy: User_order_by!\n    $status: String\n  ) {\n    users: User(\n      limit: $limit\n      offset: $offset\n      where: {\n        Account_Users: { Account: { id: { _eq: $accountId }, type: { _eq: $accountType } } }\n        createdAt: { _eq: $date }\n        _or: [\n          { email: { _ilike: $q } }\n          { nameFirst: { _ilike: $q } }\n          { nameLast: { _ilike: $q } }\n        ]\n        status: { _eq: $status }\n      }\n      order_by: [$orderBy]\n    ) {\n      id\n      name: nameFirst\n      nameFirst\n      nameLast\n      phone\n      status\n      email\n      createdAt\n      meta\n      accounts: Account_Users {\n        id\n        role\n        position\n        isContact\n        status\n        account: Account {\n          id\n          name\n          type\n        }\n        userLocations: User_Account_Locations {\n          accountLocationId\n        }\n      }\n    }\n    meta: User_aggregate(\n      where: {\n        Account_Users: { Account: { id: { _eq: $accountId }, type: { _eq: $accountType } } }\n        createdAt: { _eq: $date }\n        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]\n        status: { _eq: $status }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n"]))),k=(0,U.Ps)(a||(a=(0,A.Z)(["\n  query GetUser($id: Int!) {\n    user: User_by_pk(id: $id) {\n      id\n      fullName\n      name: nameFirst\n      nameFirst\n      nameLast\n      phone\n      status\n      email\n      createdAt\n      meta\n      media: Media {\n        id\n        medium: Medium {\n          id\n          category\n          filename\n          meta\n          type\n        }\n      }\n      accounts: Account_Users {\n        id\n        role\n        position\n        isContact\n        status\n        account: Account {\n          id\n          name\n          type\n        }\n      }\n    }\n  }\n"]))),L=(0,U.Ps)(u||(u=(0,A.Z)(["\n  query CheckDuplicateEmail($email: String!) {\n    users: User_public(where: { email: { _eq: $email } }) {\n      id\n      nameFirst\n      nameLast\n      email\n      phone\n    }\n  }\n"]))),b=(0,U.Ps)(r||(r=(0,A.Z)(["\n  fragment UserFields on User {\n    id\n    email\n    nameFirst\n    nameLast\n    fullName\n    phone\n    status\n  }\n"]))),Z=(0,U.Ps)(o||(o=(0,A.Z)(["\n  mutation SendGoogleAuthCode($code: String!, $id: Int!, $type: String!) {\n    createGoogleToken(code: $code, id: $id, type: $type) {\n      success\n      tokens\n      error\n    }\n  }\n"]))),P=(0,U.Ps)(d||(d=(0,A.Z)(["\n  mutation GenerateMSURL($type: String!, $id: Int!) {\n    genenrateMSURL(id: $id, type: $type) {\n      url\n    }\n  }\n"]))),w=(0,U.Ps)(_||(_=(0,A.Z)(["\n  mutation signoutMS($id: Int!, $type: String!, $email: String!) {\n    signoutMS(id: $id, type: $type, email: $email) {\n      error\n      msId\n      success\n    }\n  }\n"]))),v=(0,U.Ps)(m||(m=(0,A.Z)(["\n  query getAccountMeta($id: Int!) {\n    account: Account_by_pk(id: $id) {\n      meta\n    }\n  }\n"]))),j=(0,U.Ps)($||($=(0,A.Z)(["\n  query user($id: Int!) {\n    user: User_by_pk(id: $id) {\n      meta\n    }\n  }\n"]))),S=(0,U.Ps)(l||(l=(0,A.Z)(["\n  mutation updateAccount($accountId: Int!, $set: Account_set_input!) {\n    update_Account_by_pk(pk_columns: { id: $accountId }, _set: $set) {\n      id\n    }\n  }\n"]))),C=(0,U.Ps)(p||(p=(0,A.Z)(["\n  mutation updateUserMeta($userId: Int!, $meta: jsonb!) {\n    update_User_by_pk(pk_columns: { id: $userId }, _set: { meta: $meta }) {\n      id\n      meta\n    }\n  }\n"]))),M=(0,U.Ps)(f||(f=(0,A.Z)(['\n  query userDevices($accountId: Int!) {\n    users: User(\n      where: {\n        Account_Users: { accountId: { _eq: $accountId }, status: { _eq: "active" } }\n        UserDevices: { status: { _eq: "active" } }\n        status: { _eq: "active" }\n      }\n    ) {\n      id\n      fullName\n      devices: UserDevices(\n        order_by: { updatedAt: desc_nulls_last }\n        where: { status: { _eq: "active" } }\n        limit: 1\n      ) {\n        id\n        playerId\n      }\n    }\n  }\n']))),x=(0,U.Ps)(y||(y=(0,A.Z)(['\n  query GetAccountLocations($accountId: Int, $limit: Int, $offset: Int) {\n    location: Location(\n      offset: $offset\n      limit: $limit\n      where: {\n        Account_Locations: {\n          accountId: { _eq: $accountId }\n          Account: { type: { _eq: "customer" } }\n        }\n      }\n    ) {\n      id\n      name\n      accountLocations: Account_Locations {\n        id\n      }\n      addresses: Addresses(where: { entity: { _eq: "Location" }, registered: { _eq: true } }) {\n        id\n        status\n        address: Address {\n          id\n          name\n          addressLine1\n          postCode\n        }\n      }\n    }\n    meta: Location_aggregate(\n      where: {\n        Account_Locations: {\n          accountId: { _eq: $accountId }\n          Account: { type: { _eq: "customer" } }\n        }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n']))),F=(0,U.Ps)(I||(I=(0,A.Z)(["\n  mutation InsertUserAccountLocations(\n    $accountUserId: Int!\n    $objects: [User_Account_Location_insert_input!]!\n  ) {\n    delete_User_Account_Location(where: { accountUserId: { _eq: $accountUserId } }) {\n      affected_rows\n    }\n    insert_User_Account_Location(objects: $objects) {\n      affected_rows\n      returning {\n        id\n      }\n    }\n  }\n"])))},45740:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return I}});var s,i=t(66918),c=t(11163),a=t(93633),u=t(52209),r=(0,t(54397).Ps)(s||(s=(0,u.Z)(["\n  query GetAdmin($id: Int!) {\n    admin: Account_by_pk(id: $id) {\n      id\n      name\n      type\n      media: Media {\n        id\n        medium: Medium {\n          id\n          category\n          filename\n          meta\n          type\n        }\n      }\n    }\n  }\n"]))),o=t(78215),d=t(2356),_=t(89331),m=t(28323),$=t(77567),l=t(1323),p=t(81167),f=t(85893),y=function(){var n=(0,c.useRouter)().query,e=(0,l.x)(),t=e.hasRole,s=e.user,i=null;t("superadmin")&&n.id?i=parseInt(n.id):t(["admin","superadmin"])&&s.accountId&&(i=s.accountId);var u=(0,a.a)(r,{skip:!i,variables:{id:i}}),y=u.loading,I=u.data,A=(I=void 0===I?{admin:{}}:I).admin;return y||!i?null:(0,f.jsx)(o.Z,{children:(0,f.jsxs)(d.Z,{md:12,children:[(0,f.jsx)(o.Z,{children:(0,f.jsx)(d.Z,{md:4,children:(0,f.jsx)($.g,{avatar:(0,m.Q)(A.media),entity:A,entityName:"Account",icons:t(["admin","superadmin"])?(0,_.Y)(A):[]})})}),(0,f.jsx)(p.P,{accountType:"admin",filters:{accountId:i}})]})})},I=function(){return(0,f.jsx)(i.Z,{View:(0,f.jsx)(y,{})})}},45558:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/admins/view",function(){return t(45740)}])}},function(n){n.O(0,[367,284,4195,5312,7287,2002,3086,7134,3486,9082,3515,4712,1265,6996,9666,4177,8158,734,5146,899,3016,6433,9774,2888,179],(function(){return e=45558,n(n.s=e);var e}));var e=n.O();_N_E=e}]);