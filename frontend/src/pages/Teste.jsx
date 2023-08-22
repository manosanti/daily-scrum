import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
// import ContasButton from '../assets/Components/ContasButton';

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

  p {
    margin: 0 auto;
    text-align: center !important;
    font-size: 40px;
    border-radius: 30px;
    padding: 10px 20px;
    border: 2px solid var(--gray);
    width: min-content;
  }

  button {
    cursor: pointer;
    padding: 30px;
    font-size: 25px;
    outline: none;
    border: none;
    color: var(--blue);
    padding: 0;
    transition: .3s;
    margin: 1% 0;

    &:hover {
      color: var(--blue-hover);
    }
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;

  label {
    color: white;
    font-size: 1.3rem;
  }

  input {
    width: 100%;
    outline: none;
    border: none;
    border-radius: 10px;
    padding: 1%;
    background-color: var(--gray-dark);
    color: white;
    margin: 10px 0;
    transition: .3s;

    &:focus {
      outline: none;
      border: none;
    }

    &:hover {
      background-color: var(--gray);
    }
  }

  button {
    cursor: pointer;
    background-color: var(--blue);
    padding: 7px;
    color: white;
    outline: none;
    border: none;
    border-radius: 6px;
    transition: .3s;
    margin: 10px 0 20px 0;

    &:hover {
      transform: scale(1.04);
      background-color: #4e68c3;
    }
  }
`;

const ListWrapper = styled.ul`
  list-style: none;
  border-radius: 20px;
  padding: 30px;
  color: white;
  border: 3px solid var(--gray);

  h2 {
    color: white;
    margin: 25px 0 10px 0;
  }
`;

const ListItem = styled.li`
  border: 2px solid var(--gray-light);
  border-radius: 10px;
  margin-bottom: 5px;
  
  button {
    border-radius: 10px;
    margin-right: 10px;
    padding: 10px;
    cursor: pointer;
    background-color: none;
    border: none;
    outline: none;
    transition: .3s;

    &:hover {
      background-color: #ff000061;
    }
  }
`;

const Header = ({ currentDate }) => {
  return (
    <HeaderWrapper>
      <p>{currentDate}</p>
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
  // Inverte a ordem dos dias (os dias mais recentes ficarão em cima)
  const reversedTasks = [...tasks].reverse();

  const handleTaskRemove = (date, index) => {
    onTaskRemove(date, index);
  };

  return (
    <ListWrapper>
      {reversedTasks.map(({ date, tasks }) => (
        <React.Fragment key={date}>
          <h2>{date}</h2>
            {tasks.map((task, index) => (
              <ListItem key={index}>
                <button onClick={() => handleTaskRemove(date, index)}>
                  ❌
                </button>
                {task}
              </ListItem>
            ))}
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

  const handlePreviousDay = () => {
    const prevDay = new Date(date);
    prevDay.setDate(prevDay.getDate() - 1);
    setDate(prevDay);
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
    saveTasksToLocalStorage(updatedTasks);
  };

  const handleTaskRemove = (date, index) => {
    const updatedTasks = tasks.map((item) =>
      item.date === date ? { ...item, tasks: item.tasks.filter((_, i) => i !== index) } : item
    );

    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const getSavedTasks = () => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  };

  useEffect(() => {
    const savedTasks = getSavedTasks();
    setTasks(savedTasks);
  }, []);

  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const formattedDate = date.toLocaleDateString('pt-BR');

  return (
    <>
      <GlobalStyles />
      {/* <ContasButton
        imageURL='https://cdn-icons-png.flaticon.com/128/3562/3562056.png'
        imageALT='imagem de uma calculadora'
      /> */}
        <HeaderWrapper>
          <button onClick={handlePreviousDay}><FaArrowLeft /></button>
          <button onClick={handleNextDay}><FaArrowRight /></button>
        </HeaderWrapper>
      <Header currentDate={formattedDate} />
      <TaskForm onSubmit={handleTaskSubmit} />
      <TaskList tasks={tasks} onTaskRemove={handleTaskRemove} />
    </>
  );
};

export default Teste;