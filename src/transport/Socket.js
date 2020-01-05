import io from "socket.io-client";
// import net from "react-native-tcp";
var net = require('react-native-tcp');
var msg = '';
var client;
export function conntest() {
    console.debug("text")
//   let socket = io("http://144.76.173.182:3000");
//   socket.emit('req', {key:2});
    var option = {host:'192.168.4.1',port:3000};
    // client = net.createConnection(option,function(){
    //     console.log('Got connected to Server');
    //     // client.write("Hello, server! Love, Client.\n");
    //     // setTimeout(function(){
    //     //     client.write("Second Hello, server! Love, Client.\n");
    //     //     console.log('hello from setTimeout');
    //     // },2000);
    //     //client.end();
    // });
    function socketConn(){
        client = net.createConnection(option,function(){
            console.log('Got connected to Server');
        });
        client.on('error', function(error) {
            console.log(error)
            });
        
            client.on('data', function(data) {
                console.debug('message was received', data.toString('utf8'));
                //client.write('hello world');
            });
            client.on('close', function(data) {
                console.debug('disconnected, now retrying');
                setTimeout(function(){
                    socketConn();
                },1000);
            });
    }
    socketConn();
}
export function sendMsg(nmsg){
    console.log('Came inside sendMsg:'+nmsg);
    client.write('out;13;'+nmsg+'\n');
}
export function testme(){
    return 'Message: '+getText();
    function test2(){
        return '';//'from inner function';
    }
}
function getText(){
    return 'hello from getText3';
}