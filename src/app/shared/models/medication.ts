export interface Medication {
  id: string;
  name: string;
  genericName: string;
  category: string;
  manufacturer: string;
  batchNumber: string;
  expiryDate: string;
  quantity: number;
  minStock: number;
  unitPrice: number;
  costPrice: number;
  description?: string;
  requiresPrescription: boolean;
  createdAt: string;
  updatedAt: string;
}
