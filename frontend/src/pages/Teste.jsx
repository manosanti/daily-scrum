import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

const HeaderWrapper = styled.header`
  background-color: #333;
  color: white;
  padding: 16px;
  text-align: center;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
`;

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Daily Scrum</h1>
    </HeaderWrapper>
  );
};

const TaskForm = ({ onSubmit }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      onSubmit(task);
      setTask('');
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <label htmlFor="task">Task:</label>
      <input
        type="text"
        id="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </FormWrapper>
  );
};

const TaskList = ({ tasks }) => {
  return (
    <ListWrapper>
      {tasks.map(({ date, tasks }) => (
        <React.Fragment key={date}>
          <h2>{date}</h2>
          <ListWrapper>
            {tasks.map((task, index) => (
              <ListItem key={index}>{task}</ListItem>
            ))}
          </ListWrapper>
        </React.Fragment>
      ))}
    </ListWrapper>
  );
};

const Teste = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskSubmit = (task) => {
    const date = new Date().toLocaleDateString('pt-BR');
    const updatedTasks = tasks.map((item) =>
      item.date === date ? { ...item, tasks: [...item.tasks, task] } : item
    );

    if (!updatedTasks.some((item) => item.date === date)) {
      updatedTasks.push({ date, tasks: [task] });
    }

    setTasks(updatedTasks);
  };

  return (
    <>
      <GlobalStyles />
      <Header />
      <TaskForm onSubmit={handleTaskSubmit} />
      <TaskList tasks={tasks} />
    </>
  );
};

export default Teste;
