# Razorpay Payment Gateway Integration

This repository demonstrates the integration of Razorpay payment gateway into a web application. Razorpay is a popular payment gateway provider that allows businesses to accept online payments.

## DEMO 

https://github.com/Devang2304/payment-gateway-integration/assets/69463638/899b3e69-a241-4a9d-acd9-6e7ee14b236b

## Prerequisites

Before getting started, make sure you have the following prerequisites:

- Node.js (and npm) installed on your development machine
- Razorpay account credentials (API key and API secret) obtained from Razorpay's dashboard
- Basic knowledge of React

## Installation

1. Clone this repository to your local machine:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd razorpay-payment-gateway
```

3. Install the dependencies:

```bash
npm install
```

## Configuration

1. Replace `<YOUR_API_KEY>` and `<YOUR_API_SECRET>` with your actual Razorpay API key and API secret.

```javascript
module.exports = {
  apiKey: '<YOUR_API_KEY>',
  apiSecret: '<YOUR_API_SECRET>'
};
```

## Usage

1. Start the development server:

```bash
npm start
```

2. Open your web browser and visit `http://localhost:3000` to view the web application.

3. Click on the "Pay Now" button to initiate the payment process.

4. Complete the payment using the provided Razorpay test credentials or your own test credentials.

5. After a successful payment, you will receive a confirmation message.

## Deployment

To deploy the web application to a production environment, follow these steps:

1. Build the optimized version of the application:

```bash
npm run build
or
npm start
```

2. Deploy the generated `build` directory to your production or development server.

3. Make sure to update the Razorpay API credentials in the production environment to use your live API key and secret.

## Resources

- [Razorpay Documentation](https://razorpay.com/docs/)
- [Razorpay API Reference](https://razorpay.com/docs/api/)
- [Razorpay GitHub Repository](https://github.com/razorpay)
- [React Documentation](https://reactjs.org/docs/)

## Acknowledgments

Special thanks to the Razorpay team for providing an excellent payment gateway solution.

## Contact

If you have any questions or need further assistance, please don't hesitate to contact me at [Linkedin](https://www.linkedin.com/in/devang230403).
