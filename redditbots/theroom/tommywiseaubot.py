import praw
import time
from praw.helpers import comment_stream

r = praw.Reddit("Tommy Wiseau one liner")
r.login()


target_text = "wiseau"
response_text = "You Are Tearing Me Apart {}!"

 
processed = []
while True:
    for c in comment_stream(r, 'all'):   #posting to all subreddits! it is ok if a few subs end up banning me
        if target_text in c.body.lower() and c.id not in processed: #if find comment not in cache
            print('You Are Tearing Me Apart Lisa!@')
            c.reply(response_text.format(c.author)) #use PRAW's author method to invoke the triggering redditor's username
            processed.append(c.id)   #then push the response 
            time.sleep(2)

    
        

        
