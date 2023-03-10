var productsarray;
var cartarr = [];
var cartproducts;
var detailobj;
var catarr;
var searchprod;
$(document).ready(() => {
    $.ajax({
        url: "https://dummyjson.com/products",
        success: function (response) {
            console.log(response);
            productsarray = response.products;
            arrprint(productsarray);
        },
        error: function (error) {
            console.log(error);
        },
    });
});
function arrprint(a) {
    console.log(a);
    makediv = "<div class='row'>";
    for (i = 0; i < a.length; i++) {
        makediv +=
            "<div class='col-4 colalign'>" +
            "<div onclick='detailpage(" +
            a[i].id +
            ")'>" +
            "<img src='" +
            a[i].images[0] +
            "'>" +
            "<br>" +
            a[i].brand +
            "<br>" +
            a[i].title +
            "<br>" +
            a[i].rating +
            "<i class='fa fa-star'></i>" +
            "<i class='fa fa-star'></i>" +
            "<i class='fa fa-star'></i>" +
            "<i class='fa fa-star'></i>" +
            "<i class='fa fa-star-half-o' aria-hidden='true'></i>" +
            "(15,400)" +
            "<br>" +
            "₹" +
            a[i].price +
            "</div>" +
            "<div>" +
            "<button class='btn btn-secondary' onclick='addtocart(" +
            a[i].id +
            ")'>Add to cart</button>" +
            "</div>" + "</div>";
    }
    makediv += "</div>";
    document.getElementById("allproducts").innerHTML = makediv;
}
function cartarrprint(b) {
    makediv = "<div class='row'>";
    for (i = 0; i < b.length; i++) {
        makediv +=
            "<div class='col-4'>" +
            "<img src='" +
            b[i].images[0] +
            "' id='cartimg'>" +
            "</div>" +
            "<div class='col-5 descfont'>" +
            b[i].title +
            "   (" +
            b[i].brand +
            ")" +
            "<br>" +
            b[i].description +
            "<br>" +
            b[i].rating +
            "<i class='fa fa-star'></i>" +
            "<i class='fa fa-star'></i>" +
            "<i class='fa fa-star'></i>" +
            "<i class='fa fa-star'></i>" +
            "<i class='fa fa-star-half-o' aria-hidden='true'></i>" +
            "(15,400)" +
            "<br>" +
            "<span class='discspan'>-" +
            b[i].discountPercentage +
            "%</span>" +
            "&nbsp;&nbsp;" +
            "₹" +
            b[i].price +
            "<br>" +
            "</div>" +
            "<div class='col-3'>" +
            "<button class='btn btn-primary buybtn' onclick='buynow(" +
            b[i].id +
            ")'>Buy Now</button>" +
            "</div>";
    }
    makediv += "</div>";
    document.getElementById("allproducts").innerHTML = makediv;
}
function detailpage(id) {
    $.ajax({
        url: "https://dummyjson.com/products/" + id,
        success: function (response) {
            console.log(response);
            detailobj = response;
            detfunc();
        },
        error: function (error) {
            console.log(error);
        },
    });

   
}
function detfunc(){
    makediv =
    "<div class='row'>" +
    "<div class='col-4'>" +
    "<img src='" +
    detailobj.images[0] +
    "' id='cartimg'>" +
    "</div>" +
    "<div class='col-5 descfont'>" +
    detailobj.title +
    "   (" +
    detailobj.brand +
    ")" +
    "<br>" +
    detailobj.description +
    "<br>" +
    detailobj.rating +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star'></i>" +
    "<i class='fa fa-star-half-o' aria-hidden='true'></i>" +
    "(15,400)" +
    "<br>" +
    "<span class='discspan'>-" +
    detailobj.discountPercentage +
    "%</span>" +
    "&nbsp;&nbsp;" +
    "₹" +
    detailobj.price +
    "<br>" +
    "</div>" +
    "<div class='col-3'>" + "<button class='btn btn-primary addbtn' onclick='addtocart(" +
    detailobj.id +
    ")'>Add to Cart</button>" +
    "<button class='btn btn-primary buybtn' onclick='buynow(" +
    detailobj.id +
    ")'>Buy Now</button>" +
    "</div>" +
    "</div>";

document.getElementById("allproducts").innerHTML = makediv;
}
function addtocart(id) {
    if (cartarr.includes(id)) {
        return false;
    } else {
        cartarr.push(id);
        $("#cartnum").html(cartarr.length);
    }
}

function cartprint() {
    var cartproducts = productsarray.filter(function (el) {
        return cartarr.includes(el.id);
    });

    cartarrprint(cartproducts);
}
function allprod(){
    $.ajax({
        url: "https://dummyjson.com/products",
        success: function (response) {
            console.log(response);
            productsarray = response.products;
            arrprint(productsarray);
        },
        error: function (error) {
            console.log(error);
        },
    });
}
   
function filterprod(category){
    $.ajax({
        url: "https://dummyjson.com/products/category/"+category,
        success: function (response) {
            console.log(response);
            catarr = response.products;
            arrprint(catarr);
        },
        error: function (error) {
            console.log(error);
        },
    });
}
function search(){
    var getdata = $("#getdetail").val();
    $.ajax({
        url: "https://dummyjson.com/products/search?q="+getdata,
        success: function (response) {
            console.log(response);
            searchprod = response.products;
            arrprint(searchprod);
        },
        error: function (error) {
            console.log(error);
        },
    });
}
   



