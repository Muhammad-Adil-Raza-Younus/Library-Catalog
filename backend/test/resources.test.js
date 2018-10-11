const {Post, Delete, Get, Put} = require('../CreateTest')


const mockResource = {
    title : "title3" , author : "author3", format : "format3" ,pages:"format3"  ,publisher: "publi",language: "eng", ISBN_10:"111", ISBN_13 : "222"
}
    
Post('/resources','Resource should be created', {resource_data: mockResource, type: "Book"}, ({expect, res})=>{
        expect(res.body.status).to.equal(0);
        let insertId = res.body.id;

            // Change mockResource
            mockResource.firstName = "new name";
            Put('/resources', 'Resource should be updated.', {"resource_id": insertId, "resource": mockResource}, ({expect, rest}) =>{
                expect(res.body.status).to.equal(0);

                Delete('/resources', 'Resource should be deleted.', {"user_id":insertId}, ({expect, res})=>{
                    console.log(res.body);
                    expect(res.body.status).to.equal(0);
                })
            })
    
        
    
    })


