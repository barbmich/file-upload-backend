# file-upload-backend

requires nodeJS 14 or newer.

To install:
- clone repo.
- visit repo folder.
- run `yarn` to install all dependencies.

To use:
- run `yarn start` to launch the server. This will create a `uploads/` folder in the project folder, if it doesn't exists already.
- make a post request to `http://localhost:4000/upload`.
- the terminal will print information of the file once parsed.
- note that the file extension and filename are not handled as this is besides the purpose of this repo.
