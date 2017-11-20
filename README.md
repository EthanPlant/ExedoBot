# ExedoBot
An open source, general-purpose Discord bot written in Javascript.

## Hosting Guide
### Creating a Discord bot account:
- Visit your [Discord developer console](https://discordapp.com/developers/applications/me). (Log in if you aren't already)
- Create a new app.
- Click on "Create a Bot User".

### Windows:
- Install [Node.js](https://nodejs.org/en/)
- Clone the repository (`git clone https://OfficialExedo/ExedoBot.git` in a command line).
- `cd` to the ExedoBot directory.
- Install dependencies with `npm install` in a command line.
- Rename `example-config.json` to `config.json` and add your Discord API key from your bot user.
- Start the bot with `node index`.

### Linux:
-  Install Node.JS from your package manager (`sudo apt install nodejs npm` in Debian based distros).
- Clone the repository (`git clone https://OfficialExedo/ExedoBot.git` in a command line).
- `cd` to the ExedoBot directory.
- Install dependencies with `npm install` in a command line.
- Rename `example-config.json` to `config.json` and add your Discord API key from your bot user.
- Start the bot with `node index`.

### Mac:
- Install [Node.js](https://nodejs.org/en/)
- Clone the repository (`git clone https://OfficialExedo/ExedoBot.git` in a command line).
- `cd` to the ExedoBot directory.
- Install dependencies with `npm install` in a command line.
- Rename `example-config.json` to `config.json` and add your Discord API key from your bot user.
- Start the bot with `node index`.

### Adding the bot to a server
- Find your bot account's Client ID (found in your developer console).
- Visit the following link:  https://discordapp.com/oauth2/authorize?client_id=INSERT_CLIENT_ID_HERE&scope=bot, replacing your `INSERT_CLIENT_ID_HERE` with your client ID.
 - Select the server you want the bot to join. You MUST have the "Manage Server" permission.
 
 ## Updating
 - Stop the bot if it's currently running (Use Ctrl-C on the terminal window).
 - `cd` to the bot's directory if you aren't there already.
 - `git pull` to pull the latest code from the repo.
 - `npm update` to update dependencies.
 - Restart the bot with `node index`.
 
 # Commands:
 **Help:**
 `!help <command>` - Gives help based on a given command.
 
**Information:**
`!ping` - Pong! Check the bot is functioning.
`!info` - Gives info on the bot.


# Feature Requests:
Have a feature idea? Feel free to open an [issue](https://github.com/OfficialExedo/ExedoBot/issues) to give it to us!

