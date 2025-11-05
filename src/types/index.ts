/**
 * 通用类型定义
 */

// API响应类型
export interface ApiResponse<T> {
  data: T;
  meta?: {
    page?: number;
    perPage?: number;
    total?: number;
  };
  error?: {
    errorCode: string;
    errorMsg: string;
  };
}

// 分页参数
export interface PaginationParams {
  page: number;
  perPage: number;
}

// 分页响应
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  perPage: number;
}

