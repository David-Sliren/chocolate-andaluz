interface MessageWhatsaap {
  phoneNumber: string;
  message: string;
}

export const messageToWhatsaap = ({
  phoneNumber,
  message,
}: MessageWhatsaap) => {
  const baseUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}`;
  const params = new URLSearchParams({ text: message }).toString();
  const link = `${baseUrl}&${params}`;
  return link;
};
