import nodemailer from 'nodemailer';

class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async sendContactNotification(
    name: string,
    email: string,
    subject: string,
    message: string
  ): Promise<void> {
    try {
      // Email to admin
      const adminMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.CONTACT_EMAIL,
        subject: `New Portfolio Contact: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      };

      // Confirmation email to user
      const userMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: `Message Received - Raj Kumar's Portfolio`,
        html: `
          <h2>Thank You for Reaching Out!</h2>
          <p>Hi ${name},</p>
          <p>Your message has been received successfully. I'll get back to you as soon as possible.</p>
          <p><strong>Your Subject:</strong> ${subject}</p>
          <hr>
          <p>Best regards,<br>Raj Kumar Pandey</p>
        `,
      };

      await this.transporter.sendMail(adminMailOptions);
      await this.transporter.sendMail(userMailOptions);

      console.log('✅ Emails sent successfully');
    } catch (error) {
      console.error('❌ Email sending failed:', error);
      throw new Error('Failed to send email');
    }
  }

  async verifyConnection(): Promise<void> {
    try {
      await this.transporter.verify();
      console.log('✅ Email service connected');
    } catch (error) {
      console.error('❌ Email service connection failed:', error);
    }
  }
}

export default new EmailService();
