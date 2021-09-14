const CONNECTION_TIMEOUT = 500;
function send(url, data) {
    var encyptedData = encrptData(data);
    console.log(`successfully ${encyptedData}`);
}

function encrptData(data) {
    
    return `successfull ${data}`
}

module.exports = {
    CONNECTION_TIMEOUT,
    send,
}