//Created by baihuibo on 2017/2/21.

function* fn() {
    var res1 = yield ajax(url, null);
    var res2 = yield ajax(url, res1);
    var res3 = yield ajax(url, res2);
    var res4 = yield ajax(url, res3);

    return res4;
}


// var res = fn();

// iterator 代送器

// console.log(res.next());


// function test() {
//     $.ajax({// ajaxa
//         url: '',
//         success: function (data) {
//             $.ajax({// ajaxb
//                 url: data,
//                 success: function () {
//                     $.ajax({// ajaxb
//                         url: data,
//                         success: function () {
//                             $.ajax({// ajaxb
//                                 url: data,
//                                 success: function () {
//
//                                 }
//                             })
//                         }
//                     })
//                 }
//             })
//         }
//     });
//
//     var promsie = ajax('', null)
//         .then(function (result) {
//             return ajax(url, result);
//         })
//         .then(function (result2) {
//             return ajax(url, result2);
//         })
//         .then(function (result2) {
//             return ajax(url, result2);
//         })
//         .then(function (result2) {
//             return ajax(url, result2);
//         })
//
//
// }

function ajax(url, data) {
    return new Promise(function (resolve, reject) {
        $.ajax({// ajaxb
            url: url,
            data: data,
            success: function (reslt) {
                resolve(reslt);
            },
            error: function () {
                reject();
            }
        })
    })
}

function sleep(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}


async function fn2() {
    console.debug('休眠1秒钟');
    await sleep(1000);

    console.debug('休眠2秒钟');
    await sleep(2000);

    console.debug('休眠3秒钟');
    await sleep(3000);

    console.debug('休眠4秒钟');
    await sleep(4000);

    return 'res4';
}

fn2().then(function (res4) {
    console.log('async fn2 result:', res4);
});





