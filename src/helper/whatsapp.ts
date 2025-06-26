export const buildWhatsAppMessage = (formData: {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  size?: string;
  budget?: string;
  timeline?: string;
  message?: string;
}): string => {
  let whatsappMessage = `
Hello, I'm interested in discussing a project. Here are my details:

Name: ${formData.name ?? "N/A"}
Email: ${formData.email ?? "N/A"}
Phone: ${formData.phone ?? "N/A"}
Project Type: ${formData.projectType ?? "N/A"}`;

  // Conditionally add size to the message
  if (formData.projectType === "residential" && formData.size) {
    whatsappMessage += `
Size: ${formData.size}`;
  }

  whatsappMessage += `
Budget: ${formData.budget ?? "N/A"}
Timeline: ${formData.timeline ?? "N/A"}

Message:
${formData.message ?? "No specific message provided."}

Looking forward to your response!
  `.trim();

  return whatsappMessage;
};

/**
 * Generates the WhatsApp URL with the given message.
 * @param message - The WhatsApp message to send.
 * @param whatsAppNumber - The WhatsApp phone number (e.g., "91XXXXXXXXXX").
 * @returns The full WhatsApp API URL.
 */
export const getWhatsAppUrl = (
  message: string,
  whatsAppNumber: string
): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`;
};
