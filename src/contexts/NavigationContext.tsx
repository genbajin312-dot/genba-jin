import { createContext, useContext, useState, ReactNode } from 'react';

type Page = 'home' | 'sb' | 'company' | 'recruit' | 'consultation' | 'contact' | 'zoom-guide' | 'about' | 'service' | 'works';

interface NavigationContextType {
  currentPage: Page;
  navigateTo: (page: Page, targetId?: string) => void;
  scrollTarget: string | null;
  clearScrollTarget: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);

  const navigateTo = (page: Page, targetId?: string) => {
    setCurrentPage(page);
    if (targetId) {
      setScrollTarget(targetId);
      // If we are already on the page, the effect in the page component will trigger.
      // If we are changing pages, the new page will mount and its effect will trigger.
    } else {
      setScrollTarget(null);
      window.scrollTo(0, 0);
    }
  };

  const clearScrollTarget = () => {
    setScrollTarget(null);
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigateTo, scrollTarget, clearScrollTarget }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}