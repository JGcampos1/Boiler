import { LayoutConfig } from "../config/layouts-config";

export type IRoute = {
  name: string;
  path: string;
  fallback?: React.ReactNode;
  element?: React.ReactNode;
  routes?: IRoute[];
  redirect?: string;
  private?: boolean;
  layout: keyof typeof LayoutConfig;
};
