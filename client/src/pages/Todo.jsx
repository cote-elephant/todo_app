import "../styles/main.scss";
import {
  Form,
  InputGroup,
  Dropdown,
  DropdownButton,
  Button,
} from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";

const Todo = () => {
  const [list, setList] = useState([]);
  const [todoContent, setTodoContent] = useState("");
  const [selectedItem, setSelectedItem] = useState("importance");

  useEffect(() => {
    axios
      .get("http://localhost:5173/tasks") // Adjust URL based on backend's address
      .then((res) => {
        setList(res.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the tasks!", error);
      });
  }, []);

  function createTask(e) {
    e.preventDefault();
    const newTask = { content: todoContent, importance: selectedItem };
    axios.post("http://localhost:5173/tasks", newTask).then((res) => {
      setList((prev) => [...prev, res.data]);
      console.log(res.data);
      setTodoContent("");
    });
  }

  // console.log(list);

  function handleChange(e) {
    e.preventDefault();
    setTodoContent(e.target.value);
  }
  function handleSelect(e) {
    setSelectedItem(e);
  }

  // function deleteTask(e){
  //   e.preventDefault();

  // }
  return (
    <>
      <form onSubmit={createTask}>
        <InputGroup className="mb-3">
          <InputGroup.Text>To do what?</InputGroup.Text>
          <Form.Control
            aria-label="todo-item"
            type="text"
            onChange={handleChange}
            value={todoContent}
          />
          <DropdownButton
            variant="outline-secondary"
            title={selectedItem}
            id="input-group-dropdown-1"
            onSelect={handleSelect}
          >
            <Dropdown.Item eventKey="Very Important">
              Very Important
            </Dropdown.Item>
            <Dropdown.Item eventKey="Important">Important</Dropdown.Item>
            <Dropdown.Item eventKey="To Remember">To Remember</Dropdown.Item>
            <Dropdown.Item eventKey="To Remember">To Write</Dropdown.Item>
            <Dropdown.Item eventKey="To Remember">To Check</Dropdown.Item>
          </DropdownButton>
          <Button type="submit">save this task</Button>
        </InputGroup>
      </form>
      <div className="todo-list">
        {list}
        {/* {list && (
          <>
            {list.map((task, index) => (
              <>
                <Button onClick={deleteTask}>Delete</Button>
              </>
            ))}
            <p>
              {list.content} - {list.importance}
            </p>
          </>
        )} */}
      </div>
    </>
  );
};
export default Todo;
