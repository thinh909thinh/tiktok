import {themeContex} from './themeContex'
import { useContext } from 'react';
import "./App.css"
function Para({theme}){
    theme=useContext(themeContex)
    return (
            <div className={theme}>
                <p> loreeenjsdfjs sjdfnsfn dasdnad  ad ad  ad ad a dá d á </p>
            </div>
    )
}
export default Para