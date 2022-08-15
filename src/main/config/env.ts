export const env = {
  port: Number(process.env.PORT) || 3000,
  viaCepBaseUrl: process.env.VIA_CEP_BASE_URL || 'https://viacep.com.br/ws'
}
