import { users, type User, type InsertUser, type ContactForm, type InsertContactForm } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveContactForm(formData: InsertContactForm): Promise<ContactForm>;
  getAllContactForms(): Promise<ContactForm[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactForms: Map<number, ContactForm>;
  currentUserId: number;
  currentContactFormId: number;

  constructor() {
    this.users = new Map();
    this.contactForms = new Map();
    this.currentUserId = 1;
    this.currentContactFormId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async saveContactForm(formData: InsertContactForm): Promise<ContactForm> {
    const id = this.currentContactFormId++;
    const now = new Date();
    const contactForm: ContactForm = { 
      ...formData, 
      id, 
      createdAt: now 
    };
    this.contactForms.set(id, contactForm);
    return contactForm;
  }

  async getAllContactForms(): Promise<ContactForm[]> {
    return Array.from(this.contactForms.values());
  }
}

export const storage = new MemStorage();
