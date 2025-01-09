Set ObjCart = Browser("Demo Web Shop").Page("Demo Web Shop. Apparel")
Set ObjLink = Description.Create()
ObjLink("micclass").Value = "Link"
ObjLink("innertext").Value = "Shopping cart.*"
Set ObjChild = ObjCart.ChildObjects(ObjLink)
If ObjChild.Count() > 0 Then
	ObjChild(0).Highlight
	ObjChild(0).Click
End  If

Wait(2)
strProducts = Parameter("Products")
ArrProducts = Split(strProducts, "|")

Set ObjWebTable = Browser("Demo Web Shop").Page("Demo Web Shop- Shopping Cart").WebTable("ProductTable")

If ObjWebTable.RowCount() <= 1 Then
    Reporter.ReportEvent micFail, "Cart", "No products found in the cart"
    ExitTest
End If
'Verify the Products in  the cart
For i = 0 To UBound(ArrProducts)
    bnlFound = False
    For j = 2 To ObjWebTable.RowCount()
        If Trim(ObjWebTable.GetCellData(j, 3)) = Trim(ArrProducts(i)) Then
            bnlFound = True
            If blnFound Then
            	Exit For
            End If
        End If
    Next
    If bnlFound Then
        Reporter.ReportEvent micPass, ArrProducts(i), ArrProducts(i) & " is selected and is displayed in the Cart"
    Else
        Reporter.ReportEvent micFail, ArrProducts(i), ArrProducts(i) & " is not selected and is not displayed in the Cart"
    End If
Next

Parameter("SubTotal_out") = Browser("Demo Web Shop").Page("Demo Web Shop- Shopping Cart").WebTable("Sub-Total:").GetCellData(1,2)	
Browser("Demo Web Shop").Page("Demo Web Shop- Shopping Cart").WebCheckBox("termsofservice").Click
Browser("Demo Web Shop").Page("Demo Web Shop- Shopping Cart").WebButton("Checkout").Click
Set ObjWebTable = Nothing

