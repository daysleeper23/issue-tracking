import { User } from "@/lib/types";

export interface UserState {
  data: Array<{
    value: string;
    label: string;
    url: string;
    status: string;
  }>;
}