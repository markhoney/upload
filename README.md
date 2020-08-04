# Upload Test

## Install

First clone the code from GitHub:

`git clone https://github.com/markhoney/upload.git`

Then install all NPM dependencies:

`npm install`

## Run

The following command will launch this project using the Vue CLI:

`npm run dev`

If a User Interface is more your thing, you can instead launch the project from the Vue CLI's GUI (yes, it's weird that a CLI has a GUI!):

`npm run ui`

## Build

To build this project for deployment, either run the build command in the GUI or run:

`npm run build`

Once built, compiled files that can be served with any web server will be available in the `docs` directory (this is normally the `dist` directory, but has been changed in vue.config.js to allow serving from GitHub Pages). To test serving the code, you can use the `serve` Node app:

`npm run serve`

Note that the following command won't work properly until you've built the project.

## Technology

[Vue.js](https://vuejs.org/) is used to provide the frontend smarts in this demo. [Tailwind CSS](https://tailwindcss.com/) has been added as a simple way to make the page look pretty, and several [Tailwind Components](https://tailwindcomponents.com/) were used to speed things up.

## Testing

Any simple Excel spreadsheet can be uploaded, but there's a test spreadsheet (called Test.xlsx) in the root of this repository.
