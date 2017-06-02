/**
 * Created by ialis on 2017/6/2.
 */

;(function () {
    function report_performance() {
        
        /* 上传地址 */
        var report_url = "url/for/upload/error?error=";

        /* performance 对象 */
        var performance = window.webkitPerformance || window.msPerformance || window.performance;

        /* 所需信息 */
        var points = [
            'navigationStart', /* 开始浏览的时间 */
            'unloadEventStart', 'unloadEventEnd', /* 卸载上一个页面的时间 */
            'redirectStart', 'redirectEnd', /* HTTP重定向所消耗的时间 */
            'fetchStart', 'domainLookupStart', /* 缓存加载的时间 */
            'domainLookupStart', 'domainLookupEnd', /* DNS查询的时间 */
            'connectStart', 'connectEnd', /* 建立TCP连接的时间 */
            'connectStart', 'requestStart', 'responseStart', 'responseEnd', /* 建立TCP连接的时间 */
            'domInteractive', /* 可以交互的时间 */
            'domContentLoadedEventStart', 'domContentLoadedEventEnd', /* DomContentLoaded  页面加载完成的时间*/
            'domLoading', 'domComplete', /* 页面渲染的时间 */
            'domLoading', 'navigationStart', /* 加载页面花费的总时间 */
            'loadEventStart', 'loadEventEnd', /* 加载事件的时间 */
            
            'jsHeapSizeLimit', 'totalJSHeapSize', 'usedJSHeapSize', /* 内存的使用情况 */
            
            'redirectCount', 'type' /* 页面重定向的次数和类型 */
        ];
        
        /* 性能对象的属性 */
        var timing = performance.timing,
            memory = performance.memory,
            navigation = performance.navigation;
        
        /* 判断性能对象是否可用 */
        if (performance && timing && memory && navigation) {
            
            /* 组装统计的信息 */
            var m = {
                timing: timing,
                memory: memory,
                navigation: navigation,
                userAgent: navigator.userAgent,
                url: location.href,
                data: + new Date  /* + 相当于 .valueOf()  */
            };
            
            /* 打印出上传的信息 */
            console.log(m);
        }
    }
    
    /* 上传 */
    report_performance();
}());
