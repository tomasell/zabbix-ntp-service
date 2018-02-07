#!/usr/bin/env node
var ntpClient = require('ntp-client');
var ZabbixSender = require('node-zabbix-sender');
var Sender = new ZabbixSender({host: '127.0.0.1'});

ntpClient.getNetworkTime(process.argv[2], 123, function(err, date) {
        if(err) {
            Sender.addItem(process.argv[3], 'ntp.value', "error"]);
        } else {
		    Sender.addItem(process.argv[3], 'ntp.value', date);
        }
		Sender.send();
});

