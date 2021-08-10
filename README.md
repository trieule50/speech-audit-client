# Speech Audit
![Image of People Speaking](https://image.flaticon.com/icons/png/512/1141/1141031.png)

## Project Description
Has there ever been a situation where you were unsure how a sentence or paragraph is perceived by others? With the help of this app, Speech Audit, and IBM's Speech to Text and Tone Analyzer API, users are able to see what emotion others may perceive in your sentence!

**Link To Site:** [Speech Audit](https://speechaudit.netlify.app/)

## Preparation
1. Fork and clone this repository
2. Install dependencies with `<yarn install react-bootstrap@next bootstrap@5.0.2 react-router-dom>`
3. Run the app with `<yarn start>`

### Programs/Application Used:
- React
- BootStrap
- CSS
- JSX
- IBM Watson

## Learning Experience


## Setting Up Project
One of the key feature of React is the compostion of the components. Similar to function in vanilla Javascript, components are reuseable function in React. Before diving into the creating the app, understanding the components hierarchy. 

![Component Hierarchy](https://media.git.generalassemb.ly/user/36270/files/43f8a500-f31a-11eb-8a5b-e4a77da3c50b)


### Setting Up Core Structure
#### React Components
From the Component Hierarchy, the user login is the main prop that is drill through each component. 

#### Dynamic API Calls
By using a principle from LEAN called pull planning, in which the project collaboratively start with the end goal and works backward toward the start date, the text to tone was create first. The dynamic API call for the text to tone was done in under the `<_handleSubmit>` function which uses the POST method and passed in the text from the formData. And then dotting into the tone results.

```JS
const _handleSubmit = async(event) => {
        event.preventDefault();
        try{
            const response = await fetch('https://trieu-speech-audit-api.herokuapp.com/text', 
            {method: 'POST', 
            body: JSON.stringify({text: formData.text}), 
            headers:{
                'Content-Type': 'application/json',
            }})
            if(response.status === 200){
                const data = await response.json()
                setTone(data.result.document_tone.tones)
            }
        }catch(error){
            console.log(error)
        }
    }
```

Next API call is for the user authentication. 

```JS
//Sign In API Call
const _handleSignin = async (event) => {
    event.preventDefault();
    try{
        const response = await fetch('https://trieu-speech-audit-api.herokuapp.com/user/login', {
        method: 'POST',
        body: JSON.stringify(signinData),
        headers:{
            'Content-Type': 'application/json',
        }
        })
        if(response.status === 200){
            const data = await response.json()
            handleSetLoggedIn(data)
            history.push('/')
            window.location.reload()
        }else{
            alert(response.statusText)
        }
    }catch(err){
        console.log(err)
    }
}
```

```JS
//Sign Up API Call
const _handleSignup = async(event) => {
    event.preventDefault();
    if(!error){
        try{
            const response = await fetch('https://trieu-speech-audit-api.herokuapp.com/user/register', {
            method:'POST',
            body: JSON.stringify(signupData),
            headers: {
                'Content-Type': 'application/json'
            }
            });
            const data = await response.json();
            if(response.status === 201){
            setSuccess(true);
            setTimeout(() => {
                    history.push('/signin')
                },2500)
            }
        }catch(error){
            console.log(error)
        }
    }
}
```

#### Presenting Data

For the individual tone result. Two tones, which is the most noticeable tone are presesented. 

```JS
<h2>Result:</h2>
    {tone.map((data, i) => {
        if(!tone){
            return <h3>No tone detected. Try Again.</h3>
            }else{ 
            return(
            <h3 key={i}>{data.tone_name}</h3>
            )}
        })}
```

#### Focusing on User Experience
The app was created with the mindset off mobile first to get the best user experience. As well as implementing notification when there is a success or failure action. 

## Problem Areas
- User Authentication - one of the issue that was presented was getting the current user information. With the help of the backend, I was able to store the user token key and user's email in the local storage to then later grab and used to render the front page. 

- Audio upload - there are two problems regarding the audio upload. Linking file reader to allow the user to upload any file and making an API using formData.
 
## Future Directions
- Working on the audio to text to render the tone. 

## Accomplishments
- App is responsive
- App has an user authentication

## References
- [IBM Watson - Tone Analysis](https://cloud.ibm.com/apidocs/tone-analyzer?code=node#data-handling)
- [IBM Watson - Speech to Text](https://cloud.ibm.com/apidocs/speech-to-text?code=node)
- [React Bootstrap](https://react-bootstrap.github.io/components/forms/)
- [Speech Icon](https://www.flaticon.com/free-icon/conversation_4359295?term=speech%20audit&page=1&position=2&page=1&position=2&related_id=4359295&origin=search)
- [Chat Icon](https://www.flaticon.com/free-icon/chat_1141031?term=speech&page=1&position=10&page=1&position=10&related_id=1141031&origin=search)
- [Sign In Icon](https://www.flaticon.com/free-icon/sign-in_908164?term=sign%20in&page=1&position=25&page=1&position=25&related_id=908164&origin=search)
- [Upload Icon](https://www.flaticon.com/free-icon/upload_3039527?term=upload&page=1&position=25&page=1&position=25&related_id=3039527&origin=search)
- [Perception Icon](https://www.flaticon.com/free-icon/opinion_5226377?term=perception&page=1&position=89&page=1&position=89&related_id=5226377&origin=search)


<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
