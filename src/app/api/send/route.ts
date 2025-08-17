import { NextResponse, NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
      const { firstName, lastName, email, phone, jobTitle, company, role, country, project } = await req.json()
      
      // Check if Resend API key is configured
      if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is not configured')
        return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
      }

      const data = await resend.emails.send({
        from: 'patrick@zapcare.com.au',
        to: ['zapcare.au@gmail.com'],
        subject: `New inquiry for Build - ${company}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>New Build Inquiry from ${company}</h2>
            <div style="margin: 20px 0;">
              <p><strong>First Name:</strong> ${firstName}</p>
              <p><strong>Last Name:</strong> ${lastName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Job Title:</strong> ${jobTitle}</p>
              <p><strong>Company:</strong> ${company}</p>
              <p><strong>Role:</strong> ${role}</p>
              <p><strong>Country:</strong> ${country}</p>
              <p><strong>Project Description:</strong></p>
              <p style="background: #f5f5f5; padding: 10px; border-radius: 5px;">${project}</p>
            </div>
          </div>
        `,
      });
  
      console.log('Email sent successfully:', data)
      return NextResponse.json({ message: "email sent", success: true });
    } catch (error) {
      console.error('Email send error:', error)
      return NextResponse.json({ 
        error: 'Failed to send email', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      }, { status: 500 });
    }
  }
