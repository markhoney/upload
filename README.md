# Upload Test

## Install

`git clone https://github.com/markhoney/upload.git`

The following is only needed for the Express demo, as all frontend libraries are pulled from the UnPKG CDN:

`npm install`

## Run

The following command will launch this project using the Vue CLI:

`npm run serve`

For a nicer looking option, you can instead launch the project from the Vue CLI's GUI (yes, it's weird that a CLI has a GUI!):

`npm run ui`

## Build

To build this project for deployment, either run the build command in the GUI or run:

`npm run build`

Once built, compiled files that can be served with any web server will be available in the `dist` directory.

## Technology

[Vue.js](https://vuejs.org/) is used to provide the frontend smarts in this demo. [Tailwind CSS](https://tailwindcss.com/) has been added as a simple way to make the page look pretty, and several [Tailwind Components](https://tailwindcomponents.com/) were used to speed things up.

## Testing

Any simple Excel spreadsheet can be uploaded, but there's a test spreadsheet (called Test.xlsx) in the root of this repository.
