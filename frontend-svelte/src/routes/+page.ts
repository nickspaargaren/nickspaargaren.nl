import { getSkills } from '$lib/getSkills';

export async function load() {
	const skills = await getSkills();
	return { skills };
}
