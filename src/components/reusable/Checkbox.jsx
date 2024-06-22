const Checkbox = ({ isChecked, handleCheckbox }) => {
    return (
        <input checked={isChecked} onChange={(e) => handleCheckbox(e)} type="checkbox" className="mr-4 w-6 h-6" name="title" id="title" />
    )
}

export default Checkbox