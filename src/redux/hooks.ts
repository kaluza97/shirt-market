import {
    useSelector as useReduxSelector,
    useDispatch as useReduxDispatch,
    TypedUseSelectorHook,
} from 'react-redux';
import type { RootState, AppDispatch } from '@/redux/store';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector
export const useDispatch: () => AppDispatch = useReduxDispatch
