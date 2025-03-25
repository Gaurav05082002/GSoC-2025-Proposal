the api key is just a sample text, you have to create your own api key for setting up the env from https://aistudio.google.com/apikey 
# Gemini API Workspace - README

## video demo link 
watch [demo video](https://youtu.be/Hy8DI9gHK2I) 

## 🔑 How to Get Your API Key
To begin using the Gemini API Workspace, follow the steps below to obtain your API key:

1. Visit [https://aistudio.google.com/](https://aistudio.google.com/)
2. Sign in or sign up using your Google account.
3. On the top left of the dashboard, click the **"Get API Key"** button.
4. Click on **"Create API Key"** and follow the prompts.
5. Once the key is created, you will be able to copy:
   - **Project Name**
   - **Project ID**
   - **API Key**

Keep this information safe and secure—it will be needed in the next step.

---
## Abstract 
Gemini API Workspace is a fully structured and developer-friendly Postman setup designed to streamline interaction with Google’s Gemini API suite. It provides organized collections for key functionalities like text generation, image generation, code generation, chat, long-context processing, vision, and audio understanding. Equipped with pre-configured environments, detailed documentation, mock servers, and test scripts, this workspace enables both beginners and experienced developers to explore, test, and integrate Gemini’s powerful multimodal capabilities efficiently and with minimal setup effort.

---
![image](https://github.com/user-attachments/assets/0f2a0849-fcfc-45e6-8f9a-aef25a0f7acd)

## 🛠️ How to Set Up the Workspace Locally

1. Download the [`Gemini API Workspace PROTOTYPE.postman_collection`](https://github.com/Gaurav05082002/GSoC-2025-Proposal/blob/main/Gemini%20API%20Workspace%20PROTOTYPE.postman_collection) file.
2. Open Postman and click on **Import** in the top left corner.
3. Import the downloaded collection file.
4. The Gemini API Workspace will be created automatically in your Postman app.
5. Download the corresponding **environment files** ([Testing](https://github.com/Gaurav05082002/GSoC-2025-Proposal/blob/main/Gemini%20Testing%20Environment.postman_environment.json) and Production).
6. Open Postman, go to **Environments**, and import these `.env` files.
7. Update the `GEMINI_API_KEY`, `PROJECT_ID`, and `BASE_URL` fields with your details.
8. Set the desired environment (Testing or Production) as active in Postman.

Your Gemini API Workspace is now ready to use.

---

# ✍️ Text Generation APIs

### 1. **Basic Text Generation**

#### Purpose:
This request sends a basic text prompt to the Gemini API's `generateContent` endpoint.
It demonstrates a zero-shot prompt scenario where the model generates text without any examples.

#### Parameters:
_No additional parameters required._

#### Expected Response:
The API returns a JSON containing generated text. 
> _Note: To see image responses (if any), base64 decoding is required._

#### Possible Errors:
- **404 Not Found**
  - **Cause:** Request not reaching servers properly
  - **Fix:** Check connection or recheck URL
- **403 Forbidden**
  - **Cause:** PERMISSION_DENIED
  - **Fix:** Use the correct API key

---
![image](https://github.com/user-attachments/assets/4322bfef-2196-42ba-9765-4700217eec59)


### 2. **Text Generation with Parameters**

#### Purpose:
This request customizes text generation using parameters like temperature, top_p, top_k, and maxOutputTokens to control randomness, diversity, and length of output.

#### Parameters:
- **temperature**: Defines creativity level.
- **maxOutputTokens**: Sets a cap on response length.
- **top_p & top_k**: Balances diversity and probability filtering.

#### Expected Response:
The API returns a structured JSON containing the generated text.
> _Note: To see image responses (if any), base64 decoding is required._

#### Possible Errors:
- Same as above

---
![image](https://github.com/user-attachments/assets/aa3d5b1e-2320-4fcb-bda2-1a483e8f4f29)


### 3. **Chat Conversation**

#### Purpose:
Demonstrates a multi-turn conversation using the `generateContent` method, where the model keeps track of conversation history and responds accordingly.

#### Parameters:
_No additional parameters required._

#### Expected Response:
Returns the model’s response as part of an ongoing conversation.
> _Note: To see image responses (if any), base64 decoding is required._

#### Possible Errors:
- Same as above

---
![image](https://github.com/user-attachments/assets/df35b06c-1180-473c-b6c8-9f342f9d5e1f)


### 4. **System Instructions**

#### Purpose:
This request allows you to provide system instructions that guide the model's behavior across an interaction. The system instructions can define role-playing behavior, specific response formatting, or adherence to particular guidelines.

#### Parameters:
- **systemInstruction**: Defines the behavior the model should follow throughout the conversation.

#### Expected Response:
Returns a response shaped by the predefined instructions.
> _Note: To see image responses (if any), base64 decoding is required._

#### Possible Errors:
- Same as above

---
![image](https://github.com/user-attachments/assets/cbe57df9-448b-43c2-a547-deb0a4ec9e67)


# 🖼️ Image Generation APIs

### 1. **Text to Image with Gemini 2.0 Flash**

#### Purpose:
This request uses `gemini-2.0-flash-exp-image-generation` to generate both images and text in a single response based on a descriptive prompt.

#### Parameters:
- **response_modalities**: Set to `["Text", "Image"]` to receive images.
- **Prompt**: Descriptive input asking for image creation.

#### Expected Response:
Returns an image (base64 encoded) and text describing it.
> _Note: You need to decode the image from base64 to view it._

#### Possible Errors:
- Same as above

---
![image](https://github.com/user-attachments/assets/f38aa3bf-458f-4fad-99f7-0a40c58ef5c0)


### 2. **Image Editing with Base64 Image Input**

#### Purpose:
Edit an existing image based on natural language prompts (e.g., "add a llama next to me").

#### Parameters:
- **image (base64)**: Inline base64 representation of the input image.
- **Prompt**: Instructional text to guide the edit.
- **response_modalities**: Must include both Text and Image.

#### Expected Response:
Returns the edited image along with any accompanying text.
> _Note: You need to decode the image from base64 to view it._

#### Possible Errors:
- Same as above

---
![image](https://github.com/user-attachments/assets/8df89570-6526-4095-82d7-a9d744501b93)


### 3. **Image Generation using Imagen 3**

#### Purpose:
Generate high-quality, photorealistic or stylistic images based on a text prompt using the `imagen-3.0-generate-002` model.

#### Parameters:
- **number_of_images**: Number of images to generate (1 to 4).
- **aspect_ratio**: Controls output format. E.g., 1:1, 4:3, etc.
- **person_generation**: Allow/Disallow people in image.

#### Expected Response:
A JSON object with generated image(s) in base64 format.
> _Note: You need to decode the image from base64 to view it._

#### Possible Errors:
- Same as above

---
![image](https://github.com/user-attachments/assets/a6ddc765-5822-4ed6-8dd6-c07a1a1d589c)


## 📫 Contact
If you encounter issues or have suggestions, feel free to raise an issue in the GitHub repository.

> Happy experimenting with Gemini! 🚀
