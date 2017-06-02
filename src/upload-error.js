/**
 * Created by ialis on 2017/6/2.
 */

;(function () {

    // 先暂时把错误信息打印到console中
    function error(errorMessage, scriptURI, lineNumber, columnNumber, errorObj) {
        /* 上传的地址 */
        var report_url = "report/error";
        
        /* 组装需要上传的信息 */
        var m = {
            errorMessage: errorMessage,
            scriptURI: scriptURI,
            lineNumber: lineNumber,
            columnNumber: columnNumber,
            errorObj: errorObj.toString(),
            userAgent: navigator.userAgent,
            data: + new Date  /* + 相当于 .valueOf()  */
        };

        /* 打印出上传的信息 */
        console.log(m);
    }

    /* 监听错误 */
    window.onerror = function (errorMessage, scriptURI, lineNumber,columnNumber,errorObj) {
        error(errorMessage, scriptURI, lineNumber,columnNumber,errorObj);
    }

}());