$(document).ready(function() {
  

  // username is already exists or not in the DB
  $("#username").keyup(function() {
    const username = $(this).val();
    // console.log(username);
    if(username !== '') {
        $.ajax({
            type: "POST",
            url: "check_username.php",
            data: {
                username: username
            },
            success: function(response) {
                if(response === 'taken') {
                    $("#username").css("border-color", "red");
                    $(".check_username").html(username + " is already taken, try another one!").css("color", "red");
                    $("#register-form").attr("disabled", true);
                } else {
                    $("#username").css("border-color", "green");
                    $(".check_username").html(username + " is available").css("color", "green");
                    $("#register-form").attr("disabled", false);
                } 
                
                
                if (response === 'invalid') {
                    $("#username").css("border-color", "red");
                    $(".check_username").html("Space or any special symbol are not allowed").css("color", "red");
                    $("#register-form").attr("disabled", true);
                }
            }
        }); 
    } else {
        // empty the showing message
        $("#username").css("border-color", "green");
        $(".check_username").html('');
    }
  });

  // email is already exists or not in the DB
  $("#email").blur(function() {
    const email = $(this).val();
    
    if(email !== '') {
        $.ajax({
            type: "POST",
            url: "check_username.php",
            data: {
                email: email
            },
            success: function(response) {
                if(response === 'taken') {
                    $("#email").css("border-color", "red");
                    $(".check-email").html(email + " is already taken").css("color", "red");
                    $("#register-form").attr("disabled", true);
                } else {
                    $("#email").css("border-color", "green");
                    //$(".check-email").html(email + " is available").css("color", "green");
                    $("#register-form").attr("disabled", false);
                }
                // console.log(response);
            
        }
     });
    } else {
        $("#email").css("border-color", "green");
        // clear the error message
        $(".check-email").html('');
    }
  });
  
  // phone number is exists or not in the DB
  $("#phone").blur(function() {
    const phone = $(this).val();

    if(phone !== '') {
        $.ajax({
            type: "POST",
            url: "check_username.php",
            data: {
                phone: phone
            },
            success: function(response) {
                if(response === 'taken') {
                    $("#phone").css("border-color", "red");
                    $(".check_phone").html("phone number is already taken, try another one!").css("color", "red");
                    $("#register-form").attr("disabled", true);
                    
                } else {
                    $("#phone").css("border-color", "green");
                    $(".check_phone").html('');
                    $("#register-form").attr("disabled", false);  
                }
            }
        }); 
    } else {
        // clear the error message
        $("#phone").css("border-color", "green");
        $(".check_phone").html('');
    }
  });

 $("#register-form").on("click", function(e) {
    const name = $("#fullname").val();
    const phone = $("#phone").val();
    const email = $("#email").val();
    const username = $("#username").val();
    const pwd = $("#password").val();
    const con_pwd = $("#con_password").val();

    // name validation
    if(name == "" || phone == "" || email == "" || username == "" || pwd == "" || con_pwd == "" || !$("input:radio[name=user_role]").is(":checked")) {
        $(".error_all").fadeIn("slow");
        $(".error_all").html("All fields are required");
        setTimeout(function() {
            $(".error_all").fadeOut("slow");
        }, 10000);
        return false;
    } 


    // pwd validation
    else if(pwd !== con_pwd){
        $('.error_password').text("password not matches, try again");
        return false;
    }else if(pwd === 'password'){
        $('.error_password').text("password can not be password");
        return false;
    }else {
        $('.error_password').hide();
    }

    // phone number validation
    if(phone.length !== 10) {
        $('.error_phone').fadeIn();
        $('.error_phone').text("Please enter a valid phone number");
        return false;
    }
 });








});