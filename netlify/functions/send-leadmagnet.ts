import type { Handler } from '@netlify/functions';
import * as nodemailer from 'nodemailer';

/**
 * Netlify Function: POST /.netlify/functions/send-leadmagnet
 *
 * Body (JSON):
 *   { name: string, email: string, language: 'hu' | 'en' }
 *
 * ── Required environment variables (set in Netlify dashboard) ─────────────
 *   SMTP_HOST  →  your hosting provider's SMTP server
 *                 e.g. mail.levinagymarketing.com  or  smtp.hostinger.com
 *                 (find it in your hosting cPanel → Email Accounts → Connect Devices)
 *   SMTP_PORT  →  465  (SSL)  or  587  (TLS) — check with your host, usually 465
 *   SMTP_USER  →  nlevi@levinagymarketing.com
 *   SMTP_PASS  →  the password for that email account
 *
 * The PDF is attached directly as a file — no link needed.
 * ─────────────────────────────────────────────────────────────────────────
 */

const BASE_URL = 'https://levinagymarketing.com';

const templates = {
  hu: {
    subject: 'A Meta hirdetési útmutatód megérkezett 🎁',
    pdfUrl: `${BASE_URL}/leadmagnet-hu.pdf`,
    html: (name: string, pdfUrl: string) => `
<!DOCTYPE html>
<html lang="hu">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0f172a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;padding:40px 20px;">
    <tr><td align="center">
      <table width="580" cellpadding="0" cellspacing="0" style="background:#1e293b;border-radius:16px;overflow:hidden;max-width:580px;">

        <!-- Header bar -->
        <tr><td style="background:linear-gradient(90deg,#7c3aed,#8b5cf6);height:4px;"></td></tr>

        <!-- Body -->
        <tr><td style="padding:40px 40px 32px;">
          <p style="margin:0 0 24px;font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8b5cf6;">🎁 Ingyenes útmutató</p>
          <h1 style="margin:0 0 16px;font-size:26px;font-weight:800;color:#ffffff;line-height:1.3;">
            Szia ${name}! 👋<br>Megérkezett az útmutatód.
          </h1>
          <p style="margin:0 0 28px;font-size:15px;line-height:1.7;color:#94a3b8;">
            Köszönöm, hogy letöltötted a Meta hirdetési útmutatót!
            Kattints az alábbi gombra, és máris olvashatod.
          </p>

          <!-- CTA button -->
          <table cellpadding="0" cellspacing="0" style="margin:0 0 32px;">
            <tr><td style="background:#7c3aed;border-radius:10px;">
              <a href="${pdfUrl}" style="display:inline-block;padding:14px 32px;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;">
                📥 Letöltöm az útmutatót →
              </a>
            </td></tr>
          </table>

          <!-- What's inside -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;border-radius:10px;margin-bottom:32px;">
            <tr><td style="padding:20px 24px;">
              <p style="margin:0 0 12px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#64748b;">Az útmutatóban találod:</p>
              <p style="margin:0 0 8px;font-size:14px;color:#cbd5e1;">✅ Miért éri el hirdetésed pontosan a megfelelő embereket</p>
              <p style="margin:0 0 8px;font-size:14px;color:#cbd5e1;">✅ A leggyakoribb hibák, amik elvéreznek a Facebookon</p>
              <p style="margin:0;font-size:14px;color:#cbd5e1;">✅ Konkrét stratégia, amivel azonnal elindulhatsz</p>
            </td></tr>
          </table>

          <p style="margin:0;font-size:14px;line-height:1.6;color:#64748b;">
            Ha bármilyen kérdésed van, csak válaszolj erre az e-mailre.<br>
            Hamarosan jelentkezem! 🚀
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:20px 40px 32px;border-top:1px solid #334155;">
          <p style="margin:0;font-size:13px;color:#475569;">
            <strong style="color:#94a3b8;">Nagy Levi</strong> · Nagy Levi Marketing<br>
            <a href="https://levinagymarketing.com" style="color:#7c3aed;text-decoration:none;">levinagymarketing.com</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
  },

  en: {
    subject: 'Your free Meta Ads guide is here 🎁',
    pdfUrl: `${BASE_URL}/leadmagnet-us.pdf`,
    html: (name: string, pdfUrl: string) => `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0f172a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;padding:40px 20px;">
    <tr><td align="center">
      <table width="580" cellpadding="0" cellspacing="0" style="background:#1e293b;border-radius:16px;overflow:hidden;max-width:580px;">

        <!-- Header bar -->
        <tr><td style="background:linear-gradient(90deg,#7c3aed,#8b5cf6);height:4px;"></td></tr>

        <!-- Body -->
        <tr><td style="padding:40px 40px 32px;">
          <p style="margin:0 0 24px;font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8b5cf6;">🎁 Free guide</p>
          <h1 style="margin:0 0 16px;font-size:26px;font-weight:800;color:#ffffff;line-height:1.3;">
            Hey ${name}! 👋<br>Your guide just landed.
          </h1>
          <p style="margin:0 0 28px;font-size:15px;line-height:1.7;color:#94a3b8;">
            Thanks for downloading the Meta Ads guide!
            Hit the button below to grab your copy.
          </p>

          <!-- CTA button -->
          <table cellpadding="0" cellspacing="0" style="margin:0 0 32px;">
            <tr><td style="background:#7c3aed;border-radius:10px;">
              <a href="${pdfUrl}" style="display:inline-block;padding:14px 32px;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;">
                📥 Download the guide →
              </a>
            </td></tr>
          </table>

          <!-- What's inside -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;border-radius:10px;margin-bottom:32px;">
            <tr><td style="padding:20px 24px;">
              <p style="margin:0 0 12px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#64748b;">Inside the guide:</p>
              <p style="margin:0 0 8px;font-size:14px;color:#cbd5e1;">✅ Why your ads can reach exactly the right people</p>
              <p style="margin:0 0 8px;font-size:14px;color:#cbd5e1;">✅ The biggest mistakes killing Facebook campaigns</p>
              <p style="margin:0;font-size:14px;color:#cbd5e1;">✅ A concrete strategy you can start using today</p>
            </td></tr>
          </table>

          <p style="margin:0;font-size:14px;line-height:1.6;color:#64748b;">
            Questions? Just reply to this email — I read every one.<br>
            Talk soon! 🚀
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:20px 40px 32px;border-top:1px solid #334155;">
          <p style="margin:0;font-size:13px;color:#475569;">
            <strong style="color:#94a3b8;">Levi Nagy</strong> · Nagy Levi Marketing<br>
            <a href="https://levinagymarketing.com" style="color:#7c3aed;text-decoration:none;">levinagymarketing.com</a>
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`,
  },
};

export const handler: Handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let name: string, email: string, language: 'hu' | 'en';
  try {
    ({ name, email, language } = JSON.parse(event.body ?? '{}'));
    if (!name || !email || !language) throw new Error('Missing fields');
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body' }) };
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT ?? '465', 10);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.error('SMTP env vars not set (need SMTP_HOST, SMTP_USER, SMTP_PASS)');
    return { statusCode: 500, body: JSON.stringify({ error: 'Email service not configured' }) };
  }

  const tpl = templates[language] ?? templates.en;

  const transporter = nodemailer.createTransport({
    host:   smtpHost,
    port:   smtpPort,
    secure: smtpPort === 465,
    auth:   { user: smtpUser, pass: smtpPass },
  });

  const FROM      = '"Levi Nagy" <nlevi@levinagymarketing.com>';
  const NOTIFY_TO = 'nlevi@levinagymarketing.com';

  // Fetch the PDF so it can be attached directly to the email
  let pdfBuffer: Buffer;
  try {
    const res = await fetch(tpl.pdfUrl);
    if (!res.ok) throw new Error(`PDF fetch failed: ${res.status}`);
    pdfBuffer = Buffer.from(await res.arrayBuffer());
  } catch (err) {
    console.error('Could not fetch PDF for attachment:', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Could not load PDF' }) };
  }

  const pdfFilename = language === 'hu' ? 'meta-hirdetesek-utmutato.pdf' : 'meta-ads-guide.pdf';

  try {
    // 1. Send the guide to the lead — with PDF attached
    await transporter.sendMail({
      from:    FROM,
      to:      email,
      subject: tpl.subject,
      html:     tpl.html(name, tpl.pdfUrl),
      attachments: [
        {
          filename:    pdfFilename,
          content:     pdfBuffer,
          contentType: 'application/pdf',
        },
      ],
    });

    // 2. Notify Levi about the new lead
    await transporter.sendMail({
      from:    FROM,
      to:      NOTIFY_TO,
      replyTo: email,
      subject: `🎯 Új lead: ${name} (${language.toUpperCase()})`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px;background:#f8fafc;border-radius:12px;">
          <h2 style="margin:0 0 16px;color:#1e293b;">🎯 Új lead letöltötte az útmutatót</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;color:#64748b;font-size:14px;">Név</td>
                <td style="padding:10px 0;font-weight:600;color:#0f172a;font-size:14px;">${name}</td></tr>
            <tr style="border-top:1px solid #e2e8f0;">
                <td style="padding:10px 0;color:#64748b;font-size:14px;">E-mail</td>
                <td style="padding:10px 0;font-size:14px;"><a href="mailto:${email}" style="color:#7c3aed;">${email}</a></td></tr>
            <tr style="border-top:1px solid #e2e8f0;">
                <td style="padding:10px 0;color:#64748b;font-size:14px;">Nyelv</td>
                <td style="padding:10px 0;font-weight:600;color:#0f172a;font-size:14px;">${language === 'hu' ? '🇭🇺 Magyar' : '🇺🇸 English'}</td></tr>
            <tr style="border-top:1px solid #e2e8f0;">
                <td style="padding:10px 0;color:#64748b;font-size:14px;">PDF</td>
                <td style="padding:10px 0;font-size:14px;color:#0f172a;">${language === 'hu' ? 'leadmagnet-hu.pdf' : 'leadmagnet-us.pdf'}</td></tr>
          </table>
          <p style="margin:24px 0 0;font-size:13px;color:#94a3b8;">Automatikus értesítő · Nagy Levi Marketing</p>
        </div>`,
    });

    console.log(`Lead magnet sent to ${email} (${language}), Levi notified`);
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error('SMTP send failed:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};
