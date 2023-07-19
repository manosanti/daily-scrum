import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0 15%;
  }

  * {
    box-sizing: border-box;
  }
`;

const HeaderWrapper = styled.header`
  color: white;
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
  border: 1px solid #ddd;
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
      <label htmlFor="task">Tarefa:</label>
      <input
        type="text"
        id="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Adicionar Tarefa</button>
    </FormWrapper>
  );
};

const TaskList = ({ tasks, onTaskRemove }) => {
  // Inverte a ordem dos dias (os mais recentes ficarão em cima)
  const reversedTasks = [...tasks].reverse();

  const handleTaskRemove = (date, index) => {
    onTaskRemove(date, index);
  };

  return (
    <ListWrapper>
      {reversedTasks.map(({ date, tasks }) => (
        <React.Fragment key={date}>
          <h2>{date}</h2>
          <ListWrapper>
            {tasks.map((task, index) => (
              <ListItem key={index}>
                {task}
                <button onClick={() => handleTaskRemove(date, index)}>
                  Remove
                </button>
              </ListItem>
            ))}
          </ListWrapper>
        </React.Fragment>
      ))}
    </ListWrapper>
  );
};

const Teste = () => {
  const [date, setDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);

  const handleNextDay = () => {
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    setDate(nextDay);
  };

  const handleTaskSubmit = (task) => {
    const dateKey = date.toLocaleDateString('pt-BR');
    const updatedTasks = tasks.map((item) =>
      item.date === dateKey ? { ...item, tasks: [...item.tasks, task] } : item
    );

    if (!updatedTasks.some((item) => item.date === dateKey)) {
      updatedTasks.push({ date: dateKey, tasks: [task] });
    }

    setTasks(updatedTasks);
  };

  const handleTaskRemove = (date, index) => {
    const updatedTasks = tasks.map((item) =>
      item.date === date ? { ...item, tasks: item.tasks.filter((_, i) => i !== index) } : item
    );

    setTasks(updatedTasks);
  };

  return (
    <>
      <GlobalStyles />
      <HeaderWrapper>
        <h1>Daily Scrum ✅</h1>
        <button onClick={handleNextDay}><FaArrowRight /></button>
      </HeaderWrapper>
      <TaskForm onSubmit={handleTaskSubmit} />
      <TaskList tasks={tasks} onTaskRemove={handleTaskRemove} />
    </>
  );
};

export default Teste;