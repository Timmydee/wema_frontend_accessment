// src/types.ts
export type User = {
  businessName: string;
  businessEmail: string;
  businessPhone: string;
  businessCategory: string;
  accountNo: string;
  businessLogo?: File | string | null;
  houseNumber: string;
  street: string;
  city: string;
  state: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  password: string;
};

export interface Verifier {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  partner: string;
  location: string;
  status: VerifierStatus;
}

export interface VerifierTableProps {
  statusFilter: VerifierStatus;
  filter: string;
  setSelectedVerifier: (verifier: Verifier | null) => void;
  verifiers: Verifier[];
}

export interface VerifierFilterProps {
  filter: string;
  setFilter: (value: string) => void;
}

export type VerifierStatus =
  | "All"
  | "Active"
  | "Awaiting approval"
  | "Deactivated";

export interface VerifierTableProps {
  statusFilter: VerifierStatus;
  searchQuery: string;
}
