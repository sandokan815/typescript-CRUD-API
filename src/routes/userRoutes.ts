import { Router } from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/userController';

const router = Router();

// GET: Retrieve all users
router.get('/', getUsers);

// POST: Add a new user
router.post('/', createUser);

// PUT: Update a user by ID
router.put('/:id', updateUser);

// DELETE: Remove a user by ID
router.delete('/:id', deleteUser);

export default router;