
const {response, request } = require('express');


const getUsers = (req = request, res = response ) =>  {

    const query  = req.query

    res.status(200).json({
        msg: 'get API',
        query

    })   
}


const postUsers = (req, res) =>  {
    const  {nombre , edad } = req.body;


    res.status(201).json({
        msg: 'post API',
        nombre, 
        edad 
    })   
};

const putUsers = (req, res) =>  {

    const id  = req.params.id; 
    
    res.status(400).json({
        msg: 'put API',
        id 
    })   
}
const deleteUsers = (req, res) =>  {
    res.status(200).json({
        msg: 'delete API'
    })   
}


module.exports = { 
    getUsers,
    postUsers,
    putUsers,
    deleteUsers

}