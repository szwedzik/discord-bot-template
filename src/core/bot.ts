import { Client, Collection } from "discord.js";

export class BotClient extends Client {
  events: Collection<any, any>;
  commands: Collection<any, any>;

  constructor(options: any) {
    super(options);
    this.events = new Collection();
    this.commands = new Collection();
  }

  async start(): Promise<void> {
    this.login(process.env.DISCORD_TOKEN)
      .then(() => {
        console.log("Successfully logged in as " + this.user?.tag);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
