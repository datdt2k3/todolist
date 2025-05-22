import React from "react";
import { useState } from "react";
import "../assets/style.css";
import uid from "../utils/randonID";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Todo = () => {
  const [todolist, setTodolist] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uid(),
      name: name,
      status: false,
    };
    if (name !== "") {
      setTodolist([...todolist, newTodo]); // nếu không có (...todolist) thì phần công việc được thêm vào lần đầu tiên sẽ bị thay thế bằng công việc lần thứ 2
      setName("");
      toast.success("Thêm công việc thành công");
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa không ?")) {
      const newTodo = todolist.filter((todo) => todo.id !== id);
      setTodolist(newTodo);
    }
  };

  return (
    <div>
      <div className="border rounded mx-auto w-xl my-5 p-2">
        {/* tiêu đề */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">Todo</h1>
        </div>
        {/* phần thêm todo */}
        <div className="w-full border p-2 text-center mt-5">
          <div>
            <form onSubmit={handleAdd}>
              <input
                type="text"
                className="border rounded py-2 w-1/2 mr-2 p-2"
                placeholder="Thêm công việc"
                onChange={handleChange}
                value={name}
              />
              <button
                type="submit"
                className="bg-blue-500 font-bold text-white px-3 py-2 rounded hover:bg-blue-600"
              >
                Thêm
              </button>
            </form>
          </div>
          {/* danh sách công việc */}
          <div className="mt-5 border rounded p-3">
            <ul>
              <li className="w-lg mx-auto">
                <div>
                  {todolist.length ? (
                    todolist.map(({ id, name, status }) => (
                      <div key={id} className="flex justify-between my-2">
                        <input type="checkbox" />
                        <span
                          className={`flex border rounded grow items-center px-2 ml-2 ${
                            status ? "status" : ""
                          }`}
                        >
                          {name}
                        </span>
                        <button
                          className="bg-red-500 font-bold text-white px-3 py-2 rounded hover:bg-red-600 ml-2"
                          onClick={() => handleDelete(id)}
                        >
                          Xoá
                        </button>
                      </div>
                    ))
                  ) : (
                    <h1>Khong co cong viec 😭</h1>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Todo;

/**
 * State
 * todolist -- lưu trữ thông tin
 * name -- lưu trữ công việc
 * mesage -- lưu trữ thống báo
 */
