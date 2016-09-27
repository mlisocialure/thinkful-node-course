import praw
import time


from praw.helpers import comment_stream


r = praw.Reddit("Han Solo snappy response")
r.login()

target_text = "i love you"
response_text = "[I know](https://youtu.be/sO-KR-14uXM)"



processed = []
while True:
    for c in comment_stream(r, 'all'):   #posting to all subreddits! it is ok if a few subs end up banning me
        if target_text == c.body.lower() and c.id not in processed: #if find comment not in cache
            print('Han shot first! :@')
            c.reply(response_text)
            processed.append(c.id)   #then push the response 
            time.sleep(10)
    
