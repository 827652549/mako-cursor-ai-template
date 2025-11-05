/**
 * API客户端配置
 * 统一处理API请求的基础配置
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';

interface RequestConfig extends RequestInit {
  headers?: HeadersInit;
}

/**
 * 获取认证头
 * @returns 包含Authorization的headers对象
 */
function getAuthHeaders(): HeadersInit {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };
}

/**
 * API客户端
 */
export const apiClient = {
  /**
   * GET请求
   */
  async get<T>(url: string, config?: RequestConfig): Promise<{ data: T }> {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: 'GET',
      headers: {
        ...getAuthHeaders(),
        ...config?.headers,
      },
      ...config,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },

  /**
   * POST请求
   */
  async post<T>(url: string, data?: unknown, config?: RequestConfig): Promise<{ data: T }> {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        ...getAuthHeaders(),
        ...config?.headers,
      },
      body: data ? JSON.stringify(data) : undefined,
      ...config,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },

  /**
   * PUT请求
   */
  async put<T>(url: string, data?: unknown, config?: RequestConfig): Promise<{ data: T }> {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: 'PUT',
      headers: {
        ...getAuthHeaders(),
        ...config?.headers,
      },
      body: data ? JSON.stringify(data) : undefined,
      ...config,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },

  /**
   * DELETE请求
   */
  async delete<T>(url: string, config?: RequestConfig): Promise<{ data: T }> {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: 'DELETE',
      headers: {
        ...getAuthHeaders(),
        ...config?.headers,
      },
      ...config,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },
};

