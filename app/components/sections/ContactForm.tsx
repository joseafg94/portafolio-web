"use client";

import { useActionState, useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import { sendEmail } from "@/app/actions/send-email";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface ContactFormProps {
  selectedService: string;
}

export default function ContactForm({ selectedService }: ContactFormProps) {
  const { t } = useI18n();
  const [state, formAction, isPending] = useActionState(sendEmail, null);
  const [service, setService] = useState(selectedService);

  useEffect(() => {
    if (selectedService) {
      setService(selectedService);
    }
  }, [selectedService]);

  if (state?.success) {
    return (
      <div 
        role="status"
        aria-live="polite" 
        className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center animate-in fade-in duration-300"
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400 mb-4" />
        <h3 className="text-xl font-bold text-zinc-100 mb-2">Inquiry Received</h3>
        <p className="text-sm text-zinc-400">{t.contact.success}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state?.errors?.general && (
        <div 
          role="alert"
          aria-live="polite" 
          className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 flex items-start gap-3"
        >
          <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
          <p className="text-xs text-red-400 leading-normal">{state.errors.general[0]}</p>
        </div>
      )}

      {/* Name Input */}
      <div>
        <label htmlFor="name" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
          {t.contact.nameLabel}
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors"
          placeholder="John Doe"
          required
        />
        {state?.errors?.name && (
          <p role="alert" className="mt-1.5 text-xs text-red-400">{state.errors.name[0]}</p>
        )}
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
          {t.contact.emailLabel}
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors"
          placeholder="john@example.com"
          required
        />
        {state?.errors?.email && (
          <p role="alert" className="mt-1.5 text-xs text-red-400">{state.errors.email[0]}</p>
        )}
      </div>

      {/* Service Select */}
      <div>
        <label htmlFor="service" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
          {t.contact.serviceLabel}
        </label>
        <select
          name="service"
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 focus:border-emerald-500 focus:outline-none transition-colors appearance-none"
          required
        >
          <option value="" disabled>Select a package</option>
          <option value="lead-engine">AI Lead Engine & Growth Web Presence</option>
          <option value="process-automation">Business Process Automation & Dashboard</option>
          <option value="custom-mvp">Full-Stack Custom Web App / SaaS MVP</option>
        </select>
        {state?.errors?.service && (
          <p role="alert" className="mt-1.5 text-xs text-red-400">{state.errors.service[0]}</p>
        )}
      </div>

      {/* Message Textarea */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
          {t.contact.messageLabel}
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
          placeholder="Tell us about your project, timeline, and goals..."
          required
        />
        {state?.errors?.message && (
          <p role="alert" className="mt-1.5 text-xs text-red-400">{state.errors.message[0]}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-xl bg-emerald-500 py-4 text-sm font-bold text-zinc-950 hover:bg-emerald-400 disabled:bg-zinc-800 disabled:text-zinc-500 transition-all cursor-pointer"
      >
        {isPending ? t.contact.sending : t.contact.submitButton}
      </button>
    </form>
  );
}
