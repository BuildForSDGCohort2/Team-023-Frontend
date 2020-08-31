## Contributing

This is a step-by-step guide on how team members can contribute to this and other repos for this project.

Since all team members have write access, we are not going to use a [Forking Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow) but the simpler [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow). To contribute to the repo, you can follow the following steps:

1. Identify the issue you want to work on from the issues tab and assign it to yourself if it has not already been assigned to you.
2. Clone the repo to your local machine 
`git clone [repo address]` 
or update it if it's already there 
`git pull` or `git fetch && git merge` 
3. Create a new branch from _develop_ using the [recommended branch naming convention](https://docs.google.com/presentation/d/1hvnwv76gX98nAAgTxJp47CremzwPkfzDkXgejQGz2l0/edit#slide=id.g8005fdbe5f_0_121) as specified in the setup guide e.g.
`git checkout -b ft-landing-page`

![Branch naming convention](https://i.postimg.cc/W4gVHcPZ/Screenshot-2020-08-28-at-8-58-09-PM.png)

4. Write code, stage and commit changes using the recommended [commit messages convention](https://docs.google.com/presentation/d/1hvnwv76gX98nAAgTxJp47CremzwPkfzDkXgejQGz2l0/edit#slide=id.g8005fdbe5f_0_98) as specified in the setup guide. Remember to add as footer the issue your commit fixes e.g. **Fixes #25** for a commit that fixes issue number 25.

![Commit messages convention](https://i.postimg.cc/qBGqjykL/Screenshot-2020-08-28-at-8-59-34-PM.png)

5. Push your working branch to Github `git push origin <working branch name>` 

6. Go to the repo on Github and raise a Pull Request (PR) against _develop_ branch. Remember to
    * add at least two (2) team members and @johnotu as reviewers
    * asign PR to yourself
    * add labels where necessary
    * add project
    * add related milestone

![Pull request dialog on Github](https://i.postimg.cc/43L0P8Yc/Screenshot-2020-08-28-at-10-19-51-PM.png)