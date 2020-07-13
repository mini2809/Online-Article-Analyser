import { handleSubmit } from '../client/js/FormHandler'

test("It should be a function",async()=>{
	console.log(typeof handleSubmit)
	expect(typeof handleSubmit).toBe("function");
}); 