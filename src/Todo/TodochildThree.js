import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChildThree } from "../redux/reducer/conterSlice";

export default function TodochildThree(props) {
  const get = useSelector((state) => state.counter.Completed);
  const [cards, setcards] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    setcards(get);
  }, [get]);
  return (
    <>
      <div className="container ">
        <div className="card cards p-3 mt-3">
          <h4 className="mt-2  d-flex justify-content-center">Completed</h4>

          {cards.length === 0
            ? ""
            : cards.map((index, value) => {
                return (
                  <div
                    key={value}
                    className="p-1 mt-2 card bordered border-success "
                  >
                    <h5>Title</h5>
                    <div>
                      <select
                        className="form-select float-end mx-2 w-50"
                        value={"selected"}
                      >
                        {/* <option value={'Reassign'}>Reassign</option> */}
                        <option value={"Completed"} selected>
                          Completed
                        </option>
                      </select>
                      {index.TaskTitle}
                    </div>

                    <h5>Descrption</h5>
                    {index.TaskDescrption}

                    <div>
                      {/* <button
                        value={value}
                        className="btn btn-success mt-1 w-50 "
                        onClick={(e) => {
                          let index = e.target.value;
                        
                          let el = e.target.parentElement.parentElement;
                          let gets = el.querySelectorAll("span");

                          let TaskTitle = gets[0].innerText;
                          let TaskDescrption = gets[1].innerText;
                          let obj = {
                            TaskTitle: TaskTitle,
                            TaskDescrption: TaskDescrption,
                            index : index,
                            type :'Completed'
                          };
                          props.EditFn(obj);
                        }}
                      >
                        Edit
                      </button> */}
                      <button
                        value={value}
                        className="btn btn-success mt-1 w-100 "
                        onClick={(e) => {
                          let option = window.confirm('Do you want DELETE this');
                          if (option) {
                            let index = e.target.value;
                            let sentVal = [];
                            for (let i = 0; i < cards.length; i++) {
                              sentVal.push(cards[i]);
                            }
                            sentVal.splice(index, 1);
                            dispatch(ChildThree(sentVal));
                          }
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
