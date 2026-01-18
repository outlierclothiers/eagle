import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { name, email, company, role } = data

    // Format the email content
    const emailSubject = `New Waitlist Signup: ${name || email}`
    const emailBody = `
New Kinetic GPR Pro Waitlist Submission
========================================

Name: ${name || 'Not provided'}
Email: ${email}
Company: ${company || 'Not provided'}
Role: ${role || 'Not provided'}

Submitted: ${new Date().toISOString()}

---
This submission came from gprkinetic.pro
    `.trim()

    // Send email using Resend (recommended), or fallback approaches
    // Option 1: Using Resend API (if RESEND_API_KEY is set)
    if (process.env.RESEND_API_KEY) {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || 'Kinetic GPR Pro <onboarding@resend.dev>',
          to: ['panda@juche.org'],
          subject: emailSubject,
          text: emailBody,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send email via Resend')
      }

      return NextResponse.json({ success: true, message: 'Successfully joined waitlist' })
    }

    // Option 2: Using Formspree (if FORMSPREE_ID is set)
    if (process.env.FORMSPREE_ID) {
      const response = await fetch(`https://formspree.io/f/${process.env.FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: emailSubject,
          name,
          email,
          company,
          role,
          _replyto: email,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send via Formspree')
      }

      return NextResponse.json({ success: true, message: 'Successfully joined waitlist' })
    }

    // Option 3: Direct SMTP using nodemailer-style approach (if SMTP vars are set)
    // For simplicity, we'll log the submission and return success
    // In production, configure one of the above options
    
    console.log('=== NEW WAITLIST SUBMISSION ===')
    console.log(emailBody)
    console.log('================================')
    
    // For now, return success - the submission is logged
    // Configure RESEND_API_KEY or FORMSPREE_ID for actual email delivery
    return NextResponse.json({ 
      success: true, 
      message: 'Successfully joined waitlist',
      note: 'Configure email service for delivery' 
    })

  } catch (error) {
    console.error('Waitlist submission error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process submission' },
      { status: 500 }
    )
  }
}
