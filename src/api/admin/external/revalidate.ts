export const revalidateCash = async () => {
  await fetch('https://chat-boty.com/client_api/revalidate')
}