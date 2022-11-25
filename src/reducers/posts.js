const posts = (posts = [], action) => {
  switch(action.type){
    case 'FETCH_ALL':
      // return action.payload;
      return  action.payload;

    case 'CREATE':
      return [...posts, action.payload];
    
      case 'UPDATE':
        return posts.map((post) => post._id === action.payload._id ? action.payload : post )
    default: 
      return posts;
  }
}

export default posts;



// import {createSlice} from '@reduxjs/toolkit';



// const posts = createSlice({
//    name: 'posts',
//    initialState: {
//     posts:[],
//     isFetching: false,
//     error: false
//    },
//    reducers:{
//     getPosts: (posts=[], action)=>{
      
//     switch(action.type){
//     case 'FETCH_ALL':
//       // return action.payload;
//       return  action.payload;

//     case 'CREATE':
//       return [...posts, action.payload];

//     default: 
//       return posts;
//   }
//     }
//    }
// });


// export default posts;