"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[9838],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>p});var o=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=o.createContext({}),d=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},m=function(t){var e=d(t.components);return o.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),h=d(n),p=i,u=h["".concat(s,".").concat(p)]||h[p]||c[p]||a;return n?o.createElement(u,r(r({ref:e},m),{},{components:n})):o.createElement(u,r({ref:e},m))}));function p(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,r=new Array(a);r[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,r[1]=l;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},30346:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(87462),i=(n(67294),n(3905));const a={title:"Use HertzBeat Monitoring IoTDB",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"]},r=void 0,l={permalink:"/en/blog/2023/01/05/monitor-iotdb",editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-blog/2023-01-05-monitor-iotdb.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/2023-01-05-monitor-iotdb.md",title:"Use HertzBeat Monitoring IoTDB",description:"Use HertzBeat to monitor the Internet of Things database IoTDB, and it will be done in 5 minutes!",date:"2023-01-05T00:00:00.000Z",formattedDate:"January 5, 2023",tags:[{label:"opensource",permalink:"/en/blog/tags/opensource"},{label:"practice",permalink:"/en/blog/tags/practice"}],readingTime:4.64,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"Use HertzBeat Monitoring IoTDB",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"]},nextItem:{title:"HertzBeat v1.2.3\uff01Support Prometheus,ShenYu and IotDb",permalink:"/en/blog/2022/12/28/hertzbeat-v1.2.3"}},s={authorsImageUrls:[void 0]},d=[{value:"Use HertzBeat to monitor the Internet of Things database IoTDB, and it will be done in 5 minutes!",id:"use-hertzbeat-to-monitor-the-internet-of-things-database-iotdb-and-it-will-be-done-in-5-minutes",level:2},{value:"Introduction to IoTDB",id:"introduction-to-iotdb",level:3},{value:"Introduction to HertzBeat",id:"introduction-to-hertzbeat",level:3},{value:"Get monitoring IoTDB in HertzBeat in 5 minutes",id:"get-monitoring-iotdb-in-hertzbeat-in-5-minutes",level:3},{value:"Prerequisites, you already have IoTDB environment and HertzBeat environment.",id:"prerequisites-you-already-have-iotdb-environment-and-hertzbeat-environment",level:4},{value:"1. Enable the <code>metrics</code> function on the IoTDB side, which will provide interface data in the form of prometheus metrics.",id:"1-enable-the-metrics-function-on-the-iotdb-side-which-will-provide-interface-data-in-the-form-of-prometheus-metrics",level:4},{value:"2. Add IoTDB monitoring on the HertzBeat monitoring page",id:"2-add-iotdb-monitoring-on-the-hertzbeat-monitoring-page",level:4},{value:"3. Add IoTDB indicator threshold alarm in HertzBeat system",id:"3-add-iotdb-indicator-threshold-alarm-in-hertzbeat-system",level:4},{value:"Finished, now wait for the warning message to come. ding ding ding ding",id:"finished-now-wait-for-the-warning-message-to-come-ding-ding-ding-ding",level:3},{value:"Summary",id:"summary",level:2}],m={toc:d};function c(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,o.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"use-hertzbeat-to-monitor-the-internet-of-things-database-iotdb-and-it-will-be-done-in-5-minutes"},"Use HertzBeat to monitor the Internet of Things database IoTDB, and it will be done in 5 minutes!"),(0,i.kt)("h3",{id:"introduction-to-iotdb"},"Introduction to IoTDB"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Apache IoTDB (Internet of Things Database) is a time-series database management system that can provide users with data collection, storage and analysis services.\nDue to its lightweight architecture, high performance and high availability, and seamless integration with Hadoop and Spark ecosystems, IoTDB meets the requirements of massive data storage, high-throughput data writing, and complex data query and analysis in the industrial IoT field. need.")),(0,i.kt)("h3",{id:"introduction-to-hertzbeat"},"Introduction to HertzBeat"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"HertzBeat is an open source, easy-to-use and friendly real-time monitoring system that does not require Agent and has powerful custom monitoring capabilities.\nSupports monitoring of application services, databases, operating systems, middleware, cloud native, etc., threshold alarms, and alarm notifications (email WeChat Dingding Feishu).\nHertzBeat's powerful customization, multi-type support, easy expansion, and low coupling hope to help developers and small and medium teams quickly build their own monitoring systems.")),(0,i.kt)("h3",{id:"get-monitoring-iotdb-in-hertzbeat-in-5-minutes"},"Get monitoring IoTDB in HertzBeat in 5 minutes"),(0,i.kt)("h4",{id:"prerequisites-you-already-have-iotdb-environment-and-hertzbeat-environment"},"Prerequisites, you already have IoTDB environment and HertzBeat environment."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"IoTDB ",(0,i.kt)("a",{parentName:"li",href:"https://iotdb.apache.org/UserGuide/V0.13.x/QuickStart/QuickStart.html"},"deployment and installation documentation")),(0,i.kt)("li",{parentName:"ul"},"HertzBeat ",(0,i.kt)("a",{parentName:"li",href:"https://hertzbeat.com/docs/start/docker-deploy"},"deployment installation documentation"))),(0,i.kt)("h4",{id:"1-enable-the-metrics-function-on-the-iotdb-side-which-will-provide-interface-data-in-the-form-of-prometheus-metrics"},"1. Enable the ",(0,i.kt)("inlineCode",{parentName:"h4"},"metrics")," function on the IoTDB side, which will provide interface data in the form of prometheus metrics."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The metric collection is disabled by default, you need to modify the parameters in ",(0,i.kt)("inlineCode",{parentName:"li"},"conf/iotdb-metric.yml")," first, then restart the server")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Whether to start the monitoring module, the default is false\nenableMetric: true\n\n# Data provision method, externally provide metrics data through jmx and prometheus protocol, optional parameters: [JMX, PROMETHEUS, IOTDB], IOTDB is closed by default.\nmetricReporterList:\n   - JMX\n   - PROMETHEUS\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Restart IoTDB, open a browser or use curl to access http://ip:9091/metrics, and you can see the metric data.")),(0,i.kt)("h4",{id:"2-add-iotdb-monitoring-on-the-hertzbeat-monitoring-page"},"2. Add IoTDB monitoring on the HertzBeat monitoring page"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click Add IoTDB Monitoring")),(0,i.kt)("p",null,"Path: Menu -> Database Monitoring -> IoTDB Monitoring -> Add IoTDB Monitoring"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"hertzbeat",src:n(93557).Z,width:"4064",height:"2166"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Configure the parameters required for monitoring IoTDB")),(0,i.kt)("p",null,"Fill in the IoTDB ",(0,i.kt)("strong",{parentName:"p"},"service IP")," and ",(0,i.kt)("strong",{parentName:"p"},"monitoring port")," (default 9091) on the monitoring page, and finally click OK to add.\nFor other parameters such as ",(0,i.kt)("strong",{parentName:"p"},"collection interval"),", ",(0,i.kt)("strong",{parentName:"p"},"timeout period"),", etc., please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://hertzbeat.com/docs/help/iotdb/"},"Help Documentation")," ",(0,i.kt)("a",{parentName:"p",href:"https://hertzbeat.com/docs/help"},"https://hertzbeat.com/docs/help")," /iotdb/"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"hertzbeat",src:n(4300).Z,width:"4064",height:"2166"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Complete \u2705, now we have added the monitoring of IoTDB, check the monitoring list to see our added items.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"hertzbeat",src:n(58573).Z,width:"4064",height:"2166"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Operation"),"->",(0,i.kt)("strong",{parentName:"li"},"Monitoring Details Icon")," of the monitoring list item to browse the real-time monitoring indicator data of IoTDB.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"hertzbeat",src:n(30603).Z,width:"4064",height:"2166"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Monitoring History Details TAB")," to browse IoTDB's historical monitoring indicator data chart\ud83d\udcc8.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"hertzbeat",src:n(82303).Z,width:"4064",height:"2166"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Complete DONE! Through the above steps, it is actually two steps to sum up")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Enable ",(0,i.kt)("inlineCode",{parentName:"strong"},"metrics")," function on IoTDB in one step")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Another step is to configure the IP port on the HertzBeat monitoring page to add monitoring"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In this way, we have completed the monitoring of IoTDB. We can view the monitoring details and indicators at any time to observe its service status, but people cannot always watch it. When there is always a time to rest, monitoring is often accompanied by alarms. When monitoring When the indicators are abnormal, the monitoring system needs to be able to notify the person in charge in time")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Next, we will teach you step by step to configure the threshold alarm notification in the HertzBeat system")),(0,i.kt)("h4",{id:"3-add-iotdb-indicator-threshold-alarm-in-hertzbeat-system"},"3. Add IoTDB indicator threshold alarm in HertzBeat system"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure a threshold alarm for an important indicator")),(0,i.kt)("p",null,"Path: Menu -> Alarm Threshold -> Add Threshold"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select the configured indicator object. IotDB monitors many indicators, one of which is related to the status of the node ",(0,i.kt)("inlineCode",{parentName:"li"},"cluster_node_status")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"status")," (node status, 1=online 2=offline)."),(0,i.kt)("li",{parentName:"ul"},"Here we configure to send an alarm when the indicator ",(0,i.kt)("inlineCode",{parentName:"li"},"status==2"),", the alarm level is ",(0,i.kt)("strong",{parentName:"li"},"Critical Alarm"),", which is triggered once, as shown in the figure below.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"hertzbeat",src:n(95408).Z,width:"4064",height:"2166"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Add message notification recipients")),(0,i.kt)("p",null,"Path: Menu -> Alarm Notification -> Alarm Recipient -> Add New Recipient"),(0,i.kt)("p",null,"Message notification methods support ",(0,i.kt)("strong",{parentName:"p"},"email, DingTalk, WeChat Work, Feishu, WebHook, SMS"),", etc. Here we take the commonly used DingTalk as an example."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Refer to this ",(0,i.kt)("a",{parentName:"li",href:"https://hertzbeat.com/docs/help/alert_dingtalk"},"Help Documentation")," ",(0,i.kt)("a",{parentName:"li",href:"https://hertzbeat.com/docs/help/alert_dingtalk"},"https://hertzbeat.com/docs/help/alert_dingtalk")," to configure the robot on DingTalk and set the security custom keyword ",(0,i.kt)("inlineCode",{parentName:"li"},"HertzBeat "),", get the corresponding ",(0,i.kt)("inlineCode",{parentName:"li"},"access_token")," value."),(0,i.kt)("li",{parentName:"ul"},"Configure the receiver parameters in HertzBeat as follows.")),(0,i.kt)("p",null,"\u3010Alarm Notification\u3011->\u3010New Recipient\u3011->\u3010Select DingTalk Robot Notification Method\u3011->\u3010Set DingTalk Robot ACCESS_TOKEN\u3011->\u3010OK\u3011"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"hertzbeat",src:n(41711).Z,width:"3436",height:"890"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Configure the associated alarm notification strategy \u26a0\ufe0f ","[Add notification strategy]"," -> ","[Associate the recipient just set]"," -> ","[OK]")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"hertzbeat",src:n(60315).Z,width:"3436",height:"1088"})),(0,i.kt)("h3",{id:"finished-now-wait-for-the-warning-message-to-come-ding-ding-ding-ding"},"Finished, now wait for the warning message to come. ding ding ding ding"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[HertzBeat warning notification]\nAlarm target object: iotdb.cluster_node_status.status\nAffiliated monitoring ID: 205540620349696\nBelonging monitoring name: IOTDB_localhost\nAlarm level: critical alarm\nAlarm trigger time: 2023-01-05 22:17:06\nContent details: The status of IOTDB node 127.0.0.1 is monitored as OFFLINE, please deal with it in time.\n")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This practical article took us to experience that if HertzBeat is used to monitor the IoTDB database indicator data, we can find that HertzBeat, which integrates monitoring-alarm-notification, is more convenient in operation and use, and IoTDB can be included in the monitoring with a simple click on the page , it is no longer necessary to deploy multiple components and write multiple YML configuration files with thresholds."),(0,i.kt)("p",null,"IoTDB Github: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/iotdb"},"https://github.com/apache/iotdb"),"\nHertzBeat Github: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Welcome to learn about using Star Support! ")),(0,i.kt)("p",null,"Only one docker command is needed to install and experience heartbeat:\n",(0,i.kt)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 --name hertzbeat tancloud/hertzbeat")),(0,i.kt)("p",null,"Note \u26a0\ufe0fHertzBeat v1.2.3 version supports IoTDB v0.12 v0.13. Since its v1.0 has just been released, all indicators of this version are not yet compatible."))}c.isMDXComponent=!0},41711:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/alert-notice-1-3bad6e06e2c870849bc656a2092d59ac.png"},60315:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/alert-notice-2-8025b90624873463fe0a3f75bd7efafa.png"},93557:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/monitor-iotdb-1-518ff666fb4994d0961f999e4185600f.png"},4300:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/monitor-iotdb-2-243561382bbdf6fec6bd9133bdc510a3.png"},58573:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/monitor-iotdb-3-83c02b3121bbcac706c039c964eb3086.png"},30603:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/monitor-iotdb-4-20ca3228c2ff616977e1b266617fc33e.png"},82303:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/monitor-iotdb-5-eedef9c331cdd660090a0d078c851a83.png"},95408:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/monitor-iotdb-6-8050c598b8bac37904e0f0b63d309f95.png"}}]);