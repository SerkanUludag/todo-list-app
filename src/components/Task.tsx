import React from 'react';
import { Card } from 'antd';
import { useDraggable } from '@dnd-kit/core';

interface TaskProps {
  id: string;
  title: string;
  description: string;
  assignee: string;
}

const Task: React.FC<TaskProps> = ({ id, title, description, assignee }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id,
    });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transition: 'transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        opacity: transform ? 0.8 : 1,
        cursor: 'grabbing',
        zIndex: isDragging ? 1000 : undefined,
      }
    : undefined;

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card title={title}>
        <p>{description}</p>
        <p>
          <strong>Assignee:</strong> {assignee}
        </p>
      </Card>
    </div>
  );
};

export default Task;
