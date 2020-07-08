# Upload Test

## Install

`git clone https://github.com/markhoney/upload.git`

The following is only needed for the Express demo, as all frontend libraries are pulled from the UnPKG CDN:

`npm install`

## Run

The following will run a minimal Express server to serve the HTML file (index.html) used in this test:

`npm start`

However, Express is not needed. The single static HTML file can be directly opened in a browser, or served by any web server.

## Online

The [GitHub repository](https://github.com/markhoney/upload) hosting this code has been configured to serve the demo page via GitHub Pages, and can be accessed at:

[https://markhoney.github.io/upload/](https://markhoney.github.io/upload/)

## Technology

[Vue.js](https://vuejs.org/) is used to provide the frontend smarts in this demo. [Tailwind CSS](https://tailwindcss.com/) has been added as a simple way to make the page look pretty, and several [Tailwind Components](https://tailwindcomponents.com/) were used to speed things up.

## Testing

Any simple Excel spreadsheet can be uploaded, but there's a test spreadsheet (called Test.xlsx) in the root of this repository.
