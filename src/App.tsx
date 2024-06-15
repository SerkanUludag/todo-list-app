import React, { useState } from 'react';
import { DndContext, DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import tasks from './data/tasks';
import Column from './components/Column';
import { Layout, Button } from 'antd';
import TaskForm from './components/TaskForm';
import { TaskType } from './types';

const statuses = ['To Do', 'In Progress', 'Done'];

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const [taskData, setTaskData] = useState(tasks);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDragStart = (event: DragStartEvent) => {
    console.log('drag start', event);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    setTaskData((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === active.id) {
          return { ...task, status: over.id as string };
        }
        return task;
      });
      return updatedTasks;
    });
  };

  const handleCreateTask = (task: TaskType) => {
    setTaskData((prevTasks) => [...prevTasks, task]);
    setIsModalOpen(false);
  };

  const columns = statuses.map((status) => ({
    id: status,
    title: status,
    tasks: taskData.filter((task) => task.status === status),
  }));

  return (
    <Layout>
      <Header>
        <h1 style={{ color: 'white' }}>Todo List</h1>
      </Header>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <Content style={{ display: 'flex', padding: '24px' }}>
          {columns.map((column, index) => (
            <Column
              key={index}
              id={column.id}
              title={column.title}
              tasks={column.tasks}
            />
          ))}
        </Content>
      </DndContext>
      <Footer>
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          Create Task
        </Button>
      </Footer>
      <TaskForm
        open={isModalOpen}
        onCreate={handleCreateTask}
        onCancel={() => setIsModalOpen(false)}
      />
    </Layout>
  );
};

export default App;
