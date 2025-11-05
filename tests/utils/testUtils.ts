/**
 * 测试工具函数
 */

import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

/**
 * 自定义渲染函数，可以添加全局Providers
 */
function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(ui, { ...options });
}

export * from '@testing-library/react';
export { customRender as render };

