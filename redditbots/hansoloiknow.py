
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
        if target_text in c.body and c.id not in processed:
            c.reply(response_text)
            processed.append(c.id)
            time.sleep(20)

