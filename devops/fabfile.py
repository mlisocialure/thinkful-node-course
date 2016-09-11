#!/usr/bin/env python
from fabric.api import local
from fabric.api import env, run



env.hosts = [ '192.168.1.100', '192.168.1.101', '192.168.1.102' ]  #can use any host


def uptime():
  local('uptime')
