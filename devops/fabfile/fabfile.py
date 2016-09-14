"""Fabric is a deployment automation framework for automating the management of multiple servers. 
This makes the life of a system admin or devops engineer much easier, more efficent and less error prone.
Example of server deployment gone wrong: Knight Capital
"""

#!/usr/bin/env python
from fabric.api import*


env.hosts = [ '192.168.1.100', '192.168.1.101', '192.168.1.102' ]  #can use any host


def uptime():
  local('uptime')


