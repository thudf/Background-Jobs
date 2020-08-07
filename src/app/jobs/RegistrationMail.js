import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  options: {
    delay: 5000,
    priority: 3
  },
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: 'FilasApp <contato@filasapp.com.br>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá ${user.name}, seja bem-vindo.`
    });
  }
}

