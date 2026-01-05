/**
 * Tipos para respuestas de API
 */

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface User {
  id: string;
  email: string;
  name?: string;
  created_at: string;
  updated_at: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  score: number;
  status: 'new' | 'contacted' | 'qualified' | 'closed';
  created_at: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  status: 'active' | 'unsubscribed';
  subscribed_at: string;
}

export interface CheckoutSession {
  id: string;
  user_id?: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed';
  stripe_session_id?: string;
  created_at: string;
}

export function createApiResponse<T>(
  success: boolean,
  data?: T,
  error?: string,
  message?: string
): ApiResponse<T> {
  return {
    success,
    ...(data && { data }),
    ...(error && { error }),
    ...(message && { message })
  };
}
