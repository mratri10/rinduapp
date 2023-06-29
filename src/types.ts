// types.ts
interface CounterState {
  count: number;
}

interface AddressState {
  data: any,
  error: string
}

interface RootState {
  counter: CounterState;
  address: AddressState
}

export default RootState;