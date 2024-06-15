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
        backgroundColor: isOver ? '#f0f0f0' : undefined,
        border: isOver ? '2px dashed #1890ff' : '2px dashed #d9d9d9',
        margin: '0 8px',
        flex: 1,
        borderRadius: '8px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '16px',
      }}
    >
      <h2 style={{ marginBottom: '16px' }}>{title}</h2>
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

export default Column;
