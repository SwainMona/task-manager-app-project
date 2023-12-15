export interface taskModel {
  id: number;
  customer_id: number;
  status: string;
  description: string;
  created_at?: Date;
  updated_at?: Date;
  editing?: boolean;
}
export type FilterType = "all" | "active" | "completed";