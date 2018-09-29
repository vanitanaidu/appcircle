// import {GoogleAPI, GoogleLogin, GoogleLogout} from 'react-google-oauth';
//
// export default class Login extends Component {
//   responseGoogle = (response) => {
//     var token = google_response.Zi;
//     const requestOptions = {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${google_response.Zi.accessToken}`,
//         'Content-Type': 'application/json',
//         'access_token': `${google_response.Zi.accessToken}`
//       },
//       body: JSON.stringify(token)
//     }
//
//     return fetch(`backend rails api url to google sign in path`, requestOptions)
//       .then(response => {
//         Cookie.set('accesstoken', response.headers.get('access-token'), {
//           expires: 7
//         });
//         Cookie.set('client',response.headers.get('client'), {expires: 7});
//         Cookie.set('tokentype',response.headers.get('token-type'), {expires: 7});
//         Cookie.set('expiry',response.headers.get('expiry'), {expires: 7});
//         Cookie.set('uid', response.headers.get('uid'),{expires: 7});
//     })
//   render() {
//
//     return (
//       <GoogleAPI className="GoogleLogin" clientId="Your client API Key">
//         <div>
//           <GoogleLogin height="10" width="500px" backgroundColor="#4285f4" access="offline" scope="email profile" onLoginSuccess={this.responseGoogle} onFailure={this.responseGoogle}/>
//         </div>
//       </GoogleAPI>
//     )
//   }
// }
