SystemUtil.CloseProcessByName "chrome.exe"
Wait(3)
SystemUtil.Run "C:\Program Files\Google\Chrome\Application\chrome.exe","https://demowebshop.tricentis.com/"
Browser("Demo Web Shop").Maximize
strEmail = Parameter("Email")
strPassword = Parameter("Password")
'Login

Browser("Demo Web Shop").Page("Demo Web Shop - Landing Page").Link("Log in").Click
Wait(2)
Browser("Demo Web Shop").Page("Demo Web Shop. Login").WebEdit("Email").Set strEmail
Browser("Demo Web Shop").Page("Demo Web Shop. Login").WebEdit("Password").Set strPassword
Browser("Demo Web Shop").Page("Demo Web Shop. Login").WebButton("Log in").Click

Set ObjEmail = Browser("Demo Web Shop").Page("Demo Web Shop - Landing Page").Link("Logged_Email")
VerifyInnerText ObjEmail,strEmail," Successfully Logged in with " & strEmail," Unable to Login with  " & strEmail & " Please check the credentials"

