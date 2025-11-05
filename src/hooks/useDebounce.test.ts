import { renderHook, waitFor } from '@testing-library/react';
import { useDebounce } from './useDebounce';

describe('useDebounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should return initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('test', 300));
    expect(result.current).toBe('test');
  });

  it('should debounce value changes', async () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'test1', delay: 300 },
      },
    );

    expect(result.current).toBe('test1');

    rerender({ value: 'test2', delay: 300 });
    expect(result.current).toBe('test1'); // 应该还是旧值

    jest.advanceTimersByTime(300);
    await waitFor(() => {
      expect(result.current).toBe('test2');
    });
  });

  it('should use custom delay', async () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'test1', delay: 500 },
      },
    );

    rerender({ value: 'test2', delay: 500 });
    jest.advanceTimersByTime(300);
    expect(result.current).toBe('test1'); // 还没到延迟时间

    jest.advanceTimersByTime(200);
    await waitFor(() => {
      expect(result.current).toBe('test2');
    });
  });
});

