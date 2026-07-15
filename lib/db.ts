import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

async function readJson<T>(file: string, fallback: T): Promise<T> {
  try {
    const raw = await fs.readFile(path.join(DATA_DIR, file), "utf-8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

async function writeJson<T>(file: string, data: T): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(
    path.join(DATA_DIR, file),
    JSON.stringify(data, null, 2),
    "utf-8"
  );
}

export type User = {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  passwordHash: string;
  createdAt: string;
};

export type Order = {
  id: string;
  userId: string | null;
  userEmail: string;
  items: {
    planId: string;
    category: string;
    title: string;
    price: number;
  }[];
  total: number;
  status: "pending" | "reviewing" | "confirmed";
  note?: string;
  createdAt: string;
};

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

export const usersDb = {
  all: () => readJson<User[]>("users.json", []),
  save: (users: User[]) => writeJson("users.json", users),
};

export const ordersDb = {
  all: () => readJson<Order[]>("orders.json", []),
  save: (orders: Order[]) => writeJson("orders.json", orders),
};

export const contactsDb = {
  all: () => readJson<ContactMessage[]>("contacts.json", []),
  save: (items: ContactMessage[]) => writeJson("contacts.json", items),
};
