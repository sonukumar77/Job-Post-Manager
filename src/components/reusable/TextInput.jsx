const TextInput = ({ inputValue, handleInput }) => {
    return (
        <input value={inputValue} onChange={(e) => handleInput(e)} type="text" className="w-3/5 outline outline-2 outline-offset-2 placeholder:italic placeholder:text-slate-400" name="title" id="title" placeholder="Job Post Title" />
    )
}

export default TextInput