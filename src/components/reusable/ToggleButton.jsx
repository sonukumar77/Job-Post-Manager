const ToggleButton = () => {
    return (
        <label className="relative inline-block w-16 h-8" >
            <input type="checkbox" className="opacity-0 w-0 h-0 peer" />
            <span className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full cursor-pointer transition-all duration-400 peer-checked:bg-green-600 peer-focus:ring-2 peer-focus:ring-gray-300 peer-checked:before:translate-x-6 before:absolute before:content-[''] before:h-6 before:w-6 before:left-1 before:bottom-1 before:bg-white before:rounded-full before:transition-all before:duration-400"></span>
        </label>
    )
}

export default ToggleButton;