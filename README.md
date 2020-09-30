### To visit deployed site:  https://contract-automation.netlify.app/

# The Contract Automation Platform
### Task made as part of interview process and bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
---
## Requirements
- Homepage - link to the two other pages. 
- Contract list page - list all contracts available in the platform.
- Customer list page - list all customers and the contracts connected to each customer.
There is also a button for each customer which deletes the customer and all its contracts.
- The contract and customer data are held in the redux store
- The application isn’t connected to a server.
---
## Getting started 
---
### Prerequisites
* npm

### Installing
Use `npm` package manager to 
* install the required dependencies:  
```
$ npm install  
```
* start the dev server:
```
$ npm start
```
* build for deployment:
```
$ npm build
```
## Deployment
* Netlify  
https://www.netlify.com/


## Testing
* Cypress

```
$ npm run cy:open
```

Launches the Cypress Test Runner.<br /> 
See the section about [cypress command line open](https://docs.cypress.io/guides/guides/command-line.html#cypress-open) for more information.

## Built with
* React
* Redux
* React Router
* Styled Components
* Babel
* Webpack
