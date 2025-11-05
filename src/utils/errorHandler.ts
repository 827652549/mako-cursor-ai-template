/**
 * API错误处理工具
 */

export interface ApiError {
  errorCode: string;
  errorMsg: string;
  message?: string;
}

/**
 * 显示错误消息（临时实现，后续可集成 toast 通知系统）
 * @param message - 错误消息
 */
function showError(message: string): void {
  // 临时使用 console.error，后续可替换为 toast 通知
  console.error(message);
  // TODO: 集成 toast 通知系统，如 react-hot-toast 或 sonner
}

/**
 * 处理API错误
 * @param error - 错误对象
 * @param defaultMessage - 默认错误消息，当无法解析错误时使用
 */
export function handleApiError(error: unknown, defaultMessage: string = '操作失败'): void {
  if (error instanceof Error) {
    // 网络错误
    if (error.message.includes('fetch')) {
      console.error('网络错误:', error);
      showError(defaultMessage);
      return;
    }

    // HTTP状态码错误
    const statusMatch = error.message.match(/status: (\d+)/);
    if (statusMatch) {
      const status = parseInt(statusMatch[1], 10);
      handleHttpError(status, error, defaultMessage);
      return;
    }
  }

  // 未知错误
  console.error('未知错误:', error);
  showError(defaultMessage);
}

/**
 * 处理HTTP状态码错误
 * @param status - HTTP状态码
 * @param error - 错误对象
 * @param defaultMessage - 默认错误消息
 */
function handleHttpError(status: number, error: Error, defaultMessage: string): void {
  switch (status) {
    case 401:
      // 未认证，重定向到登录页
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }
      break;
    case 403:
      console.error('无权限访问:', error);
      showError(defaultMessage);
      break;
    case 404:
      console.error('资源不存在:', error);
      showError(defaultMessage);
      break;
    case 409:
      console.error('资源冲突:', error);
      showError(defaultMessage);
      break;
    case 500:
      console.error('服务器错误:', error);
      showError(defaultMessage);
      break;
    default:
      console.error(`HTTP错误 ${status}:`, error);
      showError(defaultMessage);
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

