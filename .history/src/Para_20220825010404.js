import {themeContex} from './themeContex'
import { useContext } from 'react';
import "./App.css"
function Para(){
    const context=useContext(themeContex)
    return (
            <div className={context.theme}>
                <p> loreeenjsdfjs sjdfnsfn dasdnad  ad ad  ad ad a dá d á </p>
            </div>
    )
}
export default Para