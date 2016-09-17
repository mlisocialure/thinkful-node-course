
import praw
import time
import OAuth2Util


from praw.helpers import comment_stream


r = praw.Reddit("Useragent")
o = OAuth2Util.OAuth2Util(r)

o.refresh(force=True)

while True:
    print(r.get_me().comment_karma)
    time.sleep(3600)

target_text = "i love you"
response_text = "I know"



processed = []
while True:
    for c in comment_stream(r, 'all'):   #posting to all subreddits! it is ok if a few subs end up banning me
        if target_text == c.body.lower() and c.id not in processed: #if find comment not in cache
            print('Han shot first! :@')
            c.reply(response_text)
            processed.append(c.id)   #then push the response 
            time.sleep(2)
    

        

