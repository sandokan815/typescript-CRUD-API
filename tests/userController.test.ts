import { getUsers, createUser, updateUser, deleteUser } from '../src/controllers/userController';
import { Request, Response } from 'express';

describe('User Controller', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let mockJson: jest.Mock;
  let mockStatus: jest.Mock;

  beforeEach(() => {
    mockJson = jest.fn();
    mockStatus = jest.fn(() => ({ json: mockJson }));

    req = {};
    res = {
      status: mockStatus,
    };

    (global as any).users = [];
  });

  describe('getUsers', () => {
    it('should return an empty user array initially', () => {
      req = {};
      const expectedResponse: any[] = [];

      getUsers(req as Request, res as Response);

      expect(mockStatus).toHaveBeenCalledWith(200);
      expect(mockJson).toHaveBeenCalledWith(expectedResponse);
    });
  });

  describe('createUser', () => {
    it('should create a new user when valid data is provided', () => {
      req = {
        body: {
          name: 'Anthony Roan',
          email: 'anthony.dev.815@gmail.com',
        },
      };

      createUser(req as Request, res as Response);

      expect(mockStatus).toHaveBeenCalledWith(201);
      expect(mockJson).toHaveBeenCalledWith({
        id: 1,
        name: 'Anthony Roan',
        email: 'anthony.dev.815@gmail.com',
      });
    });

    it('should return an error when name or email is missing', () => {
      req = { body: { name: '' } };

      createUser(req as Request, res as Response);

      expect(mockStatus).toHaveBeenCalledWith(400);
      expect(mockJson).toHaveBeenCalledWith({ message: 'Name and email are required' });
    });
  });

  describe('updateUser', () => {
    it('should update a user when valid data is provided', () => {
      // Arrange
      (global as any).users = [
        { id: 1, name: 'Anthony Roan', email: 'anthony.dev.815@gmail.com' },
      ];
      req = {
        params: { id: '1' },
        body: { name: 'Anthony Roan', email: 'anthony.dev.815@gmail.com' },
      };

      // Act
      updateUser(req as Request, res as Response);

      // Assert
      expect(mockStatus).toHaveBeenCalledWith(200);
      expect(mockJson).toHaveBeenCalledWith({
        id: 1,
        name: 'Anthony Roan',
        email: 'anthony.dev.815@gmail.com',
      });
    });

    it('should return an error if the user is not found', () => {
      // Arrange
      req = {
        params: { id: '99' },
        body: { name: 'Anthony Roan', email: 'anthony.dev.815@gmail.com' },
      };

      // Act
      updateUser(req as Request, res as Response);

      // Assert
      expect(mockStatus).toHaveBeenCalledWith(404);
      expect(mockJson).toHaveBeenCalledWith({ message: 'User not found' });
    });
  });

  describe('deleteUser', () => {
    it('should delete a user when a valid ID is provided', () => {
      // Arrange
      (global as any).users = [
        { id: 1, name: 'Anthony Roan', email: 'anthony.dev.815@gmail.com' },
      ];
      req = {
        params: { id: '1' },
      };

      // Act
      deleteUser(req as Request, res as Response);

      // Assert
      expect(mockStatus).toHaveBeenCalledWith(200);
      expect(mockJson).toHaveBeenCalledWith({
        id: 1,
        name: 'Anthony Roan',
        email: 'anthony.dev.815@gmail.com',
      });
    });

    it('should return an error if the user is not found', () => {
      // Arrange
      req = {
        params: { id: '99' },
      };

      // Act
      deleteUser(req as Request, res as Response);

      // Assert
      expect(mockStatus).toHaveBeenCalledWith(404);
      expect(mockJson).toHaveBeenCalledWith({ message: 'User not found' });
    });
  });
});
