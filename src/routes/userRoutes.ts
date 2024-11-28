import { Router } from 'express';
import { getUsers, createUser, updateUser, deleteUser, getLetterCombinations } from '../controllers/userController';

const router = Router();

// GET: Retrieve all users
router.get('/', getUsers);

// POST: Add a new user
router.post('/', createUser);

// PUT: Update a user by ID
router.put('/:id', updateUser);

// DELETE: Remove a user by ID
router.delete('/:id', deleteUser);

// Get Letter Combination
router.get('/letter-combinations', getLetterCombinations);

export default router;
