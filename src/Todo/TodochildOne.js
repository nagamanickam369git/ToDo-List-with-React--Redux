import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddTask, EditTask } from "../redux/reducer/conterSlice";
export default function TodochildOne(props) {
  const get = useSelector((state) => state.counter.Todo);
  const dispatch = useDispatch();
  const [cards, stewards] = useState("");
  useEffect(() => {
    stewards(get);
  }, [get]);

  return (
    <>
      <div className="container ">
        <div className="card cards p-3 mt-3">
          <h4 className="mt-2  d-flex justify-content-center">To Do</h4>

          {cards.length === 0
            ? ""
            : cards.map((index, values) => {
              return (
                <div
                  key={values}
                  className="p-1 mt-2 card bordered border-primary "
                >
                  <h5>Title</h5>
                  <div>
                    <select value={'selected'}
                      key={values}
                      className="form-select float-end mx-2 w-50"
                      onChange={(e) => {
                        let el = e.target.parentElement;
                        let get = el.querySelectorAll("span");

                        let obj = {
                          type: e.target.value,
                          TaskTitle: get[0].innerText,
                          TaskDescrption: get[1].innerText,
                        };

                        let sentVal = [];
                        for (let i = 0; i < cards.length; i++) {
                          sentVal.push(cards[i]);
                        }
                        sentVal.splice(values, 1);

                        dispatch(EditTask(sentVal));
                        dispatch(AddTask(obj));
                      }}
                    >
                      <option selected value={"Unassigned"}>
                        Unassigned
                      </option>
                      <option value={"Assigned"}>Assigned</option>
                      {/* <option value={"Completed"}>Completed</option> */}
                    </select>
                    <span value={index.TaskTitle}>{index.TaskTitle}</span>
                    <h5>Descrption</h5>
                    <span value={index.TaskDescrption}>
                      {index.TaskDescrption}
                    </span>
                  </div>

                  <div>
                    <button
                      value={values}
                      className="btn btn-primary mt-1 w-50 "
                      onClick={(e) => {


                        let index = e.target.value;

                        let el = e.target.parentElement.parentElement;
                        let gets = el.querySelectorAll("span");

                        let TaskTitle = gets[0].innerText;
                        let TaskDescrption = gets[1].innerText;
                        let obj = {
                          TaskTitle: TaskTitle,
                          TaskDescrption: TaskDescrption,
                          index: index,
                          type: 'Unassigned'
                        };
                        props.EditFn(obj);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      value={values}
                      className="btn btn-primary mt-1 w-50 "
                      onClick={(e) => {
                        let index = e.target.value;
                        let sentVal = [];
                        for (let i = 0; i < cards.length; i++) {
                          sentVal.push(cards[i]);
                        }
                        sentVal.splice(index, 1);
                        dispatch(EditTask(sentVal));
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
