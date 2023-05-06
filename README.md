# create-mini-react-store

【只】轻度封装 react 的 createContext + Provider + useContext，方便使用

> 要求 react>=16.8.0 支持 hook

## 安装

```bash
npm i --save create-mini-react-store
```

## 使用

```jsx

import createReactStore from 'create-mini-react-store';
import { observer } from 'mobx-react-lite';

const { useStore } = createReactStore({
  listStore: new ListEntity(),
  detailStore: new DetailEntity()
});

// 假设数据在初始化的时候就确定了，例如mobx的entity，则可以直接用useStore + mobx-react-lite作配合渲染
function App = () => {
  const { listStore, detailStore } = useStore();

  return (
    // render something
  );
}

export default observer(App);


```

## 需要用到 Provider 的情况

- 部分 Context 数据是在初始化 createReactStore 时不能确定的，可以配合 Provider 传 value 的方式。

- 同类组件数据多例的情况。
