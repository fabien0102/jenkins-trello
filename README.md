jenkins-trello
==============

Little node.js script to link jenkins &amp; trello (update a board background color after a build).

## Required
This project must have some plugins in jenkins:

* [NodeJS plugin](https://wiki.jenkins-ci.org/display/JENKINS/NodeJS+Plugin) 
* [Jenkins GIT plugin](http://wiki.jenkins-ci.org/display/JENKINS/Git+Plugin)


## Global configuration
Jenkins-trello needs following environment variables:

* `TRELLO_APP_KEY` - App key
* `TRELLO_OAUTH_ACCESS_TOKEN` - Token API
* `TRELLO_BOARD` - The trello board will change it background

To generate a token, please see [gettingstarted](https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user)

You can add these variables into *http://{jenkins-server}:8080/configure*

## Trello job
In this part we will create a trello job, this job will be trigged by an other job later.

Add a new job and put this configuration:
###Code gestion
GIT Repository

	git@github.com:fabien0102/jenkins-trello.git

### Build environment
Add a node.js environment (cf [NodeJS plugin](https://wiki.jenkins-ci.org/display/JENKINS/NodeJS+Plugin))

### Build
Shell script

	npm install && npm start

## Your job
After your job (with all my tests for example), you just need to set a `Trigger parameterized build on other projects` with following parameters:

![](img/jenkins-trigger.PNG)

You can also set a trigger for `failed` event ;)

Have fun !