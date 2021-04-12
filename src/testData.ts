export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}
export const testData = [
  {
    id: 1,
    avatar: 'https://picsum.photos/id/237/300/300',
    title: 'aaa',
    description: 'bbb'
  },
  {
    id: 2,
    title: 'aaa',
    description: 'bbb'
  },
  {
    id: 3,
    avatar: 'https://picsum.photos/id/237/300/300',
    title: 'aaa',
    description: 'bbb'
  },
  {
    id: 4,
    avatar: 'https://picsum.photos/id/300/300/300',
    title: 'aaa',
    description: 'bbb'
  },
  {
    id: 5,
    avatar: 'https://picsum.photos/id/237/300/300',
    title: 'aaa',
    description: 'bbb'
  },
  {
    id: 6,
    avatar: 'https://picsum.photos/id/300/300/300',
    title: 'aaa',
    description: 'bbb'
  }
]

export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  columnId: number
}
export const testPost: PostProps[] = [
  {
    id: 1,
    title: 'hhhhh',
    content: 'ggggg',
    image: 'https://picsum.photos/id/137/300/300',
    createdAt: '55-55-55',
    columnId: 1
  },
  {
    id: 5,
    title: 'hhhhh',
    content: 'ggggg',
    image: 'https://picsum.photos/id/257/300/300',
    createdAt: '55-55-55',
    columnId: 1
  },
  {
    id: 54,
    title: 'hhhhh',
    content: 'ggggg',
    image: 'https://picsum.photos/id/287/300/300',
    createdAt: '55-55-55',
    columnId: 1
  },
  {
    id: 424,
    title: 'hhhhh',
    content: 'ggggg',
    image: 'https://picsum.photos/id/347/300/300',
    createdAt: '55-55-55',
    columnId: 2
  },
  {
    id: 525,
    title: 'hhhhh',
    content: 'ggggg安德森凤凰大厦发生过的合法公民换个地方撒大苏打撒旦阿松大大苏打',
    image: 'https://picsum.photos/id/437/300/300',
    createdAt: '55-55-55',
    columnId: 2
  },
  {
    id: 554,
    title: 'hhhh阿松大h',
    content: 'ggggas阿按时大苏打萨达萨达萨达萨达松大dag',
    image: 'https://picsum.photos/id/357/300/300',
    createdAt: '55-55-55',
    columnId: 2
  }
]
