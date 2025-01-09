Browser("Demo Web Shop").Page("Demo Web Shop - Shopping Page").Link("Apparel & Shoes").Highlight
Browser("Demo Web Shop").Page("Demo Web Shop - Shopping Page").Link("Apparel & Shoes").Click
Wait(2)
Set objShell=CreateObject("WScript.Shell")
For i = 1 To 6
	objShell.SendKeys "{DOWN}"
	Wait(1)
Next
AIUtil.SetContext Browser("creationtime:=0")
AIUtil.FindTextBlock("Add to cart", micFromLeft, 3).Click
AIUtil.FindTextBlock("Add to cart", micFromLeft, 4).Click
