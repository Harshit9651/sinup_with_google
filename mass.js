const axios = require('axios');

const serverKey = 'AAAAF6CFsHw:APA91bFzDLBjMGuVEKFSN5R0NExrM3AwbE9fh_eWVMRJxK9xsl92Lz_pTL4mzdjXiZluEaFwY9MyEtut2Suae_xXF5TulMJ44Gvx2r4shjW7Aju7LPjHAeAOd8r1RedlvPm4-MB2HFzQ';
const registrationToken = 'dKVoobcrQfKI-iUvL-oBqb:APA91bGjDA453x6fouGzeP66s1NdgDtbUY-M2Dh1zYB01hBR36uSnCcBiuaqkDU1k2YNfJJffN9rvKrm-FYNMwcscq7DHWIs4TG78mMB4gSwO0EqES8J6EQZncF3gXdgjgQ_inKGMUiA';

const message = {
  notification: {
    title: 'Hello!',
    body: 'This is a test message.'
  },
  to: registrationToken
};

axios.post('https://fcm.googleapis.com/fcm/send', message, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `key=${serverKey}`
  }
})
.then(response => {
  console.log('Successfully sent message:', response.data);
})
.catch(error => {
  console.error('Error sending message:', error.response.data);
});

