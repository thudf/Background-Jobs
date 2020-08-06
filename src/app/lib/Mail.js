import nodemailer from 'nodemailer';
import mailCongif from '../../config/mail';

export default nodemailer.createTransport(mailCongif);