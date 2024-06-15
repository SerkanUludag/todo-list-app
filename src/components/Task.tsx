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
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
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
