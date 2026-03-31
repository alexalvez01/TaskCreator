import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { User } from "./User.js";

export const Task = sequelize.define("Task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },

  description: {
    type: DataTypes.TEXT,
  },

  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },

  deadline: {
    type: DataTypes.DATE,
    allowNull: true
  }
});


User.hasMany(Task, {
  foreignKey: "userId",
  onDelete: "CASCADE"
});
Task.belongsTo(User, {
  foreignKey: "userId"
});