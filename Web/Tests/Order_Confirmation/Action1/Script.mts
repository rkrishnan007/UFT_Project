
strOrderNo = Browser("Demo Web Shop").Page("Demo Web Shop. OrderConfirmation").WebElement("Order number").GetROProperty("OuterText")
strOrderNo = Replace(strOrderNo,"Order number: ","")
If Len(Trim(strOrderNo)) > 0  Then
	 Reporter.ReportEvent micPass, strOrderNo, strOrderNo & " : is created"
Else
	Reporter.ReportEvent micFail ,"OrderNo", "Order No is not  created"
End If

If Browser("Demo Web Shop").Page("Demo Web Shop. OrderConfirmation").WebElement("ConfirmationMessage").Exist Then
	Reporter.ReportEvent micPass, "Confirmation Message","Confirmation Message is displayed"
Else
	Reporter.ReportEvent micFail ,"Confirmation Message","Confirmation Message is not displayed"
End  If
Browser("Demo Web Shop").Page("Demo Web Shop. OrderConfirmation").WebButton("Continue").Click
