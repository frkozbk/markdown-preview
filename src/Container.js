import React from 'react'
import './Container.scss'


function Container({title,onChange,content}) {
    
    

    return (
        <div id="editor-container">
            <header id="header">
                <h1 id="header-title">{title}</h1>
            </header>
            <main id="main">
                <textarea id="editor" value={content} onChange={(e)=>{onChange(e.target.value)
                }}></textarea>
            </main>
        </div>
    )
}
export default Container