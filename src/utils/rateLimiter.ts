class RateLimiter {
  private timestamps: number[] = [];
  private readonly limit: number;
  private readonly interval: number;

  constructor(limit: number, interval: number) {
    this.limit = limit;
    this.interval = interval;
  }

  canProceed(): boolean {
    const now = Date.now();
    // Remove timestamps outside the interval
    this.timestamps = this.timestamps.filter(
      timestamp => now - timestamp < this.interval
    );
    
    if (this.timestamps.length >= this.limit) {
      return false;
    }
    
    this.timestamps.push(now);
    return true;
  }
}

// Create rate limiter instance: 10 calculations per minute
export const calculationRateLimiter = new RateLimiter(10, 60 * 1000);