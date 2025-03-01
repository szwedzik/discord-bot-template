import "dotenv/config";
import { BotClient } from "./core/bot";
import { GatewayIntentBits, Partials } from "discord.js";
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const bot = new BotClient({
  intents: [Guilds, GuildMembers, GuildMessages],
  partials: [User, Message, GuildMember, ThreadMember],
});

bot.start();
