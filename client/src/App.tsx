import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { AnimatePresence } from "framer-motion";
import { FormProvider } from "@/context/FormContext";
import WhatsAppSupport from "@/components/WhatsAppSupport";

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        {/* Fallback to 404 */}
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FormProvider>
        <Router />
        <Toaster />
        <WhatsAppSupport 
          phoneNumber="9033372022"
          defaultMessage="Hello! I need assistance with your logistics services."
        />
      </FormProvider>
    </QueryClientProvider>
  );
}

export default App;
