import { NextResponse, NextRequest } from 'next/server';
import { Resend } from 'resend';
import EmailTemplate from '@/components/email-template';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const { firstName, lastName, email, phone, jobTitle, company, role, country, project } = await req.json()
    try {
      const data = await resend.emails.send({
        from: 'patrick@zapcare.com.au',
        to: ['zapcare.au@gmail.com'],
        subject: `New inquiry for Build - ${company}`,
        react: EmailTemplate({ firstName, lastName, email, phone, jobTitle, company, role, country, project }) as React.ReactElement,
      });
  
      return NextResponse.json({ message: "email sent"});
    } catch (error) {
      return NextResponse.json({ error: true });
    }
  }
