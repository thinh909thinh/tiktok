import {themeContex} from './App'
import { useContext } from 'react';
import "./App.css"
function Para({theme}){
    console.log(theme);
    return (
            <div className={theme}>
                <p> loreeenjsdfjs sjdfnsfn dasdnad  ad ad  ad ad a dá d á </p>
            </div>
    )
}
export default Para