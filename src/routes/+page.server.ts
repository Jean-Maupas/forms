import * as db from '$lib/server/db';

export function load({ cookies }) {
	let id = cookies.get('userid');

	if (!id) {
		id = crypto.randomUUID();
		cookies.set('userid', id, { path: '/' });
	}

	return {
		todos: db.getTodos(id)
	};
}

export const actions = {
	test: async ({ cookies, request }) => {
		const data = await request.formData();
		const userid = cookies.get('userid') || '';
		const description = data.get('description')?.toString() || '';
		db.createTodo(userid, description);
	},
	test1: async ({ request }) => {
		const data = await request.formData();
		const test = data.get('test');
        console.log(test)
		return { success: true };
	},
	test2: async ({ request }) => {
		const data = await request.formData();
		const test = data.get('test');
        console.log("test2",test)
		return { success: true };
	}
};
