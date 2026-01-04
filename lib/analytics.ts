// Utilidades para Google Analytics

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

// Evento genérico
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Función genérica para rastrear eventos personalizados
export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  // Parsear el nombre del evento si contiene formato "action - label" o "action_label"
  const parts = eventName.split(' - ').length > 1 
    ? eventName.split(' - ') 
    : eventName.split('_')
  
  const action = parts[0] || eventName
  const label = parts.length > 1 ? parts.slice(1).join(' - ') : undefined
  
  event({
    action: action.toLowerCase(),
    category: eventData?.category || 'engagement',
    label: label || eventData?.label,
    value: eventData?.value,
  })
}

// Eventos específicos para MOVILIAX

// Newsletter subscription
export const trackNewsletterSubscription = (email: string) => {
  event({
    action: 'newsletter_subscription',
    category: 'engagement',
    label: 'Newsletter Form',
  })
}

// Content views
export const trackArticleView = (articleTitle: string) => {
  event({
    action: 'article_view',
    category: 'content',
    label: articleTitle,
  })
}

// Podcast plays
export const trackPodcastPlay = (episodeTitle: string) => {
  event({
    action: 'podcast_play',
    category: 'content',
    label: episodeTitle,
  })
}

// External link clicks
export const trackExternalLink = (url: string) => {
  event({
    action: 'external_link_click',
    category: 'navigation',
    label: url,
  })
}

// Social media clicks
export const trackSocialClick = (platform: string) => {
  event({
    action: 'social_click',
    category: 'engagement',
    label: platform,
  })
}

// CTA clicks
export const trackCTAClick = (ctaName: string) => {
  event({
    action: 'cta_click',
    category: 'conversion',
    label: ctaName,
  })
}

// Form submissions
export const trackFormSubmission = (formName: string) => {
  event({
    action: 'form_submission',
    category: 'conversion',
    label: formName,
  })
}

// Page views (manual tracking if needed)
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
      page_path: url,
    })
  }
}