import {useState} from 'react';

import useLocalStorage from './useLocalStorage';

export default function useDarkMode(key, value){
    window.localStorage.getItem('key')
    useLocalStorage(dark, value)
}