 // checkout form validation
 $("#checkout-form").on("click", function(e) {
    const name = $("#buyer-name").val();
    const email = $("#buyer-email").val();
    const phone = $("#buyer-phone").val();
    const address = $("#buyer-addr").val();
    const pincode = $("#buyer-pin").val();
 
    if(name === '' || email === '' || phone === '' || address === '' || pincode === '') {
        $(".error_all").fadeIn();
        $(".error_all").html("All fields are required");
        return false;
    }

    if(isNaN(pincode)) {
      $(".pincode-error").fadeIn();
      $(".pincode-error").html("Pincode can not contain characters");
      return false;
    }
 
    console.log("clicked");
  });
 