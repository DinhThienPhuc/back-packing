$(document).ready(function () {
    $('#user-info-register').click(function () {
        $('#user-tab-register').addClass('active');
        $('#register').addClass('active in');
        $('#user-tab-login').removeClass('active');
        $('#login').removeClass('active in');
    });

    $('#button-user-info').click(function () {
        $('#user-tab-login').addClass('active');
        $('#login').addClass('active in');
        $('#user-tab-register').removeClass('active');
        $('#register').removeClass('active in');
    });

    $('.content .sale .signup > img').click(function () {
        $('#user-tab-register').addClass('active');
        $('#register').addClass('active in');
        $('#user-tab-login').removeClass('active');
        $('#login').removeClass('active in');
    });

    $('#down').hover(function () {
        $(this).addClass('open');
    }, function () {
        $(this).removeClass('open');
    });

    $('#button-user-info').hover(function () {
        $(this).addClass('open');
    }, function () {
        $(this).removeClass('open');
    });
    //
    //var unit_price_arr = [];
    //$('.unitPrice').each(function () {
    //    unit_price_arr.push(this);
    //});
    ////console.log(unit_price_arr);
    //
    //var quantity = [];
    //$('.quantity').click(function () {
    //    $(this).click(function () {
    //        quantity.push($(this).val());
    //    });
    //});
    ////console.log(quantity);
    //
    //var list = [];
    //$('.totalPrice').each(function () {
    //    list.push(this);
    //});
    ////for(var i = 0; i < list.length; i++) {
    ////    list[i].html(unit_price_arr[i]);
    ////}
    //console.log(list);
});
