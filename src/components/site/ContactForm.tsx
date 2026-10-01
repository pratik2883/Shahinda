import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { site } from "@/lib/site";

const fieldClass =
  "w-full border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="eyebrow">
        {label}
        {required && <span className="text-gold"> *</span>}
      </span>
      <input
        className={`${fieldClass} mt-1`}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
      />
    </label>
  );
}

export function ContactForm() {
  const [emailDraftStarted, setEmailDraftStarted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fields = [
      ["Name", "name"],
      ["Email", "email"],
      ["Phone", "phone"],
      ["Business / Company", "company"],
      ["Website / Store URL", "website"],
      ["Area of help", "need"],
      ["Message", "message"],
    ] as const;
    const body = fields
      .map(([label, name]) => `${label}: ${formData.get(name) || "Not provided"}`)
      .join("\n");
    const subject = `Website enquiry from ${formData.get("name")}`;

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setEmailDraftStarted(true);
  }

  if (emailDraftStarted) {
    return (
      <div className="flex min-h-72 flex-col items-center justify-center border border-border bg-card px-6 py-20 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-5 w-5" />
        </span>
        <h3 className="mt-6 text-2xl text-foreground">
          Your enquiry is ready to send.
        </h3>
        <p className="mt-3 max-w-md text-sm text-muted-foreground">
          Your email app should open with the details filled in. Send the email to complete your enquiry.
        </p>
        <a href={`mailto:${site.email}`} className="mt-4 text-sm text-foreground underline underline-offset-4">
          Open an email to {site.email}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-7 sm:grid-cols-2">
      <Field label="Name" name="name" required placeholder="Your name" />
      <Field label="Email" name="email" type="email" required placeholder="you@company.com" />
      <Field label="Phone" name="phone" type="tel" placeholder="+91" />
      <Field label="Business / Company" name="company" placeholder="Company" />
      <div className="sm:col-span-2">
        <Field label="Website / Store URL" name="website" placeholder="https://" />
      </div>

      <label className="block sm:col-span-2">
        <span className="eyebrow">
          What do you need help with<span className="text-gold"> *</span>
        </span>
        <select className={`${fieldClass} mt-1`} name="need" required defaultValue="">
          <option value="" disabled>
            Select an area
          </option>
          <option>Marketplace Management</option>
          <option>Performance Marketing & PPC</option>
          <option>Support Operations</option>
          <option>Inventory & Pricing Strategy</option>
          <option>D2C Website & GTM</option>
          <option>Catalog & PDP Optimization</option>
        </select>
      </label>

      <label className="block sm:col-span-2">
        <span className="eyebrow">Message</span>
        <textarea
          className={`${fieldClass} mt-1 resize-none`}
          name="message"
          rows={4}
          placeholder="Tell me a little about the business and where you'd like to grow."
        />
      </label>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full bg-primary px-8 py-4 text-sm tracking-wide text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
        >
          Send an enquiry →
        </button>
      </div>
    </form>
  );
}
