

Message List

@author S Braham [10:09 AM]
Accessibility Live - Readme.md 

#### [Contributors](#contributor)|

- Carl Cross
- Sule Tunkara
- Pelin Diskan 
- Walter Perez
- Sharleen Braham

# </a> Team Charlie
#### [Introduction](#intro)|
[Scope](#scope)|
[Trello Board](#trello) |
[Stack](#stack) |
[Tech Notes](#technotes)|
[Possible Query params](#params) |
[User Stories](#stories) | 
[Your local machine environment](#howto)|
[Useful tutorials](#tutorials)|
[Useful links](#useful) <br>
### <a name="intro"></a>Introduction :
Website : [Transport for London](https://tfl.gov.uk/)
The transport for London website provides people who wish to travel on public transport, with an option to plan their journey. Passengers with disabiities are very important passengers who require accurate information when planning their journey.
Currently, people with a disability are not able to determine whether key facilities, such as a lift, are functioning at a certain station. Neither are they able to know if the stations they plan to use are busy.  
Thus, Accessibility live is a website where pertinent information that is useful to such important passengers will be readily available.
A passenger with a disability will be able to easily plan their journey with current facilities, popular times and other services for a station being presented to them.
The Accessibility live website is built in React and JavaScript on AWS Lambda, hosted on GitHub.

### <a name="scope"></a> Scope :
### <a name="trello"></a>Trello Board :
Link to board if you have one
### <a name="stack"></a>Stack :
|Technology| Version/Docs|
|---|---|
|JavaScript|ES6|
|Node.js|10.15.3|
|ReactJS|[Docs Link](https://reactjs.org/)|
|Express| |
|Cordova| |


|Testing|:speak_no_evil:|


|References|
|---|---|

### <a name="reference"></a>References :
|Twitter-logo|
<div>Icons made by <a href="https://www.flaticon.com/authors/bogdan-rosu" title="Bogdan Rosu">Bogdan Rosu</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

|Facebook-logo|
<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

|Gmail-logo|
<div>Icons made by <a href="https://www.flaticon.com/authors/icomoon" title="Icomoon">Icomoon</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

|Github-logo|
<div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */





### <a name="technotes"></a>Tech Notes :

```
Method  endpoint
POST   /passengers
Table journey planner
|id | starting station | end station | email/Twitter Id | general experience |

```
### <a name="front-end"/></a>Post request schema :
```

```
### <a name="params"/></a>Possible query params :
| `query params` or `endpoints` or TBD |
| --- |
| Find all disabled passengers |
| Find by Underground station |
| Find by Name    |
### <a name="stories"></a>User Stories :
```
As a user
So that I can easily find the information about whether the station facilities are functioning
I want to be able to see the lift information in one place
```
```
As a user
so that I know how many lifts are working in the city
I want to be able to search by Underground station
```
```
As a user
so that I can see the traffic for a particular station
I want to be able to search by Underground station
```
```
As a user
so that I can see only the stations with functioning lifts
I want to be able to filter functioning lifts
```
```
As a user
so that I can select which Underground station can accommodate my needs
I want to be able to see functioning lifts and passenger traffic
```
```
As a user
so that I do not travel to an Underground station that cannot support my disability
I want to be able to see if a station is currently equipped to help me
```
### <a name="howto"></a>Your local machine environment :
Please add info here, what should everyone install ...
### <a name="tutorials"></a>Useful tutorials :
Please add here if you know any for the stack mentioned above...
### <a name="useful"></a> Useful Information and Links:
**Github codebase:**
https://github.com/kodiri/accessibility-live

**Summary of all ideas proposed for the project:**
Ideas proposed as a project included:
Create an option for filtering YouTube videos that are less than 5 or 10 minutes in length.
A website/Application for pollution.
A website/Application for cocktail making
A template for e-commerce shopping
Geo location

Collapse

Message Input


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
