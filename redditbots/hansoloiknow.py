
import praw
import time
from praw.helpers import comment_stream
 
r = praw.Reddit("han_solo_response")
r.login()
 
target_text = "I love you"
response_text = "I know"
 
processed = []
while True:
    for c in comment_stream(r, 'all'):
        if target_text in c.body and c.id not in processed: #if find comment not in cache
            c.reply(response_text)
            processed.append(c.id)   #then push the response 
            time.sleep(20)

