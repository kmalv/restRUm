---------------------------------------------------------------------------------
SETTING UP ENVIRONMENT
---------------------------------------------------------------------------------


Main software involved so far:
- Springboot - Backend 
    - Gradle (Groovy) - Build and run the backend
- REACT - Frontend
____________________________________________


The project directory will eventually look like this (only important files mentioned):

- restrum
    - restrumBackend : Spring related stuff
        - src/main/java/com/cs431/restrumSpringboot : has all the main files we need to code in
            - DemoHelloController.java : the dummy file I've kept for everyone to test if the backend is set up on their end
            - RestrumBackendApplication.java : think of this as the Brain of the Backend, application file runs every other backend file
        - build.gradle : has all the Gradle related settings
    - restrumFrontend : React related stuff (to be added)
        - src/app/api/page.js : Main changes need to be made here for the landing page
____________________________________________


BACKEND SETUP (based on https://spring.io/guides/gs/spring-boot/):

1. Make sure you install Java (v17+), Gradle & Gradlew (Kotlin v1.7.10+; Groovy v3.0.13+), Springboot (v3.0.3+)
   - Gradle and Gradlew: I followed the sdkman way for installation and then upgrade to gradlew 
      - https://gradle.org/install/
      - Make sure the ./gradlew command is recognized in your terminal
   - Springboot: Follow 8.1.2 Gradle Installation and Spring CLI installation 
      - https://docs.spring.io/spring-boot/docs/1.0.0.RC5/reference/html/getting-started-installing-spring-boot.html
      - Make sure spring --version gives some response in the terminal
2. Clone the Git Repo, you should see a directory structure like above
3. Navigate to the restrum/restrumBackend directory
4. Run **./gradlew bootRun**
   - If you see build failed, something went wrong, try debugging
   - A successful build and run should print a bunch of logs and say something like: 
      > <==========---> 80% EXECUTING [12s]
      > :bootRun
5. Go to a separate terminal outside and run **curl localhost:8080** while the above thing is still running
   - It should display: _Hello Afsana, Kayla, Kenisha, Will :D_
   - Go to localhost:8080 on your browser, you should see the same message
____________________________________________

FRONTEND SETUP: 

1. Install Node.js
    - https://nodejs.org/en
    - Verify installation by running npm --version or npx --version => 9.5.1
2. Clone the Git repo, you should see a directory structure like above

***Update 4.8.23***
I have removed the node_modules and .next folders from the git repo and added them to the .gitignore file to improve efficiency, since the node_modules file especially is huuuuge!

If you type `ls` into your terminal while in the `restrumFrontend` folder, and you do not see folders named `node_modules` or get an error when attempting to run **npm run dev**, just do the following step before you do step 3:

3a. Run **npm install* in the restrumFrontend directory. This will set up everything and load the node_modules folders so that everything works.

***let me know if that doesn't work! -Kayla***

3. Run **npm run dev** in the restrum_frontend directory
4. Navigate to localhost:3000, you should see a Next.js page with the message _Hello Afsana, Kayla, Kenisha, Will :D_ on top
NOTE: Next.js is a REACT framework for full stack dev. It provides us with certain boilerplates (you can view on localhost:3000) that we can use. If not, we can just delete the code and do a regular REACT frontend. It suuports both. Furthermore it comes with an easy way to deploy on Vercel that will host the application for free upto 1 MIL invocations.
____________________________________________

MAKING CHANGES:

- Backend: After making any change, re-run ./gradlew bootRun and refresh localhost:8080
- Frontend: After making any changes, they are automatically updated to localhost:3000 without re-running or refreshing (exactly why react is the goat)


