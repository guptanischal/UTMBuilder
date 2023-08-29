let web_url = document.getElementById("web-url");
let utm_source = document.getElementById("utm-source");
let utm_medium= document.getElementById("utm-medium");
let utm_campaign= document.getElementById("utm-campaign");
let utm_content= document.getElementById("utm-content");
let utm_term= document.getElementById("utm-term");
let utm_textarea = document.getElementById("utm-textarea");


const validate = () => {
    // if( (web_url.value === '' || web_url.value === null) ||  (utm_source.value === '' || utm_source.value === null) || (utm_medium.value === '' || utm_medium.value === null) || (utm_campaign.value === '' || utm_campaign.value === null)){
    //     utm_textarea.value = "Please fill all the required fields before we can generate the UTM URL."
    // }
    //let valid_url = isValidUrl(web_url.value);
    // console.log(web_url.value);
    //if(valid_url){
        if( (web_url.value === '' || web_url.value === null) || (utm_source.value === '' || utm_source.value === null) || (utm_medium.value === '' || utm_medium.value === null) || (utm_campaign.value === '' || utm_campaign.value === null)){
            //utm_textarea.value = "Please fill all the required fields before we can generate the UTM URL."
            utm_textarea.placeholder = "Please fill all the required fields before we can generate the UTM URL."
        }else{
            generateUTMURL();
        }
    //}else{
      //  document.getElementById("invalid_feedback").style.display = "block";
        // validateWebUrl();
    //}
    
}

function generateUTMURL() {
    const webUrl = (document.getElementById('web-url').value);
    const utmSource = encodeURIComponent(document.getElementById('utm-source').value);
    const utmMedium = encodeURIComponent(document.getElementById('utm-medium').value);
    const utmCampaign = encodeURIComponent(document.getElementById('utm-campaign').value);
    const utmContent = encodeURIComponent(document.getElementById('utm-content').value);
    const utmTerm = encodeURIComponent(document.getElementById('utm-term').value);

    let utmQueryString = '';
    
    if (utmSource) utmQueryString += `utm_source=${utmSource}&`;
    if (utmMedium) utmQueryString += `utm_medium=${utmMedium}&`;
    if (utmCampaign) utmQueryString += `utm_campaign=${utmCampaign}&`;
    if (utmContent) utmQueryString += `utm_content=${utmContent}&`;
    if (utmTerm) utmQueryString += `utm_term=${utmTerm}&`;

    if (utmQueryString.endsWith('&')) {
        utmQueryString = utmQueryString.slice(0, -1); // Remove trailing '&'
    }
    let generatedURL;
    if(webUrl.includes('http://',0)||(webUrl.includes('https://',0))){
        generatedURL = `${webUrl}${utmQueryString ? `?${utmQueryString}` : ''}`;
    }else{
        generatedURL = `https://${webUrl}${utmQueryString ? `?${utmQueryString}` : ''}`;
    }
    document.getElementById('utm-textarea').value = generatedURL;
}

(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
        }, false)
    })
    })()

    function isValidUrl(url) {
        // Regular expression to validate URL format
        const urlPattern = /^(www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
        return urlPattern.test(url);
    }

    // function validateWebUrl() {
    //     alert("PARTH");
    //     // const input = document.getElementById('web-url');
    //     const feedback = web_url.nextElementSibling;
    
    //     if (web_url.validity.valid) {
    //         web_url.classList.remove('is-invalid');
    //         feedback.style.display = 'none';
    //     } else {
    //         web_url.classList.add('is-invalid');
    //         feedback.style.display = 'block';
    //     }
    // }