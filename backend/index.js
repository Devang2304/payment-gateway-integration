const app = require('express')();
const path = require('path');
const Razorpay = require('razorpay');
const shortid = require('shortid');
const cors = require('cors');

app.use(cors());

const razorpay = new Razorpay({
    key_id: 'rzp_test_Bbqg7B2fi9OCuu',
    key_secret : 'PgNhvCDhZWRlzng1b6tLP8PQ'
})

app.get('/logo.svg', (req, res) =>{
    res.sendFile(path.join(__dirname,'logo.svg'));
})

app.listen(1337,()=>{
    console.log('listening on 1337'); 
})

app.post('/razorpay',async(req, res)=>{

    const payment_capture = 1;
    const amount = 599;
    const currency = 'INR';
    
    const options = {
        amount : (amount*100),
        currency,
        receipt : shortid.generate(),
        payment_capture,
         
    }

     try {
        const response = await razorpay.orders.create(options);
     console.log(response);
     res.json({
        id: response.id,
        currency: response.currency,
        amount: response.amount
     })
     } catch (error) {
        console.log(error);
     }

})