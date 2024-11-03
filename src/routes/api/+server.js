/* eslint-disable @typescript-eslint/no-unused-vars */
import { json } from '@sveltejs/kit';

export async function POST({ request, cookies }) {
	const { name } = await request.json();
  console.log("POST",name)
	const userid = cookies.get('userid');
	//const { id } = await database.createTodo({ userid, description });
  const id = 1;
	return json({ id }, { status: 201 });
}


