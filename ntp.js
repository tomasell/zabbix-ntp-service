var ntpClient = require('ntp-client');

ntpClient.getNetworkTime(process.argv[2], 123, function(err, date) {
        if(err) {
                console.log("error");
                return;
        }
        console.log(date); // Mon Jul 08 2013 21:31:31 GMT+0200 (Paris, Madrid (heure dâÃ©tÃ©))
});

