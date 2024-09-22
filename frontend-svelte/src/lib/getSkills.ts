import { client } from '$lib/sanityClient';
import { type Skills } from '../sanity.types';

export async function getSkills() {
	const skills = await client.fetch<Skills[]>('*[_type == "skills"]{title}');
	return skills;
}
