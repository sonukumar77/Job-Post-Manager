import Duplicate from "./icons/Duplicate"
import Trash from "./icons/Trash"

const DropdownMenu = ({ handleDeletePost, handleDuplicatePost }) => {
    return (
        <div className="mr-4">
            <ul className="p-2 bg-gray-400">
                <li className="flex cursor-pointer p-2" onClick={handleDeletePost}>
                    <Trash
                        svgProps={{ width: "28px", height: "28px" }}
                        pathProps={{ stroke: "red" }}
                    />
                    <span>Delete</span>
                </li>
                <li className="flex cursor-pointer p-2" onClick={handleDuplicatePost}>
                    <Duplicate
                        svgProps={{ width: "28px", height: "28px", fill: "green" }}
                    />
                    <span>Duplicate</span>
                </li>
            </ul>
        </div>
    )
}

export default DropdownMenu
