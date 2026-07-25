"use server";

import { resend } from "@/lib/resend";
import { contactFormSchema } from "@/lib/validations";

export interface ActionState {
  success?: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    service?: string[];
    message?: string[];
    general?: string[];
  };
}

export async function sendEmail(prevState: ActionState | null, formData: FormData): Promise<ActionState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    service: formData.get("service"),
    message: formData.get("message"),
  };

  const validated = contactFormSchema.safeParse(rawData);
  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors,
    };
  }

  const { name, email, service, message } = validated.data;

  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not set in environment variables");
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "joseafg94@gmail.com",
      subject: `New Lead - ${service} from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nService: ${service}\nMessage:\n${message}`,
      replyTo: email,
    });

    if (error) {
      return {
        success: false,
        errors: { general: [error.message] },
      };
    }

    return { success: true };
  } catch (err: any) {
    return {
      success: false,
      errors: { general: [err.message || "Failed to send email."] },
    };
  }
}
