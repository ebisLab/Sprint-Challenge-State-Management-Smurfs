1. **What problem does the context API help solve?**

Based off the hell I've had to go through, it seems Context API has helped eliminitate passing props down from component to compoenent.

2. **In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?**
- actions is what happened
- reducers shows changes that the actions sent to the store
- store holds application state where any compoenent can access it, literally reminds me of an actual store where everything is. 

3. **What is the difference between Application state and Component state? When would be a good time to use one over the other?**
- Application state => is immutable and global
- Componnent state => local
4. **Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?**
- thunk is another word for function. redux thunk is like the bouncer at a club, the middleware that provides the ability to handle asynchronous operations 
- action-creators are functions that create actions. 
5. **What is your favorite state management system you've learned and this sprint? Please explain why!**
i like setState, it helped me with my form management. Redux because that's wha i currently rememeber. 