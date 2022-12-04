import { TaskService } from "../services/tasks.service";

export const createTask = async (req, res) => {
  try {
    await TaskService.create(req.body);
    return res.send({
      success: true,
      message: "Task created successfully",
    });
  } catch (err) {
    res.status(400).send({ message: "Something went wrong", success: false });
  }
};

export const listTasks = async (req, res) => {
  try {
    const tasks = await TaskService.list([]);
    return res.send({
      success: true,
      data: tasks,
    });
  } catch (err) {
    res.status(400).send({ message: "Something went wrong", success: false });
  }
};

export const getSingleTask = async (req, res) => {
  try {
    const task = await TaskService.single("_id", req.params.task);
    return res.send({ success: true, message: "Get single task", data: task });
  } catch (err) {
    res.status(400).send({ message: "Something went wrong", success: false });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await TaskService.delete("_id", req.params.task);
    return res.send({ success: true, message: "Task deleted successfully" });
  } catch (err) {
    return res
      .status(400)
      .send({ message: "Something went wrong", success: false });
  }
};

export const updateTask = async (req, res) => {
  try {
    await TaskService.update({ _id: req.params.task }, req.body);
    return res.send({ success: true, message: "Task updated successfully" });
  } catch (err) {
    return res
      .status(400)
      .send({ message: "Something went wrong", success: false });
  }
};
