const express=require('express');
const route=express.Router();

const renderfilecalling=require('../services/render');
const controllerfilecalling=require('../controller/controller')
route.get('/',renderfilecalling.home);
route.get('/form',renderfilecalling.form);
route.get('/thankyou',renderfilecalling.thankyou);
route.post('/api/post',controllerfilecalling.create);

module.exports=route; 