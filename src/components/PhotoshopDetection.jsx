import Groq from 'groq-sdk';

//Takes in a boolean value to determine if it should check for photoshop or educational content.
// A return value of true means that the image is okay to be uploaded, a no means that it should be rejected

const groq = new Groq();
export async function PhotoshopDetection(photoshop = true) {
  if (photoshop) {
    const chatCompletion = await groq.chat.completions.create({
      "messages": [
        {
          "role": "user",
          "content": [
            {
              "type": "text",
              "text": "Based on the image, please answer the following question: Is this image edited with Photoshop? Look for things that could be off such as body shape, lighting, shadows, etc. It is okay if only things such as contrast and exposure have been changed, but not if any bodies or personal images have been altered to look 'better'. Look for inconsistencies in shadows and in the image. Answer with a single word, either 'yes' or 'no' on whether the photo has been tampered with. Provide no additional response. "
            },
            {
              "type": "image_url",
              "image_url": {
                "url": "https://scontent-den2-1.cdninstagram.com/v/t51.2885-15/486298215_17851241847423117_3085786391590914016_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjU2M3g1NjMuc2RyLmY3NTc2MS5kZWZhdWx0X2ltYWdlIn0&_nc_ht=scontent-den2-1.cdninstagram.com&_nc_cat=109&_nc_oc=Q6cZ2QHCy4n1wdiPlQJKD6hRzw_TWAqyzhmprVjQf2hG_xR8SHdFQmibXYU9a9EHZYkS8_g&_nc_ohc=Mu-2vKUdjk8Q7kNvgFDlh70&_nc_gid=Wvq808U9CA1-3Qik8agagQ&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzU5NDY4NjIyOTQyMzkzMjI0Mw%3D%3D.3-ccb7-5&oh=00_AYFdGCTZ7qYeOzDIDi3Zg3TMeTy7YODY9k6RVXClds3cIg&oe=67EE4657&_nc_sid=7a9f4b"
              }
            }
          ]
        }
      ],
      "model": "llama-3.2-90b-vision-preview",
      "temperature": 1,
      "max_completion_tokens": 1024,
      "top_p": 1,
      "stream": false,
      "stop": null
    });
  
     console.log(chatCompletion.choices[0].message.content);
     if (chatCompletion.choices[0].message.content.toLowerCase().includes("yes")) {
      return false;
     }
     else {
      return true; // Return true or false based on the response
     }
      // Yes means that the image has been altered, no means that it is good
  }
  else {
    const chatCompletion = await groq.chat.completions.create({
      "messages": [
        {
          "role": "user",
          "content": [
            {
              "type": "text",
              "text": "Based on the image, please answer the following question: Is this image edited with Photoshop? Look for things that could be off such as body shape, lighting, shadows, etc. It is okay if only things such as contrast and exposure have been changed, but not if any bodies or personal images have been altered to look 'better'. Look for inconsistencies in shadows and in the image. Answer with a single word, either 'yes' or 'no' on whether the photo has been tampered with. Provide no additional response. "
            },
            {
              "type": "image_url",
              "image_url": {
                "url": "https://www.shape.com/thmb/PeEYRnOx85_P3UBfmCRB_y5Vw24=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tina-Mansiyon-Primary-8ac04a6160134661a9adf2b41b00afa7.jpg"
              }
            }
          ]
        }
      ],
      "model": "llama-3.2-90b-vision-preview",
      "temperature": 1,
      "max_completion_tokens": 1024,
      "top_p": 1,
      "stream": false,
      "stop": null
    });
  
     console.log(chatCompletion.choices[0].message.content);
     if (chatCompletion.choices[0].message.content.toLowerCase().includes("yes")) {
      return false;
     }
     else {
      return true; // Return true or false based on the response
     }
  }
  
}
