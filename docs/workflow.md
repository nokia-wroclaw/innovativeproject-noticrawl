# Workflow
## Getting started
Each task has an *Issue* associated with it. *Issues* are created and assigned to team members by a leader. When you start resoving an *Issue*, you **have to change** a *Label* from *To Do* to *Doing*
<br> ![](./images/workflow/issue_labels.png)

## Before writing a code
Before starting writing a code, **create a new branch from branch *develop***. You can use following commands: <br> 
`git checkout develop` - switch to branch *develop* <br>
`git checkout -b <branch name>` - create a new branch named <branch name> from branch *develop* <br>
Name the new branch using this convention: *{Issue number}-{Issue title}* and use only lowercase and hyphens. So for example for an *Issue* named `Sign-in page setup #1` branch shuld be named `1-sign-in-page-setup`.  
 
## After writing some code
After writing some code and pushing **at least one commit** to repository, you should create a *Pull request*, so others can see changes you make and review them.
<br> ![](./images/workflow/new_pull_request_1.png)
<br><br> ![](./images/workflow/new_pull_request_2.png)
<br> <br> ![](./images/workflow/new_pull_request_3.png)

## After finishing task
After finishing task change *Issue* and *Pull request* label from *Doing* to *To Reviev* and notify others, so they can review your code.

## Merging
After successful review you can merge your pull request.
