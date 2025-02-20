export const revalidateCash = async () => {
  const result = await fetch('https://chat-boty.com/client_api/revalidate')

  alert(result.ok)
}