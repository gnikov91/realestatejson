import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
	const { data } = await axios.get(url, {
		headers: {
			'x-rapidapi-host': 'bayut.p.rapidapi.com',
			'x-rapidapi-key': '1a6f4c0003msh003b4ffe611fa7bp15424ejsn471d13945796',
		},
	})
	return data
}
