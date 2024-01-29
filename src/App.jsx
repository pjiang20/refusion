import './App.css';
import Dancer from './components/Dancer';
import { DndContext } from '@dnd-kit/core';
import Test from './components/Test';
import TestDroppable from './components/TestDroppable';
import { useState } from 'react';

const App = () => {
    const [isDropped, setIsDropped] = useState(false);
    const handleDragEnd = (evt) => {
        if (evt.over && evt.over.id === 'droppable') {
            setIsDropped(true);
        }
    };

    // https://codesandbox.io/p/sandbox/dnd-kit-free-drag-n-drop-forked-gj9qmt?file=%2Fsrc%2FApp.js

    return (
        <div className="container">
            <DndContext onDragEnd={handleDragEnd}>
                <h1>Hello World! Refusion</h1>
                <Dancer color="#4E2A84" />              
                <TestDroppable>
                    <Test />
                </TestDroppable>
            </DndContext>
        </div>
    );
};

export default App;
