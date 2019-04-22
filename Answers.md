1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
    Array.map(), Object.assign(), Array.concat(),
    The spread operator has the capability to create a new object and extending properties.

1)  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Store - The object that contains all of the items in state. This is where everthing that changes in the app happens.

Actions - These contain an action type and some type of data we associate with the action type. These will be passed into reducers. These will be passed in as an argument to reducers.

Reducers - These are the functions that have the capability to modify state in an immutable way.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application state or Redux state is the state of the WHOLE application. Component state is localized in the specific component. Component state would be used when we have a form that needs to filled out. This component state object will then be used to modify application state.

1.  What is middleware?
    Middleware is basically an "in-between" action and reducer. It will be able to intercept actions and run a function which then continues onto the reducer. It is what makes redux async.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    redux-thunk gives us the capability to make redux which normally is synchronous -> async. We can use redux-thunk to make API calls in action creators.

1.  Which `react-redux` method links up our `components` with our `redux store`?
    The connect method links up our components to the redux store.
