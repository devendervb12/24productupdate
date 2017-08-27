sap.ui.controller("zupdate.ProductUpdate", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zupdate.ProductUpdate
*/
	onInit: function() {

		var url = "proxy/http/122.180.87.238:8000/sap/opu/odata/SAP/ZGW_BATCH24_PRODUCT_SRV/";
		var oModel = new sap.ui.model.odata.v2.ODataModel(url);
		
		this.getView().setModel(oModel);
		
		// bind the data to simpleform
		
		var osf = this.getView().byId("idSf");
		
		osf.bindElement("/ProductSet('Batch24-test1')");
	},
    
	updateProduct : function(){
		
		var data = {
				Name : this.getView().byId("idName").getValue()
		};
		
		var oModel = this.getView().getModel();
		
		var prodID = this.getView().byId("idProd").getText();
		
		oModel.update("/ProductSet('"+prodID+"')", data, {
			success : function(){
				sap.m.MessageToast.show("Data Updated");
			},
			error : function(){
				sap.m.MessageToast.show("Data Not Updated");
			}
		})
	}  

});