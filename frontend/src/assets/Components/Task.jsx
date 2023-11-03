import React from "react";
import styled from "styled-components";

const task = [
  {
    id: 1,
    taskType: "task",
    taskName: "IMOT",
    taskDescription: "Criar Nova Tarefa",
    taskCreationTime: "17:50",
  },
  {
    id: 2,
    taskType: "event",
    taskName: "Teste2",
    taskDescription: "DescriçãoTeste2",
    taskCreationTime: "15:43",
  },
  {
    id: 3,
    taskType: "event",
    taskName: "Teste3",
    taskDescription: "DescriçãoTeste3",
    taskCreationTime: "11:23",
  },
];

function Task() {
  return (
    <TaskContainer>
      <h1>Tarefas:</h1>
      <ul>
        {task.map((item, index) => (
          <li key={index}>
            {item.taskType === "task" ? "Tarefa:" : "Evento:"} {item.taskName},
            Data: {item.taskCreationTime}
          </li>
        ))}
      </ul>

    </TaskContainer>
  );
}

export default Task;

const TaskContainer = styled.div`
  color: #fff;
`;
