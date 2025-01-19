## Personal Website Repo
Hi! I hope enjoy my [website](https://rowbotham-evan.github.io/website/).


### Some Workflow and CI Edits 

The building of the site uses hugo, the same as in Miles's source code. The difference is in the CI and maintaining of the website. On my source code, the wesbite is built in a VM and then its files are transfered (via SFTP) to my hosting server. This allows for CI, since everytime you push changes to the repo, it triggers a deployment process. The details of deployment are all within the .github/workflow directory - change it suit your needs and server requirements. There is also trigger a manual deployment option (through actions) if you run into any issues!

### Website Design Credit / Source Code 

This website design was based on Miles McCain's [source code](https://github.com/milesmcc/personal) and of course his [website](https://miles.land/). 

