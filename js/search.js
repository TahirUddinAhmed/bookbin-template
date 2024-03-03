$(document).ready(function() {
   $("#search-box").keyup(function() {
    const searchVal = $(this).val();
    const searchCat = $("#search-category").val();

    $.ajax({
        url: "search-bar.php",
        type: "POST",
        data: {
            searchInput: searchVal,
            searchCat: searchCat
        },
        success: function(response) {
            $("#recomended-product").css('display', 'none');
            $("#product-container").html(response);
        }
    })
   });



});