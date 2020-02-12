import {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

export default function useDarkMode(){
    const [darkMode, setDarkMode] = useLocalStorage('darkmode');
    useEffect(()=>{
        window.localStorage.getItem('darkmode')==='true'?
        document.querySelector('body').classList.add('dark-mode'):
        document.querySelector('body').classList.remove('dark-mode')
        }, [darkMode])
    return [darkMode, setDarkMode]
}