/* eslint-disable @typescript-eslint/no-unused-vars */
import * as db from '$lib/server/db';
import { fail } from '@sveltejs/kit';

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
	test1: async ({ cookies, request }) => {
		const data = await request.formData();
		const test = data.get('test');
        console.log(test)
		return { success: true };
	},
	test2: async ({ cookies, request }) => {
		const data = await request.formData();
		try {
			db.createTodo(cookies.get('userid') || '', data.get('description')?.toString() || '');
		} catch (error) {
			return fail(422, {
				description: data.get('description'),
				error: (error as Error)?.message
			});
		}
		const test = data.get('test');
        console.log("test2",test)
		return { success: true };
	},
    test4: async ({ cookies, request }) => {
		const data = await request.formData();
		// const name = res.get('name');
		// const email = res.get('email');
		// const message = res.get('message');
		console.log("test2 ",data);
		return {
		  success: true,
		  data
		};
	  },
	test6: async ({ request }: { request: Request }) => {
		const data = await request.formData();
		const test = data.get('radio');
		console.log("TEST6", test);
		return {
			success: true
		};
	}
  };





