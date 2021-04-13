import { createStore } from 'vuex'
import { testData, testPost, ColumnProps, PostProps } from './testData'
interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId: number
}
export interface GlobalDataProps {
  User: UserProps;
  columns: ColumnProps[];
  posts: PostProps[];
}

const store = createStore<GlobalDataProps>({
  state: {
    User: { isLogin: true, name: '廖龙辉', id: 666, columnId: 1 },
    columns: testData,
    posts: testPost
  },
  mutations: {
    login (state) {
      state.User = { isLogin: true, name: 'llh', id: 5555, columnId: 1 }
    },
    createPost (state, newPost) {
      state.posts.push(newPost)
    }
  },
  getters: {
    getColumnById: (state) => (id: number) => state.columns.find((column) => column.id === id),
    getListById: (state) => (cid: number) => state.posts.filter(post => post.columnId === cid)
  }
})

export default store
