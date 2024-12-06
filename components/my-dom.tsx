"use dom"
import './style.css'

export default function MyDom({}: { dom: import('expo/dom').DOMProps }) {
    return (
        <div>
            <h1>Test Text</h1>
            <h1>I know it's pretty amazing</h1>
        </div>
    )
}