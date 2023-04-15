import axios from "axios";
import { MOCK_URL } from "../global/constants";

export const fetchUsers = async (
  currentPage,
  setUsers,
  setHasMore,
  setLoading
) => {
  setLoading(true);
  try {
    const limit = 12;
    const response = await axios.get(
      `${MOCK_URL}?page=${currentPage}&limit=${limit}`
    );
    setUsers((prevUsers) => [...prevUsers, ...response.data]);

    if (response.data.length < limit) {
      setHasMore(false);
    }
  } catch (error) {
    console.error("Error fetching users:", error);
  } finally {
    setLoading(false);
  }
};

export const updateFollowers = async (userId, newFollowers) => {
  try {
    await axios.put(`${MOCK_URL}${userId}`, {
      followers: newFollowers,
    });
  } catch (error) {
    console.error("Error updating followers:", error.message);
  }
};
