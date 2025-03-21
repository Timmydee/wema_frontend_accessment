const STORAGE_KEY = "mockUsers";
import { User } from "../utils/type";

const loadUsers = (): User[] => {
  const storedUsers = localStorage.getItem(STORAGE_KEY);
  return storedUsers ? JSON.parse(storedUsers) : [];
};

const mockUsers: User[] = loadUsers();

const saveUsers = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockUsers));
  };

export const isUserExists = (email: string): boolean => {
  return mockUsers.some((user) => user.businessEmail === email);
};

export const addUser = (user: User): boolean => {
  if (isUserExists(user.businessEmail)) {
    return false;
  }
  mockUsers.push(user);
  saveUsers()
  console.log("User added successfully:", user);
  return true;
};

export const getUsers = (): User[] => mockUsers;


export const authenticateUser = (email: string, password: string) => {
  return mockUsers.find((user) => user.businessEmail === email && user.password === password);
};