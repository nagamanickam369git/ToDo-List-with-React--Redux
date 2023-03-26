import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddTask,
  EditTask,
  ChildTwo,
  ChildThree,
} from "../redux/reducer/conterSlice";

import TodochildOne from "./TodochildOne";
import TodochildTwo from "./TodochildTwo";
import TodochildThree from "./TodochildThree";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));
export default function Todo() {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [TaskTitle, setTaskTitle] = useState("");
  const [TaskDescrption, setTaskDescrption] = useState("");
  const [index, setindex] = useState(null);
  const [type, settype] = useState("");

  const unassign = useSelector((state) => state.counter.Todo);
  const assign = useSelector((state) => state.counter.Assigned);
  const complete = useSelector((state) => state.counter.Completed);
  useEffect(() => {}, [unassign, assign, complete]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const Editfn = (e) => {
    setAnchorEl("simple-popover");
    setTaskTitle(e.TaskTitle);
    setTaskDescrption(e.TaskDescrption);
    setindex(e.index);
    settype(e.type);
  };

  return (
    <>
      <div className="container-fluid Todobg">
        <div className="row">
          <div className="row">
            <Button
              aria-describedby={id}
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              Add Task
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Typography className={classes.typography}>
                <h5>Add Task</h5>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    label="Task Title"
                    variant="filled"
                    color="success"
                    value={TaskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                  />
                  <br />
                  <TextField
                    label="Task Descrption"
                    variant="filled"
                    color="success"
                    value={TaskDescrption}
                    onChange={(e) => setTaskDescrption(e.target.value)}
                  />
                  <br />
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() => {
                      if (index === null) {
                        let obj = {
                          type: "Unassigned",
                          TaskTitle: TaskTitle,
                          TaskDescrption: TaskDescrption,
                        };

                        dispatch(AddTask(obj));
                        setTaskTitle("");
                        setTaskDescrption("");
                        setAnchorEl(null);
                      } else if (index !== "") {
                        if (type === "Unassigned") {
                          let obj = {
                            type: "Unassigned",
                            TaskTitle: TaskTitle,
                            TaskDescrption: TaskDescrption,
                          };
                          let newValue = [];
                          for (let i = 0; i < unassign.length; i++) {
                            newValue.push(unassign[i]);
                          }
                          newValue.splice(index, 1, obj);
                          dispatch(EditTask(newValue));
                          setAnchorEl(null);
                          setTaskTitle("");
                          setindex(null);
                          setTaskDescrption("");
                        } else if (type === "Assigned") {
                          let obj = {
                            type: "Assigned",
                            TaskTitle: TaskTitle,
                            TaskDescrption: TaskDescrption,
                          };
                          let newValues = [];
                          for (let i = 0; i < assign.length; i++) {
                            newValues.push(assign[i]);
                          }
                          newValues.splice(index, 1, obj);
                          dispatch(ChildTwo(newValues));
                          setAnchorEl(null);
                          setTaskTitle("");
                          setTaskDescrption("");
                          setindex(null);
                        }
                        if (type === "Completed") {
                          let obj = {
                            type: "Completed",
                            TaskTitle: TaskTitle,
                            TaskDescrption: TaskDescrption,
                          };
                          let newValuee = [];
                          for (let i = 0; i < complete.length; i++) {
                            newValuee.push(complete[i]);
                          }
                          newValuee.splice(index, 1, obj);
                          dispatch(ChildThree(newValuee));
                          setAnchorEl(null);
                          setTaskTitle("");
                          setTaskDescrption("");
                          setindex(null);
                        }
                      }
                    }}
                  >
                    {index === null ? "Add" : "Save"}
                  </Button>
                </Box>
              </Typography>
            </Popover>
          </div>
          <div className="col-1"></div>
          <div className="col-1"></div>
          <div className=" mb-3 col-sm-10 col-xl-3 ">
            <TodochildOne EditFn={Editfn} />
          </div>
          <div className=" col-sm-10 col-xl-3">
            <TodochildTwo EditFn={Editfn} />
          </div>
          <div className=" col-sm-10 col-xl-3">
            <TodochildThree EditFn={Editfn} />
          </div>
        </div>
      </div>
    </>
  );
}
