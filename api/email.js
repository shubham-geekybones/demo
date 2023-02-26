import { SMTPClient } from 'emailjs';

export const emailService = async () => {
    const hostEmail = "smtp.kumarshubham5040289@gmail.com"
    const client = new SMTPClient({
        user: 'user',
        password: 'password',
        host: hostEmail,
        ssl: true,
    });
    try {
        const message = await client.sendAsync({
            text: 'i hope this works',
            from: 'shubham.kumar@geeky.dev',
            to: 'kumarshubham5040289@gmail.com',
            cc: 'shubham.kumar@geeky.dev',
            subject: 'testing emailjs',
        });
        console.log(message);
    } catch (err) {
        console.error(err);
    }
}
