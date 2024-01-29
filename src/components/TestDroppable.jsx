import "./TestDroppable.css";
import { useDroppable } from "@dnd-kit/core";

const TestDroppable = ({children}) => {
    const {setNodeRef} = useDroppable({
        id: 'test-droppable'
    });

    return (
        <div className="test-stage" ref={setNodeRef}>
            {children}
        </div>
    );
};

export default TestDroppable;