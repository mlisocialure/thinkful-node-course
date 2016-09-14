
#sample fabric instance deployment script:
from fabric.api import *

def cleanup_env(directory_path):      #deleting old deployment instance first
    sudo ('rm -rf %s' % directory_path)

def install(directory_path):    #installing an instance of my web app into production
    with cd(directory_path):
        sudo ('virtualenv ve --no-site-packages')
    with prefix('source %sve/bin/activate' % directory_path):
        sudo ('pip install mysite')

def restart():
    sudo('service mysite restart')

def stop():
    sudo('service mysite stop')

def run():
    sudo ('service mysite run')

def main():       # redeploy the web app
    deployment_path = '/srv/www/yourwebsite'
    stop()
    cleanup_env(deployment_path)
    install()
    run()

#to run this script, simply type out in terminal: fab main -H 'your deployment server'


# For a more elaborate example of how to deploy a server using fabric: talk a bit about the 'with' keywoard
# https://gist.github.com/gcollazo/495372
