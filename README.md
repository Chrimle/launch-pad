# [Chrimle.com](https://chrimle.com/) - LaunchPad
This is a hobby project where I setup a website entirely on my own...

## Tech
### Frontend (no Backend exists so far)
- React Native (JavaScript)
### Souce Code Management (SCM)
- GitHub
### CD/CI
- GitHub Actions
### Project Management
- GitHub Projects
### Hosting
- AWS Amplify + AWS Route 53


## Setup & Workflow
### 1. Clone the Repository
   **Recommended**: Use [GitHub Desktop](https://desktop.github.com/).
### 2. Install Tools & Packages
   ```
   npm install
   ```
### 3. Build & Deploy locally
   ```
   npm start
   ```
### 4. Open Pull Request
   Refer to the open issue number, see [open issues](https://github.com/Chrimle/launch-pad/issues).
### 5. CI-Pipeline via GitHub Actions
Once a Pull Request is made, GitHub Actions will perform checks, see [GitHub Actions](https://github.com/Chrimle/launch-pad/actions).
### 6. Build & Deploy
Upon submitting the Pull Request, the new commit in [main](https://github.com/Chrimle/launch-pad/commits/main/) will be built and deployed to [www.chrimle.com](https://www.chrimle.com/)
