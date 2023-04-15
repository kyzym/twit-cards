import axios from "axios";
import { MOCK_URL } from "../global/constants";

export const fetchUsers = async (setUsers) => {
  try {
    const response = await axios.get(MOCK_URL);
    setUsers(response.data);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export const updateFollowers = async (userId, newFollowers) => {
  try {
    await axios.put(`${MOCK_URL}${userId}`, {
      followers: newFollowers,
    });
  } catch (error) {
    console.error("Error updating followers:", error);
  }
};
