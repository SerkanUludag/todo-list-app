import React, { useMemo, useState } from 'react';
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from '@dnd-kit/core';
import tasks from './data/tasks.json';
import Column from './components/Column';
import { Layout, Button, Space } from 'antd';
import TaskForm from './components/TaskForm';
import { TaskType } from './types';
import Task from './components/Task';
import { uniqueId } from 'lodash';

const statuses = ['To Do', 'In Progress', 'Done'];

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const [taskData, setTaskData] = useState(
    tasks.map((task) => ({ ...task, id: uniqueId() }))
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State for active task ID during drag
  const [activeId, setActiveId] = useState<string | null>(null);

  // Get the dragging task information
  const draggingTask = useMemo(() => {
    const activeTask = taskData.find((task) => task.id === activeId);
    if (!activeTask) return {} as TaskType;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { status, ...taskInfo } = activeTask;

    return taskInfo;
  }, [activeId, taskData]);

  // Generate columns based on task status
  const columns = useMemo(
    () =>
      statuses.map((status) => ({
        id: status,
        title: status,
        tasks: taskData.filter((task) => task.status === status),
      })),
    [taskData]
  );

  // Handle drag start event
  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  // Handle drag end event
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    // Update task status based on drop target
    setTaskData((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === active.id) {
          return { ...task, status: over.id as string };
        }
        return task;
      });
      return updatedTasks;
    });
    setActiveId(null);
  };

  // Handle task creation
  const handleCreateTask = (task: TaskType) => {
    setTaskData((prevTasks) => [...prevTasks, task]);
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <Header>
        <h1 style={{ color: 'white' }}>Todo List</h1>
      </Header>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <Content style={{ display: 'flex', padding: '24px' }}>
          {/* Render columns */}
          {columns.map((column, index) => (
            <Column
              key={index}
              id={column.id}
              title={column.title}
              tasks={column.tasks}
            />
          ))}
        </Content>
        {/* Render drag overlay */}
        <DragOverlay>
          {activeId ? (
            <Space style={{ opacity: 0.8 }}>
              <Task {...draggingTask} />
            </Space>
          ) : null}
        </DragOverlay>
      </DndContext>
      <Footer>
        {/* Render create task button */}
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          Create Task
        </Button>
      </Footer>
      {/* Render task form */}
      <TaskForm
        open={isModalOpen}
        onCreate={handleCreateTask}
        onCancel={() => setIsModalOpen(false)}
      />
    </Layout>
  );
};

export default App;
