import AddTask from "./components/AddTask";
import ListTasks from "./components/ListTask";

function App() {
  return (
    <>
      <section className="bg-img relative opacity-20"></section>
      <section className="absolute top-0 left-0 right-0 grid place-items-center h-screen ">
        <div
          style={{ width: 600 }}
          className=" justify-center shadow-md w-500 p-4 "
        >
          <AddTask />
          <ListTasks />
        </div>
      </section>
    </>
  );
}

export default App;
