import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const Test = () => {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: 'test id',
    });
    const style = {
        width: '50px',
        transform: CSS.Translate.toString(transform),
    };


    return (
        <div className="test" ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <p>test!</p>
        </div>
    );
};

export default Test;