import asyncio

import genshin

from common.logging import logger

__cache = genshin.Cache(max = 256, ttl= 10)

async def get_notes(gs: genshin.Client, uid: int) -> dict:
    data = await __cache.get(uid)

    if data:
        return data

    # Call API within x number of tries
    # What data should we have in the dictionary that is returned, and when should we stop the retrival of data?
    for _ in range(3):
        logger.info(f"Getting notes for {uid}")
        data = await gs._request_genshin_record("dailyNote", uid, cache=False)

        await asyncio.sleep(0.5)
    # Data cleaning here

    await __cache.set(uid, data)

    return data