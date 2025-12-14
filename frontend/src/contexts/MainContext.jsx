import { createContext, useState, useEffect } from "react";

export const MainContext = createContext();

export function MainContextProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
  return localStorage.getItem("isDark") === "true";
  });

  useEffect(() => {
    localStorage.setItem("isDark", isDark);
  }, [isDark]);
  
  const [isModalWindow, setModalWindow] = useState(false);

  const [isRegisterMode, setIsRegisterMode] = useState(false); 

  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  const API = "http://localhost:3000";

  const registerUser = async ({ username, email, password }) => {
    const res = await fetch(`${API}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ username, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      setModalWindow(false);
    }

    return data;
  };

  const loginUser = async ({ email, password }) => {
    const res = await fetch(`${API}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setUser(data.user);
      await loadTasks();
      setModalWindow(false);
    }

    return data;
  };

  const logoutUser = async () => {
    await fetch(`${API}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    setUser(null);
    setTasks([]);
  };

  const loadUser = async () => {
    try {
      const res = await fetch(`${API}/auth/me`, {
        credentials: "include",
      });

      if (!res.ok) return;

      const data = await res.json();
      setUser(data.user);

      await loadTasks();
    } catch (err) {
      console.error("Error cargando usuario:", err);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const loadTasks = async () => {
    const res = await fetch(`${API}/tasks`, {
      credentials: "include",
    });

    if (!res.ok) return;

    const data = await res.json();
    setTasks(data);
  };

  const createTask = async ({ title, description }) => {
    const res = await fetch(`${API}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ title, description }),
    });

    const newTask = await res.json();

    setTasks([...tasks, newTask]);
  };

  const deleteTask = async (id) => {
    await fetch(`${API}/tasks/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleTask = async (id) => {
    const res = await fetch(`${API}/tasks/${id}/toggle`, {
      method: "PUT",
      credentials: "include",
    });

    const updated = await res.json();

    setTasks(tasks.map((t) => (t.id === id ? updated : t)));
  };

  return (
    <MainContext.Provider
      value={{
        isDark,
        setIsDark,

        isModalWindow,
        setModalWindow,

        isRegisterMode,
        setIsRegisterMode, 

        user,
        loginUser,
        registerUser,
        logoutUser,

        tasks,
        loadTasks,
        createTask,
        deleteTask,
        toggleTask,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
