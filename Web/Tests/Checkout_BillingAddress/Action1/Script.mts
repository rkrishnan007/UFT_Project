Browser("Demo Web Shop").Page("Demo Web Shop. Checkout").WebEdit("BillingNewAddress.FirstName").Set "Dhanya"
Browser("Demo Web Shop").Page("Demo Web Shop. Checkout").WebEdit("BillingNewAddress.LastName").Set"Rakesh"
Browser("Demo Web Shop").Page("Demo Web Shop. Checkout").WebEdit("BillingNewAddress.Address1").Set "DD SilverStone"
Browser("Demo Web Shop").Page("Demo Web Shop. Checkout").WebEdit("BillingNewAddress.Address2").Set "Vaduthala"
Browser("Demo Web Shop").Page("Demo Web Shop. Checkout").WebEdit("BillingNewAddress.City").Set "Kochi"	
Browser("Demo Web Shop").Page("Demo Web Shop. Checkout").WebEdit("BillingNewAddress.Company").Set"IGS"
Browser("Demo Web Shop").Page("Demo Web Shop. Checkout").WebEdit("BillingNewAddress.Email").Set "Test@igs.com"
Browser("Demo Web Shop").Page("Demo Web Shop. Checkout").WebEdit("BillingNewAddress.FaxNumber").Set "7637677322"

Browser("Demo Web Shop").Page("Demo Web Shop. Checkout").WebEdit("BillingNewAddress.PhoneNumber").Set "7766368999"
Browser("Demo Web Shop").Page("Demo Web Shop. Checkout").WebEdit("BillingNewAddress.ZipPostalCod").Set "682023"
Browser("Demo Web Shop").Page("Demo Web Shop. Checkout").WebList("BillingNewAddress.CountryId").Select "India"
Browser("Demo Web Shop").Page("Demo Web Shop. Checkout").WebList("BillingNewAddress.StateProvinc").Select "Other (Non US)"
Browser("Demo Web Shop").Page("Demo Web Shop. Checkout").WebButton("Continue_BillingAddr").Click
