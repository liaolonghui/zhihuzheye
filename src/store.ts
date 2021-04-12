import { createStore } from 'vuex'
import { testData, testPost, ColumnProps, PostProps } from './testData'
interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export interface GlobalDataProps {
  User: UserProps;
  columns: ColumnProps[];
  posts: PostProps[];
}

const store = createStore<GlobalDataProps>({
  state: {
    User: { isLogin: false },
    columns: testData,
    posts: testPost
  },
  mutations: {
    login (state) {
      state.User = {
        isLogin: true,
        name: 'llh',
        id: 5555
      }
    }
  }
})

export default store
