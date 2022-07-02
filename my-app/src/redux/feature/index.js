// import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
// import React, { useState } from 'react';
// import { useSelector, useDispatch, Provider } from 'react-redux';
// import { configureStore, createSlice } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';

// const ReduxPage = () => {
//   return(
//     <Provider store={StoreRedux}>
//       <Routes>
//         <Route path="/post"
//           element={
//             <React.Fragment>
//               <AddPostForm />
//               <PostList />
//             </React.Fragment>
//           }
//         />
//         <Route path="/posts/:postId" element={<SinglePostForm/>} />
//         <Route path="/editPost/:postId" element={<EditPostForm/>} />
//       </Routes>
//     </Provider>

//   )
// }
// const PostList = () => {

//   const posts = useSelector(state => state.post)
//   const [test, setTest] = useState("tan dep trai");
//   const renderedPosts = posts.map(post => (
//     <article key={post.id} style={{backgroundColor: 'aqua', margin: 15}}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </article>
//   ))

//   return (
//     <section >
//       <h2>Posts</h2>
//       {renderedPosts}
//       <input value={test} onChange={()=>{setTest("abc")}}></input>
//     </section>
//   )
// }
// const AddPostForm = () => {
//   const [title, setTitle] = useState('')
//   const [content, setContent] = useState('')
//   const [userId, setUserId] = useState('')

//   const dispatch = useDispatch()
//   const users = useSelector((state) => state.users)

//   const onTitleChanged = (e) => setTitle(e.target.value)
//   const onContentChanged = (e) => setContent(e.target.value)
//   const onAuthorChanged = (e) => setUserId(e.target.value)

//   const onSavePostClicked = () => {
//     if (title && content) {
//       dispatch(postAdded(title, content, userId))
//       setTitle('')
//       setContent('')
//     }
//   }

//   const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

//   const usersOptions = users.map((user) => (
//     <option key={user.id} value={user.id}>
//       {user.name}
//     </option>
//   ))

//   return (
//     <section>
//       <h2>Add a New Post</h2>
//       <form>
//         <label htmlFor="postTitle">Post Title:</label>
//         <input
//           type="text"
//           id="postTitle"
//           name="postTitle"
//           placeholder="What's on your mind?"
//           value={title}
//           onChange={onTitleChanged}
//         />
//         <label htmlFor="postAuthor">Author:</label>
//         <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
//           <option value=""></option>
//           {usersOptions}
//         </select>
//         <label htmlFor="postContent">Content:</label>
//         <textarea
//           id="postContent"
//           name="postContent"
//           value={content}
//           onChange={onContentChanged}
//         />
//         <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
//           Save Post
//         </button>
//       </form>
//     </section>
//   )
// }
// const EditPostForm = () => {

//   // const { postId } = match.params
//   const { postId } = useParams();
//   // console.log(postId);

//   const post = useSelector((state) =>
//     state.post.find((post) => post.id === postId)
//   )

//   const [title, setTitle] = useState(post.title)
//   const [content, setContent] = useState(post.content)

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   // navigate('/')

//   const onTitleChanged = (e) => setTitle(e.target.value)
//   const onContentChanged = (e) => setContent(e.target.value)

//   const onSavePostClicked = () => {
//     if (title && content) {
//       dispatch(postUpdate({ id: postId, title, content }))
//       // navigate(`/posts/${postId}`)
//       navigate("/post");
//     }
//   }

//   return (
//     <section>
//       <h2>Edit Post</h2>
//       <form>
//         <label htmlFor="postTitle">Post Title:</label>
//         <input
//           type="text"
//           id="postTitle"
//           name="postTitle"
//           placeholder="What's on your mind?"
//           value={title}
//           onChange={onTitleChanged}
//         />
//         <label htmlFor="postContent">Content:</label>
//         <textarea
//           id="postContent"
//           name="postContent"
//           value={content}
//           onChange={onContentChanged}
//         />
//       </form>
//       <button type="button" onClick={onSavePostClicked}>
//         Save Post
//       </button>
//     </section>
//   )
// }
// const SinglePostForm = () => {

//   const { postId } = useParams();

//   const post = useSelector((state) =>
//     state.post.find((post) => post.id === postId)
//   )
//   // console.log("post:", post);
//   if (!post) {
//     return (
//       <section>
//         <h2>Post not found!</h2>
//       </section>
//     )
//   }

//   return (
//     <section>
//       <article>
//         <h2>{post.title}</h2>
//         <div>
//           <PostAuthor userId={post.user} />
//           <TimeAgo timestamp={post.date} />
//         </div>
//         <p>{post.content}</p>
//         <ReactionButtons post={post} />
//         <Link to={`/editPost/${post.id}`} className="button">
//           Edit Post
//         </Link>
//       </article>
//     </section>
//   )
// }
// const PostAuthor = ({ userId }) => {
//   // console.log("userID:", userId);
//   const author = useSelector((state) =>
//     state.users.find((user) => user.id === userId)
//   )

//   return <span>by {author ? author.name : 'Unknown author'}</span>
// }
// const TimeAgo = ({ timestamp }) => {
//   let timeAgo = ''
//   if (timestamp) {
//     const date = parseISO(timestamp)
//     const timePeriod = formatDistanceToNow(date)
//     timeAgo = `${timePeriod} ago`
//   }

//   return (
//     <span title={timestamp}>
//       &nbsp; <i>{timeAgo}</i>
//     </span>
//   )
// }

// const reactionEmoji = {
//   thumbsUp: '👍',
//   hooray: '🎉',
//   heart: '❤️',
//   rocket: '🚀',
//   eyes: '👀',
// }

// const ReactionButtons = ({ post }) => {
//   const dispatch = useDispatch()

//   const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
//     return (
//       <button
//         key={name}
//         type="button"
//         className="muted-button reaction-button"
//         onClick={() =>
//           dispatch(reactionAdded({ postId: post.id, reaction: name }))
//         }
//       >
//         {emoji} {post.reactions[name]}
//       </button>
//     )
//   })

//   return <div>{reactionButtons}</div>
// }
// const StoreRedux = configureStore({
//   reducer:{
//     // counter: CounterReducer,
//     // post: PostReducer,
//     // users: userSlice,
//     // alerts: alertReducer,
//   },
//   middleware:[logger, thunk],
// });
// const initialStateUser = [
//   { id: '0', name: 'Tianna Jenkins' },
//   { id: '1', name: 'Kevin Grant' },
//   { id: '2', name: 'Madison Price' },
// ]

// const usersSlice = createSlice({
//   name: 'users',
//   initialState: initialStateUser,
//   reducers: {},
// });
// const initialState = [
//   {
//     id: '1',
//     title: 'First Post!',
//     content: 'Hello!',
//     user: '0',
//     date: sub(new Date(), { minutes: 10 }).toISOString(),
//     reactions: {
//       thumbsUp: 0,
//       hooray: 0,
//       heart: 0,
//       rocket: 0,
//       eyes: 0,
//     },
//   },
//   {
//     id: '2',
//     title: 'Second Post',
//     content: 'More text',
//     user: '2',
//     date: sub(new Date(), { minutes: 5 }).toISOString(),
//     reactions: {
//       thumbsUp: 0,
//       hooray: 0,
//       heart: 0,
//       rocket: 0,
//       eyes: 0,
//     },
//   },
// ]
// const PostSlice = createSlice({
//   name: "post",
//   initialState,
//   reducers:{
//     postAdded: {
//       reducer(state, action){
//       state.push(action.payload);
//       },    
//       prepare(title, content, userId) {
//         return {
//           payload: {
//             id: nanoid(),
//             date: new Date().toISOString(),
//             title,
//             content,
//             user: userId,
//             reactions: {
//               thumbsUp: 0,
//               hooray: 0,
//               heart: 0,
//               rocket: 0,
//               eyes: 0,
//             },
//           },
//         }
//       },
//   },
//     reactionAdded(state, action) {
//       const { postId, reaction } = action.payload
//       const existingPost = state.find((post) => post.id === postId)
//       if (existingPost) {
//         existingPost.reactions[reaction]++
//       }
//     },
//     // postMes: (state, action) => {
//     //   switch(action.type){
//     //     case "TEST": return [...state, {content: "tan dep trai", title: "test"}];
//     //     default: return [...state, {content: "tan sieu dep trai", title:"default"}];
//     //   }
//     // }
//     postUpdate:(state, action) => {
//       const {id, title, content} = action.payload;
//       const existPost = state.find((post)=>post.id===id);
//       // console.log(existPost);
//       if(existPost){
//         existPost.title = title;
//         existPost.content = content
//       }
//       // console.log(existPost);
//     }
//   }
// });
// const CounterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0,
//     name: 'tan',
//   },
//   reducers: {
//     increment: state => {state.value += 1; state.name= "dlkf"},
//     decrement: state => { state.value -=1; state.name="bcd"},
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//       state.name = action.type;
//     }
//   },
//   // extraReducers:
// });

// export const { increment, decrement, incrementByAmount } = CounterSlice.actions

// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }
// export const incrementWait = (amount) => {

//   return((dispatch)=>{
//     setTimeout(()=>{
//       dispatch(incrementByAmount(amount))
//     }, 2000);
//   })
// }
// export const selectCount = (state) => state.counter.value
// export default ReduxPage;

// //firestorage.rules