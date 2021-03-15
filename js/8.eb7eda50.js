(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"08b1":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"q-pt-none"},[a("editor",{staticClass:"q-pt-xl",attrs:{doc:t.doc,packages:t.packages,"load-doc-to-dictionary":"",type:"package"}}),a("q-dialog",{attrs:{persistent:"",maximized:""},model:{value:t.editJSON,callback:function(e){t.editJSON=e},expression:"editJSON"}},[a("q-card",[a("q-card-section",[a("q-input",{attrs:{value:JSON.stringify(t.doc,null,"  "),autogrow:"",type:"textarea",filled:""},on:{input:t.updateJSON}})],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"}})],1)],1)],1),a("q-dialog",{attrs:{persistent:""},model:{value:t.confirmDelete,callback:function(e){t.confirmDelete=e},expression:"confirmDelete"}},[a("q-card",[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("\n\t\t\t\t\tDelete Package\n\t\t\t\t")])]),a("q-card-section",[t._v("\n\t\t\t\tAre you sure you want to delete this package?\n\t\t\t")]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel",color:"primary"}})],1)],1)],1),a("q-page-sticky",{attrs:{expand:"",position:"top"}},[a("q-toolbar",{staticClass:"bg-primary text-white"},[a("q-toolbar-title",{staticClass:"title"},[t._v("\n\t\t\t\t"+t._s(t.doc.title||t.doc.name||t.$route.params.id||"Package")+"\n\t\t\t\t"),"string"===typeof t.doc._id&&t.doc._id.startsWith("public")?a("q-badge",{attrs:{color:"accent"}},[t._v("\n\t\t\t\t\tpublic "+t._s(t.doc._rev?"v"+t.doc._rev.split("-")[0]:"")+"\n\t\t\t\t")]):a("q-badge",{attrs:{color:"accent"}},[t._v("\n\t\t\t\t\tprivate\n\t\t\t\t")])],1),a("q-btn",{attrs:{id:"save",icon:"save",flat:"",round:"",disable:!t.changed},on:{click:t.saveDocument}},[a("q-tooltip",[t._v("Save the package")])],1),a("q-btn",{attrs:{id:"download",icon:"cloud_download",flat:"",round:""},on:{click:t.downloadDocument}},[a("q-tooltip",[t._v("Download the package")])],1),t.canPublish?a("q-btn",{attrs:{id:"publish",icon:"publish",flat:"",round:""},on:{click:t.publishPackage}},[a("q-tooltip",[t._v("Publish the package")])],1):t._e(),a("q-btn",{attrs:{id:"json",icon:"code","text-color":"accent",flat:"",round:""},on:{click:function(e){return e.stopPropagation(),t.showJSON(e)}}},[a("q-tooltip",[t._v("Edit raw JSON")])],1)],1)],1)],1)},o=[],s=a("a897"),c=a("21a6"),n=a("da50"),r={name:"Package",components:{editor:s["a"]},meta(){return{title:(this.doc.title||this.doc.name)+" package"}},async mounted(){if(":new"===this.$route.params.id)this.doc={$type:"package"};else try{await this.loadDocument()}catch(t){if(t&&t.error===n["d"])return void Object(n["k"])("You must sign in first");Object(n["k"])("There was an error loading package. It might be because of network error or server error. Try again later."),this.$router.push("/packages")}},data(){return{doc:{},packages:[],confirmDelete:!1,editJSON:!1,changed:!1}},watch:{doc:{deep:!0,handler:function(){this.changed=!0}}},methods:{async loadPackages(){try{Array.isArray(this.doc.packages)||(this.doc.packages=["base"]),this.doc.packages.includes("base")||this.doc.packages.push("base");const t=await this.$store.dispatch("getPackages",this.doc.packages);this.packages.splice(0,this.packages.length,...t)}catch(t){if(t&&t.error===n["d"])return void Object(n["k"])("You must sign in first");console.error("Exception loading packages",t),Object(n["k"])("There was an error loading some required packages for the document")}},showJSON(){this.editJSON=!0},async publishPackage(){if(this.$store.state.user.isSignedIn){this.doc.name||Object(n["k"])("The name should be filled in before publishing the package");try{this.$q.loading.show(),await publishDoc(this.doc),this.$q.loading.hide(),this.$q.notify("published package")}catch(t){this.$q.loading.hide(),Object(n["k"])(t.message||"There was an error publishing the package"),console.error("Exception",t)}}else Object(n["k"])("You must sign in before publishing the package")},async saveDocument(){if(!this.doc._id){if(!this.doc.name)return void Object(n["k"])("Cannot save the package before its name is set");this.doc._id=await this.$store.state.user.userid+":"+this.doc.name}if(this.$store.state.user.isSignedIn){this.$q.loading.show();try{await storeDoc(this.doc),this.$q.loading.hide(),this.$q.notify("Saved package"),this.changed=!1}catch(t){this.$q.loading.hide(),Object(n["k"])("There was an error saving the document"),console.error(t)}}else Object(n["k"])("You need to sign in before saving the package")},async loadDocument(){const t=await this.$store.dispatch("loadPackage",this.$route.params.id);t?this.doc=t:(this.doc={$type:"package",name:"new package"},this.$q.notify("This package does not exist. Creating a new package")),await this.loadPackages()},downloadDocument(){const t=new Blob([JSON.stringify(this.doc,null,"\t")],{type:"application/json;charset=utf-8"});Object(c["saveAs"])(t,(this.doc.name||"package")+".json")},updateJSON(t){try{this.doc=JSON.parse(t)}catch(e){}}},computed:{canPublish(){return this.$store.state.user.canPublish}}},d=r,l=(a("1dea"),a("2877")),p=a("9989"),h=a("24e8"),u=a("f09f"),g=a("a370"),k=a("27f9"),b=a("4b7e"),m=a("9c40"),f=a("de5e"),v=a("65c6"),q=a("6ac5"),w=a("58a8"),y=a("05c0"),O=a("7f67"),$=a("eebe"),_=a.n($),S=Object(l["a"])(d,i,o,!1,null,"690d1810",null);e["default"]=S.exports;_()(S,"components",{QPage:p["a"],QDialog:h["a"],QCard:u["a"],QCardSection:g["a"],QInput:k["a"],QCardActions:b["a"],QBtn:m["a"],QPageSticky:f["a"],QToolbar:v["a"],QToolbarTitle:q["a"],QBadge:w["a"],QTooltip:y["a"]}),_()(S,"directives",{ClosePopup:O["a"]})},"1c8c":function(t,e,a){},"1dea":function(t,e,a){"use strict";var i=a("1c8c"),o=a.n(i);o.a}}]);