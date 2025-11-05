/**
 * API错误处理工具
 */

export interface ApiError {
  errorCode: string;
  errorMsg: string;
  message?: string;
}

/**
 * 处理API错误
 * @param error - 错误对象
 * @param defaultMessage - 默认错误消息
 */
export function handleApiError(error: unknown, defaultMessage: string = '操作失败'): void {
  if (error instanceof Error) {
    // 网络错误
    if (error.message.includes('fetch')) {
      console.error('网络错误:', error);
      // TODO: 显示网络错误提示
      return;
    }

    // HTTP状态码错误
    const statusMatch = error.message.match(/status: (\d+)/);
    if (statusMatch) {
      const status = parseInt(statusMatch[1], 10);
      handleHttpError(status, error);
      return;
    }
  }

  // 未知错误
  console.error('未知错误:', error);
  // TODO: 显示通用错误提示
}

/**
 * 处理HTTP状态码错误
 * @param status - HTTP状态码
 * @param error - 错误对象
 */
function handleHttpError(status: number, error: Error): void {
  switch (status) {
    case 401:
      // 未认证，重定向到登录页
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }
      break;
    case 403:
      console.error('无权限访问:', error);
      // TODO: 显示权限错误提示
      break;
    case 404:
      console.error('资源不存在:', error);
      // TODO: 显示404错误提示
      break;
    case 409:
      console.error('资源冲突:', error);
      // TODO: 显示冲突错误提示
      break;
    case 500:
      console.error('服务器错误:', error);
      // TODO: 显示服务器错误提示
      break;
    default:
      console.error(`HTTP错误 ${status}:`, error);
      // TODO: 显示通用错误提示
  }
}

/**
 * 解析API错误响应
 * @param response - API响应
 * @returns 错误信息
 */
export function parseApiError(response: { error?: ApiError }): string {
  if (response.error) {
    return response.error.errorMsg || response.error.message || '操作失败';
  }
  return '操作失败';
}

