const TextArea = ({ textareaValue, handleInput }) => {
    return (
        <textarea value={textareaValue} onChange={(e) => handleInput(e)} name="intro" id="intro" className="border-2 border-slate-400 p-2 w-full" cols="60" rows="2" placeholder="The ideal candidate is someone..."></textarea>
    )
}

export default TextArea