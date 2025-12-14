import { Task } from "../models/Task.js";

//  OBTENER TAREAS DEL USUARIO

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      where: { userId: req.user.id }
    });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener tareas" });
  }
};


//   CREAR TAREA

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newTask = await Task.create({
      title,
      description,
      userId: req.user.id
    });

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Error al crear tarea" });
  }
};


//   TOGGLE COMPLETADA

export const toggleTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id
      }
    });

    if (!task) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }

    task.completed = !task.completed;
    await task.save();

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar tarea" });
  }
};

/* =========================
   ELIMINAR TAREA
========================= */
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id
      }
    });

    if (!task) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }

    await task.destroy();
    res.json({ message: "Tarea eliminada" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar tarea" });
  }
};
