import { useState, useEffect } from 'react';
import { contentRegistry, type ContentKey } from '../data/contentRegistry';

export function useContent<T>(contentPath: ContentKey): {
  data: T | null;
  loading: boolean;
  error: Error | null;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      setLoading(true);
      
      // Get content from registry
      const content = contentRegistry[contentPath];
      
      if (!content) {
        throw new Error(`Content not found for path: ${contentPath}`);
      }
      
      setData(content as T);
    } catch (err) {
      setError(err as Error);
      console.error(`Error loading content from ${contentPath}:`, err);
    } finally {
      setLoading(false);
    }
  }, [contentPath]);

  return { data, loading, error };
}