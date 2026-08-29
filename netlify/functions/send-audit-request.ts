import type { Handler } from '@netlify/functions';
import * as nodemailer from 'nodemailer';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

  const { name, email, phone, website, company, mapsUrl, timeline, city } = JSON.parse(event.body || '{}');

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
    asap: 'Minél hamarabb',
    weeks: '1-2 héten belül',
    month: '1 hónapon belül',
  };

  const isEgyeb = city === 'Egyéb';

  await transporter.sendMail({
    from: '"Nagy Levi Marketing" <nlevi@levinagymarketing.com>',
    to: 'nlevi@levinagymarketing.com',
    replyTo: email,
    subject: `${isEgyeb ? '⚠️ EGYÉB VÁROS' : '🎯'} Új díjmentes audit kérés — ${company}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#0f172a;color:#e2e8f0;padding:32px;border-radius:12px;">
        ${isEgyeb ? '<div style="background:#7f1d1d;border:1px solid #dc2626;border-radius:8px;padding:12px 16px;margin-bottom:20px;color:#fca5a5;font-weight:700;">⚠️ EGYÉB VÁROS — NE HÍVD FEL</div>' : ''}
        <h2 style="color:#a78bfa;margin-top:0;">Új díjmentes audit kérés</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#94a3b8;width:140px;">Név</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#94a3b8;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#a78bfa;">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#94a3b8;">Telefon</td><td style="padding:8px 0;">${phone}</td></tr>
          <tr><td style="padding:8px 0;color:#94a3b8;">Város</td><td style="padding:8px 0;font-weight:600;${isEgyeb ? 'color:#f87171;' : 'color:#34d399;'}">${city}</td></tr>
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
