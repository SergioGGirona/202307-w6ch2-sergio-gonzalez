import { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../components/store/store';
import { actions } from '../redux/counter.slice';

export function usePhone() {
  const phoneState = useSelector((state: RootState) => state.phone);
  const dispatch = useDispatch<AppDispatch>();

  const add = (number: string) => {
    if (phoneState.phone.length < 9) {
      dispatch(actions.addNumber(number));
    }
  };

  const erase = () => dispatch(actions.deleteNumber());

  const hang = () => {
    dispatch(actions.hang());
    () => {};
  };

  const call = (event: SyntheticEvent) => {
    if (phoneState.phone.length === 9) {
      dispatch(actions.call());
      (event.target as HTMLAnchorElement).classList.add('active');
    }
  };

  return {
    phoneState,
    add,
    erase,
    hang,
    call,
  };
}
