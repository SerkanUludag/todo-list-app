import React from 'react';
import Task from './Task';
import { useDroppable } from '@dnd-kit/core';

interface ColumnProps {
  title: string;
  tasks: Array<{
    id: string;
    title: string;
    description: string;
    assignee: string;
  }>;
}

const Column: React.FC<ColumnProps> = ({ title, tasks }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: title,
  });
  const style = {
    color: isOver ? 'green' : undefined,
    margin: '0 8px',
    flex: 1,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <h2>{title}</h2>
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

export default Column;
