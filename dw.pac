// Author: liruqi@gmail.com

var proxy = "SOCKS5 dw.liruqi.info:21;SOCKS dw.liruqi.info:21";

var direct = 'DIRECT;';

function FindProxyForURL(url, host) {
    var domain = host.split(".");
    if (domain.pop() == "onion") 
        return proxy;
    return direct;
}
