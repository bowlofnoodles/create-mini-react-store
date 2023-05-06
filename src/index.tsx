import React, { useContext, createContext, ProviderProps } from 'react';

function createStore<T extends Record<string, any>>(defaultValue: T) {
  const StoreContext = createContext(defaultValue);

  // 单例且store value只在初始化值赋值一次 可以直接用
  const useStore = () => useContext(StoreContext);

  // 一个模块内如果有多实例store存在 或者store value不只在初始化赋值时改变 那根组件需要引入StoreProvider
  const StoreProvider = (props: Partial<ProviderProps<T>>) => {
    return (
      <StoreContext.Provider
        value={props.hasOwnProperty('value') ? props.value! : defaultValue}
      >
        {props.children}
      </StoreContext.Provider>
    );
  };

  return {
    useStore,
    Provider: StoreProvider
  };
}

export default createStore;
