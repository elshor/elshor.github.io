(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"0636":function(t,e,i){"use strict";var s=i("d9b4"),a=i.n(s);a.a},"23d3":function(t,e,i){},2648:function(t,e,i){},"44a9":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.minimized?t._e():i("q-page",[i("q-page-sticky",{attrs:{expand:"",position:"top"}},[i("q-toolbar",{staticClass:"text-white bg-primary"},[i("q-toolbar-title",{class:["title",t.frame?"q-ml-xl":""],staticStyle:{"max-height":"32px"},attrs:{shrink:""}},[i("q-input",{staticStyle:{"max-height":"32px"},attrs:{"input-class":"text-white text-lg q-py-none",placeholder:"Enter name of script",borderless:""},model:{value:t.doc.name,callback:function(e){t.$set(t.doc,"name",e)},expression:"doc.name"}})],1),t.frame&&t.isSignedIn?i("q-btn",{attrs:{icon:"arrow_drop_down",id:"open",size:"md",flat:"",dense:"","text-color":"accent"}},[i("q-tooltip",[t._v("Open an existing script")]),i("q-menu",{attrs:{anchor:"bottom left",self:"top right","auto-close":""}},[i("q-list",[i("q-item",{key:":new",staticClass:"text-bold",attrs:{dense:"",clickable:""},on:{click:function(e){return t.initialize()}}},[t._v("\n\t\t\t\t\t\t\t--- New Script ---\n\t\t\t\t\t\t")]),t._l(t.scriptList,(function(e){return i("q-item",{key:e.id,attrs:{dense:"",clickable:""},on:{click:function(i){return t.selectScript(e)}}},[e.description?i("q-tooltip",[i("span",{domProps:{innerHTML:t._s(e.description)}})]):t._e(),i("q-item-section",[t._v(" "+t._s(e.title)+" ")])],1)}))],2)],1)],1):t._e(),i("q-space"),t.isDev?i("q-btn",{attrs:{id:"json",icon:"code","text-color":"accent",flat:"",dense:"",round:""},on:{click:function(e){return e.stopPropagation(),t.showJSON(e)}}},[i("q-tooltip",[t._v("Edit raw JSON")])],1):t._e(),t.guide?i("q-btn",{attrs:{id:"guide",icon:"img:statics/support_agent-white-48dp.svg","text-color":"accent",flat:"",dense:"",round:""},on:{click:function(e){return e.stopPropagation(),t.showGuide(e)}}},[i("q-tooltip",[t._v("Show a guide of this script")])],1):t._e(),i("q-btn",{attrs:{id:"save",icon:"save",disable:t.isPublic||!t.changed,flat:"",dense:"",round:""},on:{click:t.saveScript}},[i("q-tooltip",[t._v("Save the script")])],1),i("q-btn",{attrs:{id:"delete",icon:"delete",flat:"",dense:"",round:"",disable:!t.canDelete},on:{click:function(e){t.confirmDelete=!0}}},[i("q-tooltip",[t._v("Delete the script")])],1),t.isDev?i("q-btn",{attrs:{id:"download",icon:"cloud_download",flat:"",dense:"",round:""},on:{click:t.downloadDocument}},[i("q-tooltip",[t._v("Download the script as JSON file")])],1):t._e(),t.canPublish?i("q-btn",{attrs:{id:"publish",icon:"publish",flat:"",dense:"",round:""},on:{click:t.publishScript}},[i("q-tooltip",[t._v("Publish the script")])],1):t._e(),t.frame?i("user-menu"):t._e()],1)],1),t.waitForSignin?i("q-banner",{staticClass:"q-pt-xl"},[i("span",{staticClass:"text-subtitle1 bg-warning"},[t._v("\n\t\t\tYou need to signin in order to view the script\n\t\t")])]):t._e(),i("div",{staticClass:"q-pt-xl"},[i("div",{staticClass:"interact-area"},t._l(t.doc.cells,(function(e,s){return i("cell",{key:s,ref:"cell",refInFor:!0,attrs:{value:e,dictionary:t.dictionary},on:{executed:function(e){return t.onExecuted(s,e)},execute:function(e){return t.onExecute(s,e)}}})})),1)]),i("q-dialog",{attrs:{persistent:"",maximized:""},model:{value:t.editJSON,callback:function(e){t.editJSON=e},expression:"editJSON"}},[i("q-card",[i("q-card-section",[i("q-input",{attrs:{value:JSON.stringify(t.doc,null,"  "),autogrow:"",type:"textarea",filled:""},on:{input:t.updateJSON}})],1),i("q-card-actions",{attrs:{align:"right"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"}})],1)],1)],1),i("q-dialog",{attrs:{persistent:""},model:{value:t.confirmDelete,callback:function(e){t.confirmDelete=e},expression:"confirmDelete"}},[i("q-card",[i("q-card-section",[i("div",{staticClass:"text-h6"},[t._v("\n\t\t\t\t\tDelete script\n\t\t\t\t")])]),i("q-card-section",[t._v("\n\t\t\t\tAre you sure you want to delete this script?\n\t\t\t")]),i("q-card-actions",{attrs:{align:"right"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel",color:"primary"}}),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Delete",color:"primary"},on:{click:t.deleteScript}})],1)],1)],1)],1)},a=[],n=i("3c4e"),o=i.n(n),r=i("21a6"),c=i("92da"),l=i("75ba"),d=i("da50"),u=i("db49"),p=i("761e"),h=i("1cb6"),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cell"},[i("q-card",{ref:"input",staticClass:"cell-input",attrs:{bordered:""}},[i("q-card-section",[i("editor",{ref:"editor",staticClass:"editor",attrs:{type:"cell",doc:t.value,"use-dictionary":t.dictionary}})],1),i("q-card-actions",{attrs:{align:"right"}},["running"===t.status?i("q-btn",{attrs:{round:"",loading:"",flat:""}},[i("q-tooltip",[t._v("Execute the action")])],1):"completed"===t.status?i("q-btn",{attrs:{round:"",flat:"",icon:"autorenew"},on:{click:t.executeCell}},[i("q-tooltip",[t._v("Execute the action")])],1):i("q-btn",{attrs:{round:"",color:"primary",flat:"",icon:"play_circle_outline"},on:{click:t.executeCell}},[i("q-tooltip",[t._v("Execute the action")])],1)],1)],1),t._l(t.value.outputs||[],(function(t,e){return i("cell-output",{key:e,attrs:{value:t}})}))],2)},g=[],f=i("a897"),b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-card",[t.asHTML?i("q-card-section",{domProps:{innerHTML:t._s(t.asHTML)}}):t.asImage?i("q-card-section",[i("img",{ref:"image",attrs:{"no-repeat":"",src:t.asImage}})]):t.asText?i("q-card-section",{domProps:{textContent:t._s(t.asText)}}):t.asError?i("q-card-section",{staticClass:"error-cell",domProps:{textContent:t._s(t.asError)}}):i("q-card-section",[t._v("\n\t\tunknown output type\n\t")])],1)},v=[],w={name:"CellOutput",props:{value:{type:Object,required:!0}},computed:{asError(){return"error"===this.value.msg_type?q(this.value.content):null},asHTML(){if(!this.hasContent)return null;const t=this.value.content.data;return t&&t["text/html"]?t["text/html"]:null},asText(){const t=this.value.content?this.value.content.data:{};return"stream"===this.value.msg_type?this.value.content.text:this.hasContent&&t&&t["text/plain"]?t["text/plain"]:null},asImage(){if(!this.hasContent)return null;const t=this.value.content.data;return t&&t["image/png"]?"data:image/png;base64,"+t["image/png"]:null},hasContent(){return["execute_result","display_data"].includes(this.value.msg_type)&&this.value.content&&this.value.content.data}}};function q(t){return`There was an error of type ${t.ename} executing the action - ${t.evalue}`}var y=w,x=(i("c121"),i("2877")),k=i("f09f"),_=i("a370"),$=i("eebe"),S=i.n($),O=Object(x["a"])(y,b,v,!1,null,"0dc844a3",null),j=O.exports;S()(O,"components",{QCard:k["a"],QCardSection:_["a"]});var C={name:"Cell",components:{editor:f["a"],"cell-output":j},data(){return{status:this.value.status}},props:{value:{type:Object,required:!0},dictionary:{type:Object,required:!0}},watch:{status(){this.value.status=status}},methods:{executeCell(){this.$set(this.value,"outputs",[]),this.status="running",this.$emit("execute",JSON.stringify(this.value.action))},cellExecutionCompleted(){this.value.execution_count=null===this.value.execution_count?0:this.value.execution_count+1,this.status="completed",this.$emit("executed")},emitOutput(t){if(Array.isArray(this.value.outputs)||this.$set(this.value,"outputs",[]),"status"===t.msg_type)return"idle"===t.content.execution_state?(0===this.value.outputs.length&&this.value.outputs.splice(-1,0,{msg_type:"stream",content:{text:"ok"}}),this.cellExecutionCompleted()):void 0;["stream","execute_result","error","display_data"].includes(t.msg_type)&&this.value.outputs.splice(-1,0,t)},enterEditMode(){return this.$refs["editor"].enterEditMode()}}},T=C,P=(i("5c7c"),i("4b7e")),E=i("9c40"),Q=i("05c0"),D=Object(x["a"])(T,m,g,!1,null,"28f0ecbc",null),N=D.exports;S()(D,"components",{QCard:k["a"],QCardSection:_["a"],QCardActions:P["a"],QBtn:E["a"],QTooltip:Q["a"]});var I=i("cde4"),J={name:"Interact",props:{frame:{type:Boolean,default:!1}},data(){return{doc:o()({},u["b"]),confirmDelete:!1,editJSON:!1,changed:!1,minimized:!1,name:"Script Name",scriptList:this.$store.state.docs,waitForSignin:!1,guide:null,dictionary:new I["a"],waiting:{}}},components:{"user-menu":p["a"],cell:N},meta(){return{title:this.doc.title||this.doc.name||"Script"}},async mounted(){if(this.$route.params.id&&":new"!==this.$route.params.id){if(!this.$store.state.user.isSignedIn&&!this.isPublic)return this.waitForSignin=!0,void(this.doc.name="Waiting for signin");const t=await this.loadScript();if(!t)return}else Object(h["a"])("script","new"),this.initialize(),this.listenToMessages()},computed:{isDev(){return!1},canPublish(){return!this.isPublic&&this.$store.state.user.canPublish},docId(){return this.doc._id||this.doc.$id},canDelete(){return(!this.$route.params.id||!this.$route.params.id.startsWith("public:"))&&!!this.$route.params.id},isSignedIn(){return this.$store.state.user.isSignedIn},isPublic(){return"string"===typeof this.$route.params.id&&this.$route.params.id.startsWith("public:")}},watch:{doc:{deep:!0,handler:function(){this.changed=!0}},isSignedIn(){this.isPublic||this.loadScript()}},methods:{onExecute(t,e){this.sendMessage(this.$refs.cell[t],"execute",{code:e})},onExecuted(t){this.doc.cells.length===t+1&&(this.doc.cells.push({$type:"cell"}),this.$nextTick(()=>{this.$refs.cell[this.$refs.cell.length-1].enterEditMode()}))},async initialize(){this.doc=await this.createNewScript()},async selectScript(t){t&&t.id&&(await this.$router.replace("/interact/"+t.id),await this.loadScript())},async publishScript(){if(this.$store.state.user.isSignedIn){this.doc.name||Object(d["k"])("The name should be filled in before publishing the script");try{this.$q.loading.show(),await this.$store.dispatch("publishDoc",this.doc),this.$q.loading.hide(),this.$q.notify("published script")}catch(t){this.$q.loading.hide(),Object(d["k"])(t.message||"There was an error publishing the script"),console.error("Exception",t)}}else Object(d["k"])("You must sign in before publishing the script")},async deleteScript(){this.$q.loading.show();try{await this.$store.dispatch("deleteDoc",this.doc._id),this.$q.loading.hide()}catch(t){switch(this.$q.loading.hide(),console.error("deleteDoc failed",t),t.error){default:Object(d["k"])("Could not delete the script")}}this.$router.push("/interact/:new")},showGuide(){if(this.guide)return Object(c["b"])(this.doc,this.guide)},showJSON(){this.editJSON=!0},runScript(){this.$q.dialog({title:"Execute Script",message:'This script is still in Concept Proof mode so it cannot be executed. <br>Would you like such a script to be implemented? Do you think it will be helpful? <a target="_blank" href="mailto:elshor@gmail.com?subject=Natura script review - Wikipedia script">Send us your feedback!</a>',html:!0})},async createNewScript(){const t=o()({},u["b"]);return this.$route.query.package&&t.packages.push(this.$route.query.package),await this.loadPackages(),t},async loadScript(){if(":new"===this.$route.params.id||!this.$route.params.id)return!1;try{this.$q.loading.show();const t=this.$route.params.id,e=t.includes(":")?t:"public:"+t,i=await this.$store.dispatch("loadDoc",e);return Object(h["a"])("script","load",this.$route.params.id),this.waitForSignin=!1,this.$set(this,"doc",i),this.$nextTick(()=>{this.changed=!1}),this.$q.loading.hide(),this.$store.dispatch("loadGuide",e).then(t=>{this.guide=t,t&&Object(c["a"])(i)&&setTimeout(()=>Object(c["b"])(i,t),5e3)}),await this.loadPackages(),!0}catch(t){switch(this.$q.loading.hide(),t.error){case d["d"]:Object(d["k"])("You need to sign in before loading the document");break;case d["f"]:Object(d["k"])("The document was not found");break;default:Object(d["k"])("There was an error loading the document"),console.error("Exception",t)}return!1}},async loadPackages(){try{const t=await this.$store.dispatch("getPackages",this.doc.packages);this.dictionary.setPackages(t),this.dictionary.reload()}catch(t){console.error("Exception loading packages",t),Object(d["k"])("There was an error loading some required packages for the document")}},async saveScript(){this.$q.loading.show();try{await this.$store.dispatch("storeDoc",{doc:this.doc,id:this.doc._id}),this.$route.params.id!==this.docId&&this.$router.replace("/interact/"+this.docId),this.$q.loading.hide(),this.changed=!1,this.$q.notify("Saved script")}catch(t){switch(this.$q.loading.hide(),t.error){case d["d"]:Object(d["k"])("You need to sign-in before saving this document");break;case d["e"]:Object(d["k"])("You are not authorized to save this document");break;case d["f"]:Object(d["k"])("The document was not found");break;default:Object(d["k"])("There was an error saving the document. Try again later")}}},sendFeedback(){Object(l["c"])()},downloadDocument(){const t=new Blob([JSON.stringify(this.doc,null,"\t")],{type:"application/json;charset=utf-8"});Object(r["saveAs"])(t,(this.doc.name||this.docId)+".json")},updateJSON(t){try{this.doc=JSON.parse(t)}catch(e){}},sendMessage(t,e,i){Object(d["i"])(i&&"object"===typeof i),Object(d["i"])("string"===typeof e);const s=Object(l["d"])();i.id=s,this.waiting[s]=t,window.top.postMessage([e,this.prepareMessage(i)],"*")},listenToMessages(){window.addEventListener("message",t=>{if(!Array.isArray(t.data))return;const e=t.data[0],i=t.data[1];i&&"object"===typeof i&&this.waiting[i.id]&&(Object(d["i"])("output"===e),this.waiting[i.id].emitOutput(i.output))})},prepareMessage(t){const e=['print("Hello World!")','print("something else")','import pandas as pd\ndf=pd.read_csv("https://raw.githubusercontent.com/kir12/jupyter-tutorial/master/fortune500.csv")',"df.head()","df['Profit (in millions)']=pd.to_numeric(df['Profit (in millions)'],errors='coerce')\ndf.plot.scatter(title=\"Scattre plot of fortue 500 dataset\",x=\"Revenue (in millions)\",y=\"Profit (in millions)\")","import time\ntime.sleep(3)\nprint('message sent')"];return window.mockId="number"===typeof window.mockId?window.mockId+1:0,t.code=e[window.mockId%e.length],t}}},M=J,L=(i("0636"),i("9989")),z=i("de5e"),A=i("65c6"),F=i("6ac5"),H=i("27f9"),W=i("4e73"),B=i("1c1c"),Y=i("66e5"),G=i("4074"),K=i("2c91"),R=i("54e1"),U=i("24e8"),V=i("7f67"),X=Object(x["a"])(M,s,a,!1,null,"2273ac60",null);e["default"]=X.exports;S()(X,"components",{QPage:L["a"],QPageSticky:z["a"],QToolbar:A["a"],QToolbarTitle:F["a"],QInput:H["a"],QBtn:E["a"],QTooltip:Q["a"],QMenu:W["a"],QList:B["a"],QItem:Y["a"],QItemSection:G["a"],QSpace:K["a"],QBanner:R["a"],QDialog:U["a"],QCard:k["a"],QCardSection:_["a"],QCardActions:P["a"]}),S()(X,"directives",{ClosePopup:V["a"]})},"5c7c":function(t,e,i){"use strict";var s=i("2648"),a=i.n(s);a.a},c121:function(t,e,i){"use strict";var s=i("23d3"),a=i.n(s);a.a},d9b4:function(t,e,i){}}]);