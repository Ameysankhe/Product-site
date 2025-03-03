import axios from 'axios';

// ******** Get IP address ********
export const IpAddress = async ({ setLoading, setIpData }) => {
    try {
        let res = await axios.get(`https://api.ipstack.com/check?access_key=${process.env.REACT_APP_IP_ADDRESS_API_KEY}`);

        if(res) {
            setLoading(false)
            setIpData(res.data.country_name)
        }
    } catch (error) {
        alert(`Ip address Error: ${error}`)
    }
}

// ************* Get Countries *************
export const GetCountries = async ({ setLoading, setCountries }) => {
    try {
        let res = await axios.get(`https://api.apilayer.com/number_verification/countries`, {
            headers:{
                apikey: process.env.REACT_APP_NUMBER_VALIDATE_API_KEY
            }
        });

        if(res) {
            setLoading(false);
            setCountries(res.data);
        }
    } catch (error) {
        alert(error.response.data.message);
        setLoading(false);
    }
};

// ************ Send email ************
export const SendEmail = async ({ fullName,email,phone,message, setSend }) => {
    try {
        const datas = {fullName,email,phone,message};
        let res = await axios.post(`https://product-site-kdnu.onrender.com/send`, datas);
        if (res && res.data !== undefined) {
            setSend(res.data);
        } else {
            alert.error("Response or response data is undefined or null.");
        }
    } catch (error) {
        alert("Response or response data is undefined or null.");
    }
};