Browser("Demo Web Shop").Page("Demo Web Shop. Checkout").WebButton("Continue_ShippingAddr").Click
Wait(2)
Browser("Demo Web Shop").Page("Demo Web Shop. Checkout").WebRadioGroup("Shippingoption").Select Parameter("ShippingOption")
Browser("Demo Web Shop").Page("Demo Web Shop. Checkout").WebButton("Continue_ShippingMethod").Click
Wait(2)



