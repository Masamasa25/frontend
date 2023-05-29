import axios from 'axios';
import { async } from 'effector-storage';

export type User = {
  username: string;
  email: string;
  password: string;
};

// Function to register a new user
export const signUp = async (user: User) => {
  const response = await axios.post('http://127.0.0.1:3000/register', user);
  return response.data;
};

// Function to log in a user
export const signIn = async (user: Omit<User, 'username'>) => {
  const response = await axios.post('http://127.0.0.1:3000/login', user);
  return response.data;
};

// Function to log out the current user
export const signOut = async () => {
  const response = await axios.post('http://127.0.0.1:3000/logout');
};

// Function to get the current user
export const getSession = async (email: string | null) => {
  const response = await axios.post('http://127.0.0.1:3000/user', {
    email,
  });
  return response.data;
};

export const createRoom = async ({
  videoId,
  creatorId,
}: {
  videoId: string;
  creatorId: string;
}) => {
  const response = await axios.post('http://127.0.0.1:3000/room/create', {
    videoId,
    creatorId,
  });
  return response.data;
};

export const getRooms = async () => {
  const response = await axios.get('http://127.0.0.1:3000/room/get-all');
  return response.data;
};

export const getRoomMembers = async ({ roomId }: { roomId: string }) => {
  const response = await axios.post('http://127.0.0.1:3000/members-all', {
    roomId,
  });

  return response.data;
};
