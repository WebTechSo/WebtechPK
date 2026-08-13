"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setMessage("Thanks — we’ll be in touch within one business day.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please email us directly.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="First name" name="firstName" required />
        <Field label="Last name" name="lastName" required />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Work email" name="email" type="email" required />
        <Field label="Company" name="company" />
      </div>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-ink">
          How can we help?
        </span>
        <select
          name="interest"
          className="w-full rounded-md border border-line bg-white px-3 py-3 text-sm text-ink outline-none transition focus:border-teal"
          defaultValue="AI & ML"
        >
          <option>AI & ML</option>
          <option>Application Development</option>
          <option>Cloud Engineering</option>
          <option>Digital Transformation</option>
          <option>Dedicated Teams</option>
          <option>Other</option>
        </select>
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-ink">
          Project details
        </span>
        <textarea
          name="details"
          required
          rows={5}
          className="w-full resize-y rounded-md border border-line bg-white px-3 py-3 text-sm text-ink outline-none transition focus:border-teal"
          placeholder="Goals, timeline, and any constraints we should know."
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center rounded-md bg-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-aqua focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua-bright disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Sending…" : "Submit"}
      </button>

      {message ? (
        <p
          className={`text-sm ${
            status === "success" ? "text-teal" : "text-red-600"
          }`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-ink">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-line bg-white px-3 py-3 text-sm text-ink outline-none transition focus:border-teal"
      />
    </label>
  );
}
