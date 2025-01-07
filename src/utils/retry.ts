/**
 * Configuration options for retry mechanism
 */
interface RetryConfig {
  /** Maximum number of retry attempts */
  maxAttempts: number;
  /** Delay between retries in milliseconds */
  delayMs: number;
  /** Whether to use exponential backoff */
  useExponentialBackoff?: boolean;
}

/**
 * Retries an async operation with configurable attempts and delay
 * @param operation - Async function to retry
 * @param config - Retry configuration
 * @returns Promise resolving to operation result
 * @throws Last encountered error after all retries fail
 */
export async function retry<T>(
  operation: () => Promise<T>,
  config: RetryConfig
): Promise<T> {
  let lastError: Error;
  let attempt = 0;

  while (attempt < config.maxAttempts) {
    try {
      return await operation();
    } catch (error) {
      lastError = error as Error;
      attempt++;

      if (attempt === config.maxAttempts) {
        throw lastError;
      }

      const delay = config.useExponentialBackoff
        ? config.delayMs * Math.pow(2, attempt - 1)
        : config.delayMs;

      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  throw lastError!;
}