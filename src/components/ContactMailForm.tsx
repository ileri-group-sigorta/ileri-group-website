"use client";

import * as React from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";

const CONTACT_EMAIL = "info@ilerigrupsigorta.com";

export function ContactMailForm() {
  const t = useTranslations("contact");

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const mailSubject = subject.trim() || t("formTitle");
    const bodyLines = [
      `${t("nameLabel")}: ${name}`,
      `${t("emailLabel")}: ${email}`,
      `${t("phoneLabel")}: ${phone}`,
      "",
      message,
    ];
    const mailBody = bodyLines.join("\n");

    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(mailBody)}`;

    window.location.href = href;
  };

  return (
    <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/70">{t("nameLabel")}</label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("nameLabel")}
            className="bg-white/5 border-white/10 rounded-none text-white placeholder:text-white/30"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/70">{t("emailLabel")}</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ornek@email.com"
            className="bg-white/5 border-white/10 rounded-none text-white placeholder:text-white/30"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-white/70">{t("phoneLabel")}</label>
        <Input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+90 (5XX) XXX XX XX"
          className="bg-white/5 border-white/10 rounded-none text-white placeholder:text-white/30"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-white/70">{t("subjectLabel")}</label>
        <Input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder={t("subjectLabel")}
          className="bg-white/5 border-white/10 rounded-none text-white placeholder:text-white/30"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-white/70">{t("messageLabel")}</label>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t("messageLabel")}
          className="bg-white/5 border-white/10 rounded-none text-white placeholder:text-white/30 min-h-[120px] sm:min-h-[150px]"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-gold text-navy font-bold py-5 sm:py-6 h-auto text-base sm:text-lg rounded-none hover:bg-gold/90"
      >
        {t("sendButton")}
        <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
      </Button>
    </form>
  );
}
