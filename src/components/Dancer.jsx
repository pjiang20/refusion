import "./Dancer.css";
import CircleIcon from "./CircleIcon";
import { useDraggable } from "@dnd-kit/core";

const Dancer = ({color}) => {
    const {attributes, listeners, setNodeRef} = useDraggable({
        id: 'unique id',
    });


    return (
    <div 
        ref={setNodeRef}
        className="dancer-main"
        {...listeners}
        {...attributes}
    >
        <CircleIcon color={color}>1</CircleIcon>
        <p>Dancer Name</p>
    </div>
    );
};

export default Dancer;