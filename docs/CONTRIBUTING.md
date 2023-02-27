# Contribution



# 🖱️ How to Contribute 

If you think that you can add a new feature or want to fix a bug, we invite you to contribute to Generate-QR-code and make this project better. To start contributing, follow the below instructions:

1. Create a folder at your desire location (usually at your desktop).

2. Open Git Bash Here

3. Create a Git repository.

   Run command `git init`

4. [Fork](https://github.com/MSB-s-Projects/Generate-QR-code) the project. Click on the <a href="https://github.com/MSB-s-Projects/Generate-QR-code/fork"><img src="https://i.imgur.com/G4z1kEe.png" height="15" width="15"></a> icon in the top right to get started.

5. Clone your forked repository of project.

```bash
git clone https://github.com/MSB-s-Projects/Generate-QR-code.git
```

6. Navigate to the project directory.

```bash
cd Generate-QR-code
```

7. Add a reference(remote) to the original repository.

```bash
git remote add upstream https://github.com/MSB-s-Projects/Generate-QR-code.git
```

8. Check the remotes for this repository.

```bash
git remote -v
```

9. Always take a pull from the upstream repository to your main branch to keep it updated as per the main project repository.

```bash
git pull upstream main
```

10. Create a new branch(prefer a branch name that relates to your assigned issue).

```bash
git checkout -b <YOUR_BRANCH_NAME>
```

11. Perform your desired changes to the code base.

12. Check your changes.

```bash
git status
```

```bash
git  diff
```

13. Stage your changes.

```bash
git add . <\files_that_you_made_changes>
```

14. Commit your changes.

```bash
git commit -m "Commit Message"
```

15. Push the committed changes in your feature branch to your remote repository.

```bash
git push -u origin <your_branch_name>
```

16. To create a pull request, click on `compare and pull requests`.

17. Add an appropriate title and description to your PR explaining your changes.

18. Click on `Create pull request`.

Congratulations🎉, you have made a PR to the Generate QR code application.
Wait for your submission to be accepted and your PR to be merged by a maintainer.

## 🫴 How to Do Your First Pull Request?  
   ***(We are providing some Resource from where you can Learn)***

1. [Learn from Video](https://www.youtube.com/watch?v=nkuYH40cjo4)
2. [Open Source Guide](https://opensource.guide/how-to-contribute/)

## Code of Conduct
   Please abide by the open source community guidelines.
- [Code of Conduct](CODE_OF_CONDUCT.md)


###### replace \<YOUR USERNAME\> with your profile name of GitHub
```git
git clone https://github.com/<YOUR USERNAME>/Generate-QR-code.git
```

- make changes in the fork and push them
  
  - ###### main logic of the app can be found in : [`/routes/index.js`](../routes/index.js)

- create a pull request
- 

## Docs for reference
- qrcode library of JavaScript was used in creating this app you can read about it from [here](https://www.npmjs.com/package/qrcode).

## Local Setup

- ### After running the `git clone` command:
```
cd Generate-QR-code/
```

- ### To install all the dependencies run:

###### if using `yarn`
```terminal
yarn install
```

###### if using `npm`
```terminal
npm install
```

- ### To start the server:
###### if using `yarn`
```terminal
yarn start
```

###### if using `npm`
```terminal
npm start
```

- #### The website can be accessed at: [`https://localhost:3000`](https://localhost:3000)
