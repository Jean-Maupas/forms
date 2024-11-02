// actions.js
export const actions = {
    test4: async ({}, /** @type {{ get: (arg0: string) => string; }} */ formData) => {
      const data = { test: formData.get('test4') };
      console.log("test4",data)
      await fetch('/?test1', {
        method: 'POST',
        body: JSON.stringify(data),
      }).then(() => {
        console.log(data)
      })
    },

    // @ts-ignore
    test6: async ({ request }) => {
        const formData = Object.fromEntries(await request.formData());
        // const name = res.get('name');
        // const email = res.get('email');
        // const message = res.get('message');
        console.log(formData);
        return {
            success: true,
            formData
        };
    }
};