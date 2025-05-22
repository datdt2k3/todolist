import React from "react";
import { useState } from "react";
const Todo = () => {
  const [todolist, setTodolist] = useState([
    {
      id: 1,
      name: "cong viec 1",
      status: false,
    },
    {
      id: 2,
      name: "cong viec 2",
      status: false,
    },
  ]);
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
            <form>
              <input
                type="text"
                className="border rounded py-2 w-1/2 mr-2 p-2"
                placeholder="Thêm công việc"
              />
              <button className="bg-blue-500 font-bold text-white px-3 py-2 rounded hover:bg-blue-600">
                Thêm
              </button>
            </form>
          </div>
          {/* danh sách công việc */}
          <div className="mt-5 border rounded p-3">
            <ul>
              <li className="w-lg mx-auto">
                <div>
                  {todolist.map(({ id, name, status }) => (
                    <div key={id} className="flex justify-between my-2">
                      <input type="checkbox" />
                      <span className="flex border rounded grow items-center px-2 ml-2">
                        {name}
                      </span>
                      <button className="bg-red-500 font-bold text-white px-3 py-2 rounded hover:bg-red-600 ml-2">
                        Xoá
                      </button>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
