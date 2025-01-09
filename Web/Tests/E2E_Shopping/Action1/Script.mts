RunAction "Action_Login [Login]", oneIteration ,"rakesh_demo@gmail.com","Ramos@12345"
RunAction "ShoppingProducts [SelectProducts]", oneIteration
RunAction "Action_ShoppingCart [ShoppingCart]", oneIteration,"Blue Jeans|Casual Golf Belt",strSubtotal
RunAction "Action_Checkout_BillingAddress [Checkout_BillingAddress]", oneIteration
RunAction "Action_Checkout_Shipping [Checkout_ShippingAddress]", oneIteration,"Next Day Air___Shipping.FixedRate"
RunAction "Action_Checkout_Payment [Checkout_Payment]", oneIteration,"Payments.CheckMoneyOrder"
RunAction "Action_Confirmation [Confirmation]", oneIteration,strSubtotal
RunAction "Action_OrderConfirmation [Order_Confirmation]", oneIteration
RunAction "Action_Logout [Logout]", oneIteration
