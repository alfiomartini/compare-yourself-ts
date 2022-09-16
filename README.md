# Compare Yourself

This is a simple application comprising a frontend built using React and Typescript that communicates with a backend REST API developed using aws serverless computing tools. The REST API was defined using AWS API Gateway, and supports endpoints for posting, deleting and getting user's personal information concerning age, height and income. Each endpoint is bound to a specific lambda function written in Python. The definition of the API was inspired by a similar development originally written in Node.js by [Maximilian Schwartzmüller](https://academind.com/). Users information are stored in a simple table defined using the DynamoDB database, while API access is controlled by using Amazon Cognito user pools as authorizer.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
