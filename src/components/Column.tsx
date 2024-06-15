import React from 'react';
import Task from './Task';
import { useDroppable } from '@dnd-kit/core';

interface ColumnProps {
  id: string;
  title: string;
  tasks: Array<{
    id: string;
    title: string;
    description: string;
    assignee: string;
  }>;
}

const Column: React.FC<ColumnProps> = ({ id, title, tasks }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        overflowY: 'auto',
        overflowX: 'hidden',
        color: isOver ? 'green' : undefined,
        margin: '0 8px',
        flex: 1,
      }}
    >
      <>
        <h2>{title}</h2>
        {tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </>
    </div>
  );
};

export default Column;
