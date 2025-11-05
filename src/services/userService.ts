import { apiClient } from '@/utils/apiClient';
import { handleApiError } from '@/utils/errorHandler';

/**
 * 用户数据类型
 */
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

/**
 * 获取用户数据
 * @param userId - 用户ID
 * @returns 用户数据
 */
export async function fetchUserData(userId: string): Promise<User | null> {
  try {
    const response = await apiClient.get<User>(`/users/${userId}`);
    return response.data;
  } catch (error) {
    handleApiError(error, 'Failed to fetch user data');
    return null;
  }
}

/**
 * 创建用户
 * @param userData - 用户数据
 * @returns 创建的用户数据
 */
export async function createUser(userData: Omit<User, 'id'>): Promise<User | null> {
  try {
    const response = await apiClient.post<User>('/users', userData);
    return response.data;
  } catch (error) {
    handleApiError(error, 'Failed to create user');
    return null;
  }
}

/**
 * 更新用户数据
 * @param userId - 用户ID
 * @param userData - 更新的用户数据
 * @returns 更新后的用户数据
 */
export async function updateUser(userId: string, userData: Partial<User>): Promise<User | null> {
  try {
    const response = await apiClient.put<User>(`/users/${userId}`, userData);
    return response.data;
  } catch (error) {
    handleApiError(error, 'Failed to update user');
    return null;
  }
}

/**
 * 删除用户
 * @param userId - 用户ID
 * @returns 是否删除成功
 */
export async function deleteUser(userId: string): Promise<boolean> {
  try {
    await apiClient.delete(`/users/${userId}`);
    return true;
  } catch (error) {
    handleApiError(error, 'Failed to delete user');
    return false;
  }
}

