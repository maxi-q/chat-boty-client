export const WhatsAppLink = 'https://wa.me/89044240510?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%AF%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20%D1%87%D0%B0%D1%82-%D0%B1%D0%BE%D1%82%D0%B0'
export const TGLink = 'https://t.me/nipi_bz'
export const VKLink = 'https://vk.com/develop_target'

export const TelephoneLink = 'tel:+79044240510'
console.log(process.env.NEXT_PUBLIC_MODE)
export const SOURCE = {
	url:
		process.env.NEXT_PUBLIC_MODE === 'development'
			? 'https://dev.chat-boty.com/api/v1/'
			: 'https://chat-boty.com/api/v1/',
	// source_url: 'https://resource.chat-boty.com/',
}
