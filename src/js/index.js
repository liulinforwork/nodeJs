/**
 * Created by Administrator on 2017/7/4.
 */
// 原生js发送
(function (w) {

    // var resp,xhr;
    // xhr = new XMLHttpRequest();
    //
    // if(xhr){
    //     xhr.open('get','http://67.205.131.201:8080/api/products',true);
    //     xhr.onreadystatechange = function () {
    //         if(xhr.readyState == 4 && xhr.status==200){
    //             resp = JSON.parse(xhr.responseText).products;
    //
    //             for(var i=0; i<resp.length; i++){
    //                 document.writeln(resp[i].name);
    //                 document.writeln(resp[i].price);
    //             }
    //
    //         }
    //     }
    // }
    // xhr.send();

})(window);

// // jq发送ajax
(function ($, w) {

    $.ajax({
        method:'get',
        url:'http://localhost:3000/api/productsList',
        success:function (res) {
            console.log(res);
            for(var i=0; i<res.data.length; i++){
                $('.wp').html(
                    $('.wp').html()+
                    res.data[i].name +
                    '---------------'+ res.data[i].manufacturer +
                    '---------------'+ res.data[i].price + '<br/>'
                );
            }

        },
        error:function (err) {
            console.log(JSON.stringify(err));
        }
    });
    // $.ajax({
    //     method:'get',
    //     url:'http://localhost:3000/api/getProduct',
    //     success:function (res) {
    //         console.log(res);
    //     },
    //     error:function (err) {
    //         console.log(JSON.stringify(err));
    //     }
    // });


    $('.btn').on('click',function (e) {
        $.ajax({
            method:'post',
            data:{
                name:'blue',
                manufacturer:'中华人民共和国',
                price:'10000'
            },
            url:'http://localhost:3000/api/createProduct',
            success:function (res) {
                console.log(res.data);
                $('.wp').html($('.wp').html() + res.data.name+
                '---------------'+ res.data.manufacturer +
                '---------------'+ res.data.price+ '<br/>'
                )
            },
            error:function (err) {
                console.log(JSON.stringify(err));
            }
        })
    })

    $('.btn_close').on('click',function (e) {
        // $.ajax({
        //     method:'post',
        //     data:{
        //         name:'blue',
        //         manufacturer:'中华人民共和国',
        //         price:'10000'
        //     },
        //     url:'http://localhost:3000/api/createProduct',
        //     success:function (res) {
        //         console.log(res.data);
        //         $('.wp').html($('.wp').html() + res.data.name+
        //             '---------------'+ res.data.manufacturer +
        //             '---------------'+ res.data.price+ '<br/>'
        //         )
        //     },
        //     error:function (err) {
        //         console.log(JSON.stringify(err));
        //     }
        // })
    })



})(jQuery, window);