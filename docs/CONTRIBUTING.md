# Contribution

## How to Start Contribution

- Fork the repository
- clone the fork by writing the following command

###### replace \<YOUR USERNAME\> with your profile name of GitHub

```git
git clone https://github.com/<YOUR USERNAME>/Generate-QR-code.git
```

- make changes in the fork and push them

  - ###### main logic of the app can be found in : [`/routes/index.js`](../routes/index.js)

- create a pull request

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
