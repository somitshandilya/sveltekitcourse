export const actions = {
    login: async ({ request, cookies }) => {
      const data = await request.formData()
  
      const credentials = {
        name: data.get('name'),
        password: data.get('password'),
      }
  
      // do whatever you need
      console.log(credentials)
    },
  }
  