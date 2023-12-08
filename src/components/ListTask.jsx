import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const ListTasks = () => {
  const tasks = useSelector((state) => state.task.userTask);
  
  return (
    <>
      <div className="card-container rounded-md">
        {tasks?.length === 0 ? (
          <p>You have no tasks</p>
        ) : (
          <div className="shadow-md p-4 bg-blue-100 border-spacing-3">
            {tasks?.map((item) => (
              <div key={item.id} style={{ marginBottom: "10px" }}>
                <Task {...item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ListTasks;
