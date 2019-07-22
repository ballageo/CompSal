
module.exports =  {
    PLACEHOLDER:(req, res) => {
        PLACEHOLDERs.find()
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    
}