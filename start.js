'use strict'

require('events').EventEmitter.defaultMaxListeners = 0


/*
███████████████████████████████████████████████████████████████████████████████
██******************** PRESENTED BY t33n Software ***************************██
██                                                                           ██
██                  ████████╗██████╗ ██████╗ ███╗   ██╗                      ██
██                  ╚══██╔══╝╚════██╗╚════██╗████╗  ██║                      ██
██                     ██║    █████╔╝ █████╔╝██╔██╗ ██║                      ██
██                     ██║    ╚═══██╗ ╚═══██╗██║╚██╗██║                      ██
██                     ██║   ██████╔╝██████╔╝██║ ╚████║                      ██
██                     ╚═╝   ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝                      ██
██                                                                           ██
███████████████████████████████████████████████████████████████████████████████


DEFAULT: 0,
AQUA: 1752220,
GREEN: 3066993,
BLUE: 3447003,
PURPLE: 10181046,
GOLD: 15844367,
ORANGE: 15105570,
RED: 15158332,
GREY: 9807270,
DARKER_GREY: 8359053,
NAVY: 3426654,
DARK_AQUA: 1146986,
DARK_GREEN: 2067276,
DARK_BLUE: 2123412,
DARK_PURPLE: 7419530,
DARK_GOLD: 12745742,
DARK_ORANGE: 11027200,
DARK_RED: 10038562,
DARK_GREY: 9936031,
LIGHT_GREY: 12370112,
DARK_NAVY: 2899536



*/























/*
▄██████▄  ▀█████████▄       ▄█    ▄████████  ▄████████     ███        ▄████████
███    ███   ███    ███     ███   ███    ███ ███    ███ ▀█████████▄   ███    ███
███    ███   ███    ███     ███   ███    █▀  ███    █▀     ▀███▀▀██   ███    █▀
███    ███  ▄███▄▄▄██▀      ███  ▄███▄▄▄     ███            ███   ▀   ███
███    ███ ▀▀███▀▀▀██▄      ███ ▀▀███▀▀▀     ███            ███     ▀███████████
███    ███   ███    ██▄     ███   ███    █▄  ███    █▄      ███              ███
███    ███   ███    ███     ███   ███    ███ ███    ███     ███        ▄█    ███
▀██████▀  ▄█████████▀  █▄ ▄███   ██████████ ████████▀     ▄████▀    ▄████████▀
                      ▀▀▀▀▀▀
Here you can add all Objects/Arrays
*/


                           var t33n = {};





















                           /*
                           ████████████████████████████████████████████████████████████████████████████████
                           .__                              __           .__               .__
                           |__| _____ ______   ____________/  |_  ______ |  |  __ __  ____ |__| ____   ______
                           |  |/     \\____ \ /  _ \_  __ \   __\ \____ \|  | |  |  \/ ___\|  |/    \ /  ___/
                           |  |  Y Y  \  |_> >  <_> )  | \/|  |   |  |_> >  |_|  |  / /_/  >  |   |  \\___ \
                           |__|__|_|  /   __/ \____/|__|   |__|   |   __/|____/____/\___  /|__|___|  /____  >
                                    \/|__|                        |__|             /_____/         \/     \/
                              */


                           const  log = require('fancy-log'),
                                chalk = require('chalk'),
                                   fs = require('fs-extra'),
                       chalkAnimation = require( 'chalk-animation' ),
                             gradient = require( 'gradient-string' ),
                                   os = require( 'os' ),
                          os_HOMEpath = os.homedir(),
                      os_Architecture = os.arch(),
                              Discord = require('discord.js'),
                                  bot = new Discord.Client(),






               // #################### ADMIN CONFIG FILE ##########################
                   json_configFile_ADMIN = fs.readFileSync('./admin/config.json', 'utf8'),
                   json_config_ADMIN = JSON.parse(json_configFile_ADMIN),

                   creditsPATH = json_config_ADMIN.creditsPATH,


                   announcements = json_config_ADMIN.announcements,


                   rolesAR = json_config_ADMIN.rolesAR.split(','),



                // #########  YOU MUST IMPORT YOUR CREDITS HERE #################
                json_configFile = fs.readFileSync(creditsPATH, 'utf8'),
                      json_config = JSON.parse(json_configFile),
                                token = json_config.token,
                        channelID = json_config.channelID;















// Delete this part here if you don´t want this ads in your Software
// ----------------------------------------------------------
var ads = gradient('red', 'white').multiline([
                           '',
                           'Presented by',
                           '████████╗██████╗ ██████╗ ███╗   ██╗',
                           '╚══██╔══╝╚════██╗╚════██╗████╗  ██║',
                           '   ██║    █████╔╝ █████╔╝██╔██╗ ██║',
                           '   ██║    ╚═══██╗ ╚═══██╗██║╚██╗██║',
                           '   ██║   ██████╔╝██████╔╝██║ ╚████║',
                           '   ╚═╝   ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝ Software'
].join('\n'));
console.log(ads);
console.log( '\nCheck my Upwork Profile: ' + chalk.white.bgGreen.bold(' upwork.com/fl/dennisdemand ')  + '\n\n');
console.log( gradient('white', 'black')('=======================================\n\n') );
// ----------------------------------------------------------





















































































log('We will login now to Discord! Please wait..\nIf nothing will happen after 10 seconds then something went wrong!\nPlease wait some time & restart the Script in this case because then the problem is Discord Server related! If you will see a error instead you will know that the problem is Discord.js related.\n')
var channel;
bot.login(token);
bot.on('ready', ()  => {
log(`Logged in as: ${bot.user.tag}
Username: ${bot.user.username}
ID: ${bot.user}
`);

   channel = bot.channels.get(channelID);
   channel.send('ᗷOT OᑎᒪIᑎE!\n\nPlease use !𝐡𝐞𝐥𝐩 for all commands.');


}); // bot.on('ready', ()  => {




















var check = 0;
bot.on("message", msg => {
check = check + 1
log('How much messages we already recieved while this bot running?: ' + check)
//if( check == 1 ) enabletextspeakROLE(msg)








/// ############ HELP AREA ##################
if ( msg.content == '!help' && msg.author !== bot.user ) {
setTimeout(() => {

var help = `This Bot will DM announcements. All avaible commands can be found below..

--  --  --  --  --  --
!announce

Permission Level:
- Host, Admin, Moderator

This command can be used to send DM to all members of your Channel (Online & Offline). The announcement text can be defenied at the config.json file..`;


       channel.send({embed: {
           color: 3447003,
           title: '𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐭𝐡𝐞 𝐇𝐞𝐥𝐩 𝐂𝐞𝐧𝐭𝐞𝐫 📑',
           description: help,
         }
       }); // channel.send({embed: {


  }, 500);
  } //  if ( msg.content == '!help' && msg.author !== bot.user ) {


























    if ( msg.content == '!announce' && msg.author !== bot.user && msg.member.roles.some(r=>rolesAR.includes(r.name)) ) {
    setTimeout(() => {
    log('enter !announce area..')


      channel.members.forEach( member => announce(member) ); // channel.members.forEach(member =>

      function announce(member){
       setTimeout(() => {

        log('We found this member name in your channel: ' + member.user.username + '\nID of this member is: ' + member.user + '\n\n')


        log( 'We will send now a DM to this user with this announcements text: ' + announcements )
        member.user.send(announcements)

       }, 1000);
      } // function announce(member){


        }, 500);
      } //  if ( msg.content == '!announce' && msg.author !== bot.user && msg.member.roles.some(r=>rolesAR.includes(r.name)) ) {




















}); // bot.on("message", msg => {


