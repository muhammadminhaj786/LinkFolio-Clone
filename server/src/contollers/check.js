


export const CheckServer = async(req,res)=> {
    try {

        return res.status(200).json({
            message: 'Server up'
        })
        
    } catch (error) {
        return res.status(500).json({
            details: error.message
        })
    }
}