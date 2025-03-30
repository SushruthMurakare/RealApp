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
              text: "Analyze the provided image to detect signs of heavy editing, manipulation, or enhancement using tools like Photoshop. Identify indicators such as unnatural pixel patterns, inconsistent lighting and shadows, compression artifacts, cloned or warped areas, and unnatural body shapes. Provide a confidence score on how likely the image has been altered and specify the detected modifications. If this score is a 6 or higher, and you believe that the image has been modified, answer using the word 'xylophone', otherwise if you believe the image is unedited, answer with the word 'no' in your response.",
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
    if (chatCompletion.choices[0].message.content.toLowerCase().includes("xylophone")) {
      return false;
    } else {
      return true; // Return true or false based on the response
    }
  }
}
