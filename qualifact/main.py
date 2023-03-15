import os
import discord
import commands
from discord.ext.commands import Command
from dotenv import load_dotenv

load_dotenv()
TOKEN = os.getenv("DISCORD_TOKEN")
GUILD = os.getenv("DISCORD_GUILD")
# User defined imports

# Path: user img input -> parse image -> calculate -> return number 
# or {double, double} -> calculate -> return number

client = discord.Client()

@client.event
async def on_ready():
    guild = discord.utils.get(client.guilds, name = GUILD)

    print(
        f'{client.user} is connected to: ' f'{guild.name}(id : {guild.id})'
    )
client.run(TOKEN)
