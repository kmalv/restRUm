---------------------------------------------------------------------------------
SETTING UP ENVIRONMENT
---------------------------------------------------------------------------------


Main software involved so far:
- Next.js has been used as our full-stack solution.
- We have used Material UI for some UI components. It provided pre-styled UI components and built-in hooks to provide additional functionality.
- The react-google-maps/api library has been used to efficiently load and edit the Google Map display and provide an interface to the Google Maps API.
____________________________________________


The project directory should look like this (only important files mentioned):

- restrum : Clone the repo here
    - restrumNext, restrum, however the cloned repo dir has been named : the repo itself
        - src/components : contains our custom components for each page
        - src : contains the pages and their components. The app directory structure of Next.js handles routing automatically, in contrast to other React frameworks and older versions of Next.js.
____________________________________________


STEP-BY-STEP SETUP: 

1. Install Node.js
    - https://nodejs.org/en
    - Verify installation by running npm --version or npx --version => 9.5.1
2. Clone the Git repo, you should see a directory structure like above

***Update 4.8.23***
I have removed the node_modules and .next folders from the git repo and added them to the .gitignore file to improve efficiency, since the node_modules file especially is huuuuge!

If you type `ls` into your terminal while in the `restrumFrontend` folder, and you do not see folders named `node_modules` or get an error when attempting to run **npm run dev**, just do the following step before you do step 3:

3a. Run **npm install* in the restrumFrontend directory. This will set up everything and load the node_modules folders so that everything work.

***Step 3a must be done as per 4/13/23 in order to get MaterialUI, google-maps-react/api, and other npm dependencies installed! If something ever doesn't run properly, just run `npm install` before running `npm run dev` and that will usually resolve any needed dependencies. Otherwise, check the `package.json` file, and run `npm i <name of module that's causing an error> -S`, where the `<name of module thats causing an error>` portion is replaced with the names of any modules that are giving errors after `npm run install` is run. That usually resolves any issues -- most errors are a result of missing dependencies.***

3. Run **npm run dev** in the cloned repo directory (the one containing `packages.json`, `src`, etc...)
4. Once the `ready` notice has displayed in the terminal, Navigate to localhost:3000 in your browser. You should see a Next.js page with the links to specific pages. If it doesn't work, enter the following url into your browser to navigate directly to the map display: `https://localhost:3000/browse`. The app may take a while to load, please be patient and do not reload, terminate `npm run dev`, or close the tab! 
____________________________________________

MAKING CHANGES:

- After making any changes, they are automatically updated to localhost:3000 without re-running or refreshing (exactly why react is the goat)
____________________________________________


