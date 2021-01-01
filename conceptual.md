### Conceptual Exercise

Answer the following questions below:

- What is Redux? Why might you use it?

  Redux is a state manager for JS apps. It allows for state to be easily testable, run the same in different environments, and flexible to work with any UI layer, including React.

- What are three features of the Redux developer tool in Chrome?

  Three features of the Redux developer tool are the ability to see the type that was passed to `store.dispatch()`, what the action was and new state when changes are made, and the ability to reset/commit these changes in the application.

- What is a store?

  A Redux store is the state container in the application.

- What is a reducer?

  This is a function that changes the state of the app.

- What is an action?

  Actions are the source of the information for the store to implement changes to the state. They carry a payload of information in an object.

- What is an action creator?

  These are functions that return actio objects.

- How does data flow in a React/Redux application?

  In a React/Redux app, data flows through the use of hooks `useSelector` and `useDispatch`. There functions are explained below.

- What is the purpose of the `<Provider>` component?

  This component tells the React app what Redux store to use for the app by wrapping it around the `<App>` component and passing the store as a prop.

- What is the purpose of the `useSelector` hook? What does it return?

  This hook reads data from the Redux store and sends it to the React components. It returns the state value from the store.

- Describe the `useDispatch` hook. What do you use it for?

  This hook returns the `store.dispatch()` method. The implementation is the following:

  ```javascript
  const dispatch = useDispatch();
  dispatch(someAction);
  ```

  This is used for any component needing to perform an action to the Redux store.

- What is redux-thunk and why would you use it?

  Redux-thunk is middleware for action creators that allows for the writing of asynchronous logic and complex synchronous logic.

- What are propTypes?

  PropTypes in React are a way to document what types the props of a component should be. This provides an error message that explains what went wrong and which component to check.

- Describe the `useCallback` hook. What is it used for?

  This hook is similar to `shouldComponentUpdate` in class components. This returns a memorized callback that will only be performed if any of the reference values given changes.

- Compare and contrast the `useReducer` hook with Redux (including react-redux). Why would you choose one over the other?

  `useReducer` does not offer a global state container, even if this hook can be passed to the React Context of an application. Also, there is no middleware available for `useReducer`. On the contrary, Redux is a truly global state container with access to useful middleware such as Redux-thunk. Plus, Redux does not need to be passed through props like `useReducer` since Redux is global.

  If you have a small-scale application with minimal state does not need to be shared with all components globally, use `useReducer`. If you are working on larger applications or would benifit from global state and asychronous dispatching, go with Redux.
