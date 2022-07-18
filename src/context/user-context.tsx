import React, { createContext, useContext, useState, useReducer } from "react";

type Action = {type: string; payload?: any, value?: any; key?: any}
type User = {
  userName?: string,
  email?: string,
  walletId?: string
}
type UserDispatch = ( action: Action ) => void
type UserProviderProps = {children: React.ReactNode}

const UserContext = createContext<{state: User; dispatch: UserDispatch} | undefined>(undefined);


const initialState = {
  userName: "Test User",
  email: '',
  walletId: '',
}

const userReducer = (state: User, action: Action)=> {
  console.log("!!!!userReducer action", action);
  switch (action.type) {
    case "reset":
      return initialState;
    // case 'setUserName': {
    //   return {
    //     ...state,
    //     userName: action.payload
    //   }
    // }
    case 'setUserFields': {
      return {
        ...state,
        [action.key]: action.value
      }
    }
    default: {
      // return state
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function UserProvider({ children }:UserProviderProps) {
  // const [state, dispatch] = useState(initialState);
  const [state, dispatch] = React.useReducer(userReducer, initialState)
  const value = {state, dispatch}
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}



function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider')
  }
  return context
}


export { UserProvider, useUser };


// async actions => instruction here
// https://kentcdodds.com/blog/how-to-use-react-context-effectively

// or divide to two parts

// const UserContext = createContext<UserState | undefined>(undefined);
// const UserDispatchContext = createContext<UserDispatch | undefined>(undefined);

// <UserContext.Provider value={state}>
//   <UserDispatchContext.Provider value={dispatch}>
//     {children}
//   </UserDispatchContext.Provider>
// </UserContext.Provider>

// function useUser() {
//   const context = useContext(UserContext)
//   if (context === undefined) {
//     throw new Error('useUserState must be used within a UserProvider')
//   }
//   return context
// }

// function useUserDispatch() {
//   const context = useContext(UserDispatchContext)
//   if (context === undefined) {
//     throw new Error('useUserDispatch must be used within a UserProvider')
//   }
//   return context
// }

// export { UserProvider, useUser, useUserDispatch };