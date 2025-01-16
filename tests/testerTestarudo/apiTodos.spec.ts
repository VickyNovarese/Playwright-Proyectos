import {test,expect} from '@playwright/test';

test('Api todos', async({request})=>{
    const response = await request.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response)
    expect(response.ok).toBeDefined()
    expect(response.status()).toEqual(200)
   
});

test('Api todos Post', async({request})=>{
    const newItem = await request.post('https://jsonplaceholder.typicode.com/posts', {data:{
        "userId":"1",
        "id":"1",
        "title":"Example of title",
        "body":"Example of body"
    }});
    console.log(newItem)
    expect(newItem.ok).toBeDefined()
    expect(newItem.status()).toEqual(201)
   
});

test('Api todos Put', async({request})=>{
    const modifiedItem = await request.put('https://jsonplaceholder.typicode.com/posts/1', {data:{
        "userId":"1",
        "id":"1",
        "title":"Edited of title",
        "body":"Example of body"
    }});
    console.log(modifiedItem)
    expect(modifiedItem.ok).toBeDefined()
    expect(modifiedItem.status()).toEqual(200)
   
});