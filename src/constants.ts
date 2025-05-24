import z from "zod";
export const ROLES: Record<string, string> = {
  NIGE_EARN_USER: "nigeEarn:user",
};

export const LoginAs = [ROLES.NIGE_EARN_USER] as const;

export const LoginAsSchema = z.enum(LoginAs);

export type LoginAsType = z.infer<typeof LoginAsSchema>;
