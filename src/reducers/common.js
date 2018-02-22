// const defaultState  = {
//     appName : 'Channel',
//     token : null,
// }

// export default (state = defaultState, action) => {
//     switch(action.type){
//         case 'APP_LOAD':
//             return{
//                 ...state, 
//                 token: action.token || null,
//                 appLoaded: true,
//                 currentUser: action.payload ? action.payload.user : null
//             };
//         case 'REDIRECT':
//             return{
//                 ...state, redirectTo:null
//             };
//         case 'SETTINGS_SAVED':
//             return{
//                 ...state,
//                 redirectTo: action.error ? null : '/',
//                 currentUser : action.error ? null : action.payload.user
//             };
//         case 'LOGOUT':
//             return{
//                 ...state,
//                 redirectTo:'/',
//                 token: null,
//                 currentUser:null
//             };  
//         case 'LOGIN':
//         case 'REGISTER':
//             return {
//                 ...state, 
//                 redirectTo : action.error ? null : '/',
//                 token: action.error ? null : action.payload.user.token,
//                 currentUser: action.error ? null : action.payload.user
//             }
// // console.log(this.props.redirectTo);

//     }
//     return state;
// }

const defaultState = {
    appName: 'Conduit',
    token: null, 
  };
  
  export default (state = defaultState, action) => {
    switch (action.type) {
      case 'APP_LOAD':
        return {
          ...state,
          token: action.token || null,
          appLoaded: true,
          currentUser: action.payload ? action.payload.user : null
        };
      case 'REDIRECT':
        return { ...state, redirectTo: null };
      case 'LOGOUT':
        return { ...state, redirectTo: '/', token: null, currentUser: null };
      case 'SETTINGS_SAVED':
        return {
          ...state,
          redirectTo: action.error ? null : '/',
          currentUser: action.error ? null : action.payload.user
        };
      case 'LOGIN':
      case 'REGISTER':
        return {
          ...state,
          redirectTo: action.error ? null : '/',
          token: action.error ? null : action.payload.user.token,
          currentUser: action.error ? null : action.payload.user
        };
    }
    return state;
  };