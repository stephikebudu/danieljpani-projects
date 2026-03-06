# Guideline
- Ensure last PR has been closed before pushing your current week’s project commit(s) because if an old PR is open every commit you push to that branch will automatically be in that pull request (PR)
- Each weekly project should have its separate pull request so I can review properly and effectively. If I haven’t reviewed and you want to push a new week’s changes to GitHub, please call my attention to it.

I have reorganised the project, so it’s easier to track your progress.
For each week’s project, please follow these steps for a clean workflow:

* Step 1: Download the new and latest version of the project you will be working with henceforth using:  
`git clone git@github.com:stephikebudu/danieljpani-projects.git`

* Step 2: Switch to `dev` branch (**DO NOT WORK ON MAIN BRANCH**) and update `dev` branch with `main` using these commands:  
`git checkout dev`  
`git pull origin main`

* Step 3: Work on `dev` branch following the instructions in the `README` file of each week, ensure you maintain folder structure, do not create a new file/folder unless stated otherwise in the `README` file. When you’re done and have committed your changes, use this command to update `dev` branch on GitHub:  
`git push -u origin dev`

* Step 4: Open a pull request and request a review: Go to GitHub after successfully pushing to `dev` branch, then you'll notice a prompt to open a pull request to merge `dev` into `main`, click the button, title your request and by your right hand side you'll see a small “search bar” thingy titled "Request Review", add my email (stephikebudu@gmail.com) there and click my name once I pop up then submit your pull request, **DO NOT MERGE INTO MAIN BRANCH** after opening the pull request. I will merge after reviewing your code.

For every new week, before you start making new changes, do the following:

1. On your local computer, open the project in VSCode and make sure you are on `dev` branch. If you’re on `main`, simply run `git checkout dev` to switch to `dev` branch.
2. Run `git pull origin main` to get latest updates I have merged.
3. Write your code in appropriate folder and file, add and commit changes then run `git push -u origin dev` and repeat Step 4 above to open a PR and request review.