const clarifai=require('clarifai');

 const app = new Clarifai.App({
 apiKey: '1a3dde257dd0484e83b965bcbb776668'
});

  const handleApiCall=(req,res)=>{
  app.models
  .predict(Clarifai.FACE_DETECT_MODEL,req.body.input)
  .then(data=> {
  	res.json(data);
  })
  .catch(err=>res.status(400).json('unable to work with Api'))
}

const handleImage=(req,res,db)=>{
	const{ id }=req.body;
	db('users').where('id','=',id) 
	.increment('enteries',1)
	.returning('enteries')
	.then(enteries=>{
	res.json(enteries[0])
	})
	.catch(err=>res.status(400).json('unable to find count'))
 }
 module.exports={
 	handleImage,
 	handleApiCall
 };