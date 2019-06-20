import React from 'react'
import './Preview.scss'
import ReactMarkdown from 'react-markdown'
function Preview({title,content}) {
    
    return (
        <div id="preview-container">
            <header id="header">
                <h1 id="header-title">{title}</h1>
            </header>
            <main id="main">
                <div id="preview" >
                    <ReactMarkdown source={content}/>
                </div>
            </main>
        </div>
    )
}
export default Preview