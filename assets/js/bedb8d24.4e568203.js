"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[35656],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(r),d=o,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||a;return r?n.createElement(k,i(i({ref:t},m),{},{components:r})):n.createElement(k,i({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},69436:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={title:"Open source real-time monitoring tool HertzBeat v1.3.0 released, online customization is coming",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["open source monitoring system","alerting system","Linux monitoring"]},i=void 0,l={permalink:"/blog/2023/03/15/hertzbeat-v1.3.0",editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/blog/2023-03-15-hertzbeat-v1.3.0.md",source:"@site/blog/2023-03-15-hertzbeat-v1.3.0.md",title:"Open source real-time monitoring tool HertzBeat v1.3.0 released, online customization is coming",description:"Website: hertzbeat.com | tancloud.cn",date:"2023-03-15T00:00:00.000Z",formattedDate:"March 15, 2023",tags:[{label:"opensource",permalink:"/blog/tags/opensource"},{label:"practice",permalink:"/blog/tags/practice"}],readingTime:2.425,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"Open source real-time monitoring tool HertzBeat v1.3.0 released, online customization is coming",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"],keywords:["open source monitoring system","alerting system","Linux monitoring"]},prevItem:{title:"Monitoring SpringBoot2 Metrics with HertzBeat in 5 minutes",permalink:"/blog/2023/03/22/monitor-springboot2"},nextItem:{title:"Monitoring Linux Operating Systems Using Open Source Real-Time Monitoring HertzBeat",permalink:"/blog/2023/02/15/monitor-linux"}},p={authorsImageUrls:[void 0]},s=[{value:"What is HertzBeat?",id:"what-is-hertzbeat",level:3},{value:"v1.3.0 release is here",id:"v130-release-is-here",level:3},{value:"\u26c4 Supported",id:"-supported",level:2}],m={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Website: hertzbeat.com | tancloud.cn"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a9629ef5bb6e486cacddb899f1495c6e~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,o.kt)("h3",{id:"what-is-hertzbeat"},"What is HertzBeat?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"HertzBeat is an open source real-time monitoring and alerting tool with powerful custom monitoring capabilities and no Agent required.",(0,o.kt)("br",{parentName:"p"}),"\n","It supports monitoring of application services, database, operating system, middleware, cloud native, network and other metrics, and threshold alert notification in one step.",(0,o.kt)("br",{parentName:"p"}),"\n","Support more liberal threshold rules (calculation expressions), ",(0,o.kt)("inlineCode",{parentName:"p"},"email")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Discord")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Slack")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Telegram")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Pegging")," ",(0,o.kt)("inlineCode",{parentName:"p"},"WeChat")," ",(0,o.kt)("inlineCode",{parentName:"p"},"FlyBook")," ",(0,o.kt)("inlineCode",{parentName:"p"},"SMS")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Webhook")," and other ways to timely delivery.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We have made the protocol specifications such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Http,Jmx,Ssh,Snmp,Jdbc")," configurable so that you can simply configure ",(0,o.kt)("inlineCode",{parentName:"p"},"YML")," to use these protocols to customize the collection of any metrics you want.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Do you believe that you can immediately adapt a new monitoring type such as K8s or Docker just by defining YML?")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4236e748f5ac4352b7cf4bb65ccf97aa~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Github: ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Gitee: ",(0,o.kt)("a",{parentName:"strong",href:"https://gitee.com/dromara/hertzbeat"},"https://gitee.com/dromara/hertzbeat"))),(0,o.kt)("h3",{id:"v130-release-is-here"},"v1.3.0 release is here"),(0,o.kt)("p",null,"After a month of iterations, HertzBeat v1.3.0 was officially released last weekend, ",(0,o.kt)("strong",{parentName:"p"},"Recommended upgrade"),"!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hertzbeat has powerful custom monitoring capabilities, all our supported monitoring types are mapped to a YML. This time we bring custom monitoring pagination, welcome to use and share your own monitoring type definition.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5c9dd3e28c54c72b49a7470012a0c36~tplv-k3u1fbpfcp-zoom-1.image",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"support for monitoring network switches"),".",(0,o.kt)("br",{parentName:"p"}),"\n","hertzbeat supported snmp protocol long time ago, windows monitoring is monitored by snmp protocol, this version we not only support more windows performance metrics, but also support snmp walk, adapt several common network switches monitoring, welcome to contribute more types and metrics to the community.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Support for monitoring redis clusters and more database metrics"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Community contributors have contributed extended metrics for redis clusters and multiple databases, enriching the performance metrics data.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Support iotdb1.0 storage, dependency-free mode"),(0,o.kt)("br",{parentName:"p"}),"\n","and more new features welcome to explore")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Fix several bugs, better documentation, refactored code."))),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Only one docker command is needed to install and experience heartbeat"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 --name hertzbeat tancloud/hertzbeat")),(0,o.kt)("p",null,"Thanks to the hertzbeat contributors for their contributions! \ud83d\udc4d\ud83d\udc4d\ud83d\udc4d"),(0,o.kt)("p",null,"We are in desperate need of contributors for various aspects of test cases, new application monitoring, documentation, etc. Contributors are very welcome to join."),(0,o.kt)("p",null,"Upgrade note \u26a0\ufe0f."),(0,o.kt)("p",null,"For users who previously used iotdb or tdengine to store metrics data, you need to modify application.yml to disable JPA storage ",(0,o.kt)("inlineCode",{parentName:"p"},"warehouse.store.jpa.enabled")," as follows:"),(0,o.kt)("p",null,"Modify ",(0,o.kt)("inlineCode",{parentName:"p"},"application.yml")," and set ",(0,o.kt)("inlineCode",{parentName:"p"},"warehouse.store.jpa.enabled")," parameter to false   "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"warehouse:\n  store:\n    jpa:\n      enabled: false\n")),(0,o.kt)("p",null,"Execute SQL script"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ALTER table hzb_monitor modify job_id bigint default null;\nCOMMIT;\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"-supported"},"\u26c4 Supported"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Site Monitor, Port Availability, Http Api, Ping Connectivity, Jvm, SiteMap Full Site, Ssl Certificate, SpringBoot, FTP Server"),(0,o.kt)("li",{parentName:"ul"},"Mysql, PostgreSQL, MariaDB, Redis, ElasticSearch, SqlServer, Oracle, MongoDB, Damon, OpenGauss, ClickHouse, IoTDB, Redis Cluster"),(0,o.kt)("li",{parentName:"ul"},"Linux, Ubuntu, CentOS, Windows"),(0,o.kt)("li",{parentName:"ul"},"Tomcat, Nacos, Zookeeper, RabbitMQ, Flink, Kafka, ShenYu, DynamicTp, Jetty, ActiveMQ"),(0,o.kt)("li",{parentName:"ul"},"Kubernetes, Docker"),(0,o.kt)("li",{parentName:"ul"},"Huawei Switch, HPE Switch, TP-LINK Switch, Cisco Switch"),(0,o.kt)("li",{parentName:"ul"},"and more for your custom monitoring."),(0,o.kt)("li",{parentName:"ul"},"Notifications support ",(0,o.kt)("inlineCode",{parentName:"li"},"Discord")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Slack")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Telegram")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Mail")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Pinning")," ",(0,o.kt)("inlineCode",{parentName:"li"},"WeChat")," ",(0,o.kt)("inlineCode",{parentName:"li"},"FlyBook")," ",(0,o.kt)("inlineCode",{parentName:"li"},"SMS")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Webhook"),".")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Github: ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat")),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Gitee: ",(0,o.kt)("a",{parentName:"strong",href:"https://gitee.com/dromara/hertzbeat"},"https://gitee.com/dromara/hertzbeat"))))}u.isMDXComponent=!0}}]);