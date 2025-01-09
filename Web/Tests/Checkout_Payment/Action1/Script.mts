Browser("Demo Web Shop").Page("Demo Web Shop. Checkout").WebRadioGroup("Paymentmethod").Select Parameter("PaymentMethod")
Browser("Demo Web Shop").Page("Demo Web Shop. Checkout").WebButton("Continue_Payment").Click
Wait(2)
Browser("Demo Web Shop").Page("Demo Web Shop. Checkout").WebButton("Continue_PaymentInfo").Click

