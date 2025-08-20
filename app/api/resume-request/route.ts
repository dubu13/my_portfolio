import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

export async function POST(request: Request) {
    try {
        const data = await request.json();

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: data.email,
            subject: `Resume Request from ${data.name}`,
            text: `
Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'Not specified'}

Message:
${data.message}

Reply directly to: ${data.email}
            `
        });

        return NextResponse.json({ success: true});
    }
    catch (error) {
        console.error('Email error: ', error);
        return NextResponse.json({ success: false}, { status: 500});
    }
}