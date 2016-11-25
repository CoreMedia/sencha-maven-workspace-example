Ext.define("MyApp.Main", {
  extend: "Ext.app.Application",
  name: "My App",
  launch: function() {
    window.document.title = "My App";
    Ext.Msg.alert("My App", MyPackage.MyUtil.helloWorld());
  },
  requires: [
    "MyPackage.MyUtil"
  ]
});
