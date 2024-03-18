const modelfilecalling=require('../model/model');

exports.create=(req,res)=>{
    let check=new modelfilecalling({
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        phone:req.body.phone,
        position:req.body.position,
        email:req.body.email,
        radioyes:req.body.radioyes,
        experience:req.body.experience

    })
    check.save().then((s)=>{
        console.log("ss",s);
        res.redirect('/thankyou');
    })
}