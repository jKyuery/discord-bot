from typing import Union, Optional

import discord
from discord.ext import commands

def remove_incomp_keywords(kwargs):
    new_dict = {}

    for k in kwargs:
        if k in ["ephemeral"]:
            continue
        new_dict[k] = kwargs[k]
    return new_dict

class UnifiedContext:
    def __init__(self, orig_ctx: Union[commands.Context, discord.ApplicationContext]) -> None:
        self.__orig_ctx = orig_ctx
        self.is_app_command = isinstance(orig_ctx, discord.ApplicationContext)
        self.author = self.__orig_ctx.author
        self.guild = self.__orig_ctx.guild
        self.channel = self.__orig_ctx.channel
        self._orig_msg: Optional[discord.Message] = None
    
    async def defer(self, **kwargs):
        if self.is_app_command:
            await self.__orig_ctx.defer(**kwargs)
    
    async def orig_msg(self) -> Union[discord.InteractionMessage, discord.Message]:
        if self.is_app_command:
            return await self.__orig_ctx.interaction.original_message()
        return self._orig_msg
    
    async def send_followup(self, *args, **kwargs):
        if self.is_app_command:
            await self.__orig_ctx.send_followup(*args, **kwargs)
        
        else:
            self._orig_msg = await self.__orig_ctx.send(*args, **remove_incomp_keywords(kwargs))
    
    async def respond(self, *args, **kwargs):
        if self.is_app_command:
            await self.__orig_ctx.respond(*args, **kwargs)
        
        else:
            self._orig_msg = await self.__orig_ctx.send(*args, **remove_incomp_keywords(kwargs))
    
    async def edit(self, *args, **kwargs):
        if self.is_app_command:
            await self.__orig_ctx.edit(*args, **kwargs)
        
        else:
            if self._orig_msg:
                await self._orig_msg.edit(*args, **remove_incomp_keywords(kwargs))
            else:
                self._orig_msg = await self.__orig_ctx.send(*args, **remove_incomp_keywords(kwargs))
