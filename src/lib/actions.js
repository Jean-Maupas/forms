// actions.js
export const actions = {
    test4: async ({ request }, /** @type {{ get: (arg0: string) => any; }} */ formData) => {
      const data = { test: formData.get('test4') };
      console.log("test4",data)
      await fetch('/?test1', {
        method: 'POST',
        body: JSON.stringify(data),
      }).then(({ data }) => {
        console.log(data)
    })

},
  };