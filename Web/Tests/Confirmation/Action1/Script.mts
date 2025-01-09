
strProducts = Parameter("Products_checkout")
ArrProducts = Split(strProducts, "|")
Set ObjWebTable = Browser("Demo Web Shop").Page("Demo Web Shop_Confirmation").WebTable("Product(s)")

'Validate Products
If ObjWebTable.RowCount() <= 1 Then
    Reporter.ReportEvent micFail, "Checkout", "No products found in the checkout"
    ExitTest
End If
'Verify the Products in  the cart
For i = 0 To UBound(ArrProducts)
    bnlFound = False
    For j = 2 To ObjWebTable.RowCount()
        If Trim(ObjWebTable.GetCellData(j, 2)) = Trim(ArrProducts(i)) Then
            bnlFound = True
            Exit For
        End If
    Next
    If bnlFound Then
        Reporter.ReportEvent micPass, ArrProducts(i), ArrProducts(i) & " is selected and is displayed in Checkout"
    Else
        Reporter.ReportEvent micFail, ArrProducts(i), ArrProducts(i) & " is not selected and is not displayed in Checkout"
    End If
Next

'Validate SubTotal
Set ObjWebTable2 = Browser("Demo Web Shop").Page("Demo Web Shop_Confirmation").WebTable("Sub-Total:")
str_SubTotal_Checkout=  ObjWebTable2.GetCellData(1,2)
'If Parameter("p_Subtotal")  = str_SubTotal_Checkout Then
'	 Reporter.ReportEvent micPass, str_SubTotal_Checkout, str_SubTotal_Checkout & " is  dislayed correctly"
'Else
'	Reporter.ReportEvent  micFail, str_SubTotal_Checkout, str_SubTotal_Checkout & " is  not dislayed correctly"
'End If

'Validate Amount
intTotal = ObjWebTable2.GetCellData(ObjWebTable2.RowCount,2)
intAmount = 0
For i = 2 To ObjWebTable2.RowCount() - 1
	intAmount = intAmount + ObjWebTable2.GetCellData(i,2)
Next
If Cint(intAmount + str_SubTotal_Checkout) =  Cint(intTotal) Then
	 Reporter.ReportEvent micPass, intTotal, intTotal & " is  dislayed correctly"
Else
	Reporter.ReportEvent  micFail, intTotal, intTotal & " is  not dislayed correctly"
End If

Browser("Demo Web Shop").Page("Demo Web Shop_Confirmation").WebButton("Confirm").Click
