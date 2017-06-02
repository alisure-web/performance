/**
 * Created by ialis on 2017/6/2.
 */

;(function () {
    
    var url = "url/for/upload/error?error=this is error";
    
    /* 上传信息 */
    var img = new Image;
    img.onload = img.onerror = function () {
        img = null;
    };
    img.src = url;
    
}());