import type { Handler } from '@netlify/functions';
import * as nodemailer from 'nodemailer';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

  const { name, email, phone, website, company, mapsUrl, timeline } = JSON.parse(event.body || '{}');

  const smtpHost = process.env.SMTP_HOST || 'mail.privateemail.com';
  const smtpPort = parseInt(process.env.SMTP_PORT || '465');
  const smtpUser = process.env.SMTP_USER || '';
  const smtpPass = process.env.SMTP_PASS || '';

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
  });

  const timelineMap: Record<string, string> = {
    today: 'Ma',
    tomorrow: 'Holnap',
    weeks: 'Néhány héten belül',
  };

  await transporter.sendMail({
    from: '"Nagy Levi Marketing" <nlevi@levinagymarketing.com>',
    to: 'nlevi@levinagymarketing.com',
    replyTo: email,
    subject: `🎯 Új díjmentes audit kérés — ${company}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#0f172a;color:#e2e8f0;padding:32px;border-radius:12px;">
        <h2 style="color:#a78bfa;margin-top:0;">Új díjmentes audit kérés</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#94a3b8;width:140px;">Név</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#94a3b8;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#a78bfa;">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#94a3b8;">Telefon</td><td style="padding:8px 0;">${phone}</td></tr>
          <tr><td style="padding:8px 0;color:#94a3b8;">Cég</td><td style="padding:8px 0;font-weight:600;">${company}</td></tr>
          <tr><td style="padding:8px 0;color:#94a3b8;">Weboldal</td><td style="padding:8px 0;"><a href="${website}" style="color:#a78bfa;">${website}</a></td></tr>
          <tr><td style="padding:8px 0;color:#94a3b8;">Google Maps</td><td style="padding:8px 0;"><a href="${mapsUrl}" style="color:#a78bfa;">${mapsUrl}</a></td></tr>
          <tr><td style="padding:8px 0;color:#94a3b8;">Határidő</td><td style="padding:8px 0;font-weight:600;color:#34d399;">${timelineMap[timeline] || timeline}</td></tr>
        </table>
      </div>
    `,
  });

  return { statusCode: 200, body: JSON.stringify({ success: true }) };
};
