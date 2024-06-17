# [Chrimle.com](https://chrimle.com/) - LaunchPad
This is a hobby project where I setup a website entirely on my own...

## Tech
### Frontend (no Backend exists so far)
- React Native (JavaScript)
### Source Code Management (SCM)
- GitHub
### CD/CI
- GitHub Actions, see [Actions](https://github.com/Chrimle/launch-pad/actions)
### Project Management
- GitHub Projects, see [Chrimle.com](https://github.com/users/Chrimle/projects/1/)
### Hosting
- [AWS Amplify](https://aws.amazon.com/amplify/) + [AWS Route 53](https://aws.amazon.com/route53/)

# Setup & Workflow
## 1. Clone the Repository
**Windows Recommendation**: Use [GitHub Desktop](https://desktop.github.com/).

**Ubuntu Recommendation**: Use *Source Control* as part of [Visual Studio Code](https://code.visualstudio.com/), and optionally the *GitHub*-plugin.

## 2. Install Tools & Packages
```
npm clean install
```

## 3. Build & Deploy locally
```
npm start
```
> [!NOTE]
> Running `npm start` will copy [git-hooks](https://git-scm.com/docs/githooks) from the scripts-folder, which will run Unit-Tests pre-commit.

## 4. Open Pull Request
Refer to an open issue number, see [open issues](https://github.com/Chrimle/launch-pad/issues).
> [!NOTE]
> The `main`-branch is protected from direct commits. All changes require a Pull Request, approved by [@Chrimle](https://github.com/Chrimle).

## 5. CI-Pipeline via GitHub Actions
Once a Pull Request is made, GitHub Actions will perform checks, see [GitHub Actions](https://github.com/Chrimle/launch-pad/actions).

## 6. Build & Deploy
Upon submitting the Pull Request, the new commit in [main](https://github.com/Chrimle/launch-pad/commits/main/) will be built and deployed to [www.chrimle.com](https://www.chrimle.com/) within a couple of minutes.

# Disclaimer
> [!NOTE]
> All logotypes featured on the website belong to their respective owners, and are in no way affiliated with this site.
> References to logotypes and guidelines:
> - [LinkedIn](https://brand.linkedin.com/content/brand/global/en_us/index/visual-identity/logo)
> - [GitHub](https://github.com/logos)
> - [Stack Overflow](https://stackoverflow.design/brand/logo/)
> - [Codingame](https://www.codingame.com/work/press/)
> - [HackerRank](https://www.hackerrank.com/)
