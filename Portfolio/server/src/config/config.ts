import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const environment= {
  NODE_ENV:process.env.NODE_ENV,
  CLIENT_URL:process.env.CLIENT_URL,

  CLIENT_LASTNAME:process.env.CLIENT_URL,
  CLIENT_FIRSTNAME:process.env.CLIENT_URL,
  CLIENT_JOB:process.env.CLIENT_URL,
  CLIENT_COUNTRY:process.env.CLIENT_URL,

  SMTP_SERVICE:process.env.CLIENT_URL,
  SMTP_USERNAME:process.env.CLIENT_URL,
  SMTP_PASSWORD:process.env.CLIENT_URL,
  SMTP_EMAIL_FROM:process.env.CLIENT_URL,
}

export default environment;