import Groq from "groq-sdk";
import key from "../../key.json";

//Takes in a boolean value to determine if it should check for photoshop or educational content.
// A return value of true means that the image is okay to be uploaded, a no means that it should be rejected

const groq = new Groq({ apiKey: key.key, dangerouslyAllowBrowser: true });
export async function PhotoshopDetection(photoshop, imageUrl) {
  if (photoshop) {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Based on the image, please answer the following question: Is this image edited with Photoshop? Look for things that could be off such as body shape, lighting, shadows, etc. It is okay if only things such as contrast and exposure have been changed, but not if any bodies or personal images have been altered to look 'better'. Look for inconsistencies in shadows and in the image. Answer with a single word, either 'yes' or 'no' on whether the photo has been tampered with. Provide no additional response. ",
            },
            {
              type: "image_url",
              image_url: {
                url: `${imageUrl}`,
              },
            },
          ],
        },
      ],
      model: "llama-3.2-90b-vision-preview",
      temperature: 1,
      max_completion_tokens: 1024,
      top_p: 1,
      stream: false,
      stop: null,
    });

    console.log(chatCompletion.choices[0].message.content);
    if (
      chatCompletion.choices[0].message.content.toLowerCase().includes("yes")
    ) {
      return false;
    } else {
      return true; // Return true or false based on the response
    }
    // Yes means that the image has been altered, no means that it is good
  } else {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Analyze the provided image to detect signs of heavy editing, manipulation, or enhancement using tools like Photoshop. Identify major indicators such as shadows not matching the figure, cloned or warped areas, and unnatural body shapes such as extra long legs when wearing shorts. Base it soley on the opservations that you are able to make. Provide a confidence score on how likely the image has been altered and specify the detected modifications. If this score leans to a comclusion that there were very likely changes to the image answer using the word 'xylophone', otherwise if you believe the image is unedited, answer with the word 'no' in your response. If the legs seem unnaturally long, respond with a value of 10 AND the work 'xylophone'. If the image has been edited use the word 'xylophone'. Give an aditional sentence or two about what the person/people are doing and what they are holding in th eimage.",
            },
            {
              type: "image_url",
              image_url: {
                url: `${imageUrl}`,
              },
            },
          ],
        },
      ],
      model: "llama-3.2-90b-vision-preview",
      temperature: 1,
      max_completion_tokens: 1024,
      top_p: 1,
      stream: false,
      stop: null,
    });

    console.log(chatCompletion.choices[0].message.content);
    if (chatCompletion.choices[0].message.content.toLowerCase().includes("book")) return true; 
    if (chatCompletion.choices[0].message.content.toLowerCase().includes("xylophone") || chatCompletion.choices[0].message.content.toLowerCase().includes(9) || chatCompletion.choices[0].message.content.toLowerCase().includes("unnatural") || chatCompletion.choices[0].message.content.toLowerCase().includes("unusal")){
      return false;
    } else {
      return true; // Return true or false based on the response
    }
  }
}
