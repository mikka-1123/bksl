import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for contact form
  app.post('/api/contact', async (req, res) => {
    try {
      const formData = contactSchema.parse(req.body);
      const submittedForm = await storage.saveContactForm(formData);
      res.status(200).json({ 
        success: true, 
        message: 'Form submitted successfully',
        data: submittedForm
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: 'An error occurred while processing your request' 
        });
      }
    }
  });

  // Get all contact form submissions (could be used for an admin panel)
  app.get('/api/contact', async (req, res) => {
    try {
      const submissions = await storage.getAllContactForms();
      res.status(200).json({ 
        success: true, 
        data: submissions
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: 'An error occurred while retrieving form submissions' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
