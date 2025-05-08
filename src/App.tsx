import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BackToTop from "./components/BackToTop";
import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

// Component to manage smooth scrolling behavior
const SmoothScrollManager = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  useEffect(() => {
    // Add smooth scrolling behavior to html element
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Handle anchor links with smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      
      // Only handle internal hash links
      if (href && href.startsWith('#') && href !== '#') {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          
          // Update URL without reloading page
          window.history.pushState(null, '', href);
        }
      }
      
      // Handle links to sections on the home page
      if (href && href.includes('/#') && href !== '/#') {
        e.preventDefault();
        
        // Navigate to homepage if not already there
        if (location.pathname !== '/') {
          window.location.href = href;
          return;
        }
        
        const sectionId = href.split('/#')[1];
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Update URL without reloading page
          window.history.pushState(null, '', `/#${sectionId}`);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    // Handle initial hash in URL when page loads
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [location]);
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <SmoothScrollManager>
                <Index />
              </SmoothScrollManager>
            } />
            <Route path="/services" element={
              <SmoothScrollManager>
                <Services />
              </SmoothScrollManager>
            } />
            <Route path="/contact" element={
              <SmoothScrollManager>
                <Contact />
              </SmoothScrollManager>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={
              <SmoothScrollManager>
                <NotFound />
              </SmoothScrollManager>
            } />
          </Routes>
          <BackToTop />
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
