/**
 * 应用常量定义
 */

// API配置
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || '/api',
  TIMEOUT: 10000, // 10秒
} as const;

// 分页配置
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
} as const;

// 本地存储键名
export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER_INFO: 'userInfo',
  THEME: 'theme',
} as const;

// 错误码
export const ERROR_CODES = {
  NETWORK_ERROR: 'error000',
  BAD_REQUEST: 'error400',
  UNAUTHORIZED: 'error401',
  FORBIDDEN: 'error403',
  NOT_FOUND: 'error404',
  CONFLICT: 'error409',
  SERVER_ERROR: 'error500',
} as const;

