import { ProviderProps } from 'react';
declare function createStore<T extends Record<string, any>>(
  defaultValue: T
): {
  useStore: () => T;
  Provider: (props: Partial<ProviderProps<T>>) => JSX.Element;
};
export default createStore;
