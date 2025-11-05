/**
 * 用户测试数据
 */

import type { User } from '@/services/userService';

export const mockUser: User = {
  id: '1',
  name: '测试用户',
  email: 'test@example.com',
  avatar: 'https://example.com/avatar.jpg',
};

export const mockUsers: User[] = [
  mockUser,
  {
    id: '2',
    name: '另一个用户',
    email: 'another@example.com',
  },
];

