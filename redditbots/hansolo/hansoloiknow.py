
import praw
import time
from praw.helpers import comment_stream

r = praw.Reddit("han_solo_response")
r.login()


target_text = "i love you"
response_text = "I know"

target1_text = "i hate you"
response1_text = "The feeling is mutual:("


 
processed = []
while True:
    for c in comment_stream(r, 'all'):   #posting to all subreddits! it is ok if a few subs end up banning me
        if target_text == c.body.lower() and c.id not in processed: #if find comment not in cache
            print('Han shot first! :@')
            c.reply(response_text)
            processed.append(c.id)   #then push the response 
            time.sleep(2)
            
    for c1 in comment_stream(r, 'all'):   #posting to all subreddits! it is ok if a few subs end up banning me
        if target1_text == c1.body.lower() and c1.id not in processed: #if find comment not in cache
            print('Greedo shot first! :@')
            c1.reply(response1_text)
            processed.append(c1.id)   #then push the response 
            time.sleep(2)   
        

        

