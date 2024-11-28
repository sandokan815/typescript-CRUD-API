import { Request, Response } from 'express';
import { letterCombinations } from '../utils/letterCombinations'; // Import the function

interface User {
  id: number;
  name: string;
  email: string;
}

let users: User[] = [];

// GET: Retrieve all users
export const getUsers = (req: Request, res: Response) => {
  res.status(200).json(users);
};

// POST: Add a new user
export const createUser = (req: Request, res: Response) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  const newUser: User = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);
  res.status(201).json(newUser);
};

// PUT: Update a user by ID
export const updateUser = (req: Request, res: Response): Response => {
  const { id } = req.params;
  const { name, email } = req.body;

  const userIndex = users.findIndex((user) => user.id === parseInt(id));

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  if (name) users[userIndex].name = name;
  if (email) users[userIndex].email = email;

  return res.status(200).json(users[userIndex]);
};

// DELETE: Remove a user by ID
export const deleteUser = (req: Request, res: Response): Response => {
  const { id } = req.params;

  const userIndex = users.findIndex((user) => user.id === parseInt(id));

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const deletedUser = users.splice(userIndex, 1);

  return res.status(200).json(deletedUser[0]);
};

// Get Combined Letters from Phone Map
export const getLetterCombinations = (req: Request, res: Response): void => {
  const digits = req.query.digits as string;

  // if (digits.includes('1')) {
  //   res.status(400).json({ message: 'Don not include 1'})
  // }
  const combinations = letterCombinations(digits);
  res.status(200).json(combinations);
};
