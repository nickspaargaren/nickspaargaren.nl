import { createClient } from '@sanity/client';

export const client = createClient({
	projectId: '5mfdvpuc',
	dataset: 'production'
});
