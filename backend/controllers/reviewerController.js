import Reviewer from '../models/userModel.js'

const getAllReviewerDetails = async (req,res) => {
        const rev = await Reviewer.find({});
        res.json(rev);
};

//const getReviewer = async (req,res) => {
  //  await Reviewer.findById(req.params.id)
  //.populate('vehicle','code model type name')
  //.then(data => {
    //  res.status(200).send({ vehicle: data.vehicle })
  //})
  //.catch(error => {
    //  res.status(500).send({ error: error.message })
  //})
//}

const getReviewerDetails = async (req, res) => {
  try {
    //get Reviewer details
    //-password : dont return the pasword
    const user = await Reviewer.findById(req.user.id).select('-password');
    res.json(user);
  } catch {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};



/*const researcher = await Researcher.findById(req.params.id)

if(researcher){
  researcher.researcherEmail = researcherEmail
  researcher.researcherPhoneNo = researcherPhoneNo
  researcher.researchPaper = researchPaper

    const updateResearcher = await researcher.save()
   res.json(updateResearcher)

}else{
    
  res.status(404)
  throw new Error('reviewer details not found')
}
*/

export{ getAllReviewerDetails,getReviewerDetails }