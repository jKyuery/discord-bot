from email import message
import discord
import commands as cm

class myClient(discord.client):
    async def on_ready(self):
        print('Logged on as {0}!'.format(self.user))

    async def on_message(self):
        print('Message sent from {0.author}:{0.content}'.format(message))

client = myClient()
client.run('token')