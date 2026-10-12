import { API_BASE_URL } from "../config/env";
import { apiRequest } from "../utils/global/ApiRequest";

export const API_GET_POSTS = async () => {
  return await apiRequest({
    method: "get",
    url: `${API_BASE_URL}/posts`,
    errorMessage: "Failed to fetch posts.",
  });
};

export const API_CREATE_POST = async (newPost) => {
  return await apiRequest({
    method: "post",
    url: `${API_BASE_URL}/posts`,
    data: newPost,
    errorMessage: "Failed to create post.",
  });
};

export const API_UPDATE_POST = async (id, updatedPost) => {
  return await apiRequest({
    method: "put",
    url: `${API_BASE_URL}/posts/${id}`,
    data: updatedPost,
    errorMessage: "Failed to update post.",
  });
};

export const API_DELETE_POST = async (id) => {
  return await apiRequest({
    method: "delete",
    url: `${API_BASE_URL}/posts/${id}`,
    errorMessage: "Failed to delete post.",
  });
};
