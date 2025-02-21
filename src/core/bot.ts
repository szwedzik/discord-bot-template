import { Client, Collection, ClientOptions } from "discord.js";

export class BotClient extends Client {
  events: Collection<unknown, unknown>;
  commands: Collection<unknown, unknown>;

  constructor(options: ClientOptions) {
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
