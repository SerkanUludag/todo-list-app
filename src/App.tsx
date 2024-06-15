import React, { useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import tasks from './data/tasks';
import Column from './components/Column';
import { Layout, Button } from 'antd';
import TaskForm from './components/TaskForm';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const [taskData, setTaskData] = useState(tasks);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      console.log(updatedTasks);
      return updatedTasks;
    });
  };

  const handleCreateTask = (task: any) => {
    setTaskData((prevTasks) => [...prevTasks, task]);
    setIsModalVisible(false);
  };

  // Dynamically infer the statuses
  const statuses = Array.from(new Set(taskData.map((task) => task.status)));

  const columns = statuses.map((status) => ({
    title: status,
    tasks: taskData.filter((task) => task.status === status),
  }));

  return (
    <Layout>
      <Header>
        <h1 style={{ color: 'white' }}>Todo List</h1>
      </Header>
      <DndContext onDragEnd={handleDragEnd}>
        <Content style={{ display: 'flex', padding: '24px' }}>
          {columns.map((column, index) => (
            <Column key={index} title={column.title} tasks={column.tasks} />
          ))}
        </Content>
      </DndContext>
      <Footer>
        <Button type="primary" onClick={() => setIsModalVisible(true)}>
          Create Task
        </Button>
      </Footer>
      <TaskForm
        visible={isModalVisible}
        onCreate={handleCreateTask}
        onCancel={() => setIsModalVisible(false)}
        statuses={statuses}
      />
    </Layout>
  );
};

export default App;
