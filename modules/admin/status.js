const request = require('request')
const Discord = require("discord.js");
const config = require('../../config.json');
const md5 = require('md5');
const prefix = config.prefix;
const fs = require("fs")

module.exports = (bot) => {

	function myYT(){
		request("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC8ZrZA_GxEkQTuBDxWgAtCg&key=AIzaSyDHX7lpuPj-dX3dlr9psH3FmRQCtWkx2E8",
		    (err,res,body) => {
		    	if(err) {
		    		bot.setGame("Couldn't update status retrying.",'https://twitch.tv/chisdealhd')
		    		return
		    	}
		        var myyoutube = JSON.parse(body);
			}
		)
	}
	
	function UBGYT(){
		request("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC8ZrZA_GxEkQTuBDxWgAtCg&key=AIzaSyDHX7lpuPj-dX3dlr9psH3FmRQCtWkx2E8",
		    (err,res,body) => {
		    	if(err) {
		    		bot.setGame("Couldn't update status retrying.",'https://twitch.tv/chisdealhd')
		    		return
		    	}
		        var ubg = JSON.parse(body);
			}
		)
	}
	
/*	function something(){
		request("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC8ZrZA_GxEkQTuBDxWgAtCg&key=AIzaSyDHX7lpuPj-dX3dlr9psH3FmRQCtWkx2E8",
		    (err,res,body) => {
		    	if(err) {
		    		bot.setGame("Couldn't update status retrying.",'https://twitch.tv/chisdealhd')
		    		return
		    	}
		        var data = JSON.parse(body);
			}
		)
	}
	
	function somethign111(){
		request("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC8ZrZA_GxEkQTuBDxWgAtCg&key=AIzaSyDHX7lpuPj-dX3dlr9psH3FmRQCtWkx2E8",
		    (err,res,body) => {
		    	if(err) {
		    		bot.setGame("Couldn't update status retrying.",'https://twitch.tv/chisdealhd')
		    		return
		    	}
		        var data = JSON.parse(body);
			}
		)
	}
	
	function updateGame(){
		request("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC8ZrZA_GxEkQTuBDxWgAtCg&key=AIzaSyDHX7lpuPj-dX3dlr9psH3FmRQCtWkx2E8",
		    (err,res,body) => {
		    	if(err) {
		    		bot.setGame("Couldn't update status retrying.",'https://twitch.tv/chisdealhd')
		    		return
		    	}
		        var data = JSON.parse(body);
		        bot.client.user.setGame('Do '+ prefix +' help for commands | ChisdealHD Subscriber: ' +data.items[0].statistics.subscriberCount+ ' Over '+data.items[0].statistics.viewCount+ ' Viewers in Total','https://twitch.tv/chisdealhd')
			}
		)
	}
	
	function updateGame(){
		request("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC8ZrZA_GxEkQTuBDxWgAtCg&key=AIzaSyDHX7lpuPj-dX3dlr9psH3FmRQCtWkx2E8",
		    (err,res,body) => {
		    	if(err) {
		    		bot.setGame("Couldn't update status retrying.",'https://twitch.tv/chisdealhd')
		    		return
		    	}
		        var data = JSON.parse(body);
		        bot.client.user.setGame('Do '+ prefix +' help for commands | ChisdealHD Subscriber: ' +data.items[0].statistics.subscriberCount+ ' Over '+data.items[0].statistics.viewCount+ ' Viewers in Total','https://twitch.tv/chisdealhd')
			}
		)
	}
	
	function updateGame(){
		request("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC8ZrZA_GxEkQTuBDxWgAtCg&key=AIzaSyDHX7lpuPj-dX3dlr9psH3FmRQCtWkx2E8",
		    (err,res,body) => {
		    	if(err) {
		    		bot.setGame("Couldn't update status retrying.",'https://twitch.tv/chisdealhd')
		    		return
		    	}
		        var data = JSON.parse(body);
		        bot.client.user.setGame('Do '+ prefix +' help for commands | ChisdealHD Subscriber: ' +data.items[0].statistics.subscriberCount+ ' Over '+data.items[0].statistics.viewCount+ ' Viewers in Total','https://twitch.tv/chisdealhd')
			}
		)
	}
	
	function updateGame(){
		request("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC8ZrZA_GxEkQTuBDxWgAtCg&key=AIzaSyDHX7lpuPj-dX3dlr9psH3FmRQCtWkx2E8",
		    (err,res,body) => {
		    	if(err) {
		    		bot.setGame("Couldn't update status retrying.",'https://twitch.tv/chisdealhd')
		    		return
		    	}
		        var data = JSON.parse(body);
		        bot.client.user.setGame('Do '+ prefix +' help for commands | ChisdealHD Subscriber: ' +data.items[0].statistics.subscriberCount+ ' Over '+data.items[0].statistics.viewCount+ ' Viewers in Total','https://twitch.tv/chisdealhd')
			}
		)
	}
	
	function updateGame(){
		request("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC8ZrZA_GxEkQTuBDxWgAtCg&key=AIzaSyDHX7lpuPj-dX3dlr9psH3FmRQCtWkx2E8",
		    (err,res,body) => {
		    	if(err) {
		    		bot.setGame("Couldn't update status retrying.",'https://twitch.tv/chisdealhd')
		    		return
		    	}
		        var data = JSON.parse(body);
		        bot.client.user.setGame('Do '+ prefix +' help for commands | ChisdealHD Subscriber: ' +data.items[0].statistics.subscriberCount+ ' Over '+data.items[0].statistics.viewCount+ ' Viewers in Total','https://twitch.tv/chisdealhd')
			}
		)
	}
	
	function updateGame(){
		request("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC8ZrZA_GxEkQTuBDxWgAtCg&key=AIzaSyDHX7lpuPj-dX3dlr9psH3FmRQCtWkx2E8",
		    (err,res,body) => {
		    	if(err) {
		    		bot.setGame("Couldn't update status retrying.",'https://twitch.tv/chisdealhd')
		    		return
		    	}
		        var data = JSON.parse(body);
		        bot.client.user.setGame('Do '+ prefix +' help for commands | ChisdealHD Subscriber: ' +data.items[0].statistics.subscriberCount+ ' Over '+data.items[0].statistics.viewCount+ ' Viewers in Total','https://twitch.tv/chisdealhd')
			}
		)
	}
	
	function updateGame(){
		request("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC8ZrZA_GxEkQTuBDxWgAtCg&key=AIzaSyDHX7lpuPj-dX3dlr9psH3FmRQCtWkx2E8",
		    (err,res,body) => {
		    	if(err) {
		    		bot.setGame("Couldn't update status retrying.",'https://twitch.tv/chisdealhd')
		    		return
		    	}
		        var data = JSON.parse(body);
		        bot.client.user.setGame('Do '+ prefix +' help for commands | ChisdealHD Subscriber: ' +data.items[0].statistics.subscriberCount+ ' Over '+data.items[0].statistics.viewCount+ ' Viewers in Total','https://twitch.tv/chisdealhd')
			}
		)
	}
	
	function updateGame(){
		request("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC8ZrZA_GxEkQTuBDxWgAtCg&key=AIzaSyDHX7lpuPj-dX3dlr9psH3FmRQCtWkx2E8",
		    (err,res,body) => {
		    	if(err) {
		    		bot.setGame("Couldn't update status retrying.",'https://twitch.tv/chisdealhd')
		    		return
		    	}
		        var data = JSON.parse(body);
		        bot.client.user.setGame('Do '+ prefix +' help for commands | ChisdealHD Subscriber: ' +data.items[0].statistics.subscriberCount+ ' Over '+data.items[0].statistics.viewCount+ ' Viewers in Total','https://twitch.tv/chisdealhd')
			}
		)
	}*/
	
	bot.client.on('ready', () => {
		UBGYT()
		setInterval(UBGYT, 10 * 1000)
	})
	
	bot.client.on('ready', () => {
		myYT()
		setInterval(myYT, 10 * 1000)
	})

	
bot.client.on('ready', function() {

	setInterval(() => {

        fs.readFile('./status.txt', 'utf8', function(err, data) {

        var games = data.toString().split('\n')
		
        bot.client.user.setGame(games[Math.floor(Math.random()* games.length)],'https://twitch.tv/chisdealhd', function(err) {

		console.log(err)
        console.log(games)

            if (err) {

                message.channel.sendMessage("ERROR has be MADE!" + err);

            }

       });

    });

}, 12000)

});

/*	bot.addTraditionalCommand('YT ChisdealHD', message => {

		let embed = new Discord.RichEmbed();
		embed.setColor(0x9900FF)
		embed.setTitle('ChisdealHD Youtube Channel')
		embed.setURL('http://youtube.com/ChisdealHD')
		embed.setThumbnail("http://hexcraft.pro:8004/playingart?sid=1&")
		embed.addField("Subscribe: ", data.items[0].statistics.subscriberCount)
		embed.addField("Total Viewers: ", data.items[0].statistics.viewCount)
		embed.addField("Latest Video: ", data.items[0].statistics.viewCount)
		embed.setFooter('ChisdealHD BOT!')

		message.channel.send({embed})
	})*/
}